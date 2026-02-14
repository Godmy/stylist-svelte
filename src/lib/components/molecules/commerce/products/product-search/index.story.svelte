<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import ProductSearch from './index.svelte';
</script>

<Story id="molecules-product-search" title="Molecules / Commerce / Products / Product Search" component={ProductSearch} category="Molecules/Commerce/Products">
  {#snippet children()}<div class="p-6"><ProductSearch suggestions={['Wireless Headphones','Bluetooth Speaker','Smart Watch']} /></div>{/snippet}
</Story>
