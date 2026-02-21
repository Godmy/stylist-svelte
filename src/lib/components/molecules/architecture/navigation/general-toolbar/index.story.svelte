<script lang="ts">
	import { Story } from '$stylist/design-system/playground';
	import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
	import GeneralToolbar from './index.svelte';

	const toolbarItems = [
		{ id: 'zoom-in', label: 'Zoom in', icon: '+', action: () => {} },
		{ id: 'zoom-out', label: 'Zoom out', icon: '-', action: () => {} },
		{ id: 'layers', label: 'Layers', icon: '#', action: () => {} }
	];

	const controls: ControlConfig[] = [
		{ name: 'compact', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={GeneralToolbar} title="GeneralToolbar" description="Compact action strip for canvas and editors." {controls}>
	{#snippet children(values: any)}
		<GeneralToolbar toolbarItems={toolbarItems} compact={values.compact} disabled={values.disabled} />
	{/snippet}
</Story>
