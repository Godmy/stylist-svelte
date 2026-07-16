<script lang="ts">
	import type { RecipeProductCarousel } from '$stylist/product/interface/recipe/product-carousel';
	import { createProductCarouselState } from '$stylist/product/function/state/product-carousel/index.svelte';

	let props: RecipeProductCarousel = $props();
	const state = createProductCarouselState(props);
</script>

<div class={state.containerClass}>
	<div class={state.trackClass} style={`transform: translateX(-${state.currentIndex * 100}%)`}>
		{#each props.products ?? [] as product}
			<div class={state.slideClass}>
				<div class={state.cardClass}>
					{#if product.image}
						<img src={product.image} alt={product.title} class={state.imageClass} />
					{/if}
					<div class={state.bodyClass}>
						<h3 class={state.titleClass}>{product.title}</h3>
						<div class={state.ratingClass} aria-label={`Rating: ${product.rating} out of 5`}>
							{#each Array(5) as _, i}
								<svg
									class={state.getStarClass(i < Math.floor(product.rating))}
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
									/>
								</svg>
							{/each}
						</div>
						<div class={state.priceClass}>
							{product.currency}{product.price.toFixed(2)}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<button
		onclick={() => state.prevSlide()}
		aria-label="Previous slide"
		class={state.previousButtonClass}
	>
		<svg class={state.iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
		</svg>
	</button>

	<button onclick={() => state.nextSlide()} aria-label="Next slide" class={state.nextButtonClass}>
		<svg class={state.iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
		</svg>
	</button>

	<div class={state.dotsClass}>
		{#each props.products ?? [] as _, i}
			<button
				onclick={() => state.goTo(i)}
				aria-label={`Go to slide ${i + 1}`}
				class={state.getDotClass(i === state.currentIndex)}
			></button>
		{/each}
	</div>
</div>

<style>
	.product-carousel {
		position: relative;
		overflow: hidden;
	}

	.product-carousel__track {
		display: flex;
		transition: transform 0.3s ease;
	}

	.product-carousel__slide {
		min-width: 100%;
	}

	.product-carousel__card {
		overflow: hidden;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
	}

	.product-carousel__image {
		display: block;
		width: 100%;
		height: 12rem;
		object-fit: cover;
	}

	.product-carousel__body {
		padding: 1rem;
	}

	.product-carousel__title {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.product-carousel__rating {
		display: flex;
		margin-top: 0.5rem;
		color: var(--color-border-primary);
	}

	.product-carousel__star {
		width: 1rem;
		height: 1rem;
		fill: currentColor;
		color: var(--color-border-primary);
	}

	.product-carousel__star--filled {
		color: var(--color-warning-500);
	}

	.product-carousel__price {
		margin-top: 0.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.product-carousel__button {
		position: absolute;
		top: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--color-border-primary);
		border-radius: 9999px;
		background-color: var(--color-background-primary);
		color: var(--color-text-primary);
		transform: translateY(-50%);
	}

	.product-carousel__button--previous {
		left: 0.75rem;
	}

	.product-carousel__button--next {
		right: 0.75rem;
	}

	.product-carousel__button-icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	.product-carousel__dots {
		position: absolute;
		right: 0;
		bottom: 0.75rem;
		left: 0;
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	.product-carousel__dot {
		width: 0.625rem;
		height: 0.625rem;
		border: 0;
		border-radius: 9999px;
		background-color: var(--color-border-primary);
	}

	.product-carousel__dot--active {
		background-color: var(--color-primary-500);
	}
</style>
