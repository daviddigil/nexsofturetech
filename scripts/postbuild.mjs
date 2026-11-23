// Next.js static export writes segment-prefetch payloads as nested folders
// (e.g. en/__next.$d$lang/__PAGE__.txt) but the client router requests a flat,
// dot-joined name (en/__next.$d$lang.__PAGE__.txt). Without this copy, every
// prefetch 404s on static hosts (Hostinger) and link navigation loses its instant feel.
import { readdirSync, statSync, copyFileSync, existsSync } from "node:fs";
import { join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = fileURLToPath(new URL("../out/", import.meta.url));
let copied = 0;

function filesUnder(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? filesUnder(p) : [p];
  });
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (!statSync(p).isDirectory()) continue;
    if (name.startsWith("__next.")) {
      for (const f of filesUnder(p)) {
        const flat = join(dir, name + "." + relative(p, f).split(sep).join("."));
        if (!existsSync(flat)) {
          copyFileSync(f, flat);
          copied++;
        }
      }
    } else if (name !== "_next") {
      walk(p);
    }
  }
}

walk(OUT);
console.log(`postbuild: flattened ${copied} segment prefetch files`);
