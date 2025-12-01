<script lang="ts">
  import * as ChatWindowModule from './ChatWindow.svelte';
  const ChatWindow = ChatWindowModule.default ?? ChatWindowModule;
  import type { Chat, User, Message } from '$lib/types';

  let currentUser: User = {
    id: '1',
    name: 'Current User',
    avatar: 'https://via.placeholder.com/40',
    status: 'online'
  };

  let chat: Chat = {
    id: '1',
    participants: [
      currentUser,
      {
        id: '2',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40',
        status: 'online'
      }
    ],
    isGroup: false,
    lastMessage: {
      id: 'msg1',
      sender: {
        id: '2',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40',
        status: 'online'
      },
      content: 'Hello! How are you doing today?',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      status: 'read',
      senderId: '2'
    },
    lastMessageTime: new Date(Date.now() - 3600000),
    unreadCount: 0
  };

  let messages: Message[] = [
    {
      id: '1',
      sender: {
        id: '2',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40',
        status: 'online'
      },
      content: 'Hey there! How are you doing?',
      timestamp: new Date(Date.now() - 3600000),
      status: 'read',
      senderId: '2'
    },
    {
      id: '2',
      sender: currentUser,
      content: 'I\'m doing great! Just working on a new Svelte project.',
      timestamp: new Date(Date.now() - 3500000),
      status: 'read',
      senderId: '1'
    },
    {
      id: '3',
      sender: {
        id: '2',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40',
        status: 'online'
      },
      content: 'That sounds interesting! What kind of project?',
      timestamp: new Date(Date.now() - 3400000),
      status: 'read',
      senderId: '2'
    },
    {
      id: '4',
      sender: currentUser,
      content: 'It\'s a chat application with real-time messaging and file sharing capabilities.',
      timestamp: new Date(Date.now() - 3300000),
      status: 'read',
      senderId: '1'
    },
    {
      id: '5',
      sender: {
        id: '2',
        name: 'John Doe',
        avatar: 'https://via.placeholder.com/40',
        status: 'online'
      },
      content: 'That\'s awesome! I\'d love to see it when it\'s ready.',
      timestamp: new Date(Date.now() - 3200000),
      status: 'read',
      senderId: '2'
    }
  ];

  function handleMessageSend(e: CustomEvent<{ content: string; chatId: string }>) {
    console.log('Message sent:', e.detail.content, 'to chat:', e.detail.chatId);
    const newMessage: Message = {
      id: String(messages.length + 1),
      sender: currentUser,
      content: e.detail.content,
      timestamp: new Date(),
      status: 'sent',
      senderId: currentUser.id
    };
    messages = [...messages, newMessage];
  }

  function handleMessageReaction(e: CustomEvent<{ messageId: string; reaction: string }>) {
    console.log('Reaction added:', e.detail.reaction, 'to message:', e.detail.messageId);
  }

  function handleCall(e: CustomEvent<{ chat: Chat }>) {
    console.log('Call initiated for chat:', e.detail.chat.id);
  }

  function handleVideoCall(e: CustomEvent<{ chat: Chat }>) {
    console.log('Video call initiated for chat:', e.detail.chat.id);
  }

  function handleChatInfo(e: CustomEvent<{ chat: Chat }>) {
    console.log('Chat info requested for chat:', e.detail.chat.id);
  }

  // Create a group chat for demonstration
  let groupChat: Chat = {
    id: '2',
    name: 'Svelte Developers',
    participants: [
      currentUser,
      { id: '2', name: 'John Doe', avatar: 'https://via.placeholder.com/40', status: 'online' },
      { id: '3', name: 'Jane Smith', avatar: 'https://via.placeholder.com/40', status: 'away' },
      { id: '4', name: 'Bob Johnson', avatar: 'https://via.placeholder.com/40', status: 'offline' }
    ],
    isGroup: true,
    lastMessage: 'Bob: Working on a new Svelte component today',
    lastMessageTime: new Date(Date.now() - 7200000), // 2 hours ago
    unreadCount: 3
  };
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ChatWindow Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ChatWindow</h2>
    <div class="h-96 flex flex-col gap-4">
      <ChatWindow
        {chat}
        {currentUser}
        {messages}
        on:messageSend={handleMessageSend as (e: CustomEvent<any>) => void}
        on:messageReaction={handleMessageReaction as (e: CustomEvent<any>) => void}
        on:call={handleCall as (e: CustomEvent<any>) => void}
        on:videoCall={handleVideoCall as (e: CustomEvent<any>) => void}
        on:chatInfo={handleChatInfo as (e: CustomEvent<any>) => void}
      />
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Group Chat Window</h2>
      <div class="h-64">
        <ChatWindow
          chat={groupChat}
          {currentUser}
          {messages}
          on:messageSend={handleMessageSend as (e: CustomEvent<any>) => void}
          on:messageReaction={handleMessageReaction as (e: CustomEvent<any>) => void}
          on:call={handleCall as (e: CustomEvent<any>) => void}
          on:videoCall={handleVideoCall as (e: CustomEvent<any>) => void}
          on:chatInfo={handleChatInfo as (e: CustomEvent<any>) => void}
        />
      </div>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Chat Window with Few Messages</h2>
      <div class="h-64">
        <ChatWindow
          {chat}
          {currentUser}
          messages={messages.slice(0, 2)}
          on:messageSend={handleMessageSend as (e: CustomEvent<any>) => void}
          on:messageReaction={handleMessageReaction as (e: CustomEvent<any>) => void}
          on:call={handleCall as (e: CustomEvent<any>) => void}
          on:videoCall={handleVideoCall as (e: CustomEvent<any>) => void}
          on:chatInfo={handleChatInfo as (e: CustomEvent<any>) => void}
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default ChatWindow</h2>
    <div class="h-64">
      <ChatWindow
        {chat}
        {currentUser}
        {messages}
        on:messageSend={handleMessageSend as (e: CustomEvent<any>) => void}
        on:messageReaction={handleMessageReaction as (e: CustomEvent<any>) => void}
        on:call={handleCall as (e: CustomEvent<any>) => void}
        on:videoCall={handleVideoCall as (e: CustomEvent<any>) => void}
        on:chatInfo={handleChatInfo as (e: CustomEvent<any>) => void}
      />
    </div>
  </div>
</div>