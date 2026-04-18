<script lang="ts">
	import { createProductRecommendationState } from '$stylist/commerce/function/state/product-recommendation';
	import type { ProductRecommendationProps } from '$stylist/commerce/interface/recipe/product-recommendation-props';

	let props: ProductRecommendationProps = $props();
	const state = createProductRecommendationState(props);
</script>

<div class={state.containerClass}>
	<h2 class="text-xl font-bold mb-4">{props.title ?? 'Recommended for you'}</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each props.products as product}
			<div
				class="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
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
					<img src={product.image} alt={product.title} class="w-full h-32 object-cover" />
				{/if}
				<div class="p-3">
					<h3 class="font-medium truncate">{product.title}</h3>
					<div class="flex items-center mt-1">
						<div class="flex text-yellow-400">
							{#each Array(5) as _, i}
								<svg
									class={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`}
									viewBox="0 0 24 24"
								>
									<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
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
