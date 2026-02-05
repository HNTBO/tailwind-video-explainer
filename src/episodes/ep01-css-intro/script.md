# Episode 1: CSS in 2 Minutes

## Summary
What CSS is and why it exists. Class selectors. Before/after visual transformation.

## Voiceover Script (~250 words)

[0:00] *Show plain HTML in editor*

Every website you've ever visited is built with HTML. But HTML alone looks... plain.

[0:08] *Show unstyled browser preview*

This is HTML without any styling. Just default browser fonts, no colors, no spacing.

[0:15] *Start typing CSS class in editor*

CSS - Cascading Style Sheets - is what transforms this raw structure into something beautiful.

[0:22] *Show styled preview appearing*

With CSS, we can control colors, fonts, spacing, layout - everything visual about a webpage.

[0:30] *Highlight class selector in code*

The most important concept: class selectors. When you write `class="title"` in HTML, you're creating a hook that CSS can grab onto.

[0:42] *Show CSS rule being typed*

Then in CSS, you write `.title` - that dot means "find elements with this class" - and define how it should look.

[0:52] *Show multiple classes being applied*

Classes are powerful because they're reusable. Define a style once, apply it anywhere.

[1:00] *Side-by-side: before and after*

This is the fundamental idea: HTML provides structure, CSS provides style.

[1:10] *Fade to Tailwind teaser*

In this series, we'll learn a faster way to write CSS called Tailwind. But first, you need to understand these CSS fundamentals.

[1:20] *End card*

Next up: The Box Model - how every element takes up space on the page.

---

## Timing Cues

| Time | Frame (@30fps) | Visual |
|------|----------------|--------|
| 0:00 | 0 | Show plain HTML code |
| 0:08 | 240 | Show unstyled preview |
| 0:15 | 450 | Start typing CSS |
| 0:22 | 660 | Preview transforms |
| 0:30 | 900 | Highlight class selector |
| 0:42 | 1260 | CSS rule animation |
| 0:52 | 1560 | Multiple classes |
| 1:00 | 1800 | Before/after split |
| 1:10 | 2100 | Tailwind teaser |
| 1:20 | 2400 | End card |

## Code Snippets

### HTML (unstyled)
```html
<h1>Welcome to my website</h1>
<p>This is a paragraph of text.</p>
<button>Click me</button>
```

### HTML (with classes)
```html
<h1 class="title">Welcome</h1>
<p class="intro">This is styled.</p>
<button class="btn">Click me</button>
```

### CSS
```css
.title {
  color: #0ea5e9;
  font-size: 2rem;
  font-weight: bold;
}

.intro {
  color: #334155;
  line-height: 1.6;
}

.btn {
  background: #0ea5e9;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
```
