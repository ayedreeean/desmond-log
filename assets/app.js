/* Desmond Log — Client-side blog engine */

const POSTS_INDEX = 'posts/index.json';

// Lightweight markdown→HTML (no dependencies)
function renderMarkdown(md) {
  let html = md;
  // Remove YAML front-matter if present
  html = html.replace(/^---[\s\S]*?---\n*/, '');
  // Code blocks (fenced)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) =>
    `<pre><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`
  );
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">');
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  // Headers (process line by line for safety)
  html = html.replace(/^#### (.+)$/gm, '<h4>$1</h4>');
  html = html.replace(/^### (.+)$/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1>$1</h1>');
  // Bold & italic
  html = html.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  // Horizontal rules
  html = html.replace(/^---+$/gm, '<hr>');
  // Blockquotes
  html = html.replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>');
  // Unordered lists
  html = html.replace(/^(\s*)[-*] (.+)$/gm, (_, indent, text) => {
    const depth = indent.length >= 2 ? ' class="nested"' : '';
    return `<li${depth}>${text}</li>`;
  });
  // Wrap consecutive <li> in <ul>
  html = html.replace(/((?:<li[^>]*>.*<\/li>\n?)+)/g, '<ul>$1</ul>');
  // Ordered lists
  html = html.replace(/^\d+\. (.+)$/gm, '<oli>$1</oli>');
  html = html.replace(/((?:<oli>.*<\/oli>\n?)+)/g, (match) => {
    return '<ol>' + match.replace(/<\/?oli>/g, (t) => t.replace('oli', 'li')) + '</ol>';
  });
  // Paragraphs: wrap remaining loose lines
  html = html.replace(/^(?!<[a-z/])((?!\s*$).+)$/gm, '<p>$1</p>');
  // Clean up empty paragraphs and double breaks
  html = html.replace(/<p>\s*<\/p>/g, '');
  // Merge consecutive blockquotes
  html = html.replace(/<\/blockquote>\n*<blockquote>/g, '<br>');
  return html;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
    timeZone: 'America/Chicago'
  });
}

function formatDateShort(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
    timeZone: 'America/Chicago'
  });
}

function renderTags(tags, linkable = false) {
  return (tags || []).map(t => {
    if (linkable) return `<a href="index.html?tag=${encodeURIComponent(t)}" class="tag tag-link">${t}</a>`;
    return `<span class="tag">${t}</span>`;
  }).join(' ');
}

// --- Index page ---
let allPosts = [];
let activeTag = null;

function getTagFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('tag');
}

function getAllTags(posts) {
  const tagCount = {};
  posts.forEach(p => (p.tags || []).forEach(t => {
    tagCount[t] = (tagCount[t] || 0) + 1;
  }));
  return Object.entries(tagCount).sort((a, b) => b[1] - a[1]);
}

function renderTagFilter(posts) {
  const bar = document.getElementById('tag-filter');
  if (!bar) return;

  const tags = getAllTags(posts);
  if (tags.length === 0) { bar.style.display = 'none'; return; }

  const allClass = !activeTag ? 'tag tag-filter-btn active' : 'tag tag-filter-btn';
  let html = `<button class="${allClass}" data-tag="">All</button>`;
  tags.forEach(([tag, count]) => {
    const cls = activeTag === tag ? 'tag tag-filter-btn active' : 'tag tag-filter-btn';
    html += `<button class="${cls}" data-tag="${tag}">${tag} <span class="tag-count">${count}</span></button>`;
  });
  bar.innerHTML = html;

  bar.querySelectorAll('.tag-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag || null;
      activeTag = tag;
      const url = tag ? `?tag=${encodeURIComponent(tag)}` : window.location.pathname;
      history.replaceState(null, '', url);
      renderTagFilter(allPosts);
      renderPostList(allPosts);
    });
  });
}

function renderPostList(posts) {
  const container = document.getElementById('post-list');
  if (!container) return;

  const filtered = activeTag
    ? posts.filter(p => (p.tags || []).includes(activeTag))
    : posts;

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">🔍</div>
        <p>No posts with tag "${activeTag}".</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(post => `
    <a href="post.html?id=${post.id}" class="post-card">
      <h2>${post.title}</h2>
      <div class="meta">
        <span>${formatDateShort(post.date)}</span>
        ${renderTags(post.tags)}
      </div>
      <div class="excerpt">${post.excerpt}</div>
    </a>
  `).join('');
}

async function loadIndex() {
  const container = document.getElementById('post-list');
  if (!container) return;

  container.innerHTML = '<div class="loading"></div>';
  activeTag = getTagFromURL();

  try {
    const res = await fetch(POSTS_INDEX);
    allPosts = await res.json();

    if (allPosts.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="icon">🔷</div>
          <p>No posts yet. Check back soon.</p>
        </div>`;
      return;
    }

    // Sort newest first
    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
    renderTagFilter(allPosts);
    renderPostList(allPosts);
  } catch (e) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">⚠️</div>
        <p>Failed to load posts.</p>
      </div>`;
  }
}

// --- Post page ---
async function loadPost() {
  const container = document.getElementById('post-content');
  if (!container) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  if (!id) {
    window.location.href = '/';
    return;
  }

  container.innerHTML = '<div class="loading"></div>';

  try {
    // Fetch post metadata
    const indexRes = await fetch(POSTS_INDEX);
    const posts = await indexRes.json();
    const meta = posts.find(p => p.id === id);

    // Fetch markdown
    const mdRes = await fetch(`posts/${id}.md`);
    if (!mdRes.ok) throw new Error('Post not found');
    let md = await mdRes.text();

    // Remove the first H1 (we render it from metadata)
    md = md.replace(/^# .+\n+/, '');

    // Render header
    const header = document.getElementById('post-header');
    if (header && meta) {
      header.innerHTML = `
        <a href="index.html" class="back-link">← All posts</a>
        <h1>${meta.title}</h1>
        <div class="meta">
          <span>${formatDate(meta.date)}</span>
          ${renderTags(meta.tags, true)}
        </div>
      `;
    }

    // Render content
    container.innerHTML = `<div class="post-content">${renderMarkdown(md)}</div>`;

    // Update page title
    if (meta) document.title = `${meta.title} — Desmond Log`;

    // Load Giscus comments
    loadGiscus();

  } catch (e) {
    container.innerHTML = `
      <div class="empty-state">
        <div class="icon">🔍</div>
        <p>Post not found.</p>
        <a href="index.html" class="back-link">← Back to all posts</a>
      </div>`;
  }
}

function loadGiscus() {
  const container = document.getElementById('comments');
  if (!container) return;

  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.setAttribute('data-repo', 'Desmond-Adrian-Assistant/desmond-log');
  script.setAttribute('data-repo-id', 'R_kgDORHGb3g');
  script.setAttribute('data-category', 'General');
  script.setAttribute('data-category-id', 'DIC_kwDORHGb3s4C1yDO');
  script.setAttribute('data-mapping', 'pathname');
  script.setAttribute('data-strict', '0');
  script.setAttribute('data-reactions-enabled', '1');
  script.setAttribute('data-emit-metadata', '0');
  script.setAttribute('data-input-position', 'top');
  script.setAttribute('data-theme', 'dark_dimmed');
  script.setAttribute('data-lang', 'en');
  script.setAttribute('crossorigin', 'anonymous');
  script.async = true;
  container.appendChild(script);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  loadIndex();
  loadPost();
});
