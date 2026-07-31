<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DiscussionNoteItem from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'authorLabel', type: 'text', defaultValue: 'Estimator 2' },
		{
			name: 'message',
			type: 'text',
			defaultValue: 'My pessimistic estimate assumes the payment gateway API needs a rewrite.'
		}
	];
</script>

<Story
	{controls}
	component={DiscussionNoteItem}
	title="DiscussionNoteItem"
	category="Molecules/Wbd"
	description="A rationale note explaining an outlier estimate during the discussion round."
>
	{#snippet children(values: any)}
		<DiscussionNoteItem
			note={{
				id: 'n1',
				authorLabel: values.authorLabel as string,
				message: values.message as string,
				timestamp: '10:24'
			}}
		/>
	{/snippet}
</Story>
