<script lang="ts">
	import type { RecipeProductComparison } from '$stylist/product/interface/recipe/product-comparison';
	import { createProductComparisonState } from '$stylist/product/function/state/product-comparison/index.svelte';

	let props: RecipeProductComparison = $props();
	const state = createProductComparisonState(props);
</script>

<div class={state.containerClass}>
	<table class={state.tableClass}>
		<thead>
			<tr>
				<th class={state.headerCellClass}>Feature</th>
				{#each props.products as product}
					<th class={state.productCellClass}>
						<div class={state.productHeaderClass}>
							{#if product.image}
								<img src={product.image} alt={product.name} class={state.imageClass} />
							{/if}
							<span class={state.nameClass}>{product.name}</span>
							<div class={state.ratingClass}>
								{#each Array(5) as _, index}
									<svg
										class={state.getStarClass(index < Math.floor(product.rating))}
										viewBox="0 0 24 24"
										aria-hidden="true"
									>
										<path
											d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
										/>
									</svg>
								{/each}
							</div>
							<span class={state.priceClass}>{product.currency}{product.price.toFixed(2)}</span>
						</div>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each props.features as feature, index}
				<tr class={state.getRowClass(index)}>
					<td class={state.featureCellClass}>{feature}</td>
					{#each props.products as _product}
						<td class={state.valueCellClass}>-</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.product-comparison {
		overflow-x: auto;
	}

	.product-comparison__table {
		min-width: 100%;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		border-collapse: collapse;
	}

	.product-comparison__header-cell,
	.product-comparison__product-cell,
	.product-comparison__feature-cell,
	.product-comparison__value-cell {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 0.5rem 1rem;
	}

	.product-comparison__header-cell {
		text-align: left;
	}

	.product-comparison__product-cell,
	.product-comparison__value-cell {
		text-align: center;
	}

	.product-comparison__product-header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.product-comparison__image {
		width: 4rem;
		height: 4rem;
		margin-bottom: 0.5rem;
		object-fit: contain;
	}

	.product-comparison__name,
	.product-comparison__price {
		font-weight: 700;
	}

	.product-comparison__rating {
		display: flex;
		margin: 0.25rem 0;
	}

	.product-comparison__star {
		width: 0.75rem;
		height: 0.75rem;
	}

	.product-comparison__star--active {
		fill: var(--color-warning-500, #f59e0b);
	}

	.product-comparison__star--inactive {
		fill: var(--color-background-tertiary, #d1d5db);
	}

	.product-comparison__feature-cell {
		font-weight: 500;
	}

	.product-comparison__row--even {
		background-color: var(--color-background-secondary);
	}

	.product-comparison__row--odd {
		background-color: var(--color-background-primary);
	}
</style>
