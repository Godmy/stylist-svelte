<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdFinalReportSection } from '$stylist/wbd/type/struct/final-report-section';
	import FinalReportBuilder from './index.svelte';

	const controls: SlotStory[] = [];
	const sections: StructWbdFinalReportSection[] = [
		{
			id: 'summary',
			title: 'Executive summary',
			content: 'Round 2 narrowed the interquartile range from 27 to 16 units.',
			enabled: true
		},
		{
			id: 'risks',
			title: 'Residual disagreements',
			content: 'Experts still diverge on timing of license approval.',
			enabled: true
		}
	];

	function handleUpdateSections(nextSections: StructWbdFinalReportSection[]): void {
		console.info('WBD report sections updated', nextSections);
	}

	function handlePublishReport(): void {
		console.info('WBD report publish requested');
	}
</script>

<Story
	title="Final Report Builder"
	component={FinalReportBuilder}
	category="Organisms/Wbd"
	description="Editable final report sections before publication."
	{controls}
>
	{#snippet children()}
		<FinalReportBuilder
			{sections}
			onUpdateSections={handleUpdateSections}
			onPublishReport={handlePublishReport}
		/>
	{/snippet}
</Story>
