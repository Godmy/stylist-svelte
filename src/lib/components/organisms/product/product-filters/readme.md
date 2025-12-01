# ProductFilters Component

The ProductFilters component provides an interface for filtering products by various criteria like category, price, and features.

## Features

- Multiple filter types (checkbox, range, select)
- Visual filter controls
- Apply and reset functionality
- Responsive design

## Usage

```svelte
<script>
  import { ProductFilters } from '$lib/components/molecules/product-filters';
  
  const filters = [
    { 
      id: 'category', 
      name: 'Category', 
      options: [
        { value: 'electronics', label: 'Electronics' },
        { value: 'clothing', label: 'Clothing' }
      ] 
    }
  ];
</script>

<ProductFilters 
  filters={filters}
  values={currentFilterValues}
  onfilterchange={handleFilterChange}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| filters | Array | [] | Array of filter definitions |
| values | Object | {} | Current filter values |
| class | string | '' | Additional CSS classes |
| onfilterchange | function | undefined | Filter change event handler |

## Accessibility

This component follows accessibility best practices:
- Proper labeling of filter controls
- Keyboard navigation support
- ARIA attributes for filter states