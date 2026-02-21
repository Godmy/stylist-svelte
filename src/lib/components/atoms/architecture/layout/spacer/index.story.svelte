<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Spacer from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'size',
			type: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '16px'],
			defaultValue: 'md'
		},
		{
			name: 'axis',
			type: 'select',
			options: ['vertical', 'horizontal'],
			defaultValue: 'vertical'
		}
	];
</script>

<Story {controls} component={Spacer} title="Spacer Component" description="A flexible space component for layout purposes">
	{#snippet children(values: any)}
		{#if values.axis === 'vertical'}
			<div class="inline-flex flex-col items-center rounded bg-slate-100 p-2">
				<span class="text-xs text-slate-500">Top</span>
				<Spacer {...values} />
				<span class="text-xs text-slate-500">Bottom</span>
			</div>
		{:else}
			<div class="flex items-center rounded bg-slate-100 p-2">
				<span>Left</span>
				<Spacer {...values} />
				<span>Right</span>
			</div>
		{/if}
	{/snippet}
</Story>
