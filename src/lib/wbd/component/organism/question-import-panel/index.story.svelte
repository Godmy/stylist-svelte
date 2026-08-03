<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';
	import QuestionImportPanel from './index.svelte';

	const controls: SlotStory[] = [];

	function handleImportQuestions(questions: StructWbdQuestion[]): void {
		console.info('WBD questions imported', questions);
	}
</script>

<Story
	title="Question Import Panel"
	component={QuestionImportPanel}
	category="Organisms/Wbd"
	description="Textarea importer that converts pasted lines into WBD questions."
	{controls}
>
	{#snippet children()}
		<QuestionImportPanel onImportQuestions={handleImportQuestions} />
	{/snippet}
</Story>
