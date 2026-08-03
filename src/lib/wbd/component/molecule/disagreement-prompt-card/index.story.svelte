<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdConsensusItem } from '$stylist/wbd/type/struct/consensus-item';
	import DisagreementPromptCard from './index.svelte';

	const controls: SlotStory[] = [];
	const item: StructWbdConsensusItem = {
		questionId: 'q-reserve',
		questionText: 'Estimated recoverable resource base by the end of 2026',
		category: 'Geology',
		countResponses: 8,
		median: 42,
		q1: 34,
		q3: 58,
		minValue: 22,
		maxValue: 77,
		consensusLevel: 'low'
	};
</script>

<Story
	title="Disagreement Prompt Card"
	component={DisagreementPromptCard}
	category="Molecules/Wbd"
	description="Highlights low-consensus questions that need discussion before the next round."
	{controls}
>
	{#snippet children()}
		<DisagreementPromptCard {item} />
	{/snippet}
</Story>
