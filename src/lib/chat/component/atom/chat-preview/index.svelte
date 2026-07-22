<script lang="ts">
	import type { AnyProperty } from '$stylist/layout/type/object/any-property';
	import Avatar from '$stylist/media/component/atom/avatar/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createChatPreviewState from '$stylist/chat/function/state/chat-preview/index.svelte';
	import type { ChatPreviewMessage } from '$stylist/chat/type/struct/chat-preview-message';
	import { CHAT_PREVIEW_ICON_CHECK } from '$stylist/chat/const/value/chat-preview-icon-check';
	import { CHAT_PREVIEW_ICON_CHECK_CHECK } from '$stylist/chat/const/value/chat-preview-icon-check-check';

	let props: AnyProperty = $props();

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
			<div class={`cp-msg-row ${message.isOwn ? 'cp-msg-row--own' : ''}`}>
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

					<div class={`cp-bubble ${message.isOwn ? 'cp-bubble--own' : 'cp-bubble--other'}`}>
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
	.c-chat-preview {
		border-radius: 0.75rem;
		border: 1px solid var(--color-border-secondary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
	.c-chat-preview--elevated {
		border-color: transparent;
		box-shadow: 0 6px 16px -6px rgba(15, 23, 42, 0.16);
	}
	.c-chat-preview--muted {
		background-color: var(--color-background-secondary);
	}
	.c-chat-preview--sm {
		max-width: 24rem;
	}
	.c-chat-preview--md {
		max-width: 28rem;
	}
	.c-chat-preview--lg {
		max-width: 32rem;
	}
	.c-chat-preview__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
		margin-bottom: 1rem;
	}
	.c-chat-preview__chat-info {
		min-width: 0;
	}
	.c-chat-preview__title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.c-chat-preview__participants {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
	.c-chat-preview__messages {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.cp-msg-row {
		display: flex;
		justify-content: flex-start;
	}
	.cp-msg-row--own {
		justify-content: flex-end;
	}
	.cp-bubble--own {
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
		border-bottom-right-radius: 0;
	}
	.cp-bubble--other {
		background-color: var(--color-background-secondary);
		color: var(--color-text-primary);
		border-bottom-left-radius: 0;
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
