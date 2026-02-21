<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import WishlistButton from './index.svelte';

  let toggles = $state(0);

  const controls: ControlConfig[] = [
    { name: 'inWishlist', type: 'boolean', defaultValue: false },
    { name: 'showLabel', type: 'boolean', defaultValue: true },
    { name: 'disabled', type: 'boolean', defaultValue: false }
  ];
</script>

<Story id="molecules-wishlist-button" title="Molecules / Commerce / Products / Wishlist Button" component={WishlistButton} category="Molecules/Commerce/Products" {controls}>
  {#snippet children(values: any)}
    <div class="p-6 space-y-3">
      <WishlistButton
        inWishlist={values.inWishlist}
        showLabel={values.showLabel}
        disabled={values.disabled}
        onToggle={() => (toggles += 1)}
      />
      <p class="text-sm text-gray-600">Toggle count: {toggles}</p>
    </div>
  {/snippet}
</Story>
