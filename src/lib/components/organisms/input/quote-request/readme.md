# QuoteRequest Component

The QuoteRequest component provides an interface for customers to request quotes for products or services.

## Features

- Product selection for quote
- Customer information form
- Quote summary display
- Submission handling

## Usage

```svelte
<script>
  import { QuoteRequest } from '$lib/components/molecules/quote-request';
  
  const products = [
    { id: '1', name: 'Product A', price: 100 },
    { id: '2', name: 'Product B', price: 200 }
  ];
</script>

<QuoteRequest 
  products={products}
  customerInfo={customerDetails}
  onsubmit={handleSubmit}
  class="custom-classes"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| products | Array | [] | Array of products to quote |
| customerInfo | Object | {} | Customer information |
| class | string | '' | Additional CSS classes |
| onsubmit | function | undefined | Submit event handler |

## Accessibility

This component follows accessibility best practices:
- Proper labeling of form fields
- Keyboard navigation support
- ARIA attributes for form validation