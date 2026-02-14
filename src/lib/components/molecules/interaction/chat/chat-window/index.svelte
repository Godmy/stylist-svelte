<script lang="ts">
import type { User, Message } from '$stylist/design-system/props/chat';
import MessageList from '$stylist/components/molecules/information/messages/message-list/index.svelte';
  import MessageInput from '$stylist/components/atoms/interaction/input/message-input/index.svelte';
  import { createEventDispatcher } from 'svelte';

  interface Chat {
    id: string;
    name?: string;
    participants: User[];
    isGroup: boolean;
    lastMessage?: Message | string; // Support both formats
    lastMessageTime?: Date;
    unreadCount?: number;
    avatar?: string;
  }

  const dispatch = createEventDispatcher<{
    messageSend: { content: string; chatId: string };
    messageReaction: { messageId: string; reaction: string };
    call: { chat: Chat };
    videoCall: { chat: Chat };
    chatInfo: { chat: Chat };
  }>();

  let {
    chat,
    currentUser,
    messages = []
  } = $props<{
    chat: Chat;
    currentUser: User;
    messages: Message[];
  }>();

  // Create a version of chat compatible with ChatHeader (lastMessage as string)
  let compatibleChat = $derived({
    ...chat,
    lastMessage: typeof chat.lastMessage === 'object' && chat.lastMessage ?
      (chat.lastMessage as Message).content :
      chat.lastMessage as string
  });

  // Handle sending a message
  function handleMessageSend(event: CustomEvent<{ content: string }>) {
    dispatch('messageSend', {
      content: event.detail.content,
      chatId: chat.id
    });
  }

  // Handle message reaction
  function handleMessageReaction(event: CustomEvent<{ message: Message; reaction: string }>) {
    dispatch('messageReaction', {
      messageId: event.detail.message.id,
      reaction: event.detail.reaction
    });
  }

  // Handle call
  function handleCall(event: CustomEvent<{ chat: Chat }>) {
    dispatch('call', { chat: event.detail.chat });
  }

  // Handle video call
  function handleVideoCall(event: CustomEvent<{ chat: Chat }>) {
    dispatch('videoCall', { chat: event.detail.chat });
  }

  // Handle chat info
  function handleChatInfo(event: CustomEvent<{ chat: Chat }>) {
    dispatch('chatInfo', { chat: event.detail.chat });
  }
</script>

<style>
  .chat-window {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background-color: #f0f4f8;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }

  .chat-messages {
    flex: 1;
    overflow-y: auto;
  }

  .chat-input {
    border-top: 1px solid #e2e8f0;
    background-color: white;
  }
</style>

  <div class="chat-window">
  {#if chat}
    <div class="flex items-center justify-between border-b border-gray-200 bg-white p-3">
      <div class="font-semibold text-gray-800">{compatibleChat.name}</div>
      <div class="flex gap-2">
        <button type="button" class="text-sm text-gray-600" onclick={() => dispatch('call', { chat })}>Call</button>
        <button type="button" class="text-sm text-gray-600" onclick={() => dispatch('videoCall', { chat })}>Video</button>
        <button type="button" class="text-sm text-gray-600" onclick={() => dispatch('chatInfo', { chat })}>Info</button>
      </div>
    </div>
  {/if}
  
  <div class="chat-messages">
    <MessageList 
      {messages} 
      {currentUser}
      on:messageReaction={handleMessageReaction}
    />
  </div>
  
  <div class="chat-input">
    <MessageInput 
      on:send={handleMessageSend}
    />
  </div>
</div>
