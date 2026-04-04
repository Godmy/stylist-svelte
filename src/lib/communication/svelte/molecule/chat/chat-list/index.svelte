<script lang="ts">
import type { Chat, User } from '$stylist/communication/interface/component/chat/other';
  import * as ChatItemModule from '../chat-item/index.svelte';
  const ChatItem: any = ChatItemModule.default ?? ChatItemModule;
  import { createEventDispatcher } from 'svelte';

  // Props
  let { 
    chats = [],
    currentUser,
    activeChatId
  }: {
    chats: Chat[];
    currentUser: User;
    activeChatId?: string;
  } = $props();

  // Events
  const dispatch = createEventDispatcher<{
    chatSelect: { chat: Chat };
    chatDelete: { chat: Chat };
  }>();

  // Handle chat selection
  function handleChatSelect(chat: Chat) {
    dispatch('chatSelect', { chat });
  }

  // Handle chat deletion
  function handleChatDelete(chat: Chat) {
    dispatch('chatDelete', { chat });
  }
</script>

<style>
  .chat-list {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    background-color: var(--color-background-primary);
    border-right: 1px solid var(--color-border-primary);
  }

  .chat-list::-webkit-scrollbar {
    width: var(--spacing-2);
  }

  .chat-list::-webkit-scrollbar-track {
    background: var(--color-background-secondary);
  }

  .chat-list::-webkit-scrollbar-thumb {
    background: var(--color-border-secondary);
    border-radius: var(--border-radius-sm);
  }

  .chat-list::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-secondary);
  }
</style>

<div class="chat-list">
  {#each chats as chat}
    <ChatItem
      {chat}
      {currentUser}
      isActive={chat.id === activeChatId}
      on:select={() => handleChatSelect(chat)}
      on:delete={() => handleChatDelete(chat)}
    />
  {/each}
</div>



