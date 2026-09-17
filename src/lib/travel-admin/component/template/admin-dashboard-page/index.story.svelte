<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import AdminDashboardPage from './index.svelte';
	import { createMockCatalogRepository } from '$stylist/travel-admin/function/script/create-mock-catalog-repository';

	const repository = createMockCatalogRepository();
</script>

<Story
	component={AdminDashboardPage}
	title="AdminDashboardPage"
	category="TravelAdmin/Pages"
	description="Admin home: AdminShell + AdminKpiRow + recent products, wired to a mock ContractCatalogRepository."
>
	{#snippet children()}
		<div style="min-height: 32rem; border: 1px solid var(--color-border-primary); border-radius: 0.5rem; overflow: hidden;">
			<AdminDashboardPage {repository} />
		</div>
	{/snippet}
</Story>
