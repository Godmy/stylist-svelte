<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import EmptyStatePanel from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'No questions yet' },
		{ name: 'description', type: 'text', defaultValue: 'Create or import questions to start the Delphi session.' },
		{ name: 'actionLabel', type: 'text', defaultValue: 'Add question' }
	];
</script>

<Story
	title="Empty State Panel"
	component={EmptyStatePanel}
	category="Organisms/Wbd"
	description="Reusable empty state for WBD workspace panels."
	{controls}
>
	{#snippet children(values: any)}
		<EmptyStatePanel
			title={values.title}
			description={values.description}
			actionLabel={values.actionLabel}
		/>
	{/snippet}
</Story>
