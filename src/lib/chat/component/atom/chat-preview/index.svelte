<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import { Avatar, Icon as BaseIcon } from '$stylist/media';
	import { createChatPreviewState } from '$stylist/chat/function/state/chat-preview';
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
			<div class={state.participantsClasses} aria-label={`Participants: ${state.participants.join(', ')}`}>
				({state.participants.join(', ')})
			</div>
		</div>
	</div>

	<div class={state.messagesContainerClasses}>
		{#each displayMessages as message}
			<div class="flex {getChatMessageAlignmentClass(!!message.isOwn)}">
				<div class="max-w-xs md:max-w-md">
					{#if !message.isOwn}
						<div class="mb-1 flex items-center text-xs font-semibold text-[var(--color-text-secondary)]">
							{#if state.showAvatars && message.avatar}
								<Avatar src={message.avatar} alt={message.sender ?? message.author} size="sm" class="mr-2" />
							{/if}
							<span>{message.sender ?? message.author}</span>
						</div>
					{/if}

					<div class="rounded-lg px-4 py-2 text-sm {getChatMessageBubbleClasses(!!message.isOwn)}">
						<p class="text-sm">{message.text}</p>
					</div>

					<div class="mt-1 flex items-center justify-end text-xs text-[var(--color-text-secondary)]">
						{#if message.timestamp}
							<span>{message.timestamp}</span>
						{/if}
						{#if message.isOwn && message.status}
							{#if message.status === 'read'}
								<BaseIcon name={CHAT_PREVIEW_ICON_CHECK_CHECK} class="ml-1 h-3 w-3 text-[var(--color-primary-500)]" />
							{:else}
								<BaseIcon name={CHAT_PREVIEW_ICON_CHECK} class="ml-1 h-3 w-3 text-[var(--color-text-tertiary)]" />
							{/if}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>




