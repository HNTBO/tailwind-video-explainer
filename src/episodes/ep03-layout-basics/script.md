# Episode 3: Layout Basics

## Summary
Block vs flex vs grid - mental models for how elements arrange themselves. Concept-focused, not syntax-heavy. Same content shown in different layout modes.

## Voiceover Script (~250 words)

[0:00] *Show elements stacking vertically*

By default, elements stack. One on top of the other, like paragraphs in a document.

[0:08] *Label appears: "Block"*

This is called block layout. Each element takes the full width and pushes the next one down.

[0:16] *Show elements trying to sit side by side awkwardly*

But what if you want things side by side? A navigation menu. A row of cards. That's where layout modes come in.

[0:26] *Transition: same elements now in a row*

Meet flexbox. With flex, elements flow in a direction - usually a row. They share space instead of stacking.

[0:36] *Show flex items adjusting*

Flex is smart. Items can grow, shrink, and distribute space automatically. Perfect for navigation bars, buttons in a row, centering things.

[0:48] *Show grid appearing*

Then there's grid. Grid creates rows and columns - like a spreadsheet. You define the structure, then place items into cells.

[0:58] *Show items snapping into grid cells*

Grid shines when you need precise, two-dimensional layouts. Photo galleries. Dashboards. Complex page layouts.

[1:08] *Side by side comparison: block, flex, grid*

So three mental models: Block stacks vertically. Flex flows in one direction. Grid arranges in rows and columns.

[1:18] *Highlight flex and grid*

You'll use flex and grid constantly. Most layouts are one or the other - or both combined.

[1:26] *Transition to Tailwind teaser*

That's the CSS foundation. Now you're ready for Tailwind - a faster way to apply all of this.

[1:34] *End card*

Next up: The Utility-First Philosophy - why Tailwind changes everything.

---

## Timing Cues

| Time | Frame (@30fps) | Visual |
|------|----------------|--------|
| 0:00 | 0 | Show block elements stacking |
| 0:08 | 240 | "Block" label appears |
| 0:16 | 480 | Elements awkwardly trying to be side by side |
| 0:26 | 780 | Flex transition - elements in a row |
| 0:36 | 1080 | Flex items adjusting/distributing |
| 0:48 | 1440 | Grid layout appearing |
| 0:58 | 1740 | Items snapping into grid cells |
| 1:08 | 2040 | Three-way comparison split |
| 1:18 | 2340 | Highlight flex and grid |
| 1:26 | 2580 | Tailwind teaser transition |
| 1:34 | 2820 | End card |

## Visual Concepts

### Block Layout Demo
```
┌──────────────────────────────────┐
│           Header                 │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│           Paragraph              │
└──────────────────────────────────┘
┌──────────────────────────────────┐
│           Button                 │
└──────────────────────────────────┘
```

### Flex Layout Demo
```
┌──────────┐ ┌──────────┐ ┌──────────┐
│  Item 1  │ │  Item 2  │ │  Item 3  │
└──────────┘ └──────────┘ └──────────┘
```

### Grid Layout Demo
```
┌──────────┬──────────┬──────────┐
│  Cell 1  │  Cell 2  │  Cell 3  │
├──────────┼──────────┼──────────┤
│  Cell 4  │  Cell 5  │  Cell 6  │
└──────────┴──────────┴──────────┘
```

### Three-Way Comparison (Final Visual)
```
   BLOCK          FLEX           GRID
┌─────────┐  ┌───┬───┬───┐  ┌───┬───┬───┐
│    A    │  │ A │ B │ C │  │ A │ B │ C │
├─────────┤  └───┴───┴───┘  ├───┼───┼───┤
│    B    │                 │ D │ E │ F │
├─────────┤                 └───┴───┴───┘
│    C    │
└─────────┘
```

### Color Scheme
- Block elements: slate-600 (#475569)
- Flex elements: sky-500 (#0ea5e9)
- Grid elements: emerald-500 (#10b981)
- Labels: slate-400 text

## Code Snippets

Note: This episode focuses on concepts, not syntax. Code is minimal and for reference only.

### Block (Default)
```css
/* This is the default - no CSS needed */
div {
  display: block;
}
```

### Flex
```css
.container {
  display: flex;
}
```

### Grid
```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

## Notes

- This is the bridge episode between "CSS fundamentals" and "Tailwind"
- Focus on mental models, not memorizing properties
- Flex and grid syntax will be covered in detail in Episodes 11 and 12
- The goal is recognition: "Oh, I need flex for this" vs "I need grid for this"
