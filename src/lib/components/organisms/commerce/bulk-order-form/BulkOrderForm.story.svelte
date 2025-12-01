<script>
  import BulkOrderForm from './BulkOrderForm.svelte';

  // Sample products data
  const sampleProducts = [
    { id: '1', name: 'Product A', price: 29.99, minOrder: 10, available: 100 },
    { id: '2', name: 'Product B', price: 19.99, minOrder: 5, available: 50 },
    { id: '3', name: 'Product C', price: 39.99, minOrder: 20, available: 200 }
  ];
</script>

<svelte:head>
  <title>BulkOrderForm Story</title>
</svelte:head>

<BulkOrderForm
  products={sampleProducts}
  onOrderSubmit={() => console.log('Order submitted')}
/>