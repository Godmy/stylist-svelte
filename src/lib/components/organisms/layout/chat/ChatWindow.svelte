<script lang="ts">
  import type { User, Message } from '$lib/types';
  import MessageList from './MessageList.svelte';
  import ChatHeader from '../../../molecules/chat/ChatHeader.svelte';
  import MessageInput from '../../../molecules/chat/MessageInput.svelte';
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

  // Props
  let { 
    chat,
    currentUser,
    messages = []
  }: {
    chat: Chat;
    currentUser: User;
    messages: Message[];
  } = $props();

  // Create a version of chat compatible with ChatHeader (lastMessage as string)
  let compatibleChat = $derived({
    ...chat,
    lastMessage: typeof chat.lastMessage === 'object' && chat.lastMessage ? 
      (chat.lastMessage as Message).content : 
      chat.lastMessage as string
  });

  // Events
  const dispatch = createEventDispatcher<{
    messageSend: { content: string; chatId: string };
    messageReaction: { messageId: string; reaction: string };
    call: { chat: Chat };
    videoCall: { chat: Chat };
    chatInfo: { chat: Chat };
  }>();

  // Handle sending a message
  function handleMessageSend(event: CustomEvent<{ content: string }>) {
    dispatch('messageSend', { 
      content: event.detail.content, 
      chatId: chat.id 
    });
  }

  // Handle message reaction
  function handleMessageReaction(event: CustomEvent<{ message: Message; reaction: string }>) {
    dispatch('messageReaction', { messageId: event.detail.message.id, reaction: event.detail.reaction });
  }

  // Handle call
  function handleCall() {
    dispatch('call', { chat });
  }

  // Handle video call
  function handleVideoCall() {
    dispatch('videoCall', { chat });
  }

  // Handle chat info
  function handleChatInfo() {
    dispatch('chatInfo', { chat });
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
    <ChatHeader 
      chat={{ 
        id: compatibleChat.id,
        name: compatibleChat.name,
        participants: compatibleChat.participants,
        isGroup: compatibleChat.isGroup,
        lastMessage: compatibleChat.lastMessage,
        lastMessageTime: compatibleChat.lastMessageTime,
        unreadCount: compatibleChat.unreadCount,
        avatar: compatibleChat.avatar
      }}
      {currentUser}
      on:call={handleCall}
      on:videoCall={handleVideoCall}
      on:info={handleChatInfo}
    />
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