# Script Review Prompt Template

Use this template when sending episode scripts for external review (GPT-5.2 or similar).

---

## THE PROMPT

```
# Series Context

This is Episode {N} of a 15-episode video series teaching CSS and Tailwind CSS to complete beginners.

## Series Structure

**Part 1: CSS You Must Know (Episodes 1-3)**
1. CSS in 2 Minutes - What CSS is, class selectors, before/after transformation
2. The Box Model - Padding, border, margin, how elements occupy space
3. Layout Basics - Block vs flex vs grid mental models

**Part 2: Tailwind Introduction (Episodes 4-5)**
4. Utility-First Philosophy - Traditional CSS vs Tailwind approach
5. How Tailwind Works - Design scales, utility composition

**Part 3: Tailwind Essentials (Episodes 6-15)**
6. Spacing - p-*, m-*, gap-*
7. Sizing & Centering - w-*, h-*, max-w-*, container
8. Typography - text sizes, font weights, line height
9. Colors & Backgrounds - Tailwind palette, text-*, bg-*
10. Borders, Radius & Shadows - border-*, rounded-*, shadow-*
11. Flexbox Essentials - flex, justify-*, items-*, gap-*
12. Grid Essentials - grid, grid-cols-*, col-span-*
13. Responsive Design - Mobile-first, breakpoints
14. States & Accessibility - hover:*, focus:*, transitions
15. Build Real Components - Button, card, form input

## Episode Being Reviewed

**Episode {N}: {TITLE}**
- Previous episode: {PREV_EPISODE}
- Next episode: {NEXT_EPISODE}
- This episode's goal: {EPISODE_GOAL}

## Target Specs
- Duration: ~2 minutes (voiceover with visuals)
- Audience: Complete beginners who have never written CSS
- Format: Code on left, visual result on right
- Voiceover: AI-generated (needs natural pacing, ~250-300 words)

---

# Review Request

Review this voiceover script for Episode {N}. Evaluate:

1. **Clarity** - Is every concept explained simply enough for complete beginners?
2. **Pacing** - Does the word count fit comfortably in 2 minutes with visuals?
3. **Flow** - Does the narrative build logically?
4. **Hook** - Does it engage viewers in the first 10 seconds?
5. **Continuity** - Does it connect naturally from Episode {N-1} and set up Episode {N+1}?
6. **Completeness** - Does it deliver on the episode's promise without overreaching?

Provide specific suggestions for improvement, not just observations.

---

# Script

{PASTE SCRIPT HERE}
```

---

## EXAMPLE: Episode 2

```
# Series Context

This is Episode 2 of a 15-episode video series teaching CSS and Tailwind CSS to complete beginners.

## Series Structure

**Part 1: CSS You Must Know (Episodes 1-3)**
1. CSS in 2 Minutes - What CSS is, class selectors, before/after transformation
2. The Box Model - Padding, border, margin, how elements occupy space ← YOU ARE HERE
3. Layout Basics - Block vs flex vs grid mental models

**Part 2: Tailwind Introduction (Episodes 4-5)**
4. Utility-First Philosophy - Traditional CSS vs Tailwind approach
5. How Tailwind Works - Design scales, utility composition

**Part 3: Tailwind Essentials (Episodes 6-15)**
6-15. [Spacing, Sizing, Typography, Colors, Borders, Flexbox, Grid, Responsive, States, Components]

## Episode Being Reviewed

**Episode 2: The Box Model**
- Previous episode: CSS in 2 Minutes (introduced CSS, class selectors, styling basics)
- Next episode: Layout Basics (block vs flex vs grid)
- This episode's goal: Teach padding, border, margin as the three layers that control spacing

## Target Specs
- Duration: ~2 minutes (voiceover with visuals)
- Audience: Complete beginners who have never written CSS
- Format: Code on left, visual result on right
- Voiceover: AI-generated (needs natural pacing, ~250-300 words)

---

# Review Request

Review this voiceover script for Episode 2. Evaluate:

1. **Clarity** - Is every concept explained simply enough for complete beginners?
2. **Pacing** - Does the word count fit comfortably in 2 minutes with visuals?
3. **Flow** - Does the narrative build logically?
4. **Hook** - Does it engage viewers in the first 10 seconds?
5. **Continuity** - Does it connect naturally from Episode 1 and set up Episode 3?
6. **Completeness** - Does it deliver on "The Box Model" promise without overreaching?

Provide specific suggestions for improvement, not just observations.

---

# Script

[PASTE SCRIPT CONTENT HERE]
```
