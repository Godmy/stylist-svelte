<script lang="ts">
import type { SlotChat as Chat } from '$stylist/communication/interface/slot/chat';
import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
import ChatItem from '../chat-item/index.svelte';
import { createChatListState } from '$stylist/communication/function/state/chat-list';

let props: {
  chats: Chat[];
  currentUser: User;
  activeChatId?: string;
  onChatSelect?: (chat: Chat) => void;
  onChatDelete?: (chat: Chat) => void;
} = $props();

const state = createChatListState(props);
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

<div class={state.containerClasses}>
  {#each props.chats as chat}
    <ChatItem
      {chat}
      currentUser={props.currentUser}
      isActive={chat.id === props.activeChatId}
      onSelect={() => props.onChatSelect?.(chat)}
      onDelete={() => props.onChatDelete?.(chat)}
    />
  {/each}
</div>
