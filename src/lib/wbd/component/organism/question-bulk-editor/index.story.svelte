<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';
	import QuestionBulkEditor from './index.svelte';

	const controls: SlotStory[] = [];
	const questions: StructWbdQuestion[] = [
		{ id: 'q-1', orderIndex: 1, category: 'Geology', text: 'Recoverable resource base', type: 'numeric', unit: 'mln t', required: true },
		{ id: 'q-2', orderIndex: 2, category: 'Market', text: 'Export price upside', type: 'percentage', unit: '%', required: true },
		{ id: 'q-3', orderIndex: 3, category: 'Regulation', text: 'License approval is likely', type: 'boolean', required: false }
	];

	function handleUpdateQuestions(nextQuestions: StructWbdQuestion[]): void {
		console.info('WBD bulk questions updated', nextQuestions);
	}
</script>

<Story
	title="Question Bulk Editor"
	component={QuestionBulkEditor}
	category="Organisms/Wbd"
	description="Compact bulk editor for imported or generated questions."
	{controls}
>
	{#snippet children()}
		<QuestionBulkEditor {questions} onUpdateQuestions={handleUpdateQuestions} />
	{/snippet}
</Story>
