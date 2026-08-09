---
name: Indigo Code
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c7c4d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#908fa0'
  outline-variant: '#464554'
  surface-tint: '#c0c1ff'
  primary: '#c0c1ff'
  on-primary: '#1000a9'
  primary-container: '#8083ff'
  on-primary-container: '#0d0096'
  inverse-primary: '#494bd6'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#bcc7de'
  on-tertiary: '#263143'
  tertiary-container: '#8691a7'
  on-tertiary-container: '#1f2a3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e1e0ff'
  primary-fixed-dim: '#c0c1ff'
  on-primary-fixed: '#07006c'
  on-primary-fixed-variant: '#2f2ebe'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#d8e3fb'
  tertiary-fixed-dim: '#bcc7de'
  on-tertiary-fixed: '#111c2d'
  on-tertiary-fixed-variant: '#3c475a'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  h1:
    fontFamily: JetBrains Mono
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  code-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 120px
  section-gap-mobile: 64px
  container-max: 1120px
  gutter: 24px
  margin-mobile: 20px
---

## Brand & Style

The design system is centered on a "Sophisticated Tech" aesthetic, tailored for a Junior Software Developer portfolio. It balances professional reliability with creative technical flair. The brand personality is precise, modern, and forward-thinking, aiming to evoke a sense of digital craftsmanship and technical proficiency.

The design style utilizes **Modern Minimalism** infused with **Subtle Glassmorphism**. It prioritizes clarity and functional beauty, using generous whitespace to allow technical projects to breathe. Elements are defined by sharp execution, low-opacity translucent layers, and refined borders that reflect a developer’s attention to detail.

## Colors

The palette is anchored in a deep, nocturnal environment to emphasize the "developer vibe." 

- **Primary (Electric Indigo):** Used for key actions, focus states, and primary brand moments. It represents energy and innovation.
- **Secondary (Soft Mint):** Reserved for success states, code syntax highlighting, and subtle accents that indicate growth or completion.
- **Neutral/Base:** A foundation of Deep Charcoal (#121212) for the canvas, with Slate (#1E293B) used for elevated surfaces and containers.
- **Text:** High-contrast off-white for readability and muted slate for secondary metadata.

## Typography

This design system uses a dual-font strategy to reinforce the developer persona. 

**JetBrains Mono** is utilized for all headings, labels, and technical data. It brings a structured, monospaced rhythm to the hierarchy, signaling a technical background. Headlines should use tighter letter spacing to maintain a modern look.

**Inter** is the workhorse for all body copy, descriptions, and long-form text. Its high x-height and neutral character ensure maximum readability against dark backgrounds. 

For mobile devices, large headlines scale down significantly to prevent awkward word wrapping while maintaining the distinct monospaced character.

## Layout & Spacing

The layout follows a **Fixed Grid** model on desktop, centering content within a 1120px container to ensure readability and focus. 

- **Vertical Rhythm:** Sections are separated by generous gaps (120px) to facilitate a smooth, single-page scrolling experience.
- **Grid:** A 12-column system is used for project showcases, while a 1-column focused layout is preferred for the Hero and About sections.
- **Mobile Adaptation:** On mobile, margins shrink to 20px, and section gaps reduce to 64px. Multi-column project grids collapse into a single-column vertical stack.
- **Transitions:** All section entries should utilize subtle fade-in-up animations to enhance the "smooth" scrolling narrative.

## Elevation & Depth

Depth is achieved through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Surface 1 (Base):** Deep Charcoal (#121212).
- **Surface 2 (Glass Cards):** Slate (#1E293B) at 60% opacity with a 12px backdrop blur.
- **Borders:** Instead of shadows, use 1px solid borders. For active or hovered elements, apply a subtle linear gradient border (Indigo to Transparent) to create a "light leak" effect.
- **Overlays:** Modals or mobile menus should use a 80% opacity blur overlay on the background to maintain context while focusing the user.

## Shapes

The shape language is **Soft** and precise. A 0.25rem (4px) base radius is used for small components like tags and inputs, while 0.5rem (8px) is used for cards and larger containers.

This "Soft" approach keeps the UI feeling modern and approachable without losing the professional, "engineered" edge that comes with sharper corners. Interactive elements like buttons should never be fully rounded (pill), maintaining a consistent rectangular architectural feel.

## Components

- **Buttons:** Primary buttons feature a solid Indigo fill with White text. Secondary buttons use a ghost style with an Indigo border and JetBrains Mono text. All buttons have a subtle "glow" on hover using a low-spread Indigo shadow.
- **Project Cards:** Built with the Glassmorphism spec. They include a 1px Slate border and a subtle scale-up transform (1.02x) on hover.
- **Chips/Tags:** Used for tech stacks (e.g., "React", "Node.js"). These use a JetBrains Mono font, a Slate background, and Soft Mint text for a "terminal" look.
- **Input Fields:** Darker than the base background with a bottom-only Indigo border that animates to full-width on focus.
- **Iconography:** Use minimalist 24px line icons. Stroke weight should be consistent (approx 1.5px) to match the weight of the Inter body text.
- **Navigation:** A sticky top header with a backdrop-blur and a progress bar at the very top indicating scroll depth.