<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdExpertAnswer } from '$stylist/wbd/type/struct/expert-answer';
	import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';
	import ExpertQuestionNavigator from './index.svelte';

	const controls: SlotStory[] = [];
	const questions: StructWbdQuestion[] = [
		{ id: 'q-1', orderIndex: 1, category: 'Geology', text: 'Recoverable resource base', type: 'numeric', unit: 'mln t', required: true },
		{ id: 'q-2', orderIndex: 2, category: 'Market', text: 'Export price upside', type: 'percentage', unit: '%', required: true },
		{ id: 'q-3', orderIndex: 3, category: 'Regulation', text: 'License approval is likely', type: 'boolean', required: false }
	];
	const answers: Record<string, StructWbdExpertAnswer> = {
		'q-1': { questionId: 'q-1', optimistic: 62, realistic: 48, pessimistic: 31, submitted: true },
		'q-2': { questionId: 'q-2', optimistic: 22, realistic: 12, pessimistic: 4 }
	};

	function handleSelectQuestion(questionId: string): void {
		console.info('WBD expert navigator selected', questionId);
	}
</script>

<Story
	title="Expert Question Navigator"
	component={ExpertQuestionNavigator}
	category="Organisms/Wbd"
	description="Expert-side question navigation with answer completion markers."
	{controls}
>
	{#snippet children()}
		<ExpertQuestionNavigator
			{questions}
			{answers}
			currentQuestionId="q-2"
			onSelectQuestion={handleSelectQuestion}
		/>
	{/snippet}
</Story>
