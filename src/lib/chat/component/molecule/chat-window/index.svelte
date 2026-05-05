<script lang="ts">
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import MessageList from '$stylist/chat/component/molecule/message-list/index.svelte';
import MessageInput from '$stylist/chat/component/atom/message-input/index.svelte';
import { createChatWindowState } from '$stylist/chat/function/state/chat-window';

let props: {
  chat: {
    id: string;
    name?: string;
    participants: User[];
    isGroup: boolean;
    lastMessage?: Message | string;
    lastMessageTime?: Date;
    unreadCount?: number;
    avatar?: string;
  };
  currentUser: User;
  messages: Message[];
  onMessageSend?: (content: string) => void;
  onMessageReaction?: (messageId: string, reaction: string) => void;
  onCall?: () => void;
  onVideoCall?: () => void;
  onChatInfo?: () => void;
} = $props();

const state = createChatWindowState(props);
</script>

<style>
  .chat-window {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: var(--color-background-secondary);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-custom40);
  }

  .chat-messages {
    flex: 1;
    overflow-y: auto;
  }

  .chat-input {
    border-top: 1px solid var(--color-border-primary);
    background-color: white;
  }
</style>

  <div class={state.containerClasses}>
  {#if props.chat}
    <div class={state.headerClasses}>
      <div class="font-semibold text-[var(--color-text-primary)]">{state.compatibleChat.name}</div>
      <div class="flex gap-2">
        <button type="button" class="text-sm text-[var(--color-text-secondary)]" onclick={() => props.onCall?.()}>Call</button>
        <button type="button" class="text-sm text-[var(--color-text-secondary)]" onclick={() => props.onVideoCall?.()}>Video</button>
        <button type="button" class="text-sm text-[var(--color-text-secondary)]" onclick={() => props.onChatInfo?.()}>Info</button>
      </div>
    </div>
  {/if}

  <div class={state.messagesClasses}>
    <MessageList
      messages={props.messages}
      currentUser={props.currentUser}
      onMessageReaction={props.onMessageReaction}
    />
  </div>

  <div class={state.inputClasses}>
    <MessageInput
      onSendMessage={state.handleMessageSend}
    />
  </div>
</div>

