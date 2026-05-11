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
			<div class="mr-2 h-4 w-4 animate-spin rounded-full border-b-2 border-current"></div>
		{:else if state.inWishlist}
			<BaseIcon name="check" class="mr-2 h-4 w-4" />
		{:else}
			<BaseIcon name="heart" class="mr-2 h-4 w-4" />
		{/if}
		{#if props.showLabel}<span>{state.inWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>{/if}
	</button>

	{#if state.showMessage}
		<div
			class="fixed right-4 bottom-4 z-[var(--z-index-modal)] flex items-center gap-2 rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 shadow-lg"
		>
			<BaseIcon name="check-circle" class="h-4 w-4 text-[var(--color-success-500)]" />
			<span class="text-sm">{state.message}</span>
			<button type="button" onclick={() => state.hideMessage()}>
				<BaseIcon name="x" class="h-4 w-4" />
			</button>
		</div>
	{/if}
</div>
