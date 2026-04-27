<script lang="ts">
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import ToolButton from './index.svelte';

	const controls = [
		{ name: 'tool', type: 'select', options: ['select', 'pan', 'frame', 'connect', 'text'], defaultValue: 'select' },
		{ name: 'label', type: 'text', defaultValue: 'Tool' },
		{ name: 'active', type: 'boolean', defaultValue: false }
	];
</script>

<Story {controls} component={ToolButton} title="ToolButton" category="Atoms/Control/ToolButton" description="Tool button component for design canvas">
	{#snippet children(values: any)}
		<div style="display: flex; gap: 8px; padding: 20px; background: var(--color-background-primary);">
			<ToolButton
				tool={values.tool as string}
				label={values.label as string}
				active={values.active as boolean}
			/>
		</div>
	{/snippet}
</Story>
