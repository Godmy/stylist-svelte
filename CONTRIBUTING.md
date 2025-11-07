# Contributing to stylist-svelte

Thank you for your interest in contributing to stylist-svelte! We appreciate your time and effort in helping improve this library.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Component Guidelines](#component-guidelines)
- [Documentation](#documentation)
- [Testing](#testing)
- [Pull Request Process](#pull-request-process)
- [Style Guide](#style-guide)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [maintainers@email.com].

## How Can I Contribute?

### Reporting Bugs
- Check the [Issues](https://github.com/Godmy/stylist-svelte/issues) to see if the bug has already been reported
- If not, create a new issue providing:
  - Clear title and description
  - Steps to reproduce the issue
  - Expected and actual behavior
  - Environment details (Svelte version, browser, etc.)

### Suggesting Features
- Check the [Issues](https://github.com/Godmy/stylist-svelte/issues) to see if the feature has already been suggested
- If not, create a new issue describing:
  - The feature you'd like to see
  - The problem it would solve
  - Potential implementation approaches

### Adding Components
- Follow Atomic Design principles (Atoms, Molecules, Organisms)
- Ensure proper TypeScript typing
- Include accessibility attributes
- Write component stories for the Playground
- Add proper documentation

### Improving Documentation
- Fix typos and grammatical errors
- Add missing documentation
- Improve existing explanations
- Add usage examples

### Submitting Code Changes
- Fix bugs
- Add new features
- Improve performance
- Refactor existing code

## Development Setup

### Prerequisites
- Node.js 18+
- yarn package manager

### Setting Up the Project

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/stylist-svelte.git
   cd stylist-svelte
   ```
3. Install dependencies:
   ```bash
   yarn install
   ```
4. Start the development server:
   ```bash
   yarn dev
   ```
5. Run the Playground to test your changes

### Available Scripts

- `yarn dev` - Start development server with Playground
- `yarn build` - Build the library
- `yarn check` - Type check the project
- `yarn lint` - Check code with ESLint
- `yarn format` - Format code with Prettier
- `yarn test` - Run tests
- `yarn clean` - Remove build artifacts

## Component Guidelines

### Structure
Components are organized according to Atomic Design principles:

- **Atoms** - Basic building blocks (buttons, inputs, labels)
- **Molecules** - Composite components (forms, cards)
- **Organisms** - Complex components (sections, layouts)

### Creating Components

1. Place components in the appropriate directory:
   ```bash
   src/lib/components/atoms/    # Basic building blocks
   src/lib/components/molecules/ # Composite components  
   src/lib/components/organisms/ # Complex structures
   ```

2. Use proper TypeScript typing:
   ```svelte
   <script lang="ts">
     type Props = {
       label: string;
       disabled?: boolean;
       onClick?: () => void;
     };
     
     let { label, disabled = false, onClick }: Props = $props();
   </script>
   ```

3. Include accessibility attributes:
   - Proper ARIA labels and roles
   - Keyboard navigation support
   - Semantic HTML elements

4. Follow Svelte 5 runes syntax:
   - `$state()` for reactive state
   - `$derived()` for computed values
   - `$props()` for component props
   - `$bindable()` for two-way binding

### Component Stories

Create stories for new components to be used in the Playground:

1. Create a `ComponentName.story.svelte` file in the same directory as the component
2. Use the Story component with appropriate controls
3. Demonstrate all component features and variants

```svelte
<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import MyComponent from './MyComponent.svelte';

  type MyComponentStoryProps = {
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    label: string;
  };

  const variantOptions = ['primary', 'secondary'];
  const sizeOptions = ['sm', 'md', 'lg'];

  const controls: ControlConfig[] = [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'primary',
      options: variantOptions
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: sizeOptions
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'My Component'
    }
  ];
</script>

<Story
  id="my-component"
  title="MyComponent"
  component={MyComponent}
  category="Atoms"
  description="Description of what this component does."
  tags={['ui', 'button', 'interactive']}
  controls={controls}
>
  {#snippet children(props: MyComponentStoryProps)}
    <MyComponent
      variant={props.variant}
      size={props.size}
      label={props.label}
    />
  {/snippet}
</Story>
```

## Documentation

### JSDoc Comments

Add JSDoc-style comments to components and functions:

```svelte
<script lang="ts">
  /**
   * MyComponent - A component that does something
   * 
   * @param variant - Visual style of the component ('primary' | 'secondary')
   * @param size - Size of the component ('sm' | 'md' | 'lg')
   * @param label - Text label for the component
   * @param onClick - Callback for click events
   * @returns A styled component element
   */
  type Props = {
    variant: 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    label: string;
    onClick?: () => void;
  };
  
  let { variant, size, label, onClick }: Props = $props();
</script>
```

### Readme Updates

When adding significant features, update the README with:
- New functionality description
- Usage examples
- API documentation

## Testing

### Writing Tests

1. Create test files alongside components: `ComponentName.test.ts`
2. Use Vitest and @testing-library/svelte for testing
3. Test component functionality, not implementation details
4. Include accessibility tests where applicable

### Running Tests

```bash
# Run all tests
yarn test

# Run tests in watch mode
yarn test:watch

# Run tests with coverage
yarn test:coverage
```

## Pull Request Process

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Make your changes following the style guide
3. Add tests if applicable
4. Run `yarn check` and `yarn test` to ensure everything works
5. Run `yarn lint` and `yarn format` to ensure code quality
6. Commit your changes with a clear message:
   ```
   feat: add amazing new component
   
   - Include detailed description of changes
   - Add any relevant information
   ```
7. Push to your branch (`git push origin feature/amazing-feature`)
8. Open a Pull Request with:
   - Clear title and description
   - References to relevant issues if applicable
   - Screenshots if UI changes are involved

### Before Submitting

- Ensure all tests pass
- Run type checking without errors
- Format code with Prettier
- Make sure the Playground works with your changes
- Add or update documentation as needed
- Follow the style guide

## Style Guide

### Code Style
- Use TypeScript for type safety
- Follow Svelte 5 runes syntax conventions
- Use 2-space indentation
- Use camelCase for variables and functions
- Use PascalCase for components
- Add JSDoc comments for exported functions and components

### Git Commit Messages
- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests after the first line

### File Naming
- Component files: `ComponentName.svelte`
- Story files: `ComponentName.story.svelte`
- Test files: `ComponentName.test.ts`
- Utility files: `utilityName.ts`
- Style files: `styles.css` or `styles.module.css`

### Component Structure
- Place script tag first in Svelte components
- Follow with style tag if needed
- End with markup
- Keep components focused on a single responsibility

We appreciate your contributions and look forward to working with you!