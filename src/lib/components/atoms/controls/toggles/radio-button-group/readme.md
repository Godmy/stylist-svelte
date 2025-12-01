# RadioButtonGroup Component

The RadioButtonGroup component provides a set of mutually exclusive options using radio buttons.

## Features

- Grouped radio button selection
- Visual feedback for selected option
- Keyboard navigation support
- Accessible labeling

## Usage

```svelte
<script>
  import { RadioButtonGroup } from '$lib/components/molecules/radio-button-group';
  
  const options = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' }
  ];
</script>

<RadioButtonGroup 
  options={options}
  value={selectedValue}
  oninput={handleSelection}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | Array | [] | Array of radio options |
| value | string | '' | Current selected value |
| class | string | '' | Additional CSS classes |
| oninput | function | undefined | Input event handler |

## Accessibility

This component follows accessibility best practices:
- Proper grouping of radio buttons
- Keyboard navigation support
- ARIA attributes for selection state