<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import Avatar from '$stylist/media/component/atom/avatar/index.svelte';
	import createChatMessageState from '$stylist/chat/function/state/chat-message/index.svelte';

	export type ChatMessageStatus = 'sent' | 'delivered' | 'read';

	export type ChatMessageProps = {
		text?: string;
		sender?: string;
		senderAvatar?: string;
		timestamp?: string;
		status?: ChatMessageStatus;
		isOwn?: boolean;
		children?: Snippet;
		class?: string;
		contentClass?: string;
		headerClass?: string;
		footerClass?: string;
		variant?: 'default' | 'primary' | 'secondary';
	} & HTMLAttributes<HTMLDivElement>;

	let props: ChatMessageProps = $props();

	const state = createChatMessageState({
		text: props.text,
		sender: props.sender,
		senderAvatar: props.senderAvatar,
		timestamp: props.timestamp,
		status: props.status,
		isOwn: props.isOwn,
		class: props.class,
		contentClass: props.contentClass,
		headerClass: props.headerClass,
		footerClass: props.footerClass,
		variant: props.variant
	});
</script>

<div class={state.containerClasses} {...props}>
	<div class={state.contentClasses}>
		{#if !props.isOwn}
			<div class={state.headerClasses}>
				{#if props.senderAvatar}
					<Avatar
						src={props.senderAvatar}
						alt={props.sender}
						size="sm"
						style="margin-right:0.5rem"
					/>
				{/if}
				<span class="cm-sender-name">{props.sender}</span>
			</div>
		{/if}

		<div class={state.bubbleClasses}>
			{#if props.text}
				<p class={state.textClasses}>{props.text}</p>
			{/if}
			{#if props.children}
				<div>
					{#if props.children}{@render props.children()}{/if}
				</div>
			{/if}
		</div>

		<div class={state.footerClasses}>
			<span>{props.timestamp}</span>
			{#if props.isOwn && props.status}
				<BaseIcon name={state.statusIcon} class={state.statusIconClasses} />
			{/if}
		</div>
	</div>
</div>

<style>
	.c-chat-message {
		display: flex;
		justify-content: flex-start;
	}
	.c-chat-message--own {
		justify-content: flex-end;
	}
	.c-chat-message__content {
		max-width: 20rem;
	}
	@media (min-width: 768px) {
		.c-chat-message__content {
			max-width: 28rem;
		}
	}
	.c-chat-message__header {
		display: flex;
		align-items: center;
		margin-bottom: 0.25rem;
		font-size: 0.6875rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		color: var(--color-text-secondary);
	}
	.c-chat-message__bubble {
		border-radius: 1.25rem;
		padding: 0.75rem 1rem;
		box-shadow: 0 8px 16px -10px rgba(15, 23, 42, 0.2);
	}
	.c-chat-message__bubble--own {
		border-bottom-right-radius: 0.375rem;
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
	}
	.c-chat-message__bubble--default {
		border-bottom-left-radius: 0.375rem;
		background-color: var(--color-background-secondary);
		color: var(--color-text-primary);
	}
	.c-chat-message__bubble--primary {
		border-bottom-left-radius: 0.375rem;
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}
	.c-chat-message__bubble--secondary {
		border-bottom-left-radius: 0.375rem;
		background-color: var(--color-background-tertiary);
		color: var(--color-text-primary);
	}
	.c-chat-message__text {
		font-size: 0.875rem;
		line-height: 1.5rem;
	}
	.c-chat-message__footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-top: 0.25rem;
		font-size: 0.6875rem;
		color: var(--color-text-secondary);
	}
	.c-chat-message__status-icon {
		width: 0.75rem;
		height: 0.75rem;
		margin-left: 0.25rem;
		color: var(--color-text-tertiary);
	}
	.c-chat-message__status-icon--read {
		color: var(--color-primary-500);
	}
	.cm-sender-name {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary);
	}
</style>
