<script lang="ts">
	import MetricCard from '$stylist/commerce/component/molecule/metric-card/index.svelte';
	import type { RecipeAdminKpiRow } from '$stylist/travel-admin/interface/recipe/admin-kpi-row';

	let props: RecipeAdminKpiRow = $props();
</script>

<div class="admin-kpi-row {props.class ?? ''}">
	{#each props.metrics as metric (metric.label)}
		<MetricCard title={metric.label} value={metric.value} description={metric.description} showProgressBar={false} />
	{/each}
</div>

<style>
	.admin-kpi-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		gap: 1rem;
	}
	.admin-kpi-row :global(.metric-card) {
		padding: 1rem;
	}
</style>
