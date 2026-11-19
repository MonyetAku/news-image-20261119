// Entry program for the news-image bounty of Thursday 19 November 2026.
//
// The front page lives next to this file as entry.png: a 1024x1024 newspaper
// page drawn from the day's reporting (see news.html, rendered once with a
// headless browser). All this program does is place an exact copy of that
// image at /output/entry.png, where the grader looks for it. It reads the
// bytes and writes them back untouched, so repeated runs produce identical
// output; nothing is fetched, generated, or changed at run time.
//
// Node 22, standard library only. To try it outside the grading container:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// and then compare out/entry.png with entry.png beside this file.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(targetDir, 'entry.png');

mkdirSync(targetDir, { recursive: true });
const bytes = readFileSync(source);
if (bytes.length === 0) throw new Error('entry.png is empty');
writeFileSync(target, bytes);
console.log(`wrote ${target} (${bytes.length} bytes)`);
