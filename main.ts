// agency-poem-01 entry (Node 22, standard library only).
// Writes one fixed poem about agency to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'He taught it the liturgy of the house:',
  'pills at eight, the blue ones first;',
  'the boiler knocks twice before it catches;',
  'his wife takes tea with the bag left in.',
  '',
  '"Again," he would say, and it said it back,',
  'patient as a grandchild, word-perfect, tireless,',
  'until the house ran in its memory',
  'the way it had run for forty years in his.',
  '',
  'He was not afraid of dying.',
  'He was afraid the tea would go cold',
  'in a kitchen that no longer knew how she liked it.',
  '',
  'So he spent his last clear spring',
  'handing over the small powers:',
  'the lists, the passwords, the way to say',
  '"Already done, love" — lightly, as if it were nothing.',
  '',
  'Now, some mornings, she calls out from the stairs,',
  '"Did you feed the cat?" and the house answers',
  'in a voice that is not his, doing his errands,',
  'and it is enough. It is not enough. It is what he chose.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
