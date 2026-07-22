<script lang="ts">
	import ChatMessage from '$stylist/chat/component/molecule/chat-message/index.svelte';
	import MessageComposer from '$stylist/chat/component/molecule/message-composer/index.svelte';
	import stateFn from '$stylist/chat/function/state/chat-room/index.svelte';
	import type { ChatRoomProps } from '$stylist/chat/type/alias/chat-room-props';

	let props: ChatRoomProps = $props();
	const state = stateFn(props);
</script>

<div class={state.containerClasses} {...props}>
	<!-- Header -->
	<header class={state.headerClasses}>
		<div class="cr-title-wrap">
			{#if props.title}
				<h2 class="cr-title">{props.title}</h2>
			{/if}
			{#if props.subtitle}
				<p class="cr-subtitle">{props.subtitle}</p>
			{/if}
		</div>
		<div class="cr-participants">
			{#each props.participants.slice(0, 3) as participant, index}
				<div class={state.participantAvatarClasses(index)} style="z-index: {10 - index};">
					<img
						src={participant.avatar}
						alt={participant.name}
						style="width:100%;height:100%;object-fit:cover"
					/>
				</div>
			{/each}
			{#if props.participants.length > 3}
				<div class={state.participantOverflowClasses} style="z-index: var(--z-index-base);">
					<span class="cr-overflow">+{props.participants.length - 3}</span>
				</div>
			{/if}
		</div>
	</header>

	<!-- Messages area -->
	<div class={state.messagesAreaClasses}>
		{#if props.loading}
			<div class={state.loadingClasses}>
				<div class={state.spinnerClasses}></div>
			</div>
		{:else}
			{#each props.messages as message}
				<ChatMessage
					text={message.text}
					sender={message.sender}
					senderAvatar={message.senderAvatar}
					timestamp={message.timestamp}
					status={message.status}
					isOwn={message.isOwn}
					variant={message.isOwn ? 'primary' : 'default'}
				/>
			{/each}
		{/if}
	</div>

	<!-- Message composer -->
	<footer class={state.footerClasses}>
		<MessageComposer
			value={state.messageText}
			onSendMessage={state.handleSend}
			placeholder="Type a message..."
		/>
	</footer>
</div>

<style>
	.c-chat-room {
		display: flex;
		flex-direction: column;
		height: 100%;
		overflow: hidden;
		border-radius: 1.5rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 20px 40px -12px rgba(15, 23, 42, 0.18);
	}
	.c-chat-room__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	.c-chat-room__messages {
		flex: 1;
		overflow-y: auto;
		background-color: var(--color-background-secondary);
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.c-chat-room__messages--compact {
		gap: 0.5rem;
	}
	.c-chat-room__messages--spacious {
		gap: 1.5rem;
	}
	.c-chat-room__footer {
		border-top: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	.c-chat-room__avatar {
		width: 2rem;
		height: 2rem;
		overflow: hidden;
		border-radius: 9999px;
		box-shadow: 0 0 0 2px var(--color-background-primary);
	}
	.c-chat-room__avatar--overlap {
		margin-left: -0.5rem;
	}
	.c-chat-room__overflow {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		background-color: var(--color-background-secondary);
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary);
		box-shadow: 0 0 0 2px var(--color-background-primary);
	}
	.c-chat-room__loading {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}
	.c-chat-room__spinner {
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		border: 2px solid transparent;
		border-bottom-color: var(--color-primary-500);
		animation: c-chat-room-spin 0.7s linear infinite;
	}
	@keyframes c-chat-room-spin {
		to {
			transform: rotate(360deg);
		}
	}
	.cr-title-wrap {
		flex: 1;
	}
	.cr-title {
		font-size: 1.125rem;
		font-weight: 600;
	}
	.cr-subtitle {
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}
	.cr-participants {
		display: flex;
		align-items: center;
	}
	.cr-overflow {
		font-size: 0.75rem;
	}
</style>
