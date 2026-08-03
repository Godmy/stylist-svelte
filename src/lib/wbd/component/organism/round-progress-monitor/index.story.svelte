<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { StructWbdRoundProgress } from '$stylist/wbd/type/struct/round-progress';
	import RoundProgressMonitor from './index.svelte';

	const controls: SlotStory[] = [];
	const progress: StructWbdRoundProgress = {
		roundNumber: 2,
		totalExperts: 12,
		submittedExperts: 8,
		pendingExperts: 4,
		deadline: '2026-08-05T18:00:00Z'
	};
</script>

<Story
	title="Round Progress Monitor"
	component={RoundProgressMonitor}
	category="Organisms/Wbd"
	description="Coordinator monitor for round response progress."
	{controls}
>
	{#snippet children()}
		<RoundProgressMonitor {progress} />
	{/snippet}
</Story>
