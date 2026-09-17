<script lang="ts">
	import type { TourAddon } from '$stylist/travel-commerce/type/object/tour-addon';
	import CartUpsellCard from '$stylist/travel-commerce/component/molecule/cart-upsell-card/index.svelte';

	type Props = {
		addons: TourAddon[];
		title?: string;
		onToggle?: (id: string, selected: boolean) => void;
	};

	let { addons, title = 'Add-ons', onToggle }: Props = $props();
</script>

<section class="tc-tour-addon-picker">
	<h2>{title}</h2>
	<div>
		{#each addons as addon (addon.id)}
			<CartUpsellCard {addon} onToggle={onToggle} />
		{/each}
	</div>
</section>

<style>
	.tc-tour-addon-picker {
		display: grid;
		gap: 1rem;
	}
	.tc-tour-addon-picker h2 {
		margin: 0;
		color: #17231f;
		font-size: 1.6rem;
		line-height: 1.08;
	}
	.tc-tour-addon-picker > div {
		display: grid;
		gap: 0.75rem;
	}
</style>
