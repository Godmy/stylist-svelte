<script lang="ts">
  import type { Chat, User } from '$stylist/design-system/props/chat';
  import { Avatar, Badge } from '$stylist/components/atoms';
  import { MessageTimestamp } from '$stylist/components/molecules';
  import { createEventDispatcher } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    chat: Chat;
    currentUser: User;
    isActive?: boolean;
  } & HTMLAttributes<HTMLDivElement>;

  const dispatch = createEventDispatcher<{
    select: void;
    delete: void;
  }>();

  let {
    chat,
    currentUser,
    isActive = false,
    class: className = '',
    ...restProps
  } = $props() as Props;

  const isGroupChat = $derived(chat.participants.length > 2);

  const otherUser = $derived(
    !isGroupChat ? chat.participants.find((user: User) => user.id !== currentUser.id) : null
  );

  const lastMessagePreview = $derived(() => {
    if (!chat.lastMessage) return 'No messages yet';

    const content = typeof chat.lastMessage === 'object' ? chat.lastMessage.content : chat.lastMessage || '';
    return content.length > 30 ? `${content.substring(0, 30)}...` : content;
  });

  function handleClick() {
    dispatch('select');
  }

  function handleKeydown(keyEvent: KeyboardEvent) {
    if (keyEvent.key === 'Enter' || keyEvent.key === ' ') {
      handleClick();
    }
  }

  function handleDelete() {
    dispatch('delete');
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
  class={`chat-item ${className}`.trim()} 
  class:active={isActive}
  role="button"
  tabindex="0"
  onclick={handleClick}
  onkeydown={handleKeydown}
  {...restProps}
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
        <span style="font-style: italic;">You: {lastMessagePreview}</span>
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
