# Episode 2: The Box Model (Revised)

## Summary
Padding, border, margin - the three layers that define how every element takes up space. Problem-based hook, inside-to-outside build, ties to Episode 1 and sets up Episode 3.

## Voiceover Script (~270 words)

[0:00] *Show a cramped button next to another element*

Ever wonder why your button feels cramped... or why two boxes won't stop touching? That's the box model.

[0:08] *Show a simple box element, zoom in*

On the web, everything is a box - text, images, buttons. And every box is built from layers that control spacing.

[0:16] *Highlight the content area*

In the center is the content: the text or image you're displaying.

[0:22] *Animate padding appearing*

Next is padding. Padding is space inside the box. It pushes the content away from the edges, like breathing room.

[0:34] *Show padding values changing*

When you increase padding, the element takes up more room - because you're adding space inside it.

[0:42] *Animate border appearing*

Then comes the border: the visible edge around the box. It wraps around the padding and adds a rim of thickness.

[0:52] *Show border styles changing*

Borders can be thin or thick, solid or dashed - but they always sit outside padding.

[1:00] *Animate margin appearing*

Finally, margin. Margin is space outside the box. It pushes other elements away and creates distance between boxes.

[1:12] *Show two boxes with margin between them*

You usually don't see margin directly - you see the gap it creates.

[1:20] *Show complete diagram with labels*

So remember: content, padding, border, margin - from inside to outside.

[1:28] *Show CSS properties*

In CSS, you control them separately. Padding for inside space, margin for outside space, and border for the edge.

[1:38] *End card*

Next up: Layout Basics - how boxes actually arrange themselves on the page.

---

## Timing Cues

| Time | Frame (@30fps) | Visual |
|------|----------------|--------|
| 0:00 | 0 | Cramped button / touching boxes problem |
| 0:08 | 240 | Simple box element, zoom in |
| 0:16 | 480 | Highlight content area |
| 0:22 | 660 | Animate padding appearing |
| 0:34 | 1020 | Padding values changing |
| 0:42 | 1260 | Animate border appearing |
| 0:52 | 1560 | Border styles changing |
| 1:00 | 1800 | Animate margin appearing |
| 1:12 | 2160 | Two boxes with margin gap |
| 1:20 | 2400 | Complete diagram with labels |
| 1:28 | 2640 | CSS properties code |
| 1:38 | 2940 | End card |

## Changes from Original

Based on GPT-5.2 feedback:

1. **Problem-based hook** - Opens with relatable frustration: "Ever wonder why your button feels cramped..."
2. **Clearer padding explanation** - "takes up more room" instead of "box grows"
3. **Border adds thickness** - Mentioned that border contributes to size
4. **Fixed contractions** - Proper apostrophes for AI narration
5. **Stronger margin clarity** - "space outside" and "distance between boxes"
6. **Better Episode 3 setup** - "how boxes actually arrange themselves"

## Visual Concepts

### Opening Hook
Show a button with text crammed against edges, and two cards touching with no gap

### Box Model Layers (Color Scheme)
- Content: sky-500 (#0ea5e9) - the actual stuff
- Padding: emerald-500 (#10b981) - breathing room inside
- Border: slate-600 (#475569) - visible edge
- Margin: amber-500/30 (#f59e0b at 30% opacity) - invisible outside space

### Complete Diagram
```
┌─────────────────────────────────────┐
│         MARGIN (amber)              │
│   ┌─────────────────────────────┐   │
│   │     BORDER (slate)          │   │
│   │   ┌─────────────────────┐   │   │
│   │   │   PADDING (green)   │   │   │
│   │   │   ┌─────────────┐   │   │   │
│   │   │   │ CONTENT     │   │   │   │
│   │   │   │ (sky blue)  │   │   │   │
│   │   │   └─────────────┘   │   │   │
│   │   └─────────────────────┘   │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### Two Boxes with Margin
```
┌─────────┐         ┌─────────┐
│  Box A  │← margin →│  Box B  │
└─────────┘   gap   └─────────┘
```
