# Stylist-Svelte

The world's largest Svelte component library, built with scalability, performance, and themability in mind. Follows SAMO (SOLID, Atomic Design, Molecular Organization) for consistent architecture.

## Features

- Large component library: atoms, molecules, organisms, playground helpers
- Theming out of the box: light/dark palettes via CSS variables
- Mobile-first responsive design
- Accessibility-first patterns for focus, hover, and keyboard use
- TypeScript-ready entrypoints
- Works with Svelte 5 + Vite

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

## Documentation

- `DOCUMENTATION.md` — overview, architecture, usage
- `BASE_COMPONENTS.md` — base layer: ThemeProvider, CSS tokens, style managers
- `UTILS.md` — utility functions
- `THEMING_SYSTEM.md` — theming model and CSS variables

## Architecture

Stylist-Svelte follows SAMO:

- **SOLID**: components are built with composable props and clear responsibilities
- **Atomic Design**: atoms → molecules → organisms structure
- **Molecular Organization**: complex components composed from simpler pieces

## Base Layer

The library is built on a lightweight foundation:

- **ThemeProvider**: applies light/dark design tokens via CSS variables
- **Style managers**: per-component helpers (e.g., `Button.styles.ts`)
- **Design tokens**: centralized in `src/lib/styles`
- **Utilities**: shared helpers in `src/lib/utils`

## Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT License — see [LICENSE](LICENSE).
