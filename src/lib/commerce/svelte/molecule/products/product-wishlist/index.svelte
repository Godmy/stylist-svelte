<script lang="ts">
	import { createProductWishlistState } from '$stylist/commerce/function/state/product-wishlist';
	import type { ProductWishlistProps } from '$stylist/commerce/interface/recipe/product-wishlist-props';

	let props: ProductWishlistProps = $props();
	const state = createProductWishlistState(props);
</script>

<div class={state.containerClass}>
	<h2 class="text-xl font-bold p-4 border-b">Wishlist ({props.items.length})</h2>
	{#if props.items.length === 0}
		<div class="p-8 text-center text-[var(--color-text-secondary)]">
			Your wishlist is empty
		</div>
	{:else}
		<div class="divide-y">
			{#each props.items as item}
				<div class="p-4 flex">
					{#if item.image}
						<img src={item.image} alt={item.title} class="w-20 h-20 object-cover rounded mr-4" />
					{/if}
					<div class="flex-1">
						<h3 class="font-bold">{item.title}</h3>
						<div class="flex items-center mt-1">
							<div class="flex text-yellow-400">
								{#each Array(5) as _, i}
									<svg
										class={`w-4 h-4 ${i < Math.floor(item.rating) ? 'fill-current' : 'fill-gray-300'}`}
										viewBox="0 0 24 24"
									>
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
									</svg>
								{/each}
							</div>
						</div>
						<div class="mt-2 font-bold">{item.currency}{item.price.toFixed(2)}</div>
					</div>
					<div class="flex flex-col space-y-2 ml-4">
						<button
							onclick={() => props.onMoveToCart?.(item.id)}
							class="px-3 py-1 bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] text-sm rounded hover:bg-[var(--color-primary-600)]"
						>
							Add to Cart
						</button>
						<button
							onclick={() => props.onRemove?.(item.id)}
							class="px-3 py-1 border border-[var(--color-border-primary)] text-sm rounded hover:bg-[var(--color-background-secondary)]"
						>
							Remove
						</button>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
