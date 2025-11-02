# stylist-svelte

A reusable Svelte component library built for rapid prototyping and shared design systems. It ships with Svelte 5 support, atomic architecture, and an interactive Histoire sandbox.

## Features

- **Svelte 5**: Built with the latest Svelte features including runes
- **TypeScript Support**: Full type safety
- **Histoire Documentation**: Interactive component playground
- **Atomic Design Architecture**: Components grouped as atoms, molecules, and organisms
- **Accessibility**: Built with a11y best practices
- **Responsive**: Mobile-first responsive design

## Installation

```bash
npm install stylist-svelte
# or
yarn add stylist-svelte
# or
pnpm add stylist-svelte
```

## Usage

### Import Components

```svelte
<script>
  import { Button, Input } from 'stylist-svelte';
</script>

<Button variant="primary" size="md">Click me</Button>

<Input 
  id="name-input" 
  label="Name" 
  placeholder="Enter your name" 
/>
```

### Import Utilities

```ts
import { debounce, copyToClipboard } from 'stylist-svelte/utils';

// Use the utilities
const debouncedFn = debounce(myFunction, 300);
copyToClipboard('text to copy');
```

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, or pnpm

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```
3. Start the Histoire development server:
   ```bash
   yarn dev
   ```

### Available Scripts

- `yarn dev` - Start Histoire development server
- `yarn build` - Build the component library
- `yarn preview` - Preview the built documentation
- `yarn check` - Run Svelte type checking
- `yarn lint` - Lint code
- `yarn format` - Format code with Prettier
- `yarn test` - Run tests
- `yarn test:run` - Run tests without watch mode
- `yarn coverage` - Generate test coverage

### Project Structure

```
stylist-svelte/
├── package.json                    # Project metadata and scripts
├── svelte.config.js                # Svelte compiler configuration
├── histoire.config.ts              # Histoire sandbox configuration
├── tsconfig.json                   # TypeScript configuration
├── vite.config.ts                  # Vite (and Vitest) configuration
├── LICENSE                         # Project license (GNU GPL v3)
├── README.md                       # Project documentation (this file)
├── src/                            # Source code
│   ├── assets/                     # Shared assets (logos, etc.)
│   ├── components/                 # UI components organised by atomic design
│   ├── histoire.setup.ts           # Global setup for Histoire
│   ├── index.ts                    # Entry point exporting the public API
│   └── utils/                      # Reusable utilities
├── stories/                        # Histoire stories for components
└── docs/                           # Supplemental documentation
    ├── scrum/                      # SCRUM process documentation
    │   ├── README.md               # Overview of SCRUM documentation
    │   ├── template.md             # Task template for backlog
    │   ├── SCRUM_GUIDE.md          # Main SCRUM process guide
    │   ├── kanban/                 # Kanban workflow documentation
    │   │   └── WORKFLOW.md         # Workflow states and processes
    │   └── backlog/                # Backlog tasks documentation
    └── team/                       # Team structure documentation
        ├── README.md               # Overview of team structure
        ├── frontend/               # Frontend team roles
        │   ├── capitan.md          # Frontend Lead (Capitan Svelte)
        │   ├── stylist.md          # Design system specialist (Stylist)
        │   └── pirat.md            # Backlog task creator (Pirat)
        └── management/             # Management and architecture roles
            ├── master.md           # Scrum Master (Master)
            └── constructor.md      # FSD and Atomic Design architect (Constructor)
```

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add stories for new components in the `stories/` directory
5. Update documentation as needed
6. Submit a pull request

### Creating New Components

When adding new components following atomic design principles:

1. Place in the appropriate directory (atoms/molecules/organisms)
2. Create a corresponding story in the `stories/` directory
3. Export from the relevant `index.ts` file
4. Add proper TypeScript types
5. Follow the existing code style

## Publishing

To publish a new version:

1. Update the version in `package.json` following semantic versioning
2. Run tests: `yarn test`
3. Build the library: `yarn build`
4. Publish to npm: `yarn publish`

For pre-releases:
```bash
yarn version prerelease --preid=beta
yarn publish --tag beta
```

## License

GNU GENERAL PUBLIC LICENSE, Version 3 (GPL-3.0). See [LICENSE](./LICENSE) for more information.

## Support

For support, please open an issue in the repository.
