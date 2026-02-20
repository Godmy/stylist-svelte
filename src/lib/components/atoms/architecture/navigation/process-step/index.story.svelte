<script lang="ts">
	import Story from '$stylist/design-system/playground/Story.svelte';
	import ProcessStep from './index.svelte';
	
	import type { ControlConfig } from '$stylist/design-system/tokens/controls';
	
	const controls: ControlConfig[] = [
		{
			name: 'number',
			type: 'text',
			defaultValue: '1'
		},
		{
			name: 'title',
			type: 'text',
			defaultValue: 'PLAN'
		},
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Product Strategy'
		},
		{
			name: 'agent',
			type: 'text',
			defaultValue: 'Codex'
		},
		{
			name: 'active',
			type: 'boolean',
			defaultValue: false
		}
	];
</script>

<Story {controls} component={ProcessStep} title="ProcessStep Component" description="A component to display process steps in a workflow">
	{#snippet children(values: any)}
		<div class="p-4 border rounded-lg max-w-md">
			<ProcessStep {...values} />
		</div>
	{/snippet}
</Story>
