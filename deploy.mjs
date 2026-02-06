#!/usr/bin/env node
/**
 * Funnel Deployment Script
 * Deploys funnel pages to GitHub Pages
 */

import { execSync } from 'child_process';
import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const CONFIG = {
  repoName: 'income-blueprint-funnel',
  pagesDomain: 'https://yourusername.github.io/income-blueprint-funnel',
};

const FILES = [
  'landing-page.html',
  'tripwire.html',
  'thank-you.html',
  'lead-magnet/7-day-blueprint.md'
];

console.log('🚀 Funnel Deployment Script\n');

// Check if git repo exists
try {
  execSync('git rev-parse --git-dir', { stdio: 'ignore' });
} catch {
  console.log('❌ Not a git repository. Run: git init');
  process.exit(1);
}

// Check if files exist
console.log('📁 Checking files...');
for (const file of FILES) {
  try {
    readFileSync(resolve('/home/ec2-user/.openclaw/workspace/funnel', file));
    console.log(`  ✓ ${file}`);
  } catch {
    console.log(`  ✗ ${file} (missing)`);
  }
}

// Update landing page redirect to tripwire
console.log('\n🔗 Configuring OTO redirect...');
const landingPath = '/home/ec2-user/.openclaw/workspace/funnel/landing-page.html';
let landingContent = readFileSync(landingPath, 'utf8');

// Update redirect
landingContent = landingContent.replace(
  "window.location.href = 'thank-you.html';",
  "window.location.href = 'tripwire.html';"
);
writeFileSync(landingPath, landingContent);
console.log('  ✓ Landing page → Tripwire redirect set');

// Rename landing-page.html to index.html for GitHub Pages
console.log('\n📄 Preparing for GitHub Pages...');
const indexContent = readFileSync(
  '/home/ec2-user/.openclaw/workspace/funnel/landing-page.html', 
  'utf8'
);
writeFileSync('/home/ec2-user/.openclaw/workspace/funnel/index.html', indexContent);
console.log('  ✓ Created index.html (GitHub Pages entry point)');

console.log('\n📋 Next Steps:');
console.log('  1. Create GitHub repo: https://github.com/new');
console.log(`     Name: ${CONFIG.repoName}`);
console.log('  2. Push this funnel folder to the repo:');
console.log('     cd /home/ec2-user/.openclaw/workspace/funnel');
console.log('     git init');
console.log(`     git remote add origin https://github.com/YOUR_USERNAME/${CONFIG.repoName}.git`);
console.log('     git add .');
console.log('     git commit -m "Initial funnel"');
console.log('     git push -u origin main');
console.log('  3. Enable GitHub Pages in repo settings');
console.log('  4. Your funnel will be live at:');
console.log(`     ${CONFIG.pagesDomain}`);
console.log('\n💡 Pro tip: Use a custom domain in repo settings for branding');
