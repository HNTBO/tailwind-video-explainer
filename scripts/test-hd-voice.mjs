/**
 * Generate HD quality voiceover sample for comparison
 * Run: node scripts/test-hd-voice.mjs
 */

import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read the same text from Episode 1
const epPath = path.join(__dirname, "..", "src", "episodes", "ep01-css-intro");
const scriptPath = path.join(epPath, "script_revised.md");
const markdown = fs.readFileSync(scriptPath, "utf-8");

// Extract voiceover text
const match = markdown.match(/## Voiceover Script[^\n]*\n([\s\S]*?)(?=\n---|\n## (?!Voiceover))/);
let text = match[1];
text = text.replace(/\[\d+:\d+\]/g, "");
text = text.replace(/\*[^*]+\*/g, "");
text = text.replace(/\n+/g, " ").trim();
text = text.replace(/\s+/g, " ");

// Add breathing room
text = text.replace(/\. /g, ". ... ");
text = text.replace(/\? /g, "? ... ");
text = text.replace(/ — /g, " ... ");
text = text.replace(/—/g, " ... ");
text = text.replace(/: /g, ": ... ");
text = text.replace(/(\.\.\.\s*){2,}/g, "... ");

async function generate(model, outputName) {
  console.log(`Generating ${model}...`);

  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: model,
      input: text,
      voice: "shimmer",
      speed: 1.0,
      response_format: "mp3",
    }),
  });

  if (!response.ok) {
    throw new Error(`API error: ${await response.text()}`);
  }

  const audio = Buffer.from(await response.arrayBuffer());
  const outputPath = path.join(epPath, outputName);
  fs.writeFileSync(outputPath, audio);
  console.log(`✓ Saved to ${outputName}`);
}

async function main() {
  console.log(`\nComparing TTS models for Episode 1`);
  console.log(`Text length: ${text.length} characters\n`);

  await generate("tts-1-hd", "voiceover-hd.mp3");

  console.log(`\nCompare:`);
  console.log(`  Standard: src/episodes/ep01-css-intro/voiceover.mp3`);
  console.log(`  HD:       src/episodes/ep01-css-intro/voiceover-hd.mp3`);
}

main().catch(console.error);
