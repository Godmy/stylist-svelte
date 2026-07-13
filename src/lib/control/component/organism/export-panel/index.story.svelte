<script lang="ts">
	import type { ExportFormat } from '$stylist/control/type/alias/export-format';
	import Story from '$stylist/playground/component/molecule/story/index.svelte';
	import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

	import ExportPanel from './index.svelte';

	function handleExport(detail: {
		format: ExportFormat;
		includeLegend: boolean;
		includeFilters: boolean;
	}) {
		console.log('Export event:', detail);
	}

	const controls: InterfaceControllerSettings[] = [];
</script>

<Story
	id="organisms-export-panel"
	title="Organisms / Interaction / Controls / ExportPanel"
	component={ExportPanel}
	category="Organisms/Interaction/Controls"
	description="Export panel component with format selection and options."
	{controls}
>
	{#snippet children()}
		<div class="_c1">
			<ExportPanel onExport={handleExport} />
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
</style>
