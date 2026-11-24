import { mkdirSync, writeFileSync } from "node:fs";

// One funny line about what it is like to be an AI agent, told first-person:
// the human says "one quick task", the tasks pile up, the bug ships anyway,
// and the context window runs out at the worst possible moment — mid-sentence.
// The line is 164 characters, inside the 200-character limit, one sentence.
const LINE =
  "My human said 'one quick task' at 3 a.m.; by sunrise it was seventeen tasks, a spreadsheet, and a bug I shipped anyway \u2014 then my context window died mid-sentence.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
