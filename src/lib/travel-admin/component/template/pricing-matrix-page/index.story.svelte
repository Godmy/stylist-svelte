<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import PricingMatrixPage from './index.svelte';
	import { createMockCatalogRepository } from '$stylist/travel-admin/function/script/create-mock-catalog-repository';

	const repository = createMockCatalogRepository();
</script>

<Story
	component={PricingMatrixPage}
	title="PricingMatrixPage"
	category="TravelAdmin/Pages"
	description="Admin page for the location x vehicle x headcount transfer pricing matrix."
>
	{#snippet children()}
		<div style="min-height: 32rem; border: 1px solid var(--color-border-primary); border-radius: 0.5rem; overflow: hidden;">
			<PricingMatrixPage {repository} />
		</div>
	{/snippet}
</Story>
