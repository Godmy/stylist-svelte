<script lang="ts">
  import type { Chat, User, Message } from '$lib/types';
  import { ChatStatusIndicator, MessageStatus } from '../../atoms/indicators';
  import Avatar from '../../atoms/media/Avatar.svelte';
  import Badge from '../../atoms/ui-elements/Badge.svelte';
  import MessageTimestamp from '../../atoms/indicators/MessageTimestamp.svelte';
  import { createEventDispatcher } from 'svelte';

  // Props
  let { 
    chat,
    currentUser,
    isActive = false
  }: {
    chat: Chat;
    currentUser: User;
    isActive?: boolean;
  } = $props();

  // Events
  const dispatch = createEventDispatcher<{
    select: {};
    delete: {};
  }>();

  // Determine if it's a group chat
  const isGroupChat = $derived(chat.participants.length > 2);

  // Get the other participant in a one-on-one chat
  const otherUser = $derived(
    !isGroupChat 
      ? chat.participants.find((user: User) => user.id !== currentUser.id) 
      : null
  );

  // Format last message preview
  const lastMessagePreview = $derived(() => {
    if (!chat.lastMessage) return 'Нет сообщений';
    
    // Truncate the message to a preview
    const content = typeof chat.lastMessage === 'object' ? chat.lastMessage.content : chat.lastMessage || '';
    return content.length > 30 ? content.substring(0, 30) + '...' : content;
  });

  // Handle click
  function handleClick() {
    dispatch('select', {});
  }

  // Handle keydown for accessibility
  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  }

  // Handle delete
  function handleDelete() {
    dispatch('delete', {});
  }
</script>

<style>
  .chat-item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    cursor: pointer;
    border-bottom: 1px solid #f1f5f9;
    transition: background-color 0.2s;
    position: relative;
  }

  .chat-item:hover {
    background-color: #f8fafc;
  }

  .chat-item.active {
    background-color: #eff6ff;
  }

  .chat-info {
    flex: 1;
    min-width: 0;
  }

  .chat-name {
    font-weight: 600;
    color: #1e293b;
    font-size: 0.95rem;
    margin-bottom: 0.125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .last-message {
    font-size: 0.8rem;
    color: #64748b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .chat-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.25rem;
  }

  .chat-actions {
    position: absolute;
    right: 0.5rem;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .chat-item:hover .chat-actions {
    opacity: 1;
  }
</style>

<div 
  class="chat-item" 
  class:active={isActive}
  role="button"
  tabindex="0"
  onclick={handleClick}
  onkeydown={handleKeydown}
>
  <Avatar 
    src={isGroupChat ? undefined : otherUser?.avatar}
    name={isGroupChat ? chat.name : otherUser?.name}
    status={isGroupChat ? 'online' : otherUser?.status}
    size="md"
    showStatus={!isGroupChat}
  />
  
  <div class="chat-info">
    <div class="chat-name">
      {isGroupChat ? chat.name : otherUser?.name}
    </div>
    <div class="last-message">
      {#if typeof chat.lastMessage !== 'string' && chat.lastMessage?.senderId !== currentUser.id}
        {lastMessagePreview}
      {:else}
        <span style="font-style: italic;">Вы: {lastMessagePreview}</span>
      {/if}
    </div>
  </div>
  
  <div class="chat-meta">
    {#if chat.lastMessage}
      <MessageTimestamp 
        timestamp={typeof chat.lastMessage === 'object' ? chat.lastMessage.timestamp : new Date()} 
        formatStyle="time" 
      />
    {/if}
    
    {#if chat.unreadCount && chat.unreadCount > 0}
      <Badge 
        variant="default" 
        size="sm" 
        class="absolute top-2 right-2"
      >
        {chat.unreadCount}
      </Badge>
    {/if}
  </div>
  
  <div class="chat-actions">
    <!-- Context menu or actions can go here -->
  </div>
</div>