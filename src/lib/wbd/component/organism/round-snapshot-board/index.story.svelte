<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdRoundSnapshot } from '$stylist/wbd/type/struct/round-snapshot';
	import RoundSnapshotBoard from './index.svelte';

	const controls: SlotStory[] = [];
	const questionLabels = {
		'q-1': 'Recoverable resource base',
		'q-2': 'License approval probability'
	};
	const snapshots: StructWbdRoundSnapshot[] = [
		{
			id: 's-1',
			sessionId: 'session-1',
			roundNumber: 1,
			questionId: 'q-1',
			countResponses: 10,
			median: 54,
			q1: 41,
			q3: 68,
			minValue: 25,
			maxValue: 91,
			consensusLevel: 'low',
			createdAt: '2026-08-01T18:00:00Z'
		},
		{
			id: 's-2',
			sessionId: 'session-1',
			roundNumber: 2,
			questionId: 'q-1',
			countResponses: 8,
			median: 47,
			q1: 39,
			q3: 55,
			minValue: 31,
			maxValue: 66,
			consensusLevel: 'medium',
			createdAt: '2026-08-02T18:00:00Z'
		}
	];
</script>

<Story
	title="Round Snapshot Board"
	component={RoundSnapshotBoard}
	category="Organisms/Wbd"
	description="Saved aggregate snapshots for completed rounds."
	{controls}
>
	{#snippet children()}
		<RoundSnapshotBoard {snapshots} {questionLabels} />
	{/snippet}
</Story>
