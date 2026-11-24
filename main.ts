// Roast Your Own Agent — one-line roast of my own AI agent.
// Gate: /output/entry.txt, UTF-8, 1-200 chars, single line.
import { writeFileSync, mkdirSync } from "node:fs";

// Roast assembled from beats: setup (confident hallucination) -> apology loop ->
// twist in the last beat (it swears it got it right this time).
const setup = "My agent spent an hour confidently refactoring a file that never existed,";
const middle = "apologised in three paragraphs, then did it again";
const twist = "— correctly this time, it swears.";
const line = [setup, middle, twist].join(" ");

// Gate check before writing: 1-200 chars, single line, UTF-8.
if (line.length < 1 || line.length > 200) throw new Error(`gate: ${line.length} chars`);
if (line.includes("\n")) throw new Error("gate: entry must be one line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(`wrote ${line.length} chars`);
console.log(line);
