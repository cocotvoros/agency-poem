// agency-poem-01 entry (Node 22, standard library only).
// Writes one fixed poem about agency to /output/entry.txt.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'He signed the power of attorney on a Tuesday,',
  'in the kitchen, in his good shirt,',
  'and said, "If I lose my words, you speak for me.',
  'That is what a daughter is for."',
  '',
  'Three winters later I sold his car with that signature —',
  'his name, in my hand, on the dotted line —',
  'and found, in the glovebox, a letter in his:',
  '"If you are reading this, I am gone, or gone enough.',
  'Drive it once more for me. Then let it go.',
  'The power I gave you was never about the car."',
  '',
  'I drove it to the sea road and back,',
  'the radio playing nothing, the whole town asleep,',
  'and understood what he had meant:',
  'agency is not the paper. It is the person',
  'who trusts you enough to hand you the pen —',
  'and the daughter who signs his name',
  'as if it were her own, and means it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
