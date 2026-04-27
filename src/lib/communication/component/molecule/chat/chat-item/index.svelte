<script lang="ts">
  import type { SlotChat as Chat } from '$stylist/communication/interface/slot/chat';
import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
  import { Avatar, Badge } from '$stylist';
  import { MessageTimestamp } from '$stylist/communication/component/atom/chat/atoms/message-timestamp';
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import { createChatItemState } from '$stylist/communication/function/state/chat-item';

  export type ChatItemProps = {
    chat: Chat;
    currentUser: User;
    isActive?: boolean;
    onSelect?: () => void;
    onDelete?: () => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;

  let props: ChatItemProps = $props();

  const state = createChatItemState({
    chat: props.chat,
    currentUser: props.currentUser,
    isActive: props.isActive,
    class: props.class != null ? String(props.class) : undefined
  });
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
  class={state.containerClasses}
  class:active={props.isActive}
  role="button"
  tabindex="0"
  onclick={() => props.onSelect?.()}
  onkeydown={state.handleKeydown}
  {...props}
>
  <Avatar
    src={state.isGroupChat ? undefined : state.otherUser?.avatar}
    name={state.isGroupChat ? props.chat.name : state.otherUser?.name}
    status={state.isGroupChat ? 'online' : state.otherUser?.status}
    size="md"
    showStatus={!state.isGroupChat}
  />

  <div class="chat-info">
    <div class="chat-name">
      {state.isGroupChat ? props.chat.name : state.otherUser?.name}
    </div>
    <div class="last-message">
      {#if typeof props.chat.lastMessage !== 'string' && props.chat.lastMessage?.senderId !== props.currentUser.id}
        {state.lastMessagePreview}
      {:else}
        <span style="font-style: italic;">You: {state.lastMessagePreview}</span>
      {/if}
    </div>
  </div>

  <div class="chat-meta">
    {#if props.chat.lastMessage}
      <MessageTimestamp
        timestamp={typeof props.chat.lastMessage === 'object' ? props.chat.lastMessage.timestamp : new Date()}
        formatStyle="time"
      />
    {/if}

    {#if props.chat.unreadCount && props.chat.unreadCount > 0}
      <Badge
        variant="default"
        size="sm"
        class="absolute top-2 right-2"
      >
        {props.chat.unreadCount}
      </Badge>
    {/if}
  </div>

  <div class="chat-actions">
    {#if props.onDelete}
      <button type="button" onclick={(e) => { e.stopPropagation(); props.onDelete?.(); }}>Delete</button>
    {/if}
  </div>
</div>
