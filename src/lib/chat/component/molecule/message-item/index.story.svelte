<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
	import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
	import MessageItem from './index.svelte';

	let lastEvent = $state('none');

	const controls: SlotStory[] = [
		{ name: 'isOwn', type: 'boolean', defaultValue: false },
		{ name: 'showAvatar', type: 'boolean', defaultValue: true },
		{ name: 'enableReactions', type: 'boolean', defaultValue: true },
		{ name: 'withAttachment', type: 'boolean', defaultValue: false }
	];

	const currentUser: User = {
		id: '1',
		name: 'Current User',
		avatar: 'https://i.pravatar.cc/80?img=19',
		status: 'online'
	};
	const otherUser: User = {
		id: '2',
		name: 'John Doe',
		avatar: 'https://i.pravatar.cc/80?img=20',
		status: 'online'
	};

	const baseMessage: Message = {
		id: 'm1',
		content: 'Hello! We have completed the API integration for this sprint.',
		timestamp: new Date(),
		status: 'read',
		senderId: '2'
	};

	const attachmentMessage: Message = {
		...baseMessage,
		id: 'm2',
		type: 'image',
		attachments: [
			{
				id: 'a1',
				name: 'preview.png',
				type: 'image/png',
				size: 20480,
				url: 'https://placehold.co/160x100'
			}
		]
	};
</script>

<Story
	id="molecules-message-item"
	title="Molecules / Information / Messages / MessageItem"
	component={MessageItem}
	category="Molecules/Information/Messages"
	description="Single message block supporting avatar, reactions and actions."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<MessageItem
				message={args.withAttachment ? attachmentMessage : baseMessage}
				isOwn={args.isOwn}
				showAvatar={args.showAvatar}
				enableReactions={args.enableReactions}
				sender={args.isOwn ? currentUser : otherUser}
				onReaction={(reaction) => (lastEvent = `reaction:${reaction}`)}
				onReply={() => (lastEvent = 'reply')}
				onForward={() => (lastEvent = 'forward')}
			/>
			<p class="_c2">Last event: {lastEvent}</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
