<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Icon } from '$stylist/components/atoms';
	import type { MessageInputProps } from '$stylist/design-system/props/chat';
	import { createMessageInputState } from '$stylist/design-system/models/message-input.svelte';

	type Props = MessageInputProps & HTMLAttributes<HTMLDivElement>;
	let props: Props = $props();
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				disabled: _disabled,
				placeholder: _placeholder,
				showAttachment: _showAttachment,
				showEmoji: _showEmoji,
				showSend: _showSend,
				...rest
			} = props;
			return rest;
		})()
	);

	const messageState = $derived(createMessageInputState(props));

	let messageContent = $state('');

	function handleSend() {
		if (messageContent.trim()) {
			props.onSendMessage?.(messageContent);
			messageContent = '';
		}
	}

	function handleInput(e: Event) {
		const target = e.target as HTMLTextAreaElement;
		props.onMessageInput?.(target.value);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	}

	function handleAttach() {
		props.onAttachClick?.();
	}

	function handleEmoji() {
		props.onEmojiClick?.();
	}
</script>

<div class={messageState.containerClasses} {...restProps}>
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
			oninput={handleInput}
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



