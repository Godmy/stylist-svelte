<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { SlotMessageInput as MessageInputContract } from '$stylist/chat/interface/slot/message-input';
	import createMessageInputState from '$stylist/chat/function/state/message-input/index.svelte';

	let props: MessageInputContract & HTMLAttributes<HTMLDivElement> & SlotInteraction = $props();
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
</style>
