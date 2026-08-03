<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ExpertSessionBriefing from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'currentRound', type: 'number', defaultValue: 2, min: 1, max: 3 },
		{ name: 'questionCount', type: 'number', defaultValue: 12, min: 1, max: 50 }
	];
</script>

<Story
	title="Expert Session Briefing"
	component={ExpertSessionBriefing}
	category="Organisms/Wbd"
	description="Context briefing shown before an expert starts a round."
	{controls}
>
	{#snippet children(values: any)}
		<ExpertSessionBriefing
			sessionTitle="Resource base forecast 2026"
			description="Estimate likely outcomes under shared assumptions."
			assumptions="Use currently approved CAPEX and exclude unlicensed acreage."
			currentRound={values.currentRound}
			maxRounds={3}
			questionCount={values.questionCount}
			deadline="2026-08-05T18:00:00Z"
		/>
	{/snippet}
</Story>
