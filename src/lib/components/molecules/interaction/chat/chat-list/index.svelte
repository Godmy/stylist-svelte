<script lang="ts">
import type { Chat, User } from '$stylist/design-system/props/information/chat';
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
    background-color: white;
    border-right: 1px solid #e2e8f0;
  }

  .chat-list::-webkit-scrollbar {
    width: 6px;
  }

  .chat-list::-webkit-scrollbar-track {
    background: #f1f5f9;
  }

  .chat-list::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 3px;
  }

  .chat-list::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
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
