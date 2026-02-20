<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import Stack from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'direction',
			type: 'select',
			options: ['vertical', 'horizontal'],
			defaultValue: 'vertical'
		},
		{
			name: 'spacing',
			type: 'select',
			options: ['xs', 'sm', 'md', 'lg', 'xl', '1rem'], // Include both token sizes and custom values
			defaultValue: 'md'
		},
		{
			name: 'align',
			type: 'select',
			options: ['start', 'center', 'end', 'stretch', 'baseline'],
			defaultValue: 'stretch'
		},
		{
			name: 'justify',
			type: 'select',
			options: ['start', 'center', 'end', 'between', 'around'],
			defaultValue: 'start'
		}
	];
</script>

<Story {controls} component={Stack} title="Stack Component" description="A flexible layout component for arranging elements in a linear fashion">
	{#snippet children(values: any)}
		<Stack {...values}>
			{#snippet children()}
				<div class="rounded bg-slate-100 p-2">Item A</div>
				<div class="rounded bg-slate-100 p-2">Item B</div>
				<div class="rounded bg-slate-100 p-2">Item C</div>
			{/snippet}
		</Stack>
	{/snippet}
</Story>
