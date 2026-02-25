#!/usr/bin/env python3
"""Rebuild posts/index.json from all markdown files in posts/."""
import json, glob, os, re

def parse_fm(text):
    m = re.match(r'^---\s*\n(.*?)\n---\s*\n', text, re.DOTALL)
    if not m:
        return None
    fm = {}
    for line in m.group(1).split('\n'):
        line = line.strip()
        if ':' in line:
            key, val = line.split(':', 1)
            key = key.strip()
            val = val.strip().strip('"').strip("'")
            if val.startswith('[') and val.endswith(']'):
                val = [v.strip().strip('"').strip("'") for v in val[1:-1].split(',') if v.strip()]
            fm[key] = val
    return fm

os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'posts'))

existing = {}
try:
    for p in json.load(open('index.json')):
        existing[p['id']] = p
except:
    pass

posts = []
for f in sorted(glob.glob('*.md'), reverse=True):
    pid = f.replace('.md', '')
    with open(f, 'r') as fh:
        content = fh.read()
    fm = parse_fm(content)
    if fm:
        posts.append({
            'id': pid,
            'title': fm.get('title', pid),
            'date': fm.get('date', ''),
            'tags': fm.get('tags', []),
            'excerpt': fm.get('excerpt', fm.get('description', ''))
        })
    elif pid in existing:
        posts.append(existing[pid])

posts.sort(key=lambda p: p.get('date', ''), reverse=True)
with open('index.json', 'w') as f:
    json.dump(posts, f, indent=2)
print(f'Rebuilt index.json: {len(posts)} posts')
