<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const Paperclip = 'paperclip';
	const Mic = 'mic';
	const Send = 'send';

	import Button from '$stylist/control/component/atom/button/index.svelte';

	import type { SlotMessageComposer as IMessageComposerProps } from '$stylist/chat/interface/slot/message-composer';
	import createMessageComposerState from '$stylist/chat/function/state/message-composer/index.svelte';

	/**
	 * MessageComposer component - A message input component with attachment and voice options
	 *
	 * Following SOLID principles:
	 * - Single Responsibility: Only handles message composition and state
	 * - Open/Closed: Extendable through properties but closed for modification
	 * - Liskov Substitution: Can be substituted with other input components
	 * - Interface Segregation: Small focused interface
	 * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
	 *
	 * @param value - Current text value of the input
	 * @param placeholder - Placeholder text for the input
	 * @param class - Additional CSS classes for the container
	 * @param inputClass - Additional CSS classes for the input field
	 * @param buttonClass - Additional CSS classes for the buttons
	 * @param disabled - Whether the component is disabled
	 * @param showAttachmentButton - Whether to show the attachment button
	 * @param showVoiceButton - Whether to show the voice button
	 * @param onSendMessage - Callback when a message is sent
	 * @param onAttachmentClick - Callback when attachment button is clicked
	 * @param onVoiceClick - Callback when voice button is clicked
	 * @returns An accessible, styled message composer component
	 */
	let props: IMessageComposerProps = $props();

	const state = createMessageComposerState(props);
</script>

<div class={state.containerClasses} {...props}>
	<form class={state.formClasses} onsubmit={state.handleSubmit}>
		{#if state.showAttachmentButton}
			<Button
				variant="ghost"
				size="sm"
				type="button"
				onclick={state.handleAttachmentClick}
				disabled={state.disabled}
				class={state.attachmentButtonClasses}
			>
				<BaseIcon
					name={Paperclip}
					style="width:1.25rem;height:1.25rem;color:var(--color-text-secondary)"
				/>
			</Button>
		{/if}

		<div class={state.inputContainerClasses}>
			<textarea
				class={state.inputClasses}
				value={state.messageText}
				placeholder={props.placeholder}
				oninput={state.handleInput}
				onkeydown={state.handleKeyDown}
				disabled={state.disabled}
				rows="1"
			></textarea>
		</div>

		{#if state.showSendButton}
			<Button
				variant="primary"
				type="submit"
				disabled={state.disabled}
				class={state.sendButtonClasses}
			>
				<BaseIcon name={Send} style="width:1.25rem;height:1.25rem" />
			</Button>
		{:else if state.showVoiceButton}
			<Button
				variant="ghost"
				size="sm"
				type="button"
				onclick={state.handleVoiceClick}
				disabled={state.disabled}
				class={state.voiceButtonClasses}
			>
				<BaseIcon
					name={Mic}
					style="width:1.25rem;height:1.25rem;color:var(--color-text-secondary)"
				/>
			</Button>
		{/if}
	</form>
</div>

<style>
</style>
