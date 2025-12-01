<script lang="ts">
  import { ProductSorting } from '.';

  const options = [
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
    { value: 'newest', label: 'Newest First' }
  ];
</script>

<div class="p-4">
  <h1>ProductSorting Story</h1>
  <ProductSorting
    {options}
    value="price-asc"
    className="my-2"
  />
</div>
