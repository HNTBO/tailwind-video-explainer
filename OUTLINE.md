# Tailwind CSS Video Series - Production Outline

> 15 episodes × ~2 minutes | Complete beginners | AI voiceover | Remotion

---

## Series Structure

| Part | Episodes | Focus |
|------|----------|-------|
| 1. CSS You Must Know | 1-3 | Minimal CSS foundation before Tailwind |
| 2. Tailwind Introduction | 4-5 | Philosophy and mental model |
| 3. Tailwind Essentials | 6-15 | Practical utilities for real UIs |

---

## Episode Breakdown

### Part 1: CSS You Must Know

#### Episode 1: CSS in 2 Minutes
- What CSS is and why it exists
- Class selectors (the only selector type you really need)
- **Visual**: HTML before/after CSS transformation

#### Episode 2: The Box Model
- Padding, border, margin
- Space vs size - how elements occupy room
- **Visual**: Animated box model with live measurements

#### Episode 3: Layout Basics
- Block vs flex vs grid (concept only, not syntax)
- Mental model for how elements arrange
- **Visual**: Same content in different layout modes

---

### Part 2: Tailwind Introduction

#### Episode 4: Utility-First Philosophy
- Traditional CSS vs Tailwind approach
- No more naming things (goodbye `.card-wrapper-inner`)
- Trade-offs and benefits
- **Visual**: Same component built both ways

#### Episode 5: How Tailwind Works
- Design scales (spacing, colors, typography)
- Utility composition in HTML
- "Last class wins" rule for conflicts
- **Visual**: Classes being typed, result appearing instantly

---

### Part 3: Tailwind Essentials

#### Episode 6: Spacing
- `p-*`, `m-*`, `gap-*`
- Axis utilities: `px-*`, `py-*`, `mx-*`, `my-*`
- **Visual**: Elements moving with different spacing values

#### Episode 7: Sizing & Centering
- `w-*`, `h-*`, `max-w-*`, `min-h-*`
- `container`, `mx-auto` for centering
- **Visual**: Elements resizing and centering

#### Episode 8: Typography
- `text-sm` to `text-4xl` (core sizes)
- `font-medium`, `font-bold`
- `leading-*` for line height
- **Visual**: Text transforming with typography utilities

#### Episode 9: Colors & Backgrounds
- Tailwind palette overview (50-950 shades)
- `text-*`, `bg-*` utilities
- **Visual**: Color swatches, applying colors to elements

#### Episode 10: Borders, Radius & Shadows
- `border`, `border-*` for width/color
- `rounded-*` from `rounded-sm` to `rounded-full`
- `shadow-*` for depth
- **Visual**: Building a card-ready element

#### Episode 11: Flexbox Essentials
- `flex`, `flex-row`, `flex-col`
- `justify-*`, `items-*`, `gap-*`
- **Visual**: Boxes arranging with different flex settings

#### Episode 12: Grid Essentials
- `grid`, `grid-cols-*`
- `gap-*`, `col-span-*`
- **Visual**: Building a responsive grid layout

#### Episode 13: Responsive Design
- Mobile-first approach
- Breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Stacking utilities: `md:flex lg:grid-cols-3`
- **Visual**: Layout adapting across screen sizes

#### Episode 14: States & Accessibility
- `hover:*`, `focus:*`, `focus-visible:*`
- `ring-*` for focus indicators
- `transition`, `duration-*` for smooth effects
- **Visual**: Button with polished hover/focus states

#### Episode 15: Build Real Components
- Button (with hover, focus, transitions)
- Card (spacing, shadows, rounded corners)
- Simple form input
- When to extract repeated patterns
- **Visual**: Building each component step-by-step

---

## Production Workflow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  1. Script      │ ──▶ │  2. Voiceover   │ ──▶ │  3. Remotion    │
│  (~250 words)   │     │  (ElevenLabs)   │     │  (React video)  │
└─────────────────┘     └─────────────────┘     └─────────────────┘
```

**Per episode:**
1. Write voiceover script with timing cues
2. Generate AI voice audio
3. Build Remotion composition synced to audio
4. Render final video

---

## Remotion Components (to build)

| Component | Purpose |
|-----------|---------|
| `CodeEditor` | Syntax-highlighted code display (slate bg, sky accents) |
| `VisualPreview` | Live CSS/Tailwind result preview |
| `SplitScreen` | Side-by-side layout (code left, result right) |

---

## Scope Rules (from GPT-5.2 review)

> **Per 2-minute episode**: One mental model + 3-5 utilities + one visible outcome

**Included in essentials:**
- Spacing, sizing, typography, colors
- Borders, radius, shadows
- Flexbox, grid, responsive
- States, transitions, accessibility

**Deferred to advanced:**
- Negative margins
- Dark mode (`dark:*`)
- Arbitrary values (`w-[372px]`)
- Complex selectors/specificity

---

## Current Status

- [x] Editorial outline created
- [x] External review (GPT-5.2)
- [ ] Build Remotion components
- [ ] Script episodes
- [ ] Generate voiceovers
- [ ] Build episode compositions
- [ ] Render videos
