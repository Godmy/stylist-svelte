<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Paperclip, Mic, Send } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';

  import type { IMessageComposerProps } from './types';
  import { MessageComposerStyleManager } from './styles';

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
  let {
    value = '',
    placeholder = 'Type a message...',
    class: hostClass = '',
    inputClass = '',
    buttonClass = '',
    disabled = false,
    showAttachmentButton = true,
    showVoiceButton = true,
    onSendMessage,
    onAttachmentClick,
    onVoiceClick,
    ...restProps
  }: IMessageComposerProps = $props();

  let messageText = $state(value);

  $effect(() => {
    messageText = value;
  });

  function handleInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    messageText = target.value;
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (messageText.trim() && !disabled) {
      onSendMessage?.(messageText);
      messageText = '';
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  function handleAttachmentClick() {
    onAttachmentClick?.();
  }

  function handleVoiceClick() {
    onVoiceClick?.();
  }

  // Derived classes using StyleManager
  let containerClasses = $derived(MessageComposerStyleManager.getContainerClasses(hostClass));
  let formClasses = $derived(MessageComposerStyleManager.getFormClasses());
  let attachmentButtonClasses = $derived(MessageComposerStyleManager.getAttachmentButtonClasses());
  let inputContainerClasses = $derived(MessageComposerStyleManager.getInputContainerClasses());
  let inputClasses = $derived(MessageComposerStyleManager.getInputClasses(inputClass));
  let sendButtonClasses = $derived(MessageComposerStyleManager.getSendButtonClasses(buttonClass));
  let voiceButtonClasses = $derived(MessageComposerStyleManager.getVoiceButtonClasses(buttonClass));
</script>

<div class={containerClasses} {...restProps}>
  <form class={formClasses} onsubmit={handleSubmit}>
    {#if showAttachmentButton}
      <Button
        variant="ghost"
        size="sm"
        type="button"
        onclick={handleAttachmentClick}
        disabled={disabled}
        class={attachmentButtonClasses}
      >
        <Paperclip class="h-5 w-5 text-[--color-text-secondary]" />
      </Button>
    {/if}

    <div class={inputContainerClasses}>
      <textarea
        class={inputClasses}
        value={messageText}
        placeholder={placeholder}
        oninput={handleInput}
        onkeydown={handleKeyDown}
        disabled={disabled}
        rows="1"
      ></textarea>
    </div>

    {#if messageText.trim()}
      <Button
        variant="primary"
        type="submit"
        disabled={disabled}
        class={sendButtonClasses}
      >
        <Send class="h-5 w-5" />
      </Button>
    {:else if showVoiceButton}
      <Button
        variant="ghost"
        size="sm"
        type="button"
        onclick={handleVoiceClick}
        disabled={disabled}
        class={voiceButtonClasses}
      >
        <Mic class="h-5 w-5 text-[--color-text-secondary]" />
      </Button>
    {/if}
  </form>
</div>
