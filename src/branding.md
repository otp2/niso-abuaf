# Niso Abuaf Portfolio – Branding & UI Guidelines

This document outlines the design system, color scheme, typography, and visual branding standards for the **Niso Abuaf – Wall Street Professor** portfolio website. The design should reflect a blend of academic credibility, financial expertise, and modern digital sophistication.

---

## ✦ Color Palette

| Color Name         | Hex Code   | Usage                                        |
|--------------------|------------|----------------------------------------------|
| Teal/Aqua Primary  | `#007E87`  | Main header text, links, active nav states   |
| Deep Teal Accent   | `#00575E`  | Hover states, dividers, footers              |
| Warm Gold          | `#D4AF37`  | Accent highlights, underline in nav, CTA     |
| Slate Gray         | `#4A4A4A`  | Subtitle text, body copy                     |
| Light Gray         | `#F6F6F6`  | Background, section breaks                   |
| White              | `#FFFFFF`  | Primary background, card backgrounds         |
| Charcoal           | `#1E1E1E`  | Footer text, deep headings                   |

## ✦ Typography

**Primary Typeface:** `Source Serif Pro`  
*Use for headers and large type. Reflects academic sophistication with warmth and gravitas.*

**Secondary Typeface:** `Inter`  
*Use for body copy, nav items, and fine print. Modern, accessible, and highly legible.*

```css
/* Sample CSS usage */
h1, h2, h3 {
  font-family: 'Source Serif Pro', serif;
  font-weight: 600;
}

body, p, li, nav {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
```

## ✦ UI & Layout Style

- **Navigation Bar:** Glassmorphism effect with backdrop blur and semi-transparent background (rgba(255,255,255,0.85)), accented with gold underlines for the active page.

- **Cards & Containers:** Rounded corners (border-radius: 1rem), subtle shadows (box-shadow: 0 4px 12px rgba(0,0,0,0.05)), light grainy gradient backgrounds (custom SVG/textures).

- **Headshot Frame:** Rounded rectangular frame with soft border and drop shadow.

- **Spacing:** Generous white space between sections and within cards (min 2rem padding).

## ✦ Logo / Wordmark Style

- No graphic logo—use full name in Source Serif Pro with teal color for authoritative branding.

- **Title:** Use stacked layout on mobile. Subtitle in gray with small caps or light serif.

## ✦ Images and Assets

- **Headshot:** The file `niso-abauf-headshot.jpg` located in `/public/images/` should be used as the primary portrait image. Display with a rounded rectangular frame (border-radius: 0.75rem) and subtle drop shadow as specified in the UI guidelines.

## ✦ Accessibility & Performance

- **Contrast Ratios:** All text should maintain at least a 4.5:1 contrast ratio.

- **Alt Text:** All images and headshots must include descriptive alt tags.

- **Responsiveness:** Layout should scale seamlessly from large screens to medium-large screens to medium screens to mobile to smallest screens. 