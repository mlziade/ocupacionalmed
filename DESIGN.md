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
# Current site uses Arial at 13px base. Scales below are derived from the
# existing size usage (13px body, 14px intro, 15px section headers).
# TODO: Replace "Arial" with a Google Font (e.g. Inter, Plus Jakarta Sans)
# once the new font is decided.
typography:
  headline-lg:
    fontFamily: Arial
    fontSize: 24px
    fontWeight: "700"
    lineHeight: 1.2
    letterSpacing: -0.01em

  headline-md:
    fontFamily: Arial
    fontSize: 18px
    fontWeight: "700"
    lineHeight: 1.3

  headline-sm:
    fontFamily: Arial           # Maps to existing 15px bold section headers
    fontSize: 15px
    fontWeight: "700"
    lineHeight: 1.3

  body-lg:
    fontFamily: Arial           # Maps to existing 14px intro/description text
    fontSize: 14px
    fontWeight: "400"
    lineHeight: 1.5

  body-md:
    fontFamily: Arial           # Base body size across the current site
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 1.5

  label-md:
    fontFamily: Arial
    fontSize: 13px
    fontWeight: "700"
    lineHeight: 1
    letterSpacing: 0em

  label-sm:
    fontFamily: Arial
    fontSize: 12px
    fontWeight: "400"
    lineHeight: 1

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

The palette is rooted in the brand's long-established green identity, conveying health, safety, and reliability.

- **Primary (#006600):** The core brand dark green. Used for section header bars, key labels, button text, and any primary call-to-action. High contrast against white ensures readability.
- **Secondary (#4A864A):** A mid-tone green for supporting UI surfaces such as card headers and active nav indicators — slightly softer than the primary to create tonal depth.
- **Primary Container (#D0EFBC):** A light, muted green for form row backgrounds, hover fills, and subtle tinted surfaces that need a green connection without heavy contrast.
- **Surface / Background (#F0FCF0 / #ffffff):** White card surfaces on a very light green page background. Keeps the UI feeling fresh and clinical without being sterile.
- **Tertiary (#CC0000):** A restrained red accent, used exclusively for the brand wordmark in the footer and critical error highlights. Never use for decorative purposes.
- **On-Surface (#1a1a1a):** Near-black for all body text — softened from pure black to reduce harshness on white backgrounds.
- **On-Surface Variant (#4A864A):** Medium green for secondary text such as captions, metadata, and placeholder labels.
- **Outline (#000000 / #EAEAEA):** Strong black for the main layout border; light gray for inner card dividers.

## Typography

The current site uses a single font stack: **Arial** at a 13px base, scaling to 14px for introductory text and 15px bold for section headers. The hierarchy is minimal — weight (regular vs. bold) is the primary differentiator.

- **Headlines:** Bold weight at 15–24px, used for section identifiers like "Parceiros", "Empresas", and "Recursos do Sistema".
- **Body:** Regular weight at 13–14px with 1.5 line height for list items and descriptive paragraphs.
- **Labels:** Bold 13px for form field labels and navigation links.

> **TODO — Font upgrade:** For the new Next.js site, replace Arial with a Google Font. Recommended options that preserve the professional/clinical tone:
> - **Inter** — geometric, highly legible, excellent for data-heavy interfaces.
> - **Plus Jakarta Sans** — humanist, slightly warmer, good for a more approachable healthcare feel.
> - **DM Sans** — clean and modern with a neutral character.
> Once chosen, update all `fontFamily` values in the YAML above and adjust `fontSize` / `lineHeight` to match the new type scale.

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
