<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DiscussionRoundFilter from './index.svelte';

	const controls: SlotStory[] = [{ name: 'selectedRound', type: 'number', defaultValue: 2 }];
	const rounds = [1, 2, 3];

	function handleSelectRound(roundNumber: number): void {
		console.info('WBD round selected', roundNumber);
	}
</script>

<Story
	title="Discussion Round Filter"
	component={DiscussionRoundFilter}
	category="Molecules/Wbd"
	description="Segmented round selector for question discussion history."
	{controls}
>
	{#snippet children(values: any)}
		<DiscussionRoundFilter {rounds} selectedRound={values.selectedRound} onSelectRound={handleSelectRound} />
	{/snippet}
</Story>
