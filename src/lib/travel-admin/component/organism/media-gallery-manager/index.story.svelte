<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import MediaGalleryManager from './index.svelte';
	import { createMockMediaUploader } from '$stylist/travel-admin/function/script/create-mock-media-uploader';

	let assets = $state([{ id: 'seed-1', url: 'https://placehold.co/400x300', alt: 'Пидурангала.jpg' }]);
	const uploader = createMockMediaUploader();
</script>

<Story
	component={MediaGalleryManager}
	title="MediaGalleryManager"
	category="TravelAdmin/Organisms/ProductEditor"
	description="Product gallery: thumbnails + upload dropzone, wired to ContractMediaUploader."
>
	{#snippet children()}
		<MediaGalleryManager {assets} {uploader} onChange={(next) => (assets = next)} />
	{/snippet}
</Story>
