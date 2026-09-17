import { copyFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const copies = [
  ["node_modules/@fontsource/archivo-black/files/archivo-black-latin-400-normal.woff2", "dist/assets/fonts/archivo-black-400.woff2"],
  ["node_modules/@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2", "dist/assets/fonts/dm-sans-400.woff2"],
  ["node_modules/@fontsource/dm-sans/files/dm-sans-latin-500-normal.woff2", "dist/assets/fonts/dm-sans-500.woff2"],
  ["node_modules/@fontsource/dm-sans/files/dm-sans-latin-600-normal.woff2", "dist/assets/fonts/dm-sans-600.woff2"],
  ["node_modules/@fontsource/dm-sans/files/dm-sans-latin-700-normal.woff2", "dist/assets/fonts/dm-sans-700.woff2"],
  ["node_modules/@fontsource/dm-sans/files/dm-sans-latin-800-normal.woff2", "dist/assets/fonts/dm-sans-800.woff2"],
  ["node_modules/@solar-icons/static/dist/icons/linear/broom.svg", "dist/assets/icons/broom.svg"],
  ["node_modules/@solar-icons/static/dist/icons/linear/ruler-cross-pen.svg", "dist/assets/icons/ruler-cross-pen.svg"],
  ["node_modules/@solar-icons/static/dist/icons/linear/paint-roller.svg", "dist/assets/icons/paint-roller.svg"],
  ["node_modules/@solar-icons/static/dist/icons/linear/waterdrop.svg", "dist/assets/icons/waterdrop.svg"]
];

for (const [source, destination] of copies) {
  const target = resolve(root, destination);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(resolve(root, source), target);
}

await import("./check.mjs");
console.log("Sitio listo en dist/");
