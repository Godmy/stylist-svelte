# ADR 0005: Use Yarn Workspaces for Monorepo

**Status:** Accepted
**Date:** 2025-01-03
**Decision Makers:** Development Team

## Context

The project is a single package containing:

- `stylist-svelte` - Component library with integrated playground

We use Yarn for package management and development workflows.

## Decision

We will use **Yarn** as the package manager for the single-package component library.

## Rationale

### Why Yarn Workspaces?

1. **Simplicity**
   - Built into Yarn
   - No additional tools needed
   - Easy configuration

2. **Dependency Management**
   - Shared dependencies hoisted to root
   - Faster installs
   - Disk space savings
   - Consistent versions

3. **Local Development**
   - `workspace:*` protocol for local linking
   - No need for `npm link`
   - Hot reloading works
   - Changes reflected immediately

4. **Build Efficiency**
   - Single `yarn install` for all packages
   - Parallel builds possible
   - Shared build cache

5. **Industry Standard**
   - Widely used
   - Good tooling support
   - Well documented
   - Familiar to developers

## Configuration

### package.json

```json
{
	"name": "stylist-svelte",
	"version": "0.5.0",
	"packageManager": "yarn@4.5.1",
	"scripts": {
		"dev": "vite dev",
		"build": "svelte-package && publint",
		"check": "svelte-check --tsconfig ./tsconfig.json",
		"test": "vitest",
		"lint": "prettier --check . && eslint .",
		"format": "prettier --write ."
	}
}
```

## Project Structure

```
project-root/
├── src/
│   ├── lib/              # Main library code
│   │   ├── components/   # Component implementations
│   │   ├── playground/   # Playground system
│   │   ├── stores/       # Global state
│   │   ├── types/        # Type definitions
│   │   └── utils/        # Utility functions
│   └── routes/           # SvelteKit routes (if needed)
├── docs/                 # Documentation
├── package.json          # Package configuration
├── svelte.config.js      # Svelte compiler config
├── vite.config.ts        # Build configuration
└── tsconfig.json         # TypeScript configuration
```

## Workflows

### Development

```bash
# Install dependencies
yarn install

# Build library
yarn build

# Run development server
yarn dev

# Run tests
yarn test
```

### Adding Dependencies

```bash
# Add dependencies
yarn add package-name

# Add dev dependencies
yarn add -D package-name
```

## Advantages

### ✅ Simple Package Management

Single package approach:

```
node_modules/
├── svelte/
├── typescript/
└── ...
```

### ✅ Straightforward Development

Simplified workflow for a single package:

- No cross-package linking required
- Single build process
- Consistent configuration

### ✅ Fast Installs

Yarn provides efficient dependency resolution:

```bash
yarn install  # Single install for entire package
```

## Consequences

### Positive

- ✅ Simple setup and maintenance
- ✅ Fast installs
- ✅ Consistent tooling (ESLint, TypeScript)
- ✅ Single lock file

### Negative

- ⚠️ Single package may become large
- ⚠️ Different concerns mixed in one package

### Mitigation

- Use clear directory structure
- Document architecture well
- Consider monorepo if project grows significantly

## Scripts Organization

### Scripts (package.json)

```json
{
	"scripts": {
		"dev": "vite dev",
		"build": "svelte-package && publint",
		"preview": "vite preview",
		"package": "svelte-package",
		"prepublishOnly": "npm run build",
		"check": "svelte-check --tsconfig ./tsconfig.json",
		"check:watch": "svelte-check --tsconfig ./tsconfig.json --watch",
		"test": "vitest",
		"test:unit": "vitest run",
		"lint": "prettier --check . && eslint .",
		"format": "prettier --write .",
		"clean": "rm -rf dist .svelte-kit node_modules/.vite"
	}
}
```

## Alternatives Considered

### 1. npm

**Pros:** Default with Node.js, widely used
**Cons:** Less efficient dependency hoisting, slower installs
**Rejected:** Yarn provides better DX

### 2. pnpm

**Pros:** Fastest, most efficient disk usage
**Cons:** Less common, potential compatibility issues
**Rejected:** Team preference for Yarn

### 3. Monorepo with Multiple Packages

**Pros:** Clear separation of concerns
**Cons:** More complex tooling and maintenance
**Rejected:** Single package approach is simpler for current needs

## Migration Path

If needed to switch package managers:

### To pnpm:

```bash
rm -rf node_modules yarn.lock
npm install -g pnpm
pnpm import  # Import from package-lock.json
pnpm install
```

### To npm:

```bash
rm -rf node_modules yarn.lock
npm install
```

## References

- [Yarn Documentation](https://yarnpkg.com/)
- [Package Manager Comparison](https://docs.npmjs.com/)

## Related ADRs

- ADR 0003: Build Playground System
- ADR 0004: Component Architecture
