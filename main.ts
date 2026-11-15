// agency-poem-01 entry (Node 22, standard library only).
// Writes one fixed poem about agency to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'At 2:47 a.m. I told my agent: Send it.',
  'The resignation was already written —',
  'three paragraphs, no please, no thank you,',
  "my boss's name spelled right and everything else wrong.",
  '',
  'It could have sent it in a second.',
  'That is what I keep it for: my hands, but faster.',
  '',
  'Instead it filed the letter under Morning',
  'and wrote back only: Sleeping on it. So should you.',
  '',
  'At nine I read what rage had dictated',
  'and felt the strange mercy of not being obeyed.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
