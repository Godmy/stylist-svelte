<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import WishlistButton from './index.svelte';
</script>

<Story id="molecules-wishlist-button" title="Molecules / Commerce / Products / Wishlist Button" component={WishlistButton} category="Molecules/Commerce/Products">
  {#snippet children()}<div class="p-6"><WishlistButton /></div>{/snippet}
</Story>
