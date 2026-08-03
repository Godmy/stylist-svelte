<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdExpertAnswer } from '$stylist/wbd/type/struct/expert-answer';
	import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';
	import ExpertAnswerCard from './index.svelte';

	const controls: SlotStory[] = [];
	const question: StructWbdQuestion = {
		id: 'q-1',
		orderIndex: 1,
		category: 'Geology',
		text: 'Estimated recoverable resource base by the end of 2026',
		type: 'numeric',
		unit: 'mln t',
		minValue: 0,
		maxValue: 100,
		required: true
	};
	const answer: StructWbdExpertAnswer = {
		questionId: 'q-1',
		optimistic: 62,
		realistic: 48,
		pessimistic: 31,
		rationale: 'Assumes two wells are completed before the end of Q4.',
		confidence: 4
	};

	function handleSaveAnswer(nextAnswer: StructWbdExpertAnswer): void {
		console.info('WBD answer saved', nextAnswer);
	}

	function handleSubmitAnswer(nextAnswer: StructWbdExpertAnswer): void {
		console.info('WBD answer submitted', nextAnswer);
	}
</script>

<Story
	title="Expert Answer Card"
	component={ExpertAnswerCard}
	category="Organisms/Wbd"
	description="Single-question expert input card with three-point estimate fields."
	{controls}
>
	{#snippet children()}
		<ExpertAnswerCard
			{question}
			{answer}
			onSaveAnswer={handleSaveAnswer}
			onSubmitAnswer={handleSubmitAnswer}
		/>
	{/snippet}
</Story>
