# Episode 3: Layout Basics (Revised)

## Summary
Block vs flex vs grid - mental models for how elements arrange themselves. Concept-focused with a decision rule. Ties back to Episode 2 (box model) and sets up Episode 4 (Tailwind).

## Voiceover Script (~270 words)

[0:00] *Show two boxes refusing to sit side by side*

Ever try to put two things side by side... and they just stack anyway? That's not you - it's the default layout.

[0:08] *Show elements stacking vertically*

By default, many elements like divs and paragraphs act like blocks. They start on a new line and stack top to bottom.

[0:16] *Label appears: "Block"*

This is block layout. Great for reading flow - headings, paragraphs, sections.

[0:24] *Quick callback to Episode 2: padding/margin visible around blocks*

And remember the box model from last time? Padding and margin change the space around these blocks. But they still stack.

[0:34] *Show "want a row" examples: nav bar, buttons, cards*

But what if you want a row? A navigation bar. Buttons in a line. Cards next to each other.

[0:44] *Transition: same elements now in a row*

That's where flexbox comes in. Flex is for arranging items in one direction - usually a row.

[0:54] *Show flex items distributing space*

Flex can share space, align items, and even center things without guessing.

[1:06] *Show grid appearing with rows and columns*

Then there's grid. Grid creates rows and columns - like a spreadsheet - so you can control layout in two directions.

[1:18] *Show items snapping into cells (gallery/dashboard)*

Grid shines for galleries, dashboards, and sections that need a clear structure.

[1:28] *Side-by-side comparison: block, flex, grid*

So think of it like this: Block stacks. Flex lines things up. Grid builds a full layout map.

[1:40] *Simple rule of thumb appears on screen*

One direction? Flex. Rows and columns? Grid.

[1:48] *Tailwind teaser*

Now that you've got the mental models, Tailwind will let you apply them faster - by composing small utility classes.

[1:58] *End card*

Next up: Utility-First Philosophy - why Tailwind changes how you write CSS.

---

## Timing Cues

| Time | Frame (@30fps) | Visual |
|------|----------------|--------|
| 0:00 | 0 | Two boxes refusing to sit side by side |
| 0:08 | 240 | Elements stacking vertically |
| 0:16 | 480 | "Block" label appears |
| 0:24 | 720 | Callback: box model padding/margin visible |
| 0:34 | 1020 | Nav bar, buttons, cards examples |
| 0:44 | 1320 | Transition to flex row |
| 0:54 | 1620 | Flex items distributing space |
| 1:06 | 1980 | Grid with rows/columns appearing |
| 1:18 | 2340 | Items snapping into grid cells |
| 1:28 | 2640 | Three-way comparison split |
| 1:40 | 3000 | Decision rule on screen |
| 1:48 | 3240 | Tailwind teaser |
| 1:58 | 3540 | End card |

## Changes from Original

Based on GPT-5.2 feedback:

1. **Stronger hook** - Opens with relatable frustration: "Ever try to put two things side by side..."
2. **Added Episode 2 callback** - Ties box model to layout context
3. **Clarified block behavior** - "start on a new line" instead of "take full width"
4. **Added decision rule** - "One direction? Flex. Rows and columns? Grid."
5. **Expanded word count** - From ~180 to ~270 words for better pacing
6. **Better summary lines** - "Block stacks. Flex lines things up. Grid builds a full layout map."

## Visual Concepts

### Opening Hook Visual
Two boxes with arrows pointing right, but stacked vertically with a "?" above them

### Block Layout
```
┌──────────────────────────────────┐
│           Header                 │
└──────────────────────────────────┘
         ↓ stacks ↓
┌──────────────────────────────────┐
│           Paragraph              │
└──────────────────────────────────┘
```

### Box Model Callback
Show the same blocks but with visible padding (green) and margin (orange) from Episode 2

### Flex Layout
```
┌──────────┐ ┌──────────┐ ┌──────────┐
│  Item 1  │ │  Item 2  │ │  Item 3  │
└──────────┘ └──────────┘ └──────────┘
      ←── one direction ──→
```

### Grid Layout
```
┌──────────┬──────────┬──────────┐
│  Cell 1  │  Cell 2  │  Cell 3  │
├──────────┼──────────┼──────────┤
│  Cell 4  │  Cell 5  │  Cell 6  │
└──────────┴──────────┴──────────┘
      ↕ two directions ↔
```

### Decision Rule Visual
```
┌─────────────────────────────────┐
│  One direction?  →  FLEX        │
│  Rows + columns? →  GRID        │
└─────────────────────────────────┘
```

## Color Scheme
- Block elements: slate-600 (#475569)
- Flex elements: sky-500 (#0ea5e9)
- Grid elements: emerald-500 (#10b981)
- Decision rule: amber-400 highlight
