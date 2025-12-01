<script lang="ts">
  import BreadcrumbLink from './BreadcrumbLink.svelte';
</script>

<svelte:head>
  <title>BreadcrumbLink Story</title>
</svelte:head>

<div class="p-4">
  <h1 class="text-xl font-bold mb-4">BreadcrumbLink Component</h1>

  <h2 class="text-lg font-semibold mb-2">Default Link</h2>
  <BreadcrumbLink href="/products" class="text-blue-600 hover:underline">
    Products
  </BreadcrumbLink>

  <h2 class="text-lg font-semibold mt-4 mb-2">Current Page Link</h2>
  <BreadcrumbLink current={true}>
    Current Page
  </BreadcrumbLink>

  <h2 class="text-lg font-semibold mt-4 mb-2">With Children Snippet</h2>
  <BreadcrumbLink href="/about">
    About Us
  </BreadcrumbLink>
</div>