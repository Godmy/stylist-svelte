# ResourceOptimizer Component

The ResourceOptimizer component displays resource usage statistics and optimization recommendations for system resources.

## Features

- Visual representation of resource usage
- Optimization recommendations
- Resource type categorization
- Visual indicators for usage levels

## Usage

```svelte
<script>
  import { ResourceOptimizer } from '$lib/components/molecules/resource-optimizer';
  
  const resources = [
    { id: 'cpu', name: 'CPU', usage: 75, limit: 100 },
    { id: 'memory', name: 'Memory', usage: 45, limit: 100 },
    { id: 'disk', name: 'Disk', usage: 90, limit: 100 }
  ];
</script>

<ResourceOptimizer 
  resources={resources}
  onoptimization={handleOptimization}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| resources | Array | [] | Array of resource objects |
| class | string | '' | Additional CSS classes |
| onoptimization | function | undefined | Optimization event handler |

## Accessibility

This component follows accessibility best practices:
- Color-agnostic indicators for usage levels
- Proper labeling of resource information
- Screen reader support for usage statistics