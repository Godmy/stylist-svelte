<script lang="ts">
  import type { Message, User } from '$stylist/information/interface/chat';
  import { Avatar, Icon } from '$stylist';
  import MessageMeta from '$stylist/information/atom/messages/message-meta/index.svelte';
  import AttachmentPreview from '../../preview/attachment-preview/index.svelte';
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
  const messageBackground = $derived(isOwn ? 'bg-[var(--color-primary-500)] text-[var(--color-text-inverse)]' : 'bg-[var(--color-background-primary)] text-[var(--color-text-primary)]');
  const messageBorder = $derived(isOwn ? 'border-[var(--color-primary-600)]' : 'border-[var(--color-border-primary)]');
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
    gap: var(--spacing-2);
    width: 100%;
  }

  .message-bubble {
    display: flex;
    flex-direction: column;
    max-width: 75%;
    padding: var(--spacing-3);
    border-radius: var(--border-radius-xl);
    border: 1px solid;
    box-shadow: var(--shadow-custom28);
    position: relative;
  }

  .message-content {
    word-wrap: break-word;
    white-space: pre-wrap;
  }

  .message-actions {
    display: flex;
    gap: var(--spacing-2);
    margin-top: var(--spacing-1);
    opacity: var(--opacity-70);
  }

  .message-actions:hover {
    opacity: var(--opacity-100);
  }

  .action-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--spacing-1);
    border-radius: var(--border-radius-base);
  }

  .action-button:hover {
    background-color: color-mix(in srgb, var(--color-text-primary) 5%, transparent);
  }

  .reactions-picker {
    position: absolute;
    bottom: 100%;
    left: 0;
    background: var(--color-background-primary);
    border: 1px solid var(--color-border-primary);
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-2);
    display: flex;
    gap: var(--spacing-1);
    box-shadow: var(--shadow-custom38);
    z-index: var(--z-index-docked);
  }

  .reaction-option {
    font-size: var(--font-size-5);
    cursor: pointer;
    padding: var(--spacing-1);
    border-radius: var(--border-radius-base);
  }

  .reaction-option:hover {
    background-color: var(--color-background-secondary);
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
      <div class="text-xs italic mb-1" style="border-left: 2px solid var(--color-border-secondary); padding-left: var(--spacing-2);">
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
        {#each message.attachments as attachment, index}
          <AttachmentPreview
            attachment={{
              id: attachment.id ?? `${message.id}-attachment-${index}`,
              name: attachment.name ?? 'Attachment',
              type: attachment.type ?? 'file',
              size: typeof attachment.size === 'number' ? attachment.size : 0,
              url: attachment.url
            }}
            showActions={false}
          />
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








