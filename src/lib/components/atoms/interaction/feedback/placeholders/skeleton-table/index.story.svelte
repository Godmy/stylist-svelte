<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import SkeletonTable from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'rows', type: 'number', defaultValue: 5, min: 1, max: 12, step: 1 },
		{ name: 'columns', type: 'number', defaultValue: 4, min: 2, max: 8, step: 1 }
	];
</script>

<Story component={SkeletonTable} title="SkeletonTable" description="Table loading pattern with adjustable rows and columns." {controls}>
	{#snippet children(values: any)}
		<SkeletonTable rows={values.rows} columns={values.columns} />
	{/snippet}
</Story>
