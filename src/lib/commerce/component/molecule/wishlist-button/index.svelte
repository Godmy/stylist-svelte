<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import type { WishlistButtonRecipe } from '$stylist/commerce/interface/recipe/wishlist-button';
	import { createWishlistButtonState } from '$stylist/commerce/function/state/wishlist-button';

	let props: WishlistButtonRecipe = $props();
	const state = createWishlistButtonState(props);
</script>

<div class={state.containerClass}>
	<button
		type="button"
		class={state.buttonClass}
		onclick={() => state.toggleWishlist()}
		disabled={props.disabled || state.isLoading}
		aria-pressed={state.inWishlist}
	>
		{#if state.isLoading}
			<div class="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2"></div>
		{:else if state.inWishlist}
			<BaseIcon name="check" class="h-4 w-4 mr-2" />
		{:else}
			<BaseIcon name="heart" class="h-4 w-4 mr-2" />
		{/if}
		{#if props.showLabel}<span>{state.inWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>{/if}
	</button>

	{#if state.showMessage}
		<div class="fixed bottom-4 right-4 bg-[var(--color-background-primary)] border border-[var(--color-border-primary)] rounded-md shadow-lg px-3 py-2 flex items-center gap-2 z-[var(--z-index-modal)]">
			<BaseIcon name="check-circle" class="h-4 w-4 text-[var(--color-success-500)]" />
			<span class="text-sm">{state.message}</span>
			<button type="button" onclick={() => state.hideMessage()}>
				<BaseIcon name="x" class="h-4 w-4" />
			</button>
		</div>
	{/if}
</div>
