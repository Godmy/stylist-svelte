<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
	import { Avatar, Icon as BaseIcon } from '$stylist/components/atoms';
	import { createChatPreviewState } from '$stylist/design-system/models/interaction/chat-preview.svelte';
	import type { ChatPreviewProps } from '$stylist/design-system/contracts/interaction/chat-preview';

	const Check = 'check';
	const CheckCheck = 'check-check';

	type Props = ChatPreviewProps & InteractionHTMLAttributes<HTMLDivElement>;
	let props: Props = $props();

	const state = createChatPreviewState(props);

	const getChatMessageAlignmentClass = (isOwn: boolean) => (isOwn ? 'justify-end' : 'justify-start');

	const getChatMessageBubbleClasses = (isOwn: boolean) => {
		if (isOwn) {
			return 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)] rounded-br-none ml-auto';
		}

		return 'bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] rounded-bl-none';
	};
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
		{#each state.displayMessages as message}
			<div class="flex {getChatMessageAlignmentClass(!!message.isOwn)}">
				<div class="max-w-xs md:max-w-md">
					{#if !message.isOwn}
						<div class="mb-1 flex items-center text-xs font-semibold text-[var(--color-text-secondary)]">
							{#if state.showAvatars && message.avatar}
								<Avatar src={message.avatar} alt={message.sender} size="sm" class="mr-2" />
							{/if}
							<span>{message.sender}</span>
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
								<BaseIcon name={CheckCheck} class="ml-1 h-3 w-3 text-[var(--color-primary-500)]" />
							{:else}
								<BaseIcon name={Check} class="ml-1 h-3 w-3 text-[var(--color-text-tertiary)]" />
							{/if}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>




