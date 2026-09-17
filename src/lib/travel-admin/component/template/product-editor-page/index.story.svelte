<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import ProductEditorPage from './index.svelte';
	import { createMockCatalogRepository } from '$stylist/travel-admin/function/script/create-mock-catalog-repository';
	import { createMockMediaUploader } from '$stylist/travel-admin/function/script/create-mock-media-uploader';

	const repository = createMockCatalogRepository();
	const uploader = createMockMediaUploader();
</script>

<Story
	component={ProductEditorPage}
	title="ProductEditorPage"
	category="TravelAdmin/Pages"
	description="Full CRUD page for one product: form + route stops + media gallery, all through ContractCatalogRepository/ContractMediaUploader."
>
	{#snippet children()}
		<div style="min-height: 40rem; border: 1px solid var(--color-border-primary); border-radius: 0.5rem; overflow: hidden;">
			<ProductEditorPage {repository} {uploader} productId={1} />
		</div>
	{/snippet}
</Story>
