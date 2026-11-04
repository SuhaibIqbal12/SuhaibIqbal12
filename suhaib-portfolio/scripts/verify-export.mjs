import fs from "node:fs";
import path from "node:path";
const root = path.resolve("out");
const problems = [];
let links = 0,
  images = 0;
function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
}
const files = walk(root);
for (const file of files.filter((f) => f.endsWith(".html"))) {
  const text = fs.readFileSync(file, "utf8");
  if (/THE PROOF LAB|The Proof Lab/.test(text))
    problems.push("Old display brand in " + file);
  for (const match of text.matchAll(/<a\b[^>]*href="([^"]*)"[^>]*>/g)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (href.includes("github.com/SuhaibIqbal12/SmartClaimAI"))
      problems.push("Private repository link in " + file);
    if (!href.startsWith("/") || href.startsWith("//")) continue;
    const local = decodeURIComponent(href.split(/[?#]/)[0]);
    if (!local) continue;
    const dest = path.join(
      root,
      local,
      local.endsWith("/") ? "index.html" : "",
    );
    links++;
    if (!fs.existsSync(dest))
      problems.push("Broken path " + href + " in " + file);
  }
  for (const match of text.matchAll(/<img\b[^>]*>/g)) {
    images++;
    for (const key of ["alt", "width", "height"])
      if (!new RegExp("\\b" + key + "=").test(match[0]))
        problems.push("Missing image " + key + " in " + file);
  }
}
for (const file of files.filter((f) => /\.(html|js)$/.test(f)))
  if (fs.readFileSync(file, "utf8").includes("class EvidenceRecord(BaseModel)"))
    problems.push("Private excerpt in " + file);
console.log(
  JSON.stringify(
    { internalLinks: links, imagesChecked: images, problems },
    null,
    2,
  ),
);
if (problems.length) process.exit(1);
