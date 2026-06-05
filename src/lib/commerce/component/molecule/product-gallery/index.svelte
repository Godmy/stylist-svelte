<script lang="ts">
	import createProductGalleryState from '$stylist/commerce/function/state/product-gallery/createproductgallerystate/index.svelte';
	import type { ProductGalleryProps } from '$stylist/commerce/interface/recipe/product-gallery-props';

	let props: ProductGalleryProps = $props();
	const state = createProductGalleryState(props);
</script>

<div class={state.containerClass}>
	<div class="mb-4 md:mb-0 md:w-3/4 md:pr-4">
		<div
			class="flex h-96 items-center justify-center rounded-lg bg-[var(--color-background-secondary)] p-4"
		>
			{#if state.currentImage}
				<img src={state.currentImage} alt="Product" class="max-h-80 object-contain" />
			{:else}
				<div class="text-[var(--color-text-secondary)]">No image available</div>
			{/if}
		</div>
	</div>

	<div class="flex flex-wrap gap-2 md:w-1/4 md:flex-col">
		{#each props.images ?? [] as image, i}
			<button
				onclick={() => state.changeImage(image)}
				class={`flex-1 md:flex-none ${state.currentImage === image ? 'rounded ring-2 ring-blue-500' : 'opacity-[var(--opacity-70)] hover:opacity-[var(--opacity-100)]'}`}
			>
				<img
					src={image}
					alt={`Thumbnail ${i + 1}`}
					class="h-20 w-full cursor-pointer rounded object-cover"
				/>
			</button>
		{/each}
	</div>
</div>
