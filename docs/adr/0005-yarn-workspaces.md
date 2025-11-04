# ADR 0005: Use Yarn Workspaces for Monorepo

**Status:** Accepted
**Date:** 2025-01-03
**Decision Makers:** Development Team

## Context

The project consists of two packages:
- `stylist-svelte` - Component library
- `stylist` - Playground demo application

We need a monorepo tool to manage these packages.

## Decision

We will use **Yarn Workspaces** (Yarn v1) for monorepo management.

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

### Root package.json
```json
{
  "name": "humans-ontology-monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "scripts": {
    "build": "yarn workspaces run build",
    "dev": "yarn workspace stylist dev",
    "lib:build": "yarn workspace stylist-svelte build",
    "lib:dev": "yarn workspace stylist-svelte dev"
  }
}
```

### Package References
```json
// packages/stylist/package.json
{
  "dependencies": {
    "stylist-svelte": "workspace:*"
  }
}
```

## Workspace Structure

```
project-root/
├── packages/
│   ├── stylist-svelte/    # Component library
│   │   ├── src/
│   │   ├── package.json
│   │   └── dist/          # Built output
│   │
│   └── stylist/           # Playground demo
│       ├── src/
│       ├── package.json
│       └── .svelte-kit/
│
├── package.json           # Root workspace config
├── yarn.lock             # Shared lock file
└── node_modules/         # Hoisted dependencies
```

## Workflows

### Development

```bash
# Install all dependencies
yarn install

# Build library
yarn lib:build

# Run playground
yarn dev

# Build everything
yarn build
```

### Adding Dependencies

```bash
# Add to library
yarn workspace stylist-svelte add lodash

# Add to playground
yarn workspace stylist add axios

# Add to root (dev tools)
yarn add -W -D eslint
```

### Local Development Loop

1. Make changes in `stylist-svelte`
2. Run `yarn lib:build`
3. Changes automatically available in `stylist`
4. Test in playground
5. Repeat

## Advantages

### ✅ Shared Dependencies

Only one copy of common dependencies:
```
node_modules/
├── svelte/              # Shared by both
├── tailwindcss/         # Shared by both
├── typescript/          # Shared by both
└── ...
```

### ✅ Local Linking

No need for `npm link`:
```json
{
  "dependencies": {
    "stylist-svelte": "workspace:*"  // Auto-links
  }
}
```

### ✅ Consistent Versions

Yarn ensures compatible versions:
```bash
yarn why svelte  # Shows which packages use what version
```

### ✅ Fast Installs

```bash
# Without workspaces
cd stylist-svelte && npm install  # ~30s
cd ../stylist && npm install       # ~30s
# Total: ~60s

# With workspaces
yarn install  # ~20s (shared deps, single lock file)
```

## Consequences

### Positive

- ✅ Simple setup
- ✅ Fast installs
- ✅ Easy local development
- ✅ Shared tooling (ESLint, TypeScript)
- ✅ Single lock file

### Negative

- ⚠️ Must build library before use
- ⚠️ Circular dependency risks
- ⚠️ Root package.json can get cluttered

### Mitigation

- Document build order clearly
- Use workspace scripts
- Keep root package.json minimal

## Scripts Organization

### Root Scripts (package.json)
```json
{
  "scripts": {
    "dev": "yarn workspace stylist dev",
    "build": "yarn workspaces run build",
    "lib:build": "yarn workspace stylist-svelte build",
    "lib:dev": "yarn workspace stylist-svelte dev",
    "test": "yarn workspaces run test",
    "lint": "yarn workspaces run lint",
    "format": "yarn workspaces run format",
    "clean": "yarn workspaces run clean && rm -rf node_modules"
  }
}
```

### Library Scripts (stylist-svelte/package.json)
```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "svelte-package && publint",
    "check": "svelte-check --tsconfig ./tsconfig.json",
    "test": "vitest run",
    "lint": "prettier --check . && eslint .",
    "format": "prettier --write .",
    "clean": "rm -rf dist .svelte-kit"
  }
}
```

### Playground Scripts (stylist/package.json)
```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-check --tsconfig ./tsconfig.json",
    "clean": "rm -rf .svelte-kit build"
  }
}
```

## Alternatives Considered

### 1. npm Workspaces
**Pros:** Similar to Yarn, no extra tool
**Cons:** Worse DX, slower, less features
**Rejected:** Yarn is better

### 2. pnpm Workspaces
**Pros:** Fastest, most efficient
**Cons:** Less common, potential compatibility issues
**Rejected:** Team preference for Yarn

### 3. Lerna
**Pros:** More features (versioning, publishing)
**Cons:** Overkill, less maintained
**Rejected:** Don't need advanced features

### 4. Nx
**Pros:** Powerful, build caching, monorepo tools
**Cons:** Complex, steep learning curve
**Rejected:** Too complex for 2 packages

### 5. Separate Repositories
**Pros:** Complete isolation
**Cons:** Hard to develop together, version sync issues
**Rejected:** Need tight coupling for playground

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

- [Yarn Workspaces Documentation](https://classic.yarnpkg.com/en/docs/workspaces/)
- [Monorepo Tools Comparison](https://monorepo.tools/)

## Related ADRs

- ADR 0003: Build Playground System
- ADR 0004: Component Architecture
