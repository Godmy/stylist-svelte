<script lang="ts">
  import type { Chat, User } from '$stylist/information/interface/chat';
  import { Avatar, Badge } from '$stylist';
  import { MessageTimestamp } from '$stylist/interaction/atom/chat/atoms/message-timestamp';
  import { createEventDispatcher } from 'svelte';
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

  type Props = {
    chat: Chat;
    currentUser: User;
    isActive?: boolean;
  } & InteractionHTMLAttributes<HTMLDivElement>;

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
    gap: var(--spacing-3);
    padding: var(--spacing-3) var(--spacing-4);
    cursor: pointer;
    border-bottom: 1px solid var(--color-border-primary);
    transition: background-color var(--duration-200);
    position: relative;
  }

  .chat-item:hover {
    background-color: var(--color-background-secondary);
  }

  .chat-item.active {
    background-color: var(--color-primary-50);
  }

  .chat-info {
    flex: 1;
    min-width: var(--size-0);
  }

  .chat-name {
    font-weight: var(--font-weight-semibold);
    color: var(--color-text-primary);
    font-size: var(--font-size-4);
    margin-bottom: var(--spacing-1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .last-message {
    font-size: var(--font-size-3);
    color: var(--color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .chat-meta {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--spacing-1);
  }

  .chat-actions {
    position: absolute;
    right: var(--spacing-2);
    opacity: var(--opacity-0);
    transition: opacity var(--duration-200);
  }

  .chat-item:hover .chat-actions {
    opacity: var(--opacity-100);
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



