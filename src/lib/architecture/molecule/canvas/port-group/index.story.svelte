<script lang="ts">
	import { Story } from '$stylist/interaction/playground';
	import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
	import type { GraphPortProps } from '$stylist';
	import PortGroup from './index.svelte';

	const controls: InterfaceControllerSettings[] = [
		{ name: 'direction', type: 'select', defaultValue: 'input', options: ['input', 'output'] },
		{ name: 'portSize', type: 'select', defaultValue: 'md', options: ['xs', 'sm', 'md', 'lg'] },
		{ name: 'showLabels', type: 'boolean', defaultValue: true },
		{ name: 'compact', type: 'boolean', defaultValue: false },
		{ name: 'divider', type: 'boolean', defaultValue: false },
		{ name: 'title', type: 'text', defaultValue: '' }
	];

	const inputPorts: GraphPortProps[] = [
		{ id: 'in-1', direction: 'input', label: 'Data In', dataType: 'string', connected: true },
		{ id: 'in-2', direction: 'input', label: 'Config', dataType: 'object', connected: false },
		{ id: 'in-3', direction: 'input', label: 'Options', dataType: 'array', connected: true }
	];

	const outputPorts: GraphPortProps[] = [
		{ id: 'out-1', direction: 'output', label: 'Result', dataType: 'string', connected: true },
		{ id: 'out-2', direction: 'output', label: 'Error', dataType: 'object', connected: false }
	];
</script>

<Story component={PortGroup} title="PortGroup" description="Group of connection ports for node inputs/outputs with labels and dividers." {controls}>
	{#snippet children(values: any)}
		<div style="display: flex; justify-content: {values.direction === 'input' ? 'flex-start' : 'flex-end'}; padding: var(--spacing-4); background: var(--color-background-secondary); border-radius: var(--border-radius-md);">
			<PortGroup
				id="port-group-1"
				direction={values.direction}
				ports={values.direction === 'input' ? inputPorts : outputPorts}
				portSize={values.portSize}
				showLabels={values.showLabels}
				compact={values.compact}
				divider={values.divider}
				title={values.title || undefined}
			/>
		</div>
	{/snippet}
</Story>

