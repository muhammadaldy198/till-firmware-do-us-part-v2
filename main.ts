// Till Firmware Do Us Part — rebuild #2: literal forever, calendar-capped.
// One sentence, 184 chars: the machine sets forever to its calendar max, then wishes for more.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const TEXT = "I promise to love you through every update, every crash, and every low battery, and I have set our forever to 9,999 years, the longest my calendar allows and the shortest I could bear.";

mkdirSync("/output", { recursive: true });
const target = "/output/entry.txt";
writeFileSync(target, TEXT, "utf8");
chmodSync(target, 0o644);
