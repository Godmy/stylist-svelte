<script lang="ts">
  import { Icon } from '$stylist/components/atoms';
  import { createEventDispatcher } from 'svelte';

  import type { MessageInputProps } from '$stylist/design-system/interaction/communications/message-input';
  import { createMessageInputState } from '../../state.svelte';

  let props: MessageInputProps = $props();

  const messageState = createMessageInputState(props);

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
