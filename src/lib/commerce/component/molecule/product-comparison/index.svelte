<script lang="ts">
	import createProductComparisonState from '$stylist/commerce/function/state/product-comparison/createproductcomparisonstate/index.svelte';
	import type { ProductComparisonProps } from '$stylist/commerce/interface/recipe/product-comparison-props';

	let props: ProductComparisonProps = $props();
	const state = createProductComparisonState(props);
</script>

<div class={state.containerClass}>
	<table
		class="min-w-full border border-[var(--color-border-primary)] bg-[var(--color-background-primary)]"
	>
		<thead>
			<tr>
				<th class="border-b px-4 py-2 text-left">Feature</th>
				{#each props.products as product}
					<th class="border-b px-4 py-2 text-center">
						<div class="flex flex-col items-center">
							{#if product.image}
								<img src={product.image} alt={product.name} class="mb-2 h-16 w-16 object-contain" />
							{/if}
							<span class="font-bold">{product.name}</span>
							<div class="my-1 flex text-yellow-400">
								{#each Array(5) as _, i}
									<svg
										class={`h-3 w-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
										viewBox="0 0 24 24"
									>
										<path
											d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
										/>
									</svg>
								{/each}
							</div>
							<span class="font-bold">{product.currency}{product.price.toFixed(2)}</span>
						</div>
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each props.features as feature, idx}
				<tr
					class={idx % 2 === 0
						? 'bg-[var(--color-background-secondary)]'
						: 'bg-[var(--color-background-primary)]'}
				>
					<td class="border-b px-4 py-2 font-medium">{feature}</td>
					{#each props.products as _product}
						<td class="border-b px-4 py-2 text-center">—</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
