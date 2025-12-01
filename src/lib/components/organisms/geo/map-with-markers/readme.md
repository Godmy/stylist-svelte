# MapWithMarkers Component

The MapWithMarkers component displays an interactive map with multiple location markers.

## Features

- Interactive map display
- Multiple location markers
- Customizable marker appearance
- Clustering support for many markers

## Usage

```svelte
<script>
  import { MapWithMarkers } from '$lib/components/molecules/map-with-markers';
  
  const markers = [
    { id: '1', lat: 51.5074, lng: -0.1278, title: 'London' },
    { id: '2', lat: 40.7128, lng: -74.0060, title: 'New York' }
  ];
</script>

<MapWithMarkers 
  markers={markers}
  center={{lat: 51.5074, lng: -0.1278}}
  zoom={10}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| markers | Array | [] | Array of marker objects |
| center | Object | {lat: 0, lng: 0} | Map center coordinates |
| zoom | number | 8 | Initial zoom level |
| class | string | '' | Additional CSS classes |

## Accessibility

This component follows accessibility best practices:
- Keyboard navigation for map controls
- Screen reader support for location information
- Proper ARIA attributes for interactive elements