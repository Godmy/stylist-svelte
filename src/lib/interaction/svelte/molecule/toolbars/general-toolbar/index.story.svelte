<script lang="ts">
	import { Story } from '$stylist/development/svelte/playground';
	import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
	import GeneralToolbar from './index.svelte';

	const toolbarItems = [
		{ id: 'zoom-in', label: 'Zoom in', icon: '+', action: () => {} },
		{ id: 'zoom-out', label: 'Zoom out', icon: '-', action: () => {} },
		{ id: 'layers', label: 'Layers', icon: '#', action: () => {} }
	];

	const controls: InterfaceControllerSettings[] = [
		{ name: 'compact', type: 'boolean', defaultValue: false },
		{ name: 'disabled', type: 'boolean', defaultValue: false }
	];
</script>

<Story component={GeneralToolbar} title="GeneralToolbar" description="Compact action strip for canvas and editors." {controls}>
	{#snippet children(values: any)}
		<GeneralToolbar toolbarItems={toolbarItems} compact={values.compact} disabled={values.disabled} />
	{/snippet}
</Story>



