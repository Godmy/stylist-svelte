# MapMarker Component

The MapMarker component represents a location marker on a map interface with customizable appearance and interactivity.

## Features

- Customizable marker appearance
- Position control
- Interactive functionality
- Support for different marker types

## Usage

```svelte
<script>
  import { MapMarker } from '$lib/components/molecules/map-marker';
</script>

<MapMarker 
  latitude={51.5074}
  longitude={-0.1278}
  title="London"
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| latitude | number | 0 | Marker latitude |
| longitude | number | 0 | Marker longitude |
| title | string | '' | Marker title/tooltip |
| class | string | '' | Additional CSS classes |

## Accessibility

This component follows accessibility best practices:
- Proper labeling of interactive elements
- Keyboard navigation support when integrated with a map component
- ARIA attributes for location information