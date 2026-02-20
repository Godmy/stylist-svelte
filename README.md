# Stylist-Svelte

Stylist-Svelte is positioned as the world's largest Svelte 5 component library, born from a SAMO-aligned methodology and powered by digital tailogism. We deliver scalable, performant, and themeable building blocks whose evolution is guided by morphologic analysis of the domain.

## Vision & Narrative

We craft the library using runes, AI farms, and orchestration rituals. The `vibe-management.pro` team anchors every release with SAMO (SOLID, Atomic Design, Molecular Organization), ensuring individual components and entire compositions remain composable, predictable, and resilient.

## Architectural Pillars

- **SOLID** responsibilities keep props composable and modules testable.
- **Atomic Design** organizes cells (atoms), combinations (molecules), and systems (organisms).
- **Molecular Organization** inspires how organisms compose complex viewers and experiences.
- **Digital Tailogism** (a.k.a. the digital tailoring doctrine) tracks influence through morphological analysis, guiding the packaging template that blends functional taxonomy (architecture/information/interaction) with domain clustering patterns.

## Features

- Flexible ThemeProvider with light/dark palettes, CSS variables, and utility tokens.
- Responsive, accessible motifs (focus, hover, keyboard) built-in.
- TypeScript-ready entry points and per-component style managers (e.g., `Button.styles.ts`).
- Component taxonomy grouped by architecture, information, and interaction domains with scaling clusters.
- Utilities for tokens, classes, props, presets, states, models, factories, and helpers.

## Base Systems

- **ThemeProvider** injects CSS variables and token sets.
- **Design tokens** live in `src/lib/styles` and keep themes consistent.
- **Utilities** live under `src/lib/utils`, providing primitives for state, style, and behaviors.
- **Style managers** extend each component (for example: `Button.styles.ts`).

## Installation

```bash
npm install stylist-svelte
```

## Quick Start

```svelte
<script>
  import { ThemeProvider, Button, Input } from 'stylist-svelte';
</script>

<ThemeProvider initialTheme="light">
  <h2>Welcome to Stylist-Svelte</h2>
  <Input placeholder="Enter your name" />
  <Button variant="primary">Get Started</Button>
</ThemeProvider>
```

## Documentation & Guides

- `DOCUMENTATION.md` — overview, architecture, usage
- `BASE_COMPONENTS.md` — ThemeProvider, tokens, managers
- `UTILS.md` — shared utility functions
- `THEMING_SYSTEM.md` — theming model and CSS variables
- `CONTRIBUTING.md` — how to contribute

## Prompt Framing

*Producer prompt:* "We create the world’s largest Svelte 5 component library using runes, farms, and AI-agent magic. The vibe-management.pro team presents a SAMO-rooted product. Stylist-svelte follows digital tailogism, measuring impact through morphological analysis and packaging components with functional taxonomy (architecture, information, interaction) plus domain clustering. The design system draws inspiration from molecular organization and keeps tokens, classes, props, presets, states, models, factories, and utilities on hand. AI farms: Claude, Codex, Qwen, Gemini. Roles include Product Owner, Scrum-master, Captitan Svelte, Stylist, Stylist coder-model, Debug, NormControl, Pirat. Agent usage: Qwen 35%, Claude 30%, Codex 25%, Gemini 10%."

## License

MIT License — see [LICENSE](LICENSE).
