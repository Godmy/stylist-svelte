<script lang="ts">
	import type { SlotChat as Chat } from '$stylist/chat/interface/slot/chat';
	import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
	import Avatar from '$stylist/media/component/atom/avatar/index.svelte';
	import Badge from '$stylist/information/component/atom/badge/index.svelte';
	import MessageTimestamp from '$stylist/chat/component/atom/message-timestamp/index.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import createChatItemState from '$stylist/chat/function/state/chat-item/index.svelte';

	export type ChatItemProps = {
		chat: Chat;
		currentUser: User;
		isActive?: boolean;
		onSelect?: () => void;
		onDelete?: () => void;
	} & HTMLAttributes<HTMLDivElement>;

	let props: ChatItemProps = $props();

	const state = createChatItemState({
		chat: props.chat,
		currentUser: props.currentUser,
		isActive: props.isActive,
		class: props.class != null ? String(props.class) : undefined
	});
</script>

<div
	class={state.containerClasses}
	class:active={props.isActive}
	role="button"
	tabindex="0"
	onclick={() => props.onSelect?.()}
	onkeydown={state.handleKeydown}
	{...props}
>
	<Avatar
		src={state.isGroupChat ? undefined : state.otherUser?.avatar}
		name={state.isGroupChat ? props.chat.name : state.otherUser?.name}
		status={state.isGroupChat ? 'online' : state.otherUser?.status}
		size="md"
		showStatus={!state.isGroupChat}
	/>

	<div class={state.chatInfoClasses}>
		<div class={state.chatNameClasses}>
			{state.isGroupChat ? props.chat.name : state.otherUser?.name}
		</div>
		<div class={state.lastMessageClasses}>
			{#if typeof props.chat.lastMessage !== 'string' && props.chat.lastMessage?.senderId !== props.currentUser.id}
				{state.lastMessagePreview}
			{:else}
				<span style="font-style: italic;">You: {state.lastMessagePreview}</span>
			{/if}
		</div>
	</div>

	<div class={state.chatMetaClasses}>
		{#if props.chat.lastMessage}
			<MessageTimestamp
				timestamp={typeof props.chat.lastMessage === 'object'
					? props.chat.lastMessage.timestamp
					: new Date()}
				formatStyle="time"
			/>
		{/if}

		{#if props.chat.unreadCount && props.chat.unreadCount > 0}
			<Badge variant="default" size="sm" class="ci-badge">
				{props.chat.unreadCount}
			</Badge>
		{/if}
	</div>

	<div class={state.chatActionsClasses}>
		{#if props.onDelete}
			<button
				type="button"
				onclick={(e) => {
					e.stopPropagation();
					props.onDelete?.();
				}}>Delete</button
			>
		{/if}
	</div>
</div>

<style>
	.chat-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		padding: var(--spacing-3) var(--spacing-4);
		cursor: pointer;
		border-bottom: 1px solid var(--color-border-primary);
		transition: background-color var(--duration-200);
		position: relative;
	}

	.chat-item:hover {
		background-color: var(--color-background-secondary);
	}

	.chat-item.active {
		background-color: var(--color-primary-50);
	}

	.chat-info {
		flex: 1;
		min-width: var(--size-0);
	}

	.chat-name {
		font-weight: var(--font-weight-semibold);
		color: var(--color-text-primary);
		font-size: var(--font-size-4);
		margin-bottom: var(--spacing-1);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.last-message {
		font-size: var(--font-size-3);
		color: var(--color-text-secondary);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.chat-meta {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		gap: var(--spacing-1);
	}

	.chat-actions {
		position: absolute;
		right: var(--spacing-2);
		opacity: var(--opacity-0);
		transition: opacity var(--duration-200);
	}

	.chat-item:hover .chat-actions {
		opacity: var(--opacity-100);
	}
	.ci-badge {
		position: absolute;
		top: 0.5rem;
		right: 0.5rem;
	}
</style>
