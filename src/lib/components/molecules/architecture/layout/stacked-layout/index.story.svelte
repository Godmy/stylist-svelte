<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import StackedLayout from './index.svelte';

	const controls: ControlConfig[] = [
		{ name: 'direction', type: 'select', defaultValue: 'vertical', options: ['vertical', 'horizontal'] },
		{ name: 'gap', type: 'select', defaultValue: 'md', options: ['none', 'sm', 'md', 'lg', 'xl'] },
		{ name: 'alignItems', type: 'select', defaultValue: 'stretch', options: ['start', 'center', 'end', 'stretch'] },
		{ name: 'justifyContent', type: 'select', defaultValue: 'start', options: ['start', 'center', 'end', 'between', 'around', 'evenly'] }
	];
</script>

<Story component={StackedLayout} title="StackedLayout" description="Linear stack layout for grouped interface blocks." {controls}>
	{#snippet children(values: any)}
		<StackedLayout direction={values.direction} gap={values.gap} alignItems={values.alignItems} justifyContent={values.justifyContent}>
			{#snippet children()}
				<div class="rounded-lg border border-[--color-border-primary] p-3">Item A</div>
				<div class="rounded-lg border border-[--color-border-primary] p-3">Item B</div>
				<div class="rounded-lg border border-[--color-border-primary] p-3">Item C</div>
			{/snippet}
		</StackedLayout>
	{/snippet}
</Story>
