<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdConsensusItem } from '$stylist/wbd/type/struct/consensus-item';
	import ConsensusReviewBoard from './index.svelte';

	const controls: SlotStory[] = [];
	const items: StructWbdConsensusItem[] = [
		{
			questionId: 'q-1',
			questionText: 'Recoverable resource base in 2026',
			category: 'Geology',
			consensusLevel: 'low',
			countResponses: 8,
			median: 42,
			q1: 34,
			q3: 58,
			rationaleCount: 7
		},
		{
			questionId: 'q-2',
			questionText: 'Probability of license approval',
			category: 'Regulation',
			consensusLevel: 'high',
			countResponses: 8,
			median: 68,
			q1: 64,
			q3: 72,
			rationaleCount: 4
		}
	];

	function handleSelectQuestion(questionId: string): void {
		console.info('WBD consensus question selected', questionId);
	}
</script>

<Story
	title="Consensus Review Board"
	component={ConsensusReviewBoard}
	category="Organisms/Wbd"
	description="Coordinator review list ordered by consensus risk."
	{controls}
>
	{#snippet children()}
		<ConsensusReviewBoard {items} onSelectQuestion={handleSelectQuestion} />
	{/snippet}
</Story>
