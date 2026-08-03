<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdRoundComparisonItem } from '$stylist/wbd/type/struct/round-comparison-item';
	import RoundComparisonPanel from './index.svelte';

	const controls: SlotStory[] = [];
	const items: StructWbdRoundComparisonItem[] = [
		{
			questionId: 'q-1',
			questionText: 'Recoverable resource base in 2026',
			previousMedian: 54,
			currentMedian: 47,
			previousConsensus: 'low',
			currentConsensus: 'medium'
		},
		{
			questionId: 'q-2',
			questionText: 'Probability of license approval',
			previousMedian: 61,
			currentMedian: 68,
			previousConsensus: 'medium',
			currentConsensus: 'high'
		}
	];
</script>

<Story
	title="Round Comparison Panel"
	component={RoundComparisonPanel}
	category="Organisms/Wbd"
	description="Compares aggregate movement between two Delphi rounds."
	{controls}
>
	{#snippet children()}
		<RoundComparisonPanel {items} previousRound={1} currentRound={2} />
	{/snippet}
</Story>
