<script lang="ts">
	import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
	import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
	import MessageList from '$stylist/chat/component/molecule/message-list/index.svelte';
	import MessageInput from '$stylist/chat/component/atom/message-input/index.svelte';
	import createChatWindowState from '$stylist/chat/function/state/chat-window/index.svelte';

	let props: {
		chat: {
			id: string;
			name?: string;
			participants: User[];
			isGroup: boolean;
			lastMessage?: Message | string;
			lastMessageTime?: Date;
			unreadCount?: number;
			avatar?: string;
		};
		currentUser: User;
		messages: Message[];
		onMessageSend?: (content: string) => void;
		onMessageReaction?: (messageId: string, reaction: string) => void;
		onCall?: () => void;
		onVideoCall?: () => void;
		onChatInfo?: () => void;
	} = $props();

	const state = createChatWindowState(props);
</script>

<div class={state.containerClasses}>
	{#if props.chat}
		<div class={state.headerClasses}>
			<div class="cw-chat-name">{state.compatibleChat.name}</div>
			<div class="cw-header-actions">
				<button type="button" class="cw-action-btn" onclick={() => props.onCall?.()}>Call</button>
				<button type="button" class="cw-action-btn" onclick={() => props.onVideoCall?.()}
					>Video</button
				>
				<button type="button" class="cw-action-btn" onclick={() => props.onChatInfo?.()}
					>Info</button
				>
			</div>
		</div>
	{/if}

	<div class={state.messagesClasses}>
		<MessageList
			messages={props.messages}
			currentUser={props.currentUser}
			onMessageReaction={props.onMessageReaction}
		/>
	</div>

	<div class={state.inputClasses}>
		<MessageInput onSendMessage={state.handleMessageSend} />
	</div>
</div>

<style>
	.chat-window {
		display: flex;
		flex-direction: column;
		height: 100%;
		width: 100%;
		background-color: var(--color-background-secondary);
		border-radius: var(--border-radius-lg);
		overflow: hidden;
		box-shadow: var(--shadow-custom40);
	}

	.chat-window__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.75rem 1rem;
	}

	.chat-messages {
		flex: 1;
		overflow-y: auto;
	}

	.chat-input {
		border-top: 1px solid var(--color-border-primary);
		background-color: white;
	}
	.cw-chat-name {
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.cw-header-actions {
		display: flex;
		gap: 0.5rem;
	}
	.cw-action-btn {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
		background: none;
		border: none;
		cursor: pointer;
	}
</style>
