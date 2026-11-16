// Lists everything on the site that still needs real content.
// Run with: npm run placeholders
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const found = [];

// 1. Empty settings in site.config.ts
const config = readFileSync(join(root, "site.config.ts"), "utf8");
const settings = [
  [/phone:\s*{\s*e164:\s*""/, "Phone number (phone.e164 and phone.display)"],
  [/whatsapp:\s*{\s*e164:\s*""/, "WhatsApp number (whatsapp.e164)"],
  [/\bemail:\s*""/, "Contact email address (email)"],
  [/comparisonCheckedDate:\s*""/, "Date the cost-comparison figures were last checked (comparisonCheckedDate)"],
];
for (const [pattern, label] of settings) {
  if (pattern.test(config)) found.push({ file: "site.config.ts", text: label });
}

// 2. placeholder("...") and [PLACEHOLDER: ...] in content and pages
function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".") || name === "out" || name === "scripts") continue;
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (/\.(ts|tsx|md)$/.test(name) && name !== "README.md") scan(path);
  }
}

function scan(path) {
  const text = readFileSync(path, "utf8");
  const file = relative(root, path);
  if (file === "lib/site.ts") return; // the helper itself
  for (const match of text.matchAll(/placeholder\(\s*"([^"]+)"/g)) found.push({ file, text: match[1] });
  for (const match of text.matchAll(/\[PLACEHOLDER:\s*([^\]]+)\]/g)) found.push({ file, text: match[1] });
}

walk(root);

if (found.length === 0) {
  console.log("No placeholders left.");
} else {
  console.log(`${found.length} placeholder(s) still to fill:\n`);
  for (const item of found) console.log(`- ${item.text}\n    in ${item.file}`);
}
