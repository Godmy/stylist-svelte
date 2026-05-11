<script lang="ts">
	import { createProductRecommendationState } from '$stylist/commerce/function/state/product-recommendation';
	import type { ProductRecommendationProps } from '$stylist/commerce/interface/recipe/product-recommendation-props';

	let props: ProductRecommendationProps = $props();
	const state = createProductRecommendationState(props);
</script>

<div class={state.containerClass}>
	<h2 class="mb-4 text-xl font-bold">{props.title ?? 'Recommended for you'}</h2>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each props.products as product}
			<div
				class="cursor-pointer overflow-hidden rounded-lg border transition-shadow hover:shadow-md"
				onclick={() => props.onProductClick?.(product.id)}
				role="button"
				tabindex="0"
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						e.preventDefault();
						props.onProductClick?.(product.id);
					}
				}}
			>
				{#if product.image}
					<img src={product.image} alt={product.title} class="h-32 w-full object-cover" />
				{/if}
				<div class="p-3">
					<h3 class="truncate font-medium">{product.title}</h3>
					<div class="mt-1 flex items-center">
						<div class="flex text-yellow-400">
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
					</div>
					<div class="mt-2">
						<span class="font-bold">{product.currency}{product.price.toFixed(2)}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
