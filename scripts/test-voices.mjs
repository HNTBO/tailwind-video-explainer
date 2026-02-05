/**
 * Test OpenAI TTS voices with a sample from Episode 1
 * Run: node scripts/test-voices.mjs
 *
 * Requires OPENAI_API_KEY in .env file or environment
 */

import "dotenv/config";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const audioDir = path.join(__dirname, "..", "audio", "voice-tests");

// Sample text from Episode 1 (first ~15 seconds)
const SAMPLE_TEXT = `Every website you've ever visited is built with HTML. But if the internet were only HTML... it would look terrible. This is HTML without any styling. Default fonts, no colors, no spacing. Just raw content.`;

const VOICES = ["alloy", "echo", "fable", "nova", "onyx", "shimmer"];

async function generateVoiceSample(voice, text) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY environment variable is required");
  }

  const response = await fetch("https://api.openai.com/v1/audio/speech", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "tts-1",
      input: text,
      voice: voice,
      response_format: "mp3",
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error for ${voice}: ${error}`);
  }

  return Buffer.from(await response.arrayBuffer());
}

async function main() {
  // Create output directory
  if (!fs.existsSync(audioDir)) {
    fs.mkdirSync(audioDir, { recursive: true });
  }

  console.log("OpenAI TTS Voice Test");
  console.log("====================\n");
  console.log(`Sample text (${SAMPLE_TEXT.length} chars):`);
  console.log(`"${SAMPLE_TEXT.slice(0, 80)}..."\n`);
  console.log(`Generating ${VOICES.length} voice samples...\n`);

  for (const voice of VOICES) {
    process.stdout.write(`  ${voice}... `);
    try {
      const audio = await generateVoiceSample(voice, SAMPLE_TEXT);
      const outputPath = path.join(audioDir, `${voice}.mp3`);
      fs.writeFileSync(outputPath, audio);
      console.log(`✓ saved to audio/voice-tests/${voice}.mp3`);
    } catch (error) {
      console.log(`✗ ${error.message}`);
    }
  }

  console.log("\nDone! Listen to the samples in the audio/voice-tests/ folder.");
  console.log("\nVoice characteristics:");
  console.log("  alloy   - Neutral, balanced");
  console.log("  echo    - Warm, conversational");
  console.log("  fable   - Expressive, storytelling");
  console.log("  nova    - Friendly, upbeat");
  console.log("  onyx    - Deep, authoritative");
  console.log("  shimmer - Clear, gentle");
}

main().catch(console.error);
