<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { RecipeWishlistButton } from '$stylist/product/interface/recipe/wishlist-button';
	import createWishlistButtonState from '$stylist/product/function/state/wishlist-button/index.svelte';

	let props: RecipeWishlistButton = $props();
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
			<div class="wishlist-button__spinner"></div>
		{:else if state.inWishlist}
			<BaseIcon name="check" class="wishlist-button__icon" />
		{:else}
			<BaseIcon name="heart" class="wishlist-button__icon" />
		{/if}
		{#if props.showLabel}<span>{state.inWishlist ? 'In Wishlist' : 'Add to Wishlist'}</span>{/if}
	</button>

	{#if state.showMessage}
		<div class="wishlist-button__toast">
			<BaseIcon name="check-circle" class="wishlist-button__toast-icon" />
			<span class="wishlist-button__toast-text">{state.message}</span>
			<button type="button" onclick={() => state.hideMessage()}>
				<BaseIcon name="x" class="wishlist-button__toast-close" />
			</button>
		</div>
	{/if}
</div>

<style>
	.wishlist-button__button {
		display: inline-flex;
		align-items: center;
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		background-color: var(--color-background-primary);
	}

	.wishlist-button__button--active {
		background-color: var(--color-danger-100);
		color: var(--color-danger-600);
		border-color: var(--color-danger-200);
	}

	.wishlist-button__icon {
		margin-right: 0.5rem;
		height: 1rem;
		width: 1rem;
	}

	.wishlist-button__spinner {
		margin-right: 0.5rem;
		height: 1rem;
		width: 1rem;
		border-radius: 9999px;
		animation: wishlist-button-spin 1s linear infinite;
		border-bottom: 2px solid currentColor;
	}

	.wishlist-button__toast {
		position: fixed;
		right: 1rem;
		bottom: 1rem;
		z-index: var(--z-index-modal);
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.5rem 0.75rem;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}

	.wishlist-button__toast-icon {
		height: 1rem;
		width: 1rem;
		color: var(--color-success-500);
	}

	.wishlist-button__toast-text {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.wishlist-button__toast-close {
		height: 1rem;
		width: 1rem;
	}

	@keyframes wishlist-button-spin {
		to {
			transform: rotate(360deg);
		}
	}
</style>
