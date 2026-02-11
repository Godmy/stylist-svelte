<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Avatar } from '$stylist/components/atoms';
	import { Check, CheckCheck } from 'lucide-svelte';

	import type { MessageThreadProps } from '$stylist/design-system/props';
	import { createMessageThreadState } from './state.svelte';
	import {
		DEFAULT_CHAT_MESSAGE_VARIANT,
		getChatMessageAlignmentClass,
		getChatMessageBubbleClasses,
		getChatMessageFooterClasses,
		getChatMessageHeaderClasses,
		getChatMessageStatusIconClasses
	} from '$stylist/design-system/classes/chat';

	type Props = MessageThreadProps & HTMLAttributes<HTMLDivElement>;

	let props: Props = $props();

	const state = createMessageThreadState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				messages: _messages,
				title: _title,
				containerClass: _containerClass,
				messageContainerClass: _messageContainerClass,
				headerClass: _headerClass,
				loading: _loading,
				variant: _variant,
				messageVariant: _messageVariant,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.hostClasses} {...restProps}>
	{#if state.title}
		<header class={state.headerClasses}>
			<h2 class="text-lg font-semibold">{state.title}</h2>
		</header>
	{/if}

	<div class={`${state.containerClasses} ${state.variantClass}`}>
		{#if state.loading}
			<div class={state.loadingClasses}>
				<div class={state.spinnerClasses}></div>
			</div>
		{:else}
			<div class={state.messageContainerClasses}>
				{#each state.messages as message}
					<div class={`flex ${getChatMessageAlignmentClass(message.isOwn)}`}>
						<div class="max-w-xs md:max-w-md">
							{#if !message.isOwn}
								<div class={getChatMessageHeaderClasses()}>
									{#if message.senderAvatar}
										<Avatar
											src={message.senderAvatar}
											alt={message.sender}
											size="sm"
											class="mr-2"
										/>
									{/if}
									<span>{message.sender}</span>
								</div>
							{/if}

							<div
								class={getChatMessageBubbleClasses(
									message.isOwn,
									state.messageVariant ?? DEFAULT_CHAT_MESSAGE_VARIANT
								)}
							>
								<p class="text-sm">{message.text}</p>
							</div>

							<div class={getChatMessageFooterClasses()}>
								<span>{message.timestamp}</span>
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
		{/if}
	</div>
</div>

