<script lang="ts">
	import { createProductCarouselState } from '$stylist/commerce/function/state/product-carousel';
	import type { ProductCarouselProps } from '$stylist/commerce/function/state/product-carousel';

	let props: ProductCarouselProps = $props();
	const state = createProductCarouselState(props);
</script>

<div class={state.containerClass}>
	<div class="flex transition-transform duration-[var(--duration-300)]" style={`transform: translateX(-${state.currentIndex * 100}%)`}>
		{#each props.products ?? [] as product}
			<div class="w-full min-w-0 flex-shrink-0">
				<div class="bg-[var(--color-background-primary)] rounded-lg shadow p-4 flex">
					{#if product.image}
						<img src={product.image} alt={product.title} class="w-24 h-24 object-cover rounded mr-4" />
					{/if}
					<div class="flex-1">
						<h3 class="font-bold truncate">{product.title}</h3>
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
			</div>
		{/each}
	</div>

	<button
		onclick={() => state.prevSlide()}
		aria-label="Previous slide"
		class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[var(--color-background-primary)] rounded-full p-2 shadow-md hover:bg-[var(--color-background-secondary)]"
	>
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button
		onclick={() => state.nextSlide()}
		aria-label="Next slide"
		class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[var(--color-background-primary)] rounded-full p-2 shadow-md hover:bg-[var(--color-background-secondary)]"
	>
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>

	<div class="flex justify-center mt-4 space-x-2">
		{#each props.products ?? [] as _, i}
			<button
				onclick={() => state.goTo(i)}
				aria-label={`Go to slide ${i + 1}`}
				class={`w-3 h-3 rounded-full ${i === state.currentIndex ? 'bg-[var(--color-primary-500)]' : 'bg-[var(--color-background-tertiary)]'}`}
			></button>
		{/each}
	</div>
</div>
