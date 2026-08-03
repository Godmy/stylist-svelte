<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';
	import SessionQuestionEditor from './index.svelte';

	const controls: SlotStory[] = [];
	const questions: StructWbdQuestion[] = [
		{ id: 'q-1', orderIndex: 1, category: 'Geology', text: 'Recoverable resource base', type: 'numeric', unit: 'mln t', minValue: 0, maxValue: 100, required: true },
		{ id: 'q-2', orderIndex: 2, category: 'Market', text: 'Export price upside', type: 'percentage', unit: '%', minValue: 0, maxValue: 100, required: true }
	];

	function handleSelectQuestion(questionId: string): void {
		console.info('WBD editor selected question', questionId);
	}

	function handleCreateQuestion(): void {
		console.info('WBD create question requested');
	}

	function handleUpdateQuestion(question: StructWbdQuestion): void {
		console.info('WBD question updated', question);
	}

	function handleDeleteQuestion(questionId: string): void {
		console.info('WBD question deleted', questionId);
	}
</script>

<Story
	title="Session Question Editor"
	component={SessionQuestionEditor}
	category="Organisms/Wbd"
	description="Coordinator editor for session question metadata."
	{controls}
>
	{#snippet children()}
		<SessionQuestionEditor
			{questions}
			selectedQuestionId="q-2"
			onSelectQuestion={handleSelectQuestion}
			onCreateQuestion={handleCreateQuestion}
			onUpdateQuestion={handleUpdateQuestion}
			onDeleteQuestion={handleDeleteQuestion}
		/>
	{/snippet}
</Story>
