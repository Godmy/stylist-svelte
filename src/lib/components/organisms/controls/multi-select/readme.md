# MultiSelect Component

The MultiSelect component allows users to select multiple options from a dropdown list with visual feedback through badges.

## Features

- Multiple selection capability
- Visual badge representation of selections
- Searchable options
- Keyboard navigation support

## Usage

```svelte
<script>
  import { MultiSelect } from '$lib/components/molecules/multi-select';
  
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ];
</script>

<MultiSelect 
  options={options}
  selected={selectedValues}
  onselect={handleSelection}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | Array | [] | Array of selection options |
| selected | Array | [] | Currently selected values |
| class | string | '' | Additional CSS classes |
| onselect | function | undefined | Selection event handler |

## Accessibility

This component follows accessibility best practices:
- Keyboard navigation for options
- Proper ARIA attributes for selection state
- Screen reader support for selected items