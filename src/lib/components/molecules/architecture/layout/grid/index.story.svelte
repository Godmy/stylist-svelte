<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import Grid from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'cols', type: 'number', defaultValue: 3, min: 1, max: 4, step: 1 },
		{ name: 'gap', type: 'select', defaultValue: 'md', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'responsive', type: 'boolean', defaultValue: true },
		{ name: 'alignItems', type: 'select', defaultValue: 'stretch', options: ['start', 'center', 'end', 'stretch'] },
		{ name: 'justifyContent', type: 'select', defaultValue: 'start', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] }
	];
</script>

<Story component={Grid} title="Grid" description="Responsive CSS-grid helper for card collections." {controls}>
	{#snippet children(values: any)}
		<Grid cols={values.cols} gap={values.gap} responsive={values.responsive} alignItems={values.alignItems} justifyContent={values.justifyContent}>
			{#snippet children()}
				{#each [1, 2, 3, 4, 5, 6] as item}
					<div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4 text-sm">Tile {item}</div>
				{/each}
			{/snippet}
		</Grid>
	{/snippet}
</Story>
