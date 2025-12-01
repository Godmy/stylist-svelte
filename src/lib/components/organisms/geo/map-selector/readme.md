# MapSelector Component

The MapSelector component provides an interface for selecting locations on an interactive map.

## Features

- Interactive map interface
- Location selection
- Zoom and pan controls
- Marker placement

## Usage

```svelte
<script>
  import { MapSelector } from '$lib/components/molecules/map-selector';
</script>

<MapSelector 
  onselectionchange={handleSelection}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| class | string | '' | Additional CSS classes |
| onselectionchange | function | undefined | Selection change event handler |

## Accessibility

This component follows accessibility best practices:
- Keyboard navigation for map controls
- Screen reader support for location information
- Proper ARIA attributes for interactive elements