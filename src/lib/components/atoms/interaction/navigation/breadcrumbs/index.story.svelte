<script>
  import Breadcrumbs from './breadcrumbs/index.svelte';

  // Определение данных для примера
  let crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Smartphones' }
  ];
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">Breadcrumbs Component</h1>
  <div class="border p-4 rounded">
    <Breadcrumbs {crumbs} />
  </div>
</div>
