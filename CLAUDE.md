# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Remotion video composition project for creating Tailwind CSS tutorial videos. Uses Tailwind CSS v4 for styling, TypeScript strict mode, and Beads for issue tracking.

## Commands

```bash
npm run dev       # Launch Remotion Studio (interactive preview)
npm run build     # Bundle the video composition
npm run lint      # Run ESLint + TypeScript type checking
npx remotion render  # Render video to file
```

## Architecture

**Video Configuration** (defined in `src/Root.tsx`):
- Resolution: 1280x720
- Frame rate: 30 fps
- Duration: configurable per composition (frames = seconds × fps)

**Key Files**:
- `src/Root.tsx` - Registers compositions with Remotion
- `src/Composition.tsx` - Main video composition component
- `remotion.config.ts` - Remotion settings (output format, Tailwind integration)
- `src/index.css` - Tailwind import (`@import "tailwindcss";`)

**Pattern**: Create new compositions in `src/`, register them in `Root.tsx` using the `<Composition>` component. Use Tailwind utility classes directly in JSX.

## Issue Tracking (Beads)

This project uses `bd` (Beads) for issue tracking. See AGENTS.md for full workflow.

```bash
bd ready              # Find available work
bd show <id>          # View issue details
bd close <id>         # Complete work
bd sync               # Sync with git
```

**Critical**: Work sessions must end with `git push` succeeding. Never leave changes stranded locally.

## External Review (Codex CLI)

For script reviews using GPT-5.2, use the Codex CLI via WSL. The CLI is installed via nvm, so an interactive shell is required.

```bash
# Correct invocation pattern:
wsl bash -ic 'codex exec -m gpt-5.2 "your prompt here"'
```

**Key points:**
- Must use `bash -ic` (interactive shell) to load nvm environment
- Use `codex exec` subcommand for non-interactive execution
- Model flag is `-m` or `--model`
- Prompt goes as the final positional argument in quotes

**Review prompt template:** See `scripts/review-prompt-template.md` for the standard episode script review format.
