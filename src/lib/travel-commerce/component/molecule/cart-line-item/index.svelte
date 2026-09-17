<script lang="ts">
	import type { CartLineItem } from '$stylist/travel-commerce/type/object/cart-line-item';

	type Props = {
		item: CartLineItem;
		onRemove?: (id: string) => void;
	};

	let { item, onRemove }: Props = $props();
</script>

<article class="tc-cart-line-item">
	{#if item.imageSrc}
		<img src={item.imageSrc} alt={item.imageAlt ?? item.title} loading="lazy" />
	{/if}
	<div class="tc-cart-line-item__body">
		<div>
			<p>{item.subtitle}</p>
			<h3>{item.title}</h3>
		</div>
		<dl>
			{#if item.date}<div><dt>Date</dt><dd>{item.date}</dd></div>{/if}
			{#if item.pickup}<div><dt>Pickup</dt><dd>{item.pickup}</dd></div>{/if}
			{#if item.travelers}<div><dt>Travelers</dt><dd>{item.travelers}</dd></div>{/if}
		</dl>
		{#if item.addons?.length}
			<ul>
				{#each item.addons as addon}
					<li>{addon}</li>
				{/each}
			</ul>
		{/if}
	</div>
	<div class="tc-cart-line-item__aside">
		<strong>{item.total}</strong>
		{#if onRemove}
			<button type="button" onclick={() => onRemove?.(item.id)}>Remove</button>
		{/if}
	</div>
</article>

<style>
	.tc-cart-line-item {
		display: grid;
		grid-template-columns: 6.5rem 1fr auto;
		gap: 1rem;
		padding: 1rem;
		border: 1px solid rgba(23, 35, 31, 0.1);
		border-radius: 8px;
		background: #fff;
	}
	.tc-cart-line-item img {
		width: 100%;
		aspect-ratio: 1;
		object-fit: cover;
		border-radius: 6px;
	}
	.tc-cart-line-item__body {
		display: grid;
		gap: 0.75rem;
		min-width: 0;
	}
	.tc-cart-line-item p,
	.tc-cart-line-item h3,
	.tc-cart-line-item dl,
	.tc-cart-line-item dd {
		margin: 0;
	}
	.tc-cart-line-item p {
		color: rgba(23, 35, 31, 0.58);
		font-size: 0.82rem;
	}
	.tc-cart-line-item h3 {
		color: #17231f;
		font-size: 1.1rem;
		line-height: 1.18;
	}
	.tc-cart-line-item dl {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 1rem;
		font-size: 0.82rem;
	}
	.tc-cart-line-item dt {
		color: rgba(23, 35, 31, 0.54);
	}
	.tc-cart-line-item dd {
		color: #17231f;
	}
	.tc-cart-line-item ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.tc-cart-line-item li {
		padding: 0.18rem 0.45rem;
		border-radius: 999px;
		background: rgba(43, 124, 93, 0.1);
		font-size: 0.78rem;
		color: #245b45;
	}
	.tc-cart-line-item__aside {
		display: grid;
		align-content: space-between;
		justify-items: end;
		gap: 1rem;
	}
	.tc-cart-line-item__aside strong {
		font-size: 1.1rem;
		color: #17231f;
	}
	.tc-cart-line-item__aside button {
		border: 0;
		background: transparent;
		color: #7b3d32;
		cursor: pointer;
	}
	@media (max-width: 680px) {
		.tc-cart-line-item {
			grid-template-columns: 5rem 1fr;
		}
		.tc-cart-line-item__aside {
			grid-column: 1 / -1;
			display: flex;
			justify-content: space-between;
		}
	}
	@container (max-width: 680px) {
		.tc-cart-line-item {
			grid-template-columns: 5rem 1fr;
		}
		.tc-cart-line-item__aside {
			grid-column: 1 / -1;
			display: flex;
			justify-content: space-between;
		}
	}
</style>
