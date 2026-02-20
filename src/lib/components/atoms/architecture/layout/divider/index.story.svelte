<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Divider from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'orientation',
			type: 'select',
			options: ['horizontal', 'vertical'],
			defaultValue: 'horizontal'
		},
		{
			name: 'align',
			type: 'select',
			options: ['start', 'center', 'end'],
			defaultValue: 'center'
		},
		{
			name: 'dashed',
			type: 'boolean',
			defaultValue: false
		},
		{
			name: 'label',
			type: 'text',
			defaultValue: 'Section'
		}
	];
</script>

<Story {controls} component={Divider} title="Divider Component" description="A visual separator with optional text label">
	{#snippet children(values: any)}
		{#if values.orientation === 'horizontal'}
			<Divider {...values} />
		{:else}
			<div class="h-32">
				<Divider {...values} />
			</div>
		{/if}
	{/snippet}
</Story>
