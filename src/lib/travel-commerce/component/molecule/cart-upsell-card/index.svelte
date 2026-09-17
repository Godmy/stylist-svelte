<script lang="ts">
	import type { TourAddon } from '$stylist/travel-commerce/type/object/tour-addon';

	type Props = {
		addon: TourAddon;
		selected?: boolean;
		onToggle?: (id: string, selected: boolean) => void;
	};

	let { addon, selected = addon.selected ?? false, onToggle }: Props = $props();
</script>

<article class="tc-cart-upsell-card" data-selected={selected || undefined}>
	<div>
		<h3>{addon.label}</h3>
		<p>{addon.description}</p>
	</div>
	<strong>{addon.price}</strong>
	<button
		type="button"
		aria-pressed={selected}
		onclick={() => {
			selected = !selected;
			onToggle?.(addon.id, selected);
		}}
	>
		{selected ? 'Added' : 'Add'}
	</button>
</article>

<style>
	.tc-cart-upsell-card {
		display: grid;
		grid-template-columns: 1fr auto auto;
		gap: 1rem;
		align-items: center;
		padding: 1rem;
		border: 1px solid rgba(23, 35, 31, 0.12);
		border-radius: 8px;
		background: #fff;
	}
	.tc-cart-upsell-card[data-selected] {
		border-color: rgba(43, 124, 93, 0.48);
		background: rgba(43, 124, 93, 0.06);
	}
	.tc-cart-upsell-card h3,
	.tc-cart-upsell-card p {
		margin: 0;
	}
	.tc-cart-upsell-card h3 {
		font-size: 1rem;
		color: #17231f;
	}
	.tc-cart-upsell-card p {
		margin-top: 0.25rem;
		color: rgba(23, 35, 31, 0.66);
		font-size: 0.9rem;
		line-height: 1.4;
	}
	.tc-cart-upsell-card button {
		min-width: 4.5rem;
		border: 0;
		border-radius: 999px;
		padding: 0.5rem 0.85rem;
		background: #17231f;
		color: #fff;
		cursor: pointer;
	}
	@media (max-width: 560px) {
		.tc-cart-upsell-card {
			grid-template-columns: 1fr auto;
		}
		.tc-cart-upsell-card button {
			grid-column: 1 / -1;
			width: 100%;
		}
	}
	@container (max-width: 560px) {
		.tc-cart-upsell-card {
			grid-template-columns: 1fr auto;
		}
		.tc-cart-upsell-card button {
			grid-column: 1 / -1;
			width: 100%;
		}
	}
</style>
