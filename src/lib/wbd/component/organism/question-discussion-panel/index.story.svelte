<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdDiscussionMessage } from '$stylist/wbd/type/struct/discussion-message';
	import type { StructWbdQuestion } from '$stylist/wbd/type/struct/question';
	import QuestionDiscussionPanel from './index.svelte';

	const controls: SlotStory[] = [{ name: 'selectedRound', type: 'number', defaultValue: 2, min: 1, max: 3 }];
	const question: StructWbdQuestion = {
		id: 'q-1',
		orderIndex: 1,
		category: 'Geology',
		text: 'Estimated recoverable resource base by the end of 2026',
		type: 'numeric',
		unit: 'mln t',
		required: true
	};
	const rounds = [1, 2, 3];
	const messages: StructWbdDiscussionMessage[] = [
		{
			id: 'm-1',
			questionId: 'q-1',
			roundNumber: 2,
			alias: 'Expert Green',
			message: 'The Q3 drilling window is the strongest upside driver.',
			createdAt: '2026-08-02T09:30:00Z',
			isOwn: true
		},
		{
			id: 'm-2',
			questionId: 'q-1',
			roundNumber: 2,
			alias: 'Expert Blue',
			message: 'The downside should include procurement delay risk.',
			createdAt: '2026-08-02T10:15:00Z'
		}
	];

	function handleSelectRound(roundNumber: number): void {
		console.info('WBD discussion round selected', roundNumber);
	}

	function handleSubmitMessage(message: string, parentId?: string): void {
		console.info('WBD discussion message submitted', { message, parentId });
	}
</script>

<Story
	title="Question Discussion Panel"
	component={QuestionDiscussionPanel}
	category="Organisms/Wbd"
	description="Question-scoped anonymous discussion with round filtering."
	{controls}
>
	{#snippet children(values: any)}
		<QuestionDiscussionPanel
			{question}
			{messages}
			{rounds}
			selectedRound={values.selectedRound}
			onSelectRound={handleSelectRound}
			onSubmitMessage={handleSubmitMessage}
		/>
	{/snippet}
</Story>
