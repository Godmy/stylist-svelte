<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import SessionHeader from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Q3 Roadmap Estimation' },
		{ name: 'currentRoundIndex', type: 'number', defaultValue: 1, min: 0, max: 2 }
	];

	const rounds = [
		{ id: 'r1', index: 0, status: 'closed' as const },
		{ id: 'r2', index: 1, status: 'discussing' as const },
		{ id: 'r3', index: 2, status: 'kickoff' as const }
	];
</script>

<Story
	{controls}
	component={SessionHeader}
	title="SessionHeader"
	category="Organisms/Wbd"
	description="Session title with a round-by-round progress stepper."
>
	{#snippet children(values: any)}
		<SessionHeader
			title={values.title as string}
			{rounds}
			currentRoundId={rounds[values.currentRoundIndex as number]?.id}
		/>
	{/snippet}
</Story>
