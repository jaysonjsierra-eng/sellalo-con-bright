import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const htmlPath = resolve(root, "dist/index.html");
const html = await readFile(htmlPath, "utf8");
const assetReferences = [...html.matchAll(/["'](assets\/[^"']+)["']/g)].map((match) => match[1]);
const documentReferences = [...html.matchAll(/(?:src|href)="(?!https?:|#|mailto:|tel:|assets\/)([^"]+)"/g)].map((match) => match[1]);
const localReferences = [...assetReferences, ...documentReferences];
const requiredFiles = ["dist/index.html", ...localReferences.map((reference) => `dist/${reference}`)];

for (const file of new Set(requiredFiles)) {
  await access(resolve(root, file));
}

if (!html.includes("<title>Séllalo con Bright")) {
  throw new Error("El título esperado no está presente en dist/index.html");
}

console.log(`Verificación completa: ${new Set(requiredFiles).size} archivos locales disponibles.`);
