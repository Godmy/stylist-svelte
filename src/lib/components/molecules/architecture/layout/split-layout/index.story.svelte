<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import SplitLayout from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'direction', type: 'select', defaultValue: 'horizontal', options: ['horizontal', 'vertical'] },
		{ name: 'gap', type: 'select', defaultValue: 'md', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'primarySize', type: 'select', defaultValue: '2/3', options: ['1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4'] },
		{ name: 'secondarySize', type: 'select', defaultValue: '1/3', options: ['1/4', '1/3', '2/5', '1/2', '3/5', '2/3', '3/4'] },
		{ name: 'responsive', type: 'boolean', defaultValue: true }
	];
</script>

<Story component={SplitLayout} title="SplitLayout" description="Two-pane layout with configurable proportions." {controls}>
	{#snippet children(values: any)}
		<SplitLayout direction={values.direction} gap={values.gap} primarySize={values.primarySize} secondarySize={values.secondarySize} responsive={values.responsive}>
			{#snippet primary()}
				<div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-secondary] p-4">Primary pane</div>
			{/snippet}
			{#snippet secondary()}
				<div class="rounded-xl border border-[--color-border-primary] bg-[--color-background-primary] p-4">Secondary pane</div>
			{/snippet}
		</SplitLayout>
	{/snippet}
</Story>
