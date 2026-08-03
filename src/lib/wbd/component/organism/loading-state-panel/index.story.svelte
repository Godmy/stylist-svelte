<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import LoadingStatePanel from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Loading round data' },
		{ name: 'description', type: 'text', defaultValue: 'Fetching snapshots and discussion messages.' }
	];
</script>

<Story
	title="Loading State Panel"
	component={LoadingStatePanel}
	category="Organisms/Wbd"
	description="Neutral loading panel for asynchronous WBD views."
	{controls}
>
	{#snippet children(values: any)}
		<LoadingStatePanel title={values.title} description={values.description} />
	{/snippet}
</Story>
