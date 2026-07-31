<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import MessageThread from './index.svelte';

	let lastAction = $state('none');

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Project chat' },
		{ name: 'loading', type: 'boolean', defaultValue: false },
		{ name: 'messageCount', type: 'number', defaultValue: 4, min: 1, max: 8 }
	];

	const allMessages = [
		{ id: '1', text: 'Hello!', sender: 'contact', timestamp: '14:30', isOwn: false },
		{ id: '2', text: 'Hi there!', sender: 'current-user', timestamp: '14:31', isOwn: true },
		{
			id: '3',
			text: 'Can we ship this today?',
			sender: 'contact',
			timestamp: '14:32',
			isOwn: false
		},
		{
			id: '4',
			text: 'Yes, after final QA.',
			sender: 'current-user',
			timestamp: '14:33',
			isOwn: true
		},
		{ id: '5', text: 'Perfect, thanks.', sender: 'contact', timestamp: '14:34', isOwn: false }
	];
</script>

<Story
	id="molecules-message-thread"
	title="Molecules / Information / Messages / MessageThread"
	component={MessageThread}
	category="Molecules/Information/Messages"
	description="Composed thread container for rendering a full conversation."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<MessageThread
				title={args.title}
				messages={allMessages.slice(0, args.messageCount)}
				loading={args.loading}
				class="_c2"
			/>
			<p class="_c3">Last action: {lastAction}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		height: 24rem;
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		height: 320px;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
