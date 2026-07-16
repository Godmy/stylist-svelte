<script lang="ts">
	import type { RecipeProductGallery } from '$stylist/product/interface/recipe/product-gallery';
	import { createProductGalleryState } from '$stylist/product/function/state/product-gallery/index.svelte';

	let props: RecipeProductGallery = $props();
	const state = createProductGalleryState(props);
</script>

<div class={state.containerClass}>
	<div class={state.mainClass}>
		<div class={state.frameClass}>
			{#if state.currentImage}
				<img src={state.currentImage} alt="Product" class={state.imageClass} />
			{:else}
				<div class={state.emptyClass}>No image available</div>
			{/if}
		</div>
	</div>

	<div class={state.thumbnailsClass}>
		{#each props.images ?? [] as image, index}
			<button onclick={() => state.changeImage(image)} class={state.getThumbnailClass(image)}>
				<img src={image} alt={`Thumbnail ${index + 1}`} class={state.thumbnailImageClass} />
			</button>
		{/each}
	</div>
</div>

<style>
	.product-gallery {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.product-gallery__main {
		width: 100%;
	}

	.product-gallery__frame {
		display: flex;
		height: 24rem;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}

	.product-gallery__image {
		max-height: 20rem;
		object-fit: contain;
	}

	.product-gallery__empty {
		color: var(--color-text-secondary);
	}

	.product-gallery__thumbnails {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.product-gallery__thumbnail {
		flex: 1 1 0%;
		border-radius: 0.25rem;
	}

	.product-gallery__thumbnail--active {
		box-shadow: 0 0 0 2px var(--color-blue-500, #3b82f6);
	}

	.product-gallery__thumbnail--inactive {
		opacity: 0.7;
	}

	.product-gallery__thumbnail--inactive:hover {
		opacity: 1;
	}

	.product-gallery__thumbnail-image {
		width: 100%;
		height: 5rem;
		cursor: pointer;
		border-radius: 0.25rem;
		object-fit: cover;
	}

	@media (min-width: 768px) {
		.product-gallery {
			flex-direction: row;
		}

		.product-gallery__main {
			width: 75%;
			padding-right: 1rem;
		}

		.product-gallery__thumbnails {
			width: 25%;
			flex-direction: column;
		}

		.product-gallery__thumbnail {
			flex: none;
		}
	}
</style>
