<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Avatar } from '$stylist/components/atoms';
	import { Check, CheckCheck } from 'lucide-svelte';

	import { createChatPreviewState } from '$stylist/design-system/models/chat-preview.svelte';
	import type { ChatPreviewProps, ChatPreviewMessage } from '$stylist/design-system/props/chat-preview';

	type Props = ChatPreviewProps & HTMLAttributes<HTMLDivElement>;
	let props: Props = $props();

	const state = createChatPreviewState(props);

	const getChatMessageAlignmentClass = (isOwn: boolean) =>
		isOwn ? 'justify-end' : 'justify-start';

	const getChatMessageBubbleClasses = (isOwn: boolean) => {
		if (isOwn) {
			return 'bg-blue-500 text-white rounded-br-none ml-auto';
		} else {
			return 'bg-gray-100 text-gray-800 rounded-bl-none';
		}
	};
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
		{#each state.displayMessages as message}
			<div class="flex {getChatMessageAlignmentClass(!!message.isOwn)}">
				<div class="max-w-xs md:max-w-md">
					{#if !message.isOwn}
						<div class="flex items-center mb-1 text-xs font-semibold text-gray-600">
							{#if state.showAvatars && message.avatar}
								<Avatar src={message.avatar} alt={message.sender} size="sm" class="mr-2" />
							{/if}
							<span>{message.sender}</span>
						</div>
					{/if}

					<div class="rounded-lg px-4 py-2 text-sm {getChatMessageBubbleClasses(!!message.isOwn)}">
						<p class="text-sm">{message.text}</p>
					</div>

					<div class="flex items-center justify-end mt-1 text-xs text-gray-500">
						{#if message.timestamp}
							<span>{message.timestamp}</span>
						{/if}
						{#if message.isOwn && message.status}
							{#if message.status === 'read'}
								<CheckCheck class="ml-1 h-3 w-3 text-blue-500" />
							{:else}
								<Check class="ml-1 h-3 w-3 text-gray-400" />
							{/if}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
