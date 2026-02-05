# Episode 1: CSS in 2 Minutes (Revised)

## Summary
What CSS is and why it exists. Class selectors. Before/after visual transformation.

## Changes from v1
- **Hook**: Sharper emotional contrast ("look terrible" instead of "plain")
- **Acronym**: Removed "Cascading Style Sheets" expansion (adds little value)
- **Class selectors**: Added brief justification for why they're "most important"
- **Dot selector**: More concrete phrasing ("class name" instead of "this class")
- **Tailwind teaser**: Tightened to avoid redundancy

---

## Voiceover Script (~240 words)

[0:00] *Show plain HTML in editor*

Every website you've ever visited is built with HTML. But if the internet were only HTML... it would look terrible.

[0:10] *Show unstyled browser preview*

This is HTML without any styling. Default fonts, no colors, no spacing. Just raw content.

[0:18] *Code editor highlights, CSS appears*

CSS is what transforms this into something beautiful. With CSS, we control colors, fonts, spacing, layout — everything visual about a webpage.

[0:30] *Highlight class attribute in HTML*

There are many ways to target elements with CSS, but for beginners, the most important one is class selectors.

[0:38] *Zoom on class="title"*

When you write `class="title"` in HTML, you're creating a hook that CSS can grab onto.

[0:46] *Show CSS rule being written*

In CSS, you write `.title` — that dot means "find every element with this class name" — then define how it should look.

[0:56] *Show class applied to multiple elements*

Classes are powerful because they're reusable. Define a style once, apply it anywhere.

[1:04] *Side-by-side: before and after*

This is the core idea: HTML provides structure, CSS provides style. Everything else builds on this.

[1:14] *Tailwind logo hint*

Later, we'll use a faster way to write CSS called Tailwind. But this idea always stays the same.

[1:22] *End card with next episode preview*

Next up: The Box Model — how every element takes up space on the page.

---

## Timing Cues

| Time | Frame (@30fps) | Visual |
|------|----------------|--------|
| 0:00 | 0 | Show plain HTML code |
| 0:10 | 300 | Show unstyled preview |
| 0:18 | 540 | CSS appears, preview transforms |
| 0:30 | 900 | Highlight class attribute |
| 0:38 | 1140 | Zoom on class="title" |
| 0:46 | 1380 | CSS rule animation |
| 0:56 | 1680 | Multiple elements with same class |
| 1:04 | 1920 | Before/after split |
| 1:14 | 2220 | Tailwind teaser |
| 1:22 | 2460 | End card |

---

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
<p class="intro">This is styled text.</p>
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

---

## Review Status
- [x] v1 draft
- [x] External review (GPT-5.2)
- [x] v2 revised
- [x] Final approval
- [x] Voiceover generated (shimmer, tts-1-hd)
- [x] Composition built (10 scenes synced to audio)
