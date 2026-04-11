<script lang="ts">
	import { createProductGalleryState } from '$stylist/commerce/function/state/product-gallery';
	import type { ProductGalleryProps } from '$stylist/commerce/function/state/product-gallery';

	let props: ProductGalleryProps = $props();
	const state = createProductGalleryState(props);
</script>

<div class={state.containerClass}>
	<div class="md:w-3/4 mb-4 md:mb-0 md:pr-4">
		<div class="bg-[var(--color-background-secondary)] rounded-lg p-4 flex items-center justify-center h-96">
			{#if state.currentImage}
				<img src={state.currentImage} alt="Product" class="max-h-80 object-contain" />
			{:else}
				<div class="text-[var(--color-text-secondary)]">No image available</div>
			{/if}
		</div>
	</div>

	<div class="md:w-1/4 flex md:flex-col flex-wrap gap-2">
		{#each props.images ?? [] as image, i}
			<button
				onclick={() => state.changeImage(image)}
				class={`flex-1 md:flex-none ${state.currentImage === image ? 'ring-2 ring-blue-500 rounded' : 'opacity-[var(--opacity-70)] hover:opacity-[var(--opacity-100)]'}`}
			>
				<img src={image} alt={`Thumbnail ${i + 1}`} class="w-full h-20 object-cover rounded cursor-pointer" />
			</button>
		{/each}
	</div>
</div>
