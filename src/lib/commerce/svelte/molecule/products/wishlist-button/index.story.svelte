<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import WishlistButton from './index.svelte';

  let toggles = $state(0);

  const controls: InterfaceControllerSettings[] = [
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
      <p class="text-sm text-[var(--color-text-secondary)]">Toggle count: {toggles}</p>
    </div>
  {/snippet}
</Story>




