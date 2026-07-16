<script lang="ts">
	import type { RecipeProductComparisonTable } from '$stylist/product/interface/recipe/product-comparison-table';
	import { createProductComparisonTableState } from '$stylist/product/function/state/product-comparison-table/index.svelte';

	let props: RecipeProductComparisonTable = $props();
	const state = createProductComparisonTableState(props);
</script>

<div class={state.containerClass}>
	<table class={state.tableClass}>
		<thead>
			<tr>
				<th class={state.spacerCellClass}></th>
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
			{#each props.specifications as spec, index}
				<tr class={state.getRowClass(index)}>
					<td class={state.specCellClass}>{spec.name}</td>
					{#each spec.values as value}
						<td class={state.valueCellClass}>{value}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.product-comparison-table {
		overflow-x: auto;
	}

	.product-comparison-table__table {
		min-width: 100%;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		border-collapse: collapse;
	}

	.product-comparison-table__spacer-cell,
	.product-comparison-table__product-cell,
	.product-comparison-table__spec-cell,
	.product-comparison-table__value-cell {
		border-bottom: 1px solid var(--color-border-primary);
		padding: 0.75rem 1rem;
	}

	.product-comparison-table__spacer-cell,
	.product-comparison-table__spec-cell {
		text-align: left;
	}

	.product-comparison-table__product-cell,
	.product-comparison-table__value-cell {
		text-align: center;
	}

	.product-comparison-table__product-header {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.product-comparison-table__image {
		width: 5rem;
		height: 5rem;
		margin-bottom: 0.5rem;
		object-fit: contain;
	}

	.product-comparison-table__name,
	.product-comparison-table__price {
		font-weight: 700;
	}

	.product-comparison-table__name {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}

	.product-comparison-table__rating {
		display: flex;
		margin: 0.25rem 0;
	}

	.product-comparison-table__star {
		width: 1rem;
		height: 1rem;
	}

	.product-comparison-table__star--active {
		fill: var(--color-warning-500, #f59e0b);
	}

	.product-comparison-table__star--inactive {
		fill: var(--color-background-tertiary, #d1d5db);
	}

	.product-comparison-table__spec-cell {
		font-weight: 500;
	}

	.product-comparison-table__row--even {
		background-color: var(--color-background-primary);
	}

	.product-comparison-table__row--odd {
		background-color: var(--color-background-secondary);
	}
</style>
