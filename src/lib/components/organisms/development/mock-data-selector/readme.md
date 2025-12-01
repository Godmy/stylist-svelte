# MockDataSelector Component

The MockDataSelector component allows users to select from predefined mock data sets for testing and development purposes.

## Features

- Dropdown selection of mock data options
- Customizable option list
- Event handling for selection changes

## Usage

```svelte
<script>
  import { MockDataSelector } from '$lib/components/molecules/mock-data-selector';
  
  const options = [
    { value: 'users', label: 'User Data' },
    { value: 'products', label: 'Product Data' }
  ];
</script>

<MockDataSelector 
  options={options}
  placeholder="Select mock data..."
  oninput={handleSelection}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | Array | [] | Array of selection options |
| value | string | '' | Current selected value |
| placeholder | string | '' | Placeholder text |
| class | string | '' | Additional CSS classes |
| oninput | function | undefined | Input event handler |
| onchange | function | undefined | Change event handler |

## Accessibility

This component follows accessibility best practices:
- Proper labeling of select element
- Keyboard navigation support
- ARIA attributes for selection status