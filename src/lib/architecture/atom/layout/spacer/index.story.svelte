<script lang="ts">
	import Story from '$stylist/interaction/playground/Story.svelte';
	import Spacer from './index.svelte';
	
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	
	const controls: InterfaceControllerSettings[] = [
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
			<div class="inline-flex flex-col items-center rounded bg-[var(--color-background-secondary)] p-2">
				<span class="text-xs text-[var(--color-text-secondary)]">Top</span>
				<Spacer {...values} />
				<span class="text-xs text-[var(--color-text-secondary)]">Bottom</span>
			</div>
		{:else}
			<div class="flex items-center rounded bg-[var(--color-background-secondary)] p-2">
				<span>Left</span>
				<Spacer {...values} />
				<span>Right</span>
			</div>
		{/if}
	{/snippet}
</Story>




