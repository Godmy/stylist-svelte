<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { SlotMessageInput as MessageInputContract } from '$stylist/chat/interface/slot/message-input';
	import createMessageInputState from '$stylist/chat/function/state/message-input/index.svelte';

	let props: MessageInputContract & HTMLAttributes<HTMLDivElement> = $props();
	const state = createMessageInputState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={state.actionButtonsClasses}>
		{#if state.showAttachmentButton}
			<button
				class={state.actionButtonClasses}
				onclick={() => state.handleAttach()}
				disabled={state.disabled}
				title="Attach file"
			>
				<Icon name="attachment" size="md" />
			</button>
		{/if}

		{#if state.showEmojiButton}
			<button
				class={state.actionButtonClasses}
				onclick={() => state.handleEmoji()}
				disabled={state.disabled}
				title="Add emoji"
			>
				<Icon name="smile" size="md" />
			</button>
		{/if}
	</div>

	<div class={state.inputContainerClasses}>
		<textarea
			class={state.inputClasses}
			bind:value={state.messageContent}
			placeholder={state.placeholder}
			disabled={state.disabled}
			oninput={(e) => state.handleInput(e)}
			onkeydown={(e) => state.handleKeydown(e)}
			rows={1}
		></textarea>
	</div>

	{#if state.showSendButton}
		<button
			class={state.sendButtonClasses}
			onclick={() => state.handleSend()}
			disabled={state.disabled || !state.messageContent.trim()}
			title="Send"
		>
			<Icon name="send" size="md" />
		</button>
	{/if}
</div>

<style>
	.message-input {
		display: flex;
		align-items: flex-end;
		gap: 0.5rem;
		border-top: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.75rem;
	}
	.message-input__actions {
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}
	.message-input__action-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border: none;
		border-radius: 0.375rem;
		background: none;
		color: var(--color-text-secondary);
		cursor: pointer;
		transition: background-color var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}
	.message-input__action-btn:hover:not(:disabled) {
		background-color: var(--color-background-secondary);
	}
	.message-input__action-btn:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.message-input__field-wrap {
		flex: 1;
	}
	.message-input__field {
		width: 100%;
		resize: none;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.5rem 0.75rem;
		font: inherit;
		font-size: 0.875rem;
		color: var(--color-text-primary);
		outline: none;
	}
	.message-input__field:focus {
		border-color: var(--color-primary-500);
		box-shadow: 0 0 0 1px var(--color-primary-500);
	}
	.message-input__field:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.message-input__send {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border: none;
		border-radius: 0.375rem;
		background-color: var(--color-primary-600);
		color: var(--color-text-inverse);
		cursor: pointer;
		transition: background-color var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}
	.message-input__send:hover:not(:disabled) {
		background-color: var(--color-primary-700);
	}
	.message-input__send:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
