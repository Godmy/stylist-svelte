<script lang="ts">
	import { Icon } from '$stylist/components/atoms';
	import type { MessageInputProps } from '$stylist/design-system/props/chat';
	import { createEventDispatcher } from 'svelte';

	let props: MessageInputProps = $props();

	const messageState = $derived({
		disabled: props.disabled ?? false,
		placeholder: props.placeholder ?? 'Type a message...',
		showAttachmentButton: props.showAttachment ?? true,
		showEmojiButton: props.showEmoji ?? true,
		showSendButton: props.showSend ?? true,
		containerClasses: 'flex items-end gap-2 border-t border-gray-200 bg-white p-3',
		actionButtonsClasses: 'flex items-center gap-1',
		actionButtonClasses:
			'inline-flex h-9 w-9 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100 disabled:opacity-50',
		inputContainerClasses: 'flex-1',
		inputClasses:
			'w-full resize-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50',
		sendButtonClasses:
			'inline-flex h-9 w-9 items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50'
	});

	const dispatch = createEventDispatcher<{
		send: { content: string };
		attach: {};
		emoji: {};
	}>();

	let messageContent = $state('');

	function handleSend() {
		if (messageContent.trim()) {
			dispatch('send', { content: messageContent });
			messageContent = '';
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	}

	function handleAttach() {
		dispatch('attach', {});
	}

	function handleEmoji() {
		dispatch('emoji', {});
	}
</script>

<div class={messageState.containerClasses}>
	<div class={messageState.actionButtonsClasses}>
		{#if messageState.showAttachmentButton}
			<button
				class={messageState.actionButtonClasses}
				onclick={handleAttach}
				disabled={messageState.disabled}
				title="Attach file"
			>
				<Icon name="attachment" size="md" />
			</button>
		{/if}

		{#if messageState.showEmojiButton}
			<button
				class={messageState.actionButtonClasses}
				onclick={handleEmoji}
				disabled={messageState.disabled}
				title="Add emoji"
			>
				<Icon name="smile" size="md" />
			</button>
		{/if}
	</div>

	<div class={messageState.inputContainerClasses}>
		<textarea
			class={messageState.inputClasses}
			bind:value={messageContent}
			placeholder={messageState.placeholder}
			disabled={messageState.disabled}
			onkeydown={handleKeydown}
			rows={1}
		></textarea>
	</div>

	{#if messageState.showSendButton}
		<button
			class={messageState.sendButtonClasses}
			onclick={handleSend}
			disabled={messageState.disabled || !messageContent.trim()}
			title="Send"
		>
			<Icon name="send" size="md" />
		</button>
	{/if}
</div>
