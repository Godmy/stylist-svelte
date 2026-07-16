<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import WishlistButton from './index.svelte';

	let toggles = $state(0);

	const controls: InterfaceControllerSettings[] = [
		{ name: 'inWishlist', type: 'boolean', defaultValue: false },
		{ name: 'showLabel', type: 'boolean', defaultValue: true },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story
	id="molecules-wishlist-button"
	title="Molecules / Commerce / Products / Wishlist Button"
	component={WishlistButton}
	category="Molecules/Commerce/Products"
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<WishlistButton
				inWishlist={values.inWishlist}
				showLabel={values.showLabel}
				disabled={values.disabled}
				onToggle={() => (toggles += 1)}
			/>
			<p class="_c2">SlotToggle count: {toggles}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
