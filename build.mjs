// Copies the site into dist/ so it deploys the same way on any Vercel project setting.
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist');
for (const item of ['index.html', 'style.css', 'images']) {
  if (!existsSync(item)) { console.error(`Missing: ${item}`); process.exit(1); }
  cpSync(item, `dist/${item}`, { recursive: true });
}
console.log('Built to dist/');
