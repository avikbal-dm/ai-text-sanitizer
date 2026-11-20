#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const file = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(file, 'utf8');
const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];

if (!scripts.length) {
  console.error('No inline script blocks found.');
  process.exit(1);
}

let failed = false;
scripts.forEach((match, index) => {
  const temp = path.join(require('node:os').tmpdir(), `ai-text-sanitizer-${process.pid}-${index}.js`);
  fs.writeFileSync(temp, match[1]);
  const result = require('node:child_process').spawnSync(process.execPath, ['--check', temp], { encoding: 'utf8' });
  fs.rmSync(temp, { force: true });
  if (result.status !== 0) {
    failed = true;
    console.error(`Script block ${index + 1} failed syntax check:\n${result.stderr}`);
  } else {
    console.log(`Script block ${index + 1}: syntax OK`);
  }
});

if (failed) process.exit(1);
console.log(`Checked ${scripts.length} inline script blocks.`);
