<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdConsensusMatrixCell } from '$stylist/wbd/type/struct/consensus-matrix-cell';
	import QuestionConsensusMatrix from './index.svelte';

	const controls: SlotStory[] = [];
	const rounds = [1, 2, 3];
	const cells: StructWbdConsensusMatrixCell[] = [
		{ questionId: 'q-1', questionText: 'Recoverable resource base', roundNumber: 1, consensusLevel: 'low' },
		{ questionId: 'q-1', questionText: 'Recoverable resource base', roundNumber: 2, consensusLevel: 'medium' },
		{ questionId: 'q-1', questionText: 'Recoverable resource base', roundNumber: 3, consensusLevel: 'high' },
		{ questionId: 'q-2', questionText: 'License approval probability', roundNumber: 1, consensusLevel: 'medium' },
		{ questionId: 'q-2', questionText: 'License approval probability', roundNumber: 2, consensusLevel: 'high' },
		{ questionId: 'q-2', questionText: 'License approval probability', roundNumber: 3, consensusLevel: 'high' }
	];
</script>

<Story
	title="Question Consensus Matrix"
	component={QuestionConsensusMatrix}
	category="Organisms/Wbd"
	description="Consensus heatmap across questions and rounds."
	{controls}
>
	{#snippet children()}
		<QuestionConsensusMatrix {cells} {rounds} />
	{/snippet}
</Story>
