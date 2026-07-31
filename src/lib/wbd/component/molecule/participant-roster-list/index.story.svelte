<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import ParticipantRosterList from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'submittedCount', type: 'number', defaultValue: 2, min: 0, max: 4 }
	];

	const names = ['Ada Lovelace', 'Grace Hopper', 'Alan Turing', 'Margaret Hamilton'];
</script>

<Story
	{controls}
	component={ParticipantRosterList}
	title="ParticipantRosterList"
	category="Molecules/Wbd"
	description="Roster of estimators with submission status for the current round."
>
	{#snippet children(values: any)}
		<ParticipantRosterList
			participants={names.map((displayName, index) => ({
				id: `p${index + 1}`,
				displayName,
				role: index === 0 ? 'coordinator' : 'estimator',
				hasSubmitted: index < (values.submittedCount as number)
			}))}
		/>
	{/snippet}
</Story>
