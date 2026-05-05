<script lang="ts">
import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import MessageItem from '../message-item/index.svelte';
import { createMessageListState } from '$stylist/chat/function/state/message-list';
import { onMount } from 'svelte';

export type MessageListProps = {
  messages: Message[];
  currentUser: User;
  onMessageAction?: (action: string, message: Message) => void;
  onMessageClick?: (message: Message) => void;
  onMessageReaction?: (messageId: string, reaction: string) => void;
};

let props: MessageListProps = $props();

const state = createMessageListState(props);
</script>

<style>
  .message-list {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-4);
    gap: var(--spacing-4);
    background-color: var(--color-background-secondary);
  }

  .message-list::-webkit-scrollbar {
    width: var(--spacing-2);
  }

  .message-list::-webkit-scrollbar-track {
    background: var(--color-background-secondary);
  }

  .message-list::-webkit-scrollbar-thumb {
    background: var(--color-border-secondary);
    border-radius: var(--border-radius-sm);
  }

  .message-list::-webkit-scrollbar-thumb:hover {
    background: var(--color-text-secondary);
  }
</style>

<div class={state.containerClasses} use:state.enhanceScroll>
  {#each props.messages as message (message.id)}
    <MessageItem
      message={message}
      isOwn={message.senderId === props.currentUser.id}
      onReaction={(reaction: string) => props.onMessageReaction?.(message.id, reaction)}
      onReply={() => props.onMessageAction?.('reply', message)}
      onForward={() => props.onMessageAction?.('forward', message)}
    />
  {/each}
</div>
