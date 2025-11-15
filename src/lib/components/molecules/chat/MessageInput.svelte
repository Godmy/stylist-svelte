<script lang="ts">
  import Icon from '$lib/components/atoms/media/Icon/Icon.svelte';
  import { createEventDispatcher } from 'svelte';

  // Props
  let { 
    placeholder = 'Написать сообщение...',
    disabled = false,
    showAttachmentButton = true,
    showEmojiButton = true,
    showSendButton = true
  }: {
    placeholder?: string;
    disabled?: boolean;
    showAttachmentButton?: boolean;
    showEmojiButton?: boolean;
    showSendButton?: boolean;
  } = $props();

  // Events
  const dispatch = createEventDispatcher<{
    send: { content: string };
    attach: {};
    emoji: {};
  }>();

  // Local state
  let messageContent = $state('');

  // Handle sending message
  function handleSend() {
    if (messageContent.trim()) {
      dispatch('send', { content: messageContent });
      messageContent = '';
    }
  }

  // Handle key events
  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  // Handle attach button
  function handleAttach() {
    dispatch('attach', {});
  }

  // Handle emoji button
  function handleEmoji() {
    dispatch('emoji', {});
  }
</script>

<style>
  .message-input {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    padding: 0.75rem;
    background-color: white;
    border-radius: 0.75rem;
    border: 1px solid #e2e8f0;
  }

  .input-container {
    flex: 1;
    position: relative;
  }

  .input-field {
    width: 100%;
    border: none;
    resize: none;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    background-color: #f8fafc;
    max-height: 10rem;
    overflow-y: auto;
  }

  .input-field:focus {
    outline: none;
    box-shadow: 0 0 0 2px #3b82f6;
  }

  .action-buttons {
    display: flex;
    gap: 0.25rem;
  }

  .action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #64748b;
  }

  .action-button:hover {
    background-color: #f1f5f9;
    color: #475569;
  }

  .send-button {
    background-color: #3b82f6;
    color: white;
  }

  .send-button:hover {
    background-color: #2563eb;
  }
</style>

<div class="message-input">
  <div class="action-buttons">
    {#if showAttachmentButton}
      <button 
        class="action-button" 
        onclick={handleAttach}
        disabled={disabled}
        title="Прикрепить файл"
      >
        <Icon name="attachment" size="md" />
      </button>
    {/if}
    
    {#if showEmojiButton}
      <button 
        class="action-button" 
        onclick={handleEmoji}
        disabled={disabled}
        title="Добавить эмодзи"
      >
        <Icon name="smile" size="md" />
      </button>
    {/if}
  </div>
  
  <div class="input-container">
    <textarea
      class="input-field"
      bind:value={messageContent}
      placeholder={placeholder}
      disabled={disabled}
      onkeydown={handleKeydown}
      rows={1}
    ></textarea>
  </div>
  
  {#if showSendButton}
    <button 
      class="action-button send-button" 
      onclick={handleSend}
      disabled={disabled || !messageContent.trim()}
      title="Отправить"
    >
      <Icon name="send" size="md" />
    </button>
  {/if}
</div>


