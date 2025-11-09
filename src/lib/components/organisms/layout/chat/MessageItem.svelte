<script lang="ts">
  import type { Message, User } from '$lib/types';
  import { Avatar, Icon } from '$lib/components/atoms';
  import MessageStatusAtom from '../../../molecules/chat/atoms/MessageStatus.svelte';
  import MessageMeta from '../../../molecules/chat/MessageMeta.svelte';
  import AttachmentPreview from '../../../molecules/chat/AttachmentPreview.svelte';
  import { createEventDispatcher } from 'svelte';

  // Props
  let { 
    message,
    isOwn = false,
    showAvatar = true,
    enableReactions = true,
    sender
  }: {
    message: Message;
    isOwn?: boolean;
    showAvatar?: boolean;
    enableReactions?: boolean;
    sender?: User;
  } = $props();

  // Events
  const dispatch = createEventDispatcher<{
    reaction: { reaction: string };
    reply: { message: Message };
    forward: { message: Message };
  }>();

  // Local state
  let reactionsVisible = $state(false);
  let availableReactions = $state(['👍', '👎', '❤️', '😂', '😮', '😢']);

  // Positioning for own vs other messages
  const messageAlignment = $derived(isOwn ? 'items-end' : 'items-start');
  const messageBackground = $derived(isOwn ? 'bg-blue-500 text-white' : 'bg-white text-gray-800');
  const messageBorder = $derived(isOwn ? 'border-blue-600' : 'border-gray-200');
  const messageMargin = $derived(isOwn ? 'ml-auto' : '');

  // Handle reaction click
  function handleReactionClick(reaction: string) {
    dispatch('reaction', { reaction });
    reactionsVisible = false;
  }

  function handleReactionKeydown(event: KeyboardEvent, reaction: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleReactionClick(reaction);
    }
  }

  // Handle reply
  function handleReply() {
    dispatch('reply', { message });
  }

  // Handle forward
  function handleForward() {
    dispatch('forward', { message });
  }
</script>

<style>
  .message-container {
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }

  .message-bubble {
    display: flex;
    flex-direction: column;
    max-width: 75%;
    padding: 0.75rem;
    border-radius: 0.75rem;
    border: 1px solid;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    position: relative;
  }

  .message-content {
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  .message-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 0.25rem;
    opacity: 0.7;
  }

  .message-actions:hover {
    opacity: 1;
  }

  .action-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
  }

  .action-button:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .reactions-picker {
    position: absolute;
    bottom: 100%;
    left: 0;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display: flex;
    gap: 0.25rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 10;
  }

  .reaction-option {
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.25rem;
    border-radius: 0.25rem;
  }

  .reaction-option:hover {
    background-color: #f1f5f9;
  }
</style>

<div class="message-container {messageAlignment}">
  {#if showAvatar && !isOwn && sender}
    <Avatar 
      src={sender.avatar} 
      name={sender.name} 
      status={sender.status} 
      size="sm" 
      showStatus={false} />
  {/if}
  
  <div class="message-bubble {messageBackground} {messageBorder} {messageMargin}">
    {#if !isOwn && sender}
      <div class="font-semibold text-sm mb-1">{sender.name}</div>
    {/if}
    
    {#if message.replyTo}
      <div class="text-xs italic mb-1" style="border-left: 2px solid #94a3b8; padding-left: 0.5rem;">
        В ответ на сообщение
      </div>
    {/if}
    
    <div class="message-content">
      {#if message.type === 'text'}
        {message.content}
      {:else if message.type === 'image'}
        <img 
          src={message.content} 
          alt="Изображение" 
          class="max-w-xs rounded-md"
        />
      {:else if message.type === 'file' && message.attachments?.length}
        {#each message.attachments as attachment}
          <AttachmentPreview {attachment} showActions={false} />
        {/each}
      {/if}
    </div>
    
    <MessageMeta {message} />
    
    {#if enableReactions}
      <div class="message-actions">
        <button class="action-button" onclick={() => reactionsVisible = !reactionsVisible}>
          <Icon name="smile" size="sm" />
        </button>
        <button class="action-button" onclick={handleReply}>
          <Icon name="reply" size="sm" />
        </button>
        <button class="action-button" onclick={handleForward}>
          <Icon name="share" size="sm" />
        </button>
      </div>
    {/if}
    
    {#if reactionsVisible}
      <div class="reactions-picker">
        {#each availableReactions as reaction}
          <span 
            class="reaction-option" 
            role="button"
            tabindex="0"
            onclick={() => handleReactionClick(reaction)}
            onkeydown={(e) => handleReactionKeydown(e, reaction)}
          >
            {reaction}
          </span>
        {/each}
      </div>
    {/if}
  </div>
</div>