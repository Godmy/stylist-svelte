<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
	import ProductGallery from './index.svelte';

	let selectedImage = $state('https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Image+1');

	const controls: InterfaceControllerSettings[] = [
		{
			name: 'mainImage',
			type: 'select',
			options: [
				'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Image+1',
				'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Image+2',
				'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Image+3',
				'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Image+4'
			],
			defaultValue: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Image+1'
		}
	];

	const sampleImages = [
		'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Image+1',
		'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Image+2',
		'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Image+3',
		'https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Image+4'
	];
</script>

<Story
	id="molecules-product-gallery"
	title="ProductGallery"
	component={ProductGallery}
	category="Molecules"
	{controls}
>
	{#snippet children(values: any)}
		<div class="_c1">
			<ProductGallery
				images={sampleImages}
				mainImage={values.mainImage}
				onImageChange={(image: string) => (selectedImage = image)}
			/>
			<p class="_c2">Selected image: {selectedImage}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.5rem;
		background-color: var(--color-background-secondary);
		padding: 2rem;
	}
	._c2 {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
