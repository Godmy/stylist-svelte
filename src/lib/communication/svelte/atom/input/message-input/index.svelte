<script lang="ts">
	import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
	import { Icon } from '$stylist';
	import type { MessageInputContract } from '$stylist/communication/interface/component/message-input';
	import { createMessageInputState } from '$stylist/communication/function/state/message-input';
	import {
		handleInputFn,
		handleKeydownFn,
		handleAttachFn,
		handleEmojiFn
	} from '$stylist/communication/function/script/message-input-handlers';

	let props: MessageInputContract & InteractionHTMLAttributes<HTMLDivElement> = $props();
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

	const messageState = createMessageInputState(props as any);

	let messageContent = $state('');

	function handleSend() {
		if (messageContent.trim()) {
			props.onSendMessage?.(messageContent);
			messageContent = '';
		}
	}

	function handleInput(e: Event) {
		handleInputFn(e, props);
	}

	function handleKeydown(e: KeyboardEvent) {
		handleKeydownFn(e, handleSend);
	}

	function handleAttach() {
		handleAttachFn(props);
	}

	function handleEmoji() {
		handleEmojiFn(props);
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






