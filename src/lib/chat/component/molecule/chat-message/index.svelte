<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
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
	} & HTMLAttributes<HTMLDivElement> & SlotInteraction;

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
	.cm-sender-name {
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary);
	}
</style>
