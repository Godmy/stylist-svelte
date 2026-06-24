<script lang="ts">
	import Avatar from '$stylist/media/component/atom/avatar/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createChatPreviewState from '$stylist/chat/function/state/chat-preview/index.svelte';
	import type { ChatPreviewContract } from '$stylist/chat/type/struct/chat-preview-contract';
	import type { ChatPreviewMessage } from '$stylist/chat/type/struct/chat-preview-message';
	import { CHAT_PREVIEW_ICON_CHECK } from '$stylist/chat/const/value/chat-preview-icon-check';
	import { CHAT_PREVIEW_ICON_CHECK_CHECK } from '$stylist/chat/const/value/chat-preview-icon-check-check';
	import { getChatMessageAlignmentClass } from '$stylist/chat/function/script/chat-message-alignment-class';
	import { getChatMessageBubbleClasses } from '$stylist/chat/function/script/chat-message-bubble-classes';

	let props: ChatPreviewContract = $props();

	const state = createChatPreviewState(props);
	const displayMessages = $derived(state.displayMessages as ChatPreviewMessage[]);
</script>

<div class={state.classes} role="region" aria-label={`Chat preview: ${state.title}`}>
	<div class={state.headerClasses}>
		<div class={state.chatInfoClasses}>
			<h3 class={state.titleClasses} aria-label={state.title}>{state.title}</h3>
			<div
				class={state.participantsClasses}
				aria-label={`Participants: ${state.participants.join(', ')}`}
			>
				({state.participants.join(', ')})
			</div>
		</div>
	</div>

	<div class={state.messagesContainerClasses}>
		{#each displayMessages as message}
			<div class={`cp-msg-row ${getChatMessageAlignmentClass(!!message.isOwn)}`}>
				<div class="cp-msg-wrap">
					{#if !message.isOwn}
						<div class="cp-sender-row">
							{#if state.showAvatars && message.avatar}
								<Avatar
									src={message.avatar}
									alt={message.sender ?? message.author}
									size="sm"
									style="margin-right:0.5rem"
								/>
							{/if}
							<span>{message.sender ?? message.author}</span>
						</div>
					{/if}

					<div class={`cp-bubble ${getChatMessageBubbleClasses(!!message.isOwn)}`}>
						<p>{message.text}</p>
					</div>

					<div class="cp-msg-footer">
						{#if message.timestamp}
							<span>{message.timestamp}</span>
						{/if}
						{#if message.isOwn && message.status}
							{#if message.status === 'read'}
								<BaseIcon
									name={CHAT_PREVIEW_ICON_CHECK_CHECK}
									style="width:0.75rem;height:0.75rem;margin-left:0.25rem;color:var(--color-primary-500)"
								/>
							{:else}
								<BaseIcon
									name={CHAT_PREVIEW_ICON_CHECK}
									style="width:0.75rem;height:0.75rem;margin-left:0.25rem;color:var(--color-text-tertiary)"
								/>
							{/if}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.cp-msg-row {
		display: flex;
	}
	.cp-msg-wrap {
		max-width: 20rem;
	}
	@media (min-width: 768px) {
		.cp-msg-wrap {
			max-width: 28rem;
		}
	}
	.cp-sender-row {
		margin-bottom: 0.25rem;
		display: flex;
		align-items: center;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary);
	}
	.cp-bubble {
		border-radius: 0.5rem;
		padding: 0.5rem 1rem;
		font-size: 0.875rem;
	}
	.cp-msg-footer {
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
</style>
