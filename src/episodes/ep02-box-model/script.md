# Episode 2: The Box Model

## Summary
Padding, border, margin - the three layers that define how every element takes up space. Visual breakdown with animated measurements.

## Voiceover Script (~260 words)

[0:00] *Show a simple box element*

Every element on a webpage is a box. Even text, even images - everything is a rectangular box.

[0:08] *Zoom into the box, reveal layers*

And every box has three invisible layers around its content. Understanding these layers is key to controlling layout.

[0:16] *Highlight the content area*

First, there's the content itself - your text, your image, whatever you're displaying.

[0:22] *Animate padding appearing*

Around that content is padding. Padding is the breathing room inside the box. It pushes the content away from the edges.

[0:32] *Show padding values changing*

More padding means more space inside. The content stays the same size, but the box grows.

[0:40] *Animate border appearing*

Next comes the border. This is the edge of the box - the line you can actually see. It wraps around the padding.

[0:50] *Show border styles changing*

Borders can be thin, thick, solid, dashed - but they always sit between padding and margin.

[0:58] *Animate margin appearing*

Finally, margin. This is the space outside the box. Margin pushes other elements away.

[1:08] *Show two boxes with margins*

Unlike padding, margin creates distance between elements. It's invisible - you only see its effect.

[1:16] *Show complete box model diagram with labels*

So remember: content, padding, border, margin. From inside to outside.

[1:24] *Show CSS properties*

In CSS, you control each layer separately. Padding for inside space, margin for outside space.

[1:32] *End card*

Next up: Layout Basics - how elements arrange themselves on the page.

---

## Timing Cues

| Time | Frame (@30fps) | Visual |
|------|----------------|--------|
| 0:00 | 0 | Show simple box element |
| 0:08 | 240 | Zoom in, reveal layers concept |
| 0:16 | 480 | Highlight content area |
| 0:22 | 660 | Animate padding layer appearing |
| 0:32 | 960 | Padding values changing demo |
| 0:40 | 1200 | Animate border layer appearing |
| 0:50 | 1500 | Border style variations |
| 0:58 | 1740 | Animate margin layer appearing |
| 1:08 | 2040 | Two boxes with margins demo |
| 1:16 | 2280 | Complete box model diagram |
| 1:24 | 2520 | CSS properties code |
| 1:32 | 2760 | End card |

## Visual Concepts

### Box Model Diagram
```
┌─────────────────────────────────────┐
│             MARGIN                  │
│   ┌─────────────────────────────┐   │
│   │         BORDER              │   │
│   │   ┌─────────────────────┐   │   │
│   │   │      PADDING        │   │   │
│   │   │   ┌─────────────┐   │   │   │
│   │   │   │   CONTENT   │   │   │   │
│   │   │   └─────────────┘   │   │   │
│   │   └─────────────────────┘   │   │
│   └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

### Color Scheme
- Content: sky-500 (#0ea5e9)
- Padding: emerald-500 (#10b981)
- Border: slate-600 (#475569)
- Margin: amber-500 (#f59e0b) - shown as transparent overlay

## Code Snippets

### Basic Box
```html
<div class="box">
  Hello World
</div>
```

### CSS - Padding Demo
```css
.box {
  padding: 20px;
}

/* Or control each side: */
.box {
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

### CSS - Border Demo
```css
.box {
  border: 2px solid #475569;
}

/* Or individual properties: */
.box {
  border-width: 2px;
  border-style: solid;
  border-color: #475569;
}
```

### CSS - Margin Demo
```css
.box {
  margin: 20px;
}

/* Centering with auto: */
.box {
  margin-left: auto;
  margin-right: auto;
}
```

### Complete Example
```css
.card {
  /* Content size */
  width: 200px;

  /* Padding - inside space */
  padding: 16px;

  /* Border - the edge */
  border: 2px solid #e2e8f0;

  /* Margin - outside space */
  margin: 24px;
}
```
