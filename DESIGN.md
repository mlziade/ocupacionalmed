---
version: alpha
name: OcupacionalMED
description: Design system for OcupacionalMED — Rede de Segurança e Medicina Ocupacional.

# ─── Colors ──────────────────────────────────────────────────────────────────
# Extracted from ocupacionalmed.com.br (css/style.css + inline styles).
colors:
  primary: "#006600"            # Brand dark green — CTAs, section headers, key text
  on-primary: "#ffffff"
  primary-container: "#D0EFBC"  # Light green — form row backgrounds, hover fills
  on-primary-container: "#006600"
  secondary: "#4A864A"          # Medium green — section header bars (Parceiros, Empresas…)
  on-secondary: "#ffffff"
  secondary-container: "#B4FCB1" # Very light green — page body background tint
  on-secondary-container: "#006600"
  tertiary: "#CC0000"           # Red accent — used sparingly (footer brand highlight)
  on-tertiary: "#ffffff"
  surface: "#ffffff"            # Card and content area backgrounds
  on-surface: "#1a1a1a"         # Body text (softened from pure #000000)
  on-surface-variant: "#4A864A" # Secondary text: captions, metadata, placeholders
  outline: "#000000"            # Strong borders (main table frame)
  outline-variant: "#EAEAEA"    # Subtle card dividers and inner borders
  error: "#CC0000"              # Validation errors
  on-error: "#ffffff"
  background: "#F0FCF0"         # Global page background (refined from #B4FCB1)
  on-background: "#1a1a1a"

# ─── Typography ──────────────────────────────────────────────────────────────
# Two-font system:
#   Headings → Lato (geometric, bold-friendly, strong brand presence)
#   Body     → Source Sans 3 (humanist, highly legible at small sizes)
# Both loaded via Google Fonts <link> in layout.tsx.
typography:
  headline-lg:
    fontFamily: Lato
    fontSize: 24px
    fontWeight: "900"
    lineHeight: 1.2
    letterSpacing: -0.01em

  headline-md:
    fontFamily: Lato
    fontSize: 18px
    fontWeight: "700"
    lineHeight: 1.3

  headline-sm:
    fontFamily: Lato
    fontSize: 15px
    fontWeight: "700"
    lineHeight: 1.3

  body-lg:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 1.5

  body-md:
    fontFamily: Source Sans 3
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 1.5

  label-md:
    fontFamily: Lato
    fontSize: 13px
    fontWeight: "700"
    lineHeight: 1
    letterSpacing: 0em

  label-sm:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 1

# ─── Rounded ─────────────────────────────────────────────────────────────────
rounded:
  sm: 4px      # form fields, tight badges
  md: 8px      # modals, dropdowns
  lg: 12px     # buttons, action chips
  xl: 16px     # service cards, hero panels
  full: 9999px # pills / avatars — keep as-is unless you want a different style

# ─── Spacing ─────────────────────────────────────────────────────────────────
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 32px
  xl: 64px
  gutter: 24px  # Column gutter in the card grid
  margin: 32px  # Outer horizontal page margin (scales to 64px on desktop)

# ─── Components ──────────────────────────────────────────────────────────────
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 10px 24px
    height: 40px

  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"
    transition: background-color 150ms ease-out

  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 10px 24px
    height: 40px

  button-secondary-hover:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"

  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: 10px 24px

  card-service:                # Cards for the service/feature tiles
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: 20px
    border: 1px solid "{colors.outline-variant}"
    shadow: 0 2px 8px rgba(0,0,0,0.06)

  card-service-hover:
    backgroundColor: "{colors.primary-container}"
    shadow: 0 4px 16px rgba(0,0,0,0.10)

  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: 8px 12px
    height: 40px
    border: 1px solid "{colors.outline-variant}"
    focusRing: 2px solid "{colors.primary}" at 40% opacity

  badge-status:               # e.g. "Parceiros", "Empresas" tags
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: 4px 12px

  nav-link:
    textColor: "{colors.on-background}"
    typography: "{typography.label-md}"

  nav-link-active:
    textColor: "{colors.primary}"
---

# OcupacionalMED — Design System

## Overview

OcupacionalMED's visual identity communicates trust, reliability, and modern professionalism to HR teams, company medical departments, partner clinicians, and occupational health providers in Brazil. The aesthetic balances clinical precision with an approachable, human warmth — a green-forward palette evokes health, safety, and nature while clean white surfaces ensure information clarity. The UI should feel organized and efficient, like a well-run clinic: fast to navigate, information-dense where needed, and completely free of visual clutter. The primary audience is professionals (not consumers), so density and legibility are prioritized over decorative flair.

## Colors

The palette is rooted in the brand's long-established green identity, conveying health, safety, and reliability.

- **Primary (#006600):** The core brand dark green. Used for page headings, key labels, button backgrounds, and any primary call-to-action. High contrast against white ensures readability.
- **Secondary (#4A864A):** A mid-tone green for supporting UI surfaces such as card header bars and the footer background — slightly softer than the primary to create tonal depth.
- **Primary Container (#D0EFBC):** A light, muted green for card hover fills and tinted surfaces that need a green connection without heavy contrast.
- **Surface / Background (#ffffff / #F0FCF0):** White card surfaces on a very light green page background. Keeps the UI feeling fresh and clinical without being sterile.
- **Tertiary (#CC0000):** A restrained red accent, reserved for the brand wordmark in the footer and validation error states. Never use for decorative purposes.
- **On-Surface (#1a1a1a):** Near-black for all body text — softened from pure black to reduce visual harshness on white backgrounds.
- **On-Surface Variant (#4A864A):** Medium green for secondary text such as section metadata, form labels, and placeholder labels.
- **Outline Variant (#EAEAEA):** Light gray for card borders and inner dividers — keeps cards visually distinct without heavy outlines.

## Typography

**Two-font system**, both loaded via Google Fonts `<link>` in `layout.tsx`:

- **Lato** (headings, labels, nav, buttons) — geometric with strong bold variants (700, 900). Gives the brand a confident, professional presence.
- **Source Sans 3** (body text, form inputs, captions) — humanist and highly legible at 13–14px. Comfortable for reading lists and descriptions.

The type scale:

- **headline-lg (24px/900, Lato):** Hero and page-level titles.
- **headline-sm (15px/700, Lato):** Section card headers, e.g. "Parceiros", "Empresas".
- **body-md (13px/400, Source Sans 3, lh 1.5):** Feature bullet lists, form descriptions.
- **label-md (13px/700, Lato):** Navigation links, form labels, button text.
- **label-sm (12px/400, Source Sans 3):** Badge text, metadata captions.

Use only weights 400 and 700 (and 900 for hero headlines) — avoid mixing more than two weights in one section.

## Layout

- **Mobile-first** responsive design.
- **Column grid:** 1-column on mobile, 2-column on tablet (`sm`), 3-column on desktop (`lg`) for the service card grid.
- **Max content width:** 1152px (`max-w-6xl`) — keeps content readable on wide screens without excessive stretching.
- **Horizontal margins:** 24px on mobile, 32px on desktop (`px-6 lg:px-8`).
- **Section vertical rhythm:** 56px (`py-14`) on mobile, 80px (`py-20`) on desktop between major page sections.
- **Spacing philosophy:** Information-moderate — enough whitespace for clarity, but not so airy that it feels sparse on a professional tool. Card grids use a 24px gutter.

## Elevation & Depth

**Subtle shadows** — cards sit above the light green page background using a soft drop shadow (`0 2px 8px rgba(0,0,0,0.06)`). On hover, the shadow deepens slightly (`0 4px 16px rgba(0,0,0,0.10)`) and the card background transitions to `primary-container`. The header uses a hairline `border-b` + `shadow-sm` to separate it from content on scroll. No glassmorphism, no heavy gradients — the design stays grounded and clinical.

## Shapes

**Moderately rounded** corners throughout — lending a professional but friendly feel appropriate for a healthcare tool.

- **4px (sm):** Form inputs — precise, slightly clinical.
- **8px (md):** Modals and dropdowns.
- **12px (lg):** Buttons and action chips — approachable CTA feel.
- **16px (xl):** Service cards and hero panels — the primary elevated surface.
- **9999px (full):** Status pills / badges only.

Tables and dense data grids may use `rounded-sm` (4px) or remain fully square to preserve alignment. Do not mix pill shapes and sharp corners within the same card.

## Components

### Buttons & CTAs

Primary buttons use `#006600` background with white text, 12px border radius, and a 150ms `ease-out` background transition on hover (shifts to `primary-container` with `on-primary-container` text). Height is 40px with `10px 24px` padding. Secondary buttons mirror this pattern using the `secondary` color. Ghost buttons are transparent with `primary`-colored text and a subtle `primary-container` fill on hover. All transitions use `duration-150 ease-out`.

### Cards & Service Tiles

Service tiles (Parceiros, Empresas, Recursos do Sistema) use a white (`surface`) background with a 1px `outline-variant` border and 16px corner radius. A colored header bar in `secondary` with `on-secondary` white text identifies each section. The card body contains a bullet list with small green dot markers. On hover, the card background transitions to `primary-container`. No icons in the initial design — the header bar provides sufficient visual anchoring.

### Navigation / Header

The header is **sticky** (`position: sticky; top: 0`) with a white `surface` background and `border-b outline-variant` + `shadow-sm` to separate it from page content on scroll. It is not transparent on scroll. Active nav link is identified by the `primary` color; inactive links are `on-background` with a `primary` hover. The "Acesso ao Sistema" item renders as a primary button. Mobile navigation uses a **hamburger drawer** that slides down below the header bar. The header also displays a date + welcome bar: `{date}. Bem-vindo ao Portal OcupacionalMED`.

### Forms & Inputs

**Outlined variant** — `1px border-outline-variant` on a white surface background. Labels are always visible **above** the input (never placeholder-only, for accessibility). Focus state uses a `2px ring primary/40` focus ring with a `primary` border. Error states add a `error`-colored border and message below the field. Inputs are 40px tall with 4px radius. The contact form submit button uses the primary button style.

### Footer

Background: `secondary` (#4A864A). Three-column grid on desktop (brand/social | Quick Links | Contact snippet), stacked on mobile. Brand name in Lato Black; tagline at 80% opacity. Quick Links use `on-secondary/80` with full-opacity on hover. A thin `on-secondary/20` divider separates the grid from the copyright bar. LinkedIn icon links to the company LinkedIn page. Copyright bar: `© {year} OcupacionalMED. Todos os direitos reservados.`

## Do's and Don'ts

- **Do** use `primary` (#006600) exclusively for the most important call-to-action per screen — never duplicate it across competing CTAs.
- **Do** maintain WCAG AA contrast ratio (4.5:1) for all body text and interactive labels.
- **Do** keep form labels always visible above their inputs — placeholder text alone is not accessible.
- **Do** apply consistent vertical spacing in multiples of 8px throughout the layout.
- **Don't** use more than two font weights (400 and 700) in a single UI section.
- **Don't** use `tertiary` (#CC0000) for anything other than critical validation errors or the brand footer wordmark.
- **Don't** mix pill shapes (rounded-full) with sharp or moderately rounded corners within the same card component.
- **Don't** apply decorative gradients to text — legibility is non-negotiable in a medical-context application.
