<script lang="ts">
  import { ProductFilters } from '../product-filter';
  import type { Filter } from '../product-filter/types';

  const filters: Filter[] = [
    {
      id: 'category',
      name: 'Category',
      type: 'checkbox',
      options: [
        { id: 'electronics', value: 'electronics', label: 'Electronics' },
        { id: 'clothing', value: 'clothing', label: 'Clothing' },
        { id: 'books', value: 'books', label: 'Books' }
      ]
    },
    {
      id: 'price',
      name: 'Price Range',
      type: 'radio',
      options: [
        { id: '0-25', value: '0-25', label: '$0 - $25' },
        { id: '25-50', value: '25-50', label: '$25 - $50' },
        { id: '50+', value: '50+', label: '$50+' }
      ]
    }
  ];
</script>

<div class="p-4">
  <h1>ProductFilters Story</h1>
  <ProductFilters 
    {filters}
    class="my-2"
  />
</div>