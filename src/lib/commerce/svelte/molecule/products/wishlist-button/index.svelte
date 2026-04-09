<script lang="ts">
  import { Icon as BaseIcon } from '$stylist';
  import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
const Heart = 'heart';
const Check = 'check';
const X = 'x';
const CheckCircle = 'check-circle';

  import type { WishlistButtonRecipe } from '$stylist/commerce/interface/recipe/wishlist-button';
  import { WishlistButtonStyleManager } from '$stylist/commerce/class/style-manager/wishlist-button';

  let {
    inWishlist = false,
    class: className = '',
    buttonClass = '',
    showLabel = true,
    disabled = false,
    onToggle,
    onSuccess,
    onError,
    ...restProps
  }: WishlistButtonRecipe = $props();

  let isLoading = $state(false);
  let showMessage = $state(false);
  let message = $state('');

  async function toggleWishlist() {
    if (disabled || isLoading) return;
    isLoading = true;
    try {
      onToggle?.(!inWishlist);
      await new Promise((resolve) => setTimeout(resolve, 250));
      inWishlist = !inWishlist;
      onSuccess?.();
      message = inWishlist ? 'Added to wishlist' : 'Removed from wishlist';
    } catch (error) {
      onError?.(error instanceof Error ? error : new Error(String(error)));
      message = 'Failed to update wishlist';
    } finally {
      isLoading = false;
      showMessage = true;
      setTimeout(() => (showMessage = false), 1500);
    }
  }
</script>

<div class={mergeClassNames(className)}>
  <button
    type="button"
    class={`inline-flex items-center px-3 py-2 border rounded-md ${inWishlist ? 'bg-[var(--color-danger-100)] text-[var(--color-danger-600)] border-[var(--color-danger-200)]' : 'bg-[var(--color-background-primary)] border-[var(--color-border-primary)]'} ${buttonClass}`}
    onclick={toggleWishlist}
    disabled={disabled || isLoading}
    aria-pressed={inWishlist}
  >
    {#if isLoading}
      <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
    {:else if inWishlist}
      <BaseIcon name={Check} class="h-4 w-4 mr-2" />
    {:else}
      <BaseIcon name={Heart} class="h-4 w-4 mr-2" />
    {/if}
    {#if showLabel}<span>{inWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>{/if}
  </button>

  {#if showMessage}
    <div class="fixed bottom-4 right-4 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md shadow-lg px-3 py-2 flex items-center gap-2 z-[var(--z-index-modal)]">
      <BaseIcon name={CheckCircle} class="h-4 w-4 text-[var(--color-success-500)]" />
      <span class="text-sm">{message}</span>
      <button type="button" onclick={() => (showMessage = false)}><BaseIcon name={X} class="h-4 w-4" /></button>
    </div>
  {/if}
</div>







