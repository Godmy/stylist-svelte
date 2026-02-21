<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import DataDisplayCard from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'title', type: 'text', defaultValue: 'Revenue Snapshot' },
		{ name: 'subtitle', type: 'text', defaultValue: 'Current quarter' },
		{ name: 'description', type: 'text', defaultValue: 'Revenue is up 18% compared to previous quarter.' },
		{ name: 'image', type: 'text', defaultValue: '' }
	];
</script>

<Story component={DataDisplayCard} title="DataDisplayCard" description="Card for KPI and analytical summaries." {controls}>
	{#snippet children(values: any)}
		<DataDisplayCard title={values.title} subtitle={values.subtitle} description={values.description} image={values.image} />
	{/snippet}
</Story>
