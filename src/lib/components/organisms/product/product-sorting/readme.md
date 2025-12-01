# ProductSorting Component

The ProductSorting component allows users to sort products by different criteria like price, popularity, or rating.

## Features

- Sort options dropdown
- Current sort indicator
- Event handling for sort changes

## Usage

```svelte
<script>
  import { ProductSorting } from '$lib/components/molecules/product-sorting';
  
  const sortOptions = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' }
  ];
</script>

<ProductSorting 
  options={sortOptions}
  value="price-asc"
  oninput={handleSortChange}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| options | Array | [] | Array of sort options |
| value | string | '' | Current sort value |
| class | string | '' | Additional CSS classes |
| oninput | function | undefined | Input event handler |
| onchange | function | undefined | Change event handler |

## Accessibility

This component follows accessibility best practices:
- Proper labeling of sort options
- Keyboard navigation support
- ARIA attributes for current selection