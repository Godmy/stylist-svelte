<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import MessageList from '../message-list/index.svelte';
	import type { Message, MessageThreadMessage, MessageThreadProps, User } from '$stylist/design-system/props/chat';
	import { createMessageThreadState } from '$stylist/design-system/models/message-thread.svelte';

	type Props = MessageThreadProps & {
		currentUser?: User;
		onMessageAction?: (action: string, message: MessageThreadMessage) => void;
	} & HTMLAttributes<HTMLDivElement>;

	let props: Props = $props();

	const state = createMessageThreadState(props);
	const mappedMessages = $derived(
		state.messages.map((message) => ({
			id: message.id,
			senderId: message.sender,
			content: message.text,
			timestamp: new Date(message.timestamp),
			status: message.status,
			type: 'text' as const
		}))
	);
	const resolvedCurrentUser = $derived(
		props.currentUser ?? { id: 'current-user', name: 'Current User' } as User
	);
	function handleMessageAction(action: string, message: any) {
		props.onMessageAction?.(action, message);
	}

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
				currentUser: _currentUser,
				onMessageAction: _onMessageAction,
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
			<!-- Use MessageList component instead of duplicating logic -->
			<MessageList
				messages={mappedMessages}
				currentUser={resolvedCurrentUser}
				onMessageAction={handleMessageAction}
			/>
		{/if}
	</div>
</div>
