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
