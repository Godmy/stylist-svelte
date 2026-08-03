<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import DiscussionMessageThread from './index.svelte';

	const controls: SlotStory[] = [];
	const messages = [
		{
			id: 'm-1',
			questionId: 'q-reserve',
			roundNumber: 2,
			alias: 'Expert Green',
			message: 'The optimistic value assumes that the new seismic block is processed before Q3.',
			createdAt: '2026-08-02T09:30:00Z',
			isOwn: true
		},
		{
			id: 'm-2',
			questionId: 'q-reserve',
			roundNumber: 2,
			alias: 'Expert Blue',
			message: 'I would keep the upper bound lower until drilling confirms the northern segment.',
			parentId: 'm-1',
			createdAt: '2026-08-02T10:10:00Z'
		}
	];
</script>

<Story
	title="Discussion Message Thread"
	component={DiscussionMessageThread}
	category="Molecules/Wbd"
	description="Threaded anonymous discussion for one WBD question."
	{controls}
>
	{#snippet children()}
		<DiscussionMessageThread {messages} />
	{/snippet}
</Story>
