<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdExpertAnswer } from '$stylist/wbd/type/struct/expert-answer';
	import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';
	import ExpertQuestionnaire from './index.svelte';

	const controls: SlotStory[] = [];
	const questions: StructWbdQuestion[] = [
		{ id: 'q-1', orderIndex: 1, category: 'Geology', text: 'Recoverable resource base', type: 'numeric', unit: 'mln t', required: true },
		{ id: 'q-2', orderIndex: 2, category: 'Market', text: 'Export price upside', type: 'percentage', unit: '%', required: true },
		{ id: 'q-3', orderIndex: 3, category: 'Regulation', text: 'License approval is likely', type: 'boolean', required: false }
	];
	const answers: Record<string, StructWbdExpertAnswer> = {
		'q-1': {
			questionId: 'q-1',
			optimistic: 62,
			realistic: 48,
			pessimistic: 31,
			rationale: 'Current drilling plan remains the key assumption.',
			confidence: 4,
			submitted: true
		}
	};

	function handleSubmitAnswer(answer: StructWbdExpertAnswer): void {
		console.info('WBD questionnaire answer submitted', answer);
	}
</script>

<Story
	title="Expert Questionnaire"
	component={ExpertQuestionnaire}
	category="Organisms/Wbd"
	description="Expert round-taking surface with navigation and answer editor."
	{controls}
>
	{#snippet children()}
		<ExpertQuestionnaire
			{questions}
			{answers}
			currentQuestionId="q-1"
			onSubmitAnswer={handleSubmitAnswer}
		/>
	{/snippet}
</Story>
