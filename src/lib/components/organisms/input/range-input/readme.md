# RangeInput Component

The RangeInput component provides a slider interface for selecting a value within a range.

## Features

- Interactive slider control
- Configurable min/max values
- Step increment support
- Visual feedback during interaction

## Usage

```svelte
<script>
  import { RangeInput } from '$lib/components/molecules/range-input';
</script>

<RangeInput 
  min={0}
  max={100}
  value={50}
  step={1}
  oninput={handleInput}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| min | number | 0 | Minimum value |
| max | number | 100 | Maximum value |
| value | number | 0 | Current value |
| step | number | 1 | Step increment |
| disabled | boolean | false | Disable the input |
| class | string | '' | Additional CSS classes |
| oninput | function | undefined | Input event handler |
| onchange | function | undefined | Change event handler |

## Accessibility

This component follows accessibility best practices:
- Keyboard support for value adjustment
- Proper ARIA attributes for range information
- Screen reader support for current value