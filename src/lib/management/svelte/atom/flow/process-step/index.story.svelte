<script lang="ts">
	import Story from '$stylist/development/svelte/playground/Story.svelte';
	import ProcessStep from './index.svelte';
	
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	
	const controls: InterfaceControllerSettings[] = [
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
		<div class="max-w-md rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] p-4">
			<ProcessStep
				number={Number(values.number) || 1}
				title={values.title as string}
				description={values.description as string}
				agent={values.agent as string}
				active={values.active as boolean}
			/>
		</div>
	{/snippet}
</Story>




