<script lang="ts">
	import { Avatar } from '$stylist/components/atoms';
	import { Check, CheckCheck } from 'lucide-svelte';

	import { createChatPreviewState } from './state.svelte';
	import type { ChatPreviewProps } from './state.svelte';
	import { mergeClasses } from '$stylist/utils/classes';

	let props: ChatPreviewProps = $props();

	const state = createChatPreviewState(props);

	const getChatMessageAlignmentClass = (isOwn: boolean) =>
		isOwn ? 'justify-end' : 'justify-start';

	const getChatMessageBubbleClasses = (
		isOwn: boolean,
		variant: 'default' | 'primary' | 'secondary',
		className = ''
	) => {
		const base = ['rounded-lg px-4 py-2 text-sm'];
		if (isOwn) base.push('bg-blue-500 text-white rounded-br-none');
		else {
			const variantClasses: Record<typeof variant, string> = {
				default: 'bg-gray-100 text-gray-800 rounded-bl-none',
				primary: 'bg-blue-100 text-blue-800 rounded-bl-none',
				secondary: 'bg-gray-200 text-gray-900 rounded-bl-none'
			};
			base.push(variantClasses[variant]);
		}
		if (className) base.push(className);
		return base.join(' ');
	};

	const getChatMessageHeaderClasses = (className = '') =>
		mergeClasses('flex items-center mb-1 text-xs font-semibold text-gray-600', className);

	const getChatMessageFooterClasses = (className = '') =>
		mergeClasses('flex items-center justify-end mt-1 text-xs text-gray-500', className);

	const getChatMessageStatusIconClasses = (status: string) =>
		mergeClasses('ml-1 h-3 w-3', status === 'read' ? 'text-blue-500' : 'text-gray-400');
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
			<div class={`flex ${getChatMessageAlignmentClass(!!message.isOwn)}`}>
				<div class="max-w-xs md:max-w-md">
					{#if !message.isOwn}
						<div class={getChatMessageHeaderClasses()}>
							{#if state.showAvatars && message.avatar}
								<Avatar src={message.avatar} alt={message.sender} size="sm" class="mr-2" />
							{/if}
							<span>{message.sender}</span>
						</div>
					{/if}

					<div class={getChatMessageBubbleClasses(!!message.isOwn, 'default')}>
						<p class="text-sm">{message.text}</p>
					</div>

					<div class={getChatMessageFooterClasses()}>
						{#if message.timestamp}
							<span>{message.timestamp}</span>
						{/if}
						{#if message.isOwn && message.status}
							{#if message.status === 'read'}
								<CheckCheck class={getChatMessageStatusIconClasses(message.status)} />
							{:else}
								<Check class={getChatMessageStatusIconClasses(message.status)} />
							{/if}
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
