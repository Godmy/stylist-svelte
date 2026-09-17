<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import AddonCatalogPage from './index.svelte';
	import { createMockCatalogRepository } from '$stylist/travel-admin/function/script/create-mock-catalog-repository';

	const repository = createMockCatalogRepository();
</script>

<Story
	component={AddonCatalogPage}
	title="AddonCatalogPage"
	category="TravelAdmin/Pages"
	description="CRUD page for addon rules across all categories."
>
	{#snippet children()}
		<div style="min-height: 32rem; border: 1px solid var(--color-border-primary); border-radius: 0.5rem; overflow: hidden;">
			<AddonCatalogPage {repository} />
		</div>
	{/snippet}
</Story>
