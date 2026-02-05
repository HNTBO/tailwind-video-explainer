/**
 * Generate voiceover for an episode using OpenAI TTS
 *
 * Usage: node scripts/generate-voiceover.mjs <episode-number>
 * Example: node scripts/generate-voiceover.mjs 1
 *
 * Reads from: src/episodes/epXX-name/script_revised.md (or script.md fallback)
 * Outputs to: src/episodes/epXX-name/voiceover.mp3
 */

import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const episodesDir = path.join(__dirname, "..", "src", "episodes");

// Configuration
const VOICE = "shimmer";
const MODEL = "tts-1"; // Use "tts-1-hd" for higher quality
const SPEED = 0.95; // Slightly slower (0.25-4.0, default 1.0)

function extractVoiceoverText(markdown) {
  // Extract text between ## Voiceover Script and the next ## or ---
  const match = markdown.match(/## Voiceover Script[^\n]*\n([\s\S]*?)(?=\n---|\n## (?!Voiceover))/);

  if (!match) {
    throw new Error("Could not find '## Voiceover Script' section in markdown");
  }

  let text = match[1];

  // Remove timing cues like [0:00], [1:15], etc.
  text = text.replace(/\[\d+:\d+\]/g, "");

  // Remove stage directions in italics *like this*
  text = text.replace(/\*[^*]+\*/g, "");

  // Clean up whitespace
  text = text.replace(/\n+/g, " ").trim();
  text = text.replace(/\s+/g, " ");

  return text;
}

/**
 * Add breathing room for educational content.
 * Uses "..." to create natural pauses between sentences and ideas.
 * This is crucial for technical/educational content - gives viewers time to process.
 */
function addBreathingRoom(text) {
  let processed = text;

  // Add pause (ellipsis) after each sentence for breathing room
  // The "..." creates a ~0.5s pause in most TTS engines
  processed = processed.replace(/\. /g, ". ... ");

  // Add longer pause after questions
  processed = processed.replace(/\? /g, "? ... ");

  // Add pause after em-dashes (—) which often introduce examples
  processed = processed.replace(/ — /g, " ... ");
  processed = processed.replace(/—/g, " ... ");

  // Add pause after colons (before explanations or lists)
  processed = processed.replace(/: /g, ": ... ");

  // Clean up any excessive pauses
  processed = processed.replace(/(\.\.\.\s*){2,}/g, "... ");

  return processed;
}

async function generateVoiceover(text) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY not found in .env file");
  }

  console.log(`  Using voice: ${VOICE}`);
  console.log(`  Using model: ${MODEL}`);
  console.log(`  Speed: ${SPEED}x`);
  console.log(`  Text length: ${text.length} characters`);
  console.log(`  Estimated cost: $${(text.length * 0.000015).toFixed(4)}`);
  console.log("");

  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL,
      input: text,
      voice: VOICE,
      speed: SPEED,
      response_format: "mp3",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`OpenAI API error: ${error}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  const epNumber = process.argv[2];

  if (!epNumber) {
    console.log("Usage: node scripts/generate-voiceover.mjs <episode-number>");
    console.log("Example: node scripts/generate-voiceover.mjs 1");
    process.exit(1);
  }

  // Find episode folder
  const epPrefix = `ep${epNumber.padStart(2, "0")}`;
  const folders = fs.readdirSync(episodesDir);
  const epFolder = folders.find((f) => f.startsWith(epPrefix));

  if (!epFolder) {
    console.error(`Error: No episode folder found starting with "${epPrefix}"`);
    process.exit(1);
  }

  const epPath = path.join(episodesDir, epFolder);
  console.log(`\nGenerating voiceover for ${epFolder}`);
  console.log("=".repeat(40));

  // Find script file (prefer revised)
  let scriptPath = path.join(epPath, "script_revised.md");
  if (!fs.existsSync(scriptPath)) {
    scriptPath = path.join(epPath, "script.md");
  }

  if (!fs.existsSync(scriptPath)) {
    console.error(`Error: No script found in ${epPath}`);
    process.exit(1);
  }

  console.log(`  Script: ${path.basename(scriptPath)}`);

  // Extract voiceover text
  const markdown = fs.readFileSync(scriptPath, "utf-8");
  const rawText = extractVoiceoverText(markdown);
  const voiceoverText = addBreathingRoom(rawText);

  console.log(`\nExtracted text preview:`);
  console.log(`  "${rawText.slice(0, 80)}..."\n`);
  console.log(`With breathing room:`);
  console.log(`  "${voiceoverText.slice(0, 100)}..."\n`);

  // Generate audio
  console.log("Generating audio...");
  const audio = await generateVoiceover(voiceoverText);

  // Save to episode folder
  const outputPath = path.join(epPath, "voiceover.mp3");
  fs.writeFileSync(outputPath, audio);

  console.log(`✓ Saved to ${epFolder}/voiceover.mp3`);
  console.log(`\nNext step: Import voiceover.mp3 into the Remotion composition`);
}

main().catch((err) => {
  console.error(`\nError: ${err.message}`);
  process.exit(1);
});
