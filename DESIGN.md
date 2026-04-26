---
version: alpha
name: OcupacionalMED
description: Design system for OcupacionalMED — Rede de Segurança e Medicina Ocupacional.

# ─── Colors ──────────────────────────────────────────────────────────────────
# Fill in your hex values. Common roles: primary (brand/CTAs), secondary
# (accents), tertiary (highlights), neutral (backgrounds/text).
colors:
  primary: "#TODO"           # Main brand color — used for CTAs and key actions
  on-primary: "#TODO"        # Text/icons placed on top of primary
  primary-container: "#TODO" # Lighter tint of primary for backgrounds
  on-primary-container: "#TODO"
  secondary: "#TODO"         # Supporting accent color
  on-secondary: "#TODO"
  secondary-container: "#TODO"
  on-secondary-container: "#TODO"
  tertiary: "#TODO"          # Optional third accent (e.g. alerts, highlights)
  on-tertiary: "#TODO"
  surface: "#TODO"           # Page/card backgrounds
  on-surface: "#TODO"        # Body text color
  on-surface-variant: "#TODO" # Subtler text: captions, metadata, placeholders
  outline: "#TODO"           # Borders and dividers
  outline-variant: "#TODO"   # Lighter/secondary borders
  error: "#TODO"             # Error states
  on-error: "#TODO"
  background: "#TODO"        # Global page background
  on-background: "#TODO"     # Default text on the page background

# ─── Typography ──────────────────────────────────────────────────────────────
# Fill in fontFamily, fontSize, fontWeight, lineHeight, letterSpacing.
typography:
  headline-lg:
    fontFamily: TODO          # e.g. "Inter", "Plus Jakarta Sans"
    fontSize: TODO            # e.g. 36px
    fontWeight: "TODO"        # e.g. "700"
    lineHeight: TODO          # e.g. 44px or 1.2
    letterSpacing: TODO       # e.g. -0.02em

  headline-md:
    fontFamily: TODO
    fontSize: TODO
    fontWeight: "TODO"
    lineHeight: TODO

  headline-sm:
    fontFamily: TODO
    fontSize: TODO
    fontWeight: "TODO"
    lineHeight: TODO

  body-lg:
    fontFamily: TODO
    fontSize: TODO
    fontWeight: "TODO"
    lineHeight: TODO

  body-md:
    fontFamily: TODO
    fontSize: TODO
    fontWeight: "TODO"
    lineHeight: TODO

  label-md:
    fontFamily: TODO
    fontSize: TODO
    fontWeight: "TODO"
    lineHeight: TODO
    letterSpacing: TODO

  label-sm:
    fontFamily: TODO
    fontSize: TODO
    fontWeight: "TODO"
    lineHeight: TODO

# ─── Rounded ─────────────────────────────────────────────────────────────────
rounded:
  sm: TODO     # e.g. 4px  — form fields, badges
  md: TODO     # e.g. 8px  — cards, modals
  lg: TODO     # e.g. 12px — buttons
  xl: TODO     # e.g. 16px — hero cards, panels
  full: 9999px # pills / avatars — keep as-is unless you want a different style

# ─── Spacing ─────────────────────────────────────────────────────────────────
spacing:
  xs: TODO      # e.g. 4px
  sm: TODO      # e.g. 8px
  md: TODO      # e.g. 16px
  lg: TODO      # e.g. 32px
  xl: TODO      # e.g. 64px
  gutter: TODO  # Column gutter for the grid, e.g. 24px
  margin: TODO  # Outer page margins, e.g. 32px

# ─── Components ──────────────────────────────────────────────────────────────
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: TODO             # e.g. 12px 24px
    height: TODO              # e.g. 48px

  button-primary-hover:
    backgroundColor: "{colors.primary-container}"
    textColor: "{colors.on-primary-container}"

  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: TODO
    height: TODO

  button-secondary-hover:
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"

  button-ghost:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.lg}"
    padding: TODO

  card-service:                # Cards for the service/feature tiles
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    rounded: "{rounded.xl}"
    padding: TODO

  card-service-hover:
    backgroundColor: "{colors.primary-container}"

  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: TODO
    height: TODO

  badge-status:               # e.g. "Parceiros", "Empresas" tags
    backgroundColor: "{colors.secondary-container}"
    textColor: "{colors.on-secondary-container}"
    typography: "{typography.label-sm}"
    rounded: "{rounded.full}"
    padding: TODO

  nav-link:
    textColor: "{colors.on-background}"
    typography: "{typography.label-md}"

  nav-link-active:
    textColor: "{colors.primary}"
---

# OcupacionalMED — Design System

## Overview

<!-- TODO: Write 2–4 sentences describing the brand personality and the visual
     feeling you want this site to evoke. Think about:
     - Who is the audience? (HR managers, company medical departments, partner
       clinicians, individual workers)
     - What emotion should the UI trigger? (trust, reliability, efficiency,
       modernity, accessibility)
     - Any reference aesthetic? (clinical white & blue, modern SaaS dashboard,
       government portal, warm healthcare, etc.)

     Example to replace:
     OcupacionalMED's visual identity communicates trust, precision, and
     modern professionalism to HR teams and occupational health providers in
     Brazil. The aesthetic is clean and clinical without feeling cold — warm
     neutral backgrounds with a primary brand color that drives action. The UI
     should feel as reliable as a well-run clinic: organized, fast to navigate,
     and free of visual noise.
-->

## Colors

<!-- TODO: Describe the palette in prose. For each color token, explain its
     role and the intent behind it. Use the color names you gave in the YAML.

     Suggested structure:
     - **Primary (#TODO):** [What it represents, where it's used]
     - **Secondary (#TODO):** [Supporting role]
     - **Surface / Background (#TODO):** [Page feel — warm white, cool white, off-white?]
     - **On-Surface (#TODO):** [Body text, icon color]
     - **Error (#TODO):** [How error states look]
-->

## Typography

<!-- TODO: Describe the font strategy. Answer:
     - Which font(s) are you using and why? (Google Fonts recommended for Next.js)
     - What tone do they convey? (geometric = modern/tech, humanist = friendly,
       serif = authoritative)
     - Any special treatments? (all-caps labels, tight letter-spacing on headlines)

     Common choices for healthcare/SaaS: Inter, Plus Jakarta Sans, DM Sans,
     Nunito, Figtree.
-->

## Layout

<!-- TODO: Describe the grid and spacing philosophy. Answer:
     - Mobile-first or desktop-first?
     - Column grid: 12-col for desktop? 4-col for mobile?
     - Max content width (e.g. 1280px, 1440px)?
     - Spacing philosophy: generous whitespace or information-dense?
     - Section vertical rhythm: how much breathing room between page sections?
-->

## Elevation & Depth

<!-- TODO: Describe how visual hierarchy is established. Choose one:
     A) Flat design: hierarchy through color contrast and borders alone, no shadows.
     B) Subtle shadows: soft drop shadows on cards and modals (most common for
        corporate/SaaS — "elevated" cards on a neutral background).
     C) Layered tonal surfaces: Material-style tonal backgrounds to separate layers.
     D) Glassmorphism: frosted-glass cards with backdrop blur (if brand is more
        premium/atmospheric).

     Then describe shadow values if applicable (blur, spread, opacity, color).
-->

## Shapes

<!-- TODO: Describe the corner-radius language across the UI. Answer:
     - Sharp (0–4px)? Modern/clinical feel.
     - Moderately rounded (8–12px)? Common for corporate SaaS.
     - Fully rounded (pill buttons, etc.)? Friendly, consumer-facing.
     - Are there components that should remain fully square (e.g. tables, inputs)?
-->

## Components

<!-- TODO: Describe each component group's style intent. Expand or remove
     sections as appropriate for this site.
-->

### Buttons & CTAs

<!-- TODO: How do primary, secondary, and ghost buttons differ visually?
     What hover/active transitions are used (duration, easing)?
     Example: "Primary buttons use the brand primary color with white text and
     a 150ms ease-out background transition on hover."
-->

### Cards & Service Tiles

<!-- TODO: The home page features service tiles for Parceiros, Empresas, and
     Recursos. Describe how these cards look: bordered or shadow-elevated?
     Icon treatment (filled, outlined, colored)?
-->

### Navigation / Header

<!-- TODO: Describe the nav bar. Sticky or static? Transparent-on-scroll?
     Active link indicator style (underline, dot, color)?
     Mobile: hamburger drawer or bottom bar?
-->

### Forms & Inputs

<!-- TODO: The site has a contact form and a "Acesso ao Sistema" login action.
     Describe input styling: outlined vs. filled variant, label position
     (floating or above), focus-ring color.
-->

### Footer

<!-- TODO: Background color, text hierarchy, link color, any border or divider
     at the top of the footer?
-->

## Do's and Don'ts

<!-- TODO: Add 4–8 guardrails to prevent common design mistakes. Examples:

- Do use `primary` exclusively for the main call-to-action per screen.
- Don't use more than two font weights in a single UI section.
- Do maintain WCAG AA contrast ratio (4.5:1) for all body text.
- Don't mix rounded and sharp corners in the same card component.
- Do keep form labels always visible (avoid placeholder-only labels for accessibility).
- Don't use decorative gradients on text — legibility is non-negotiable in a medical context.
-->
