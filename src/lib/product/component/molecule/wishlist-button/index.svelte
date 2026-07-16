<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipeWishlistButton } from '$stylist/product/interface/recipe/wishlist-button';
	import createWishlistButtonState from '$stylist/product/function/state/wishlist-button/index.svelte';

	let props: RecipeWishlistButton = $props();
	const state = createWishlistButtonState(props);
</script>

<div class="wishlist-button__TODO-containerClass">
	<button
		type="button"
		class="wishlist-button__TODO-buttonClass"
		onclick={() => state.toggleWishlist()}
		disabled={props.disabled || state.isLoading}
		aria-pressed={state.inWishlist}
	>
		{#if state.isLoading}
			<div class="wb-spinner _c1"></div>
		{:else if state.inWishlist}
			<BaseIcon name="check" class="_c2" />
		{:else}
			<BaseIcon name="heart" class="_c2" />
		{/if}
		{#if props.showLabel}<span>{state.inWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>{/if}
	</button>

	{#if state.showMessage}
		<div class="_c3 z-[var(--z-index-modal)]">
			<BaseIcon name="check-circle" class="_c4" />
			<span class="_c5">{state.message}</span>
			<button type="button" onclick={() => state.hideMessage()}>
				<BaseIcon name="x" class="_c6" />
			</button>
		</div>
	{/if}
</div>

<style>
	._c1 {
		margin-right: 0.5rem;
		height: 1rem;
		width: 1rem;
		border-radius: 9999px;
	}
	._c2 {
		margin-right: 0.5rem;
		height: 1rem;
		width: 1rem;
	}
	._c3 {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.375rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	._c4 {
		height: 1rem;
		width: 1rem;
		color: var(--color-success-500);
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c6 {
		height: 1rem;
		width: 1rem;
	}

	.wb-spinner {
		animation: spin 1s linear infinite;
		border-bottom: 2px solid currentColor;
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
