# LoginForm Component

The LoginForm component provides a reusable and accessible login form interface with validation and submission handling.

## Features

- User authentication interface
- Email and password fields
- Form validation
- Loading states
- Accessible design

## Usage

```svelte
<script>
  import { LoginForm } from '$lib/components/molecules/login-form';
</script>

<LoginForm 
  onsubmit={handleLogin}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| class | string | '' | Additional CSS classes |
| onsubmit | function | undefined | Submit event handler |

## Accessibility

This component follows accessibility best practices:
- Proper labeling of form fields
- Keyboard navigation support
- ARIA attributes where appropriate