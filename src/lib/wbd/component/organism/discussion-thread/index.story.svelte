<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DiscussionThread from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'noteCount', type: 'number', defaultValue: 2, min: 0, max: 3 }
	];

	const notes = [
		{
			id: 'n1',
			authorLabel: 'Estimator 1',
			message: 'My pessimistic estimate assumes we need a payment gateway rewrite.',
			timestamp: '10:12'
		},
		{
			id: 'n2',
			authorLabel: 'Estimator 3',
			message: 'Agreed, but I think the existing SDK covers most of it already.',
			timestamp: '10:15'
		},
		{
			id: 'n3',
			authorLabel: 'Coordinator',
			message: "Let's re-estimate with that assumption clarified.",
			timestamp: '10:18'
		}
	];
</script>

<Story
	{controls}
	component={DiscussionThread}
	title="DiscussionThread"
	category="Organisms/Wbd"
	description="Discussion notes explaining outlier estimates, with a composer to add more."
>
	{#snippet children(values: any)}
		<DiscussionThread notes={notes.slice(0, values.noteCount as number)} />
	{/snippet}
</Story>
