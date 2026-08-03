<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdExportOption } from '$stylist/wbd/type/struct/export-option';
	import ExportResultsPanel from './index.svelte';

	const controls: SlotStory[] = [];
	const options: StructWbdExportOption[] = [
		{ id: 'csv', label: 'CSV', description: 'Question aggregates and rationales' },
		{ id: 'xlsx', label: 'XLSX', description: 'Coordinator workbook' },
		{ id: 'pdf', label: 'PDF', description: 'Final report draft' },
		{ id: 'json', label: 'JSON', description: 'Backend integration payload', disabled: true }
	];

	function handleExport(option: StructWbdExportOption): void {
		console.info('WBD export requested', option.id);
	}
</script>

<Story
	title="Export Results Panel"
	component={ExportResultsPanel}
	category="Organisms/Wbd"
	description="Export controls for session results."
	{controls}
>
	{#snippet children()}
		<ExportResultsPanel {options} onExport={handleExport} />
	{/snippet}
</Story>
