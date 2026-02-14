<script lang="ts">
  import * as ChatItemModule from './index.svelte';
  const ChatItem: any = ChatItemModule.default ?? ChatItemModule;
  import type { Chat, User } from '$stylist/design-system/props/chat';

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
      content: 'Hello! How are you doing today?',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
      status: 'read',
      senderId: '2'
    },
    lastMessageTime: new Date(Date.now() - 3600000),
    unreadCount: 0
  };

  let isActive: boolean = false;

  function handleSelect() {
    console.log('Chat selected:', chat.id);
    isActive = true;
  }

  function handleDelete() {
    console.log('Chat deleted:', chat.id);
  }

  // Create a sample group chat
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

  let chatWithUnread: Chat = {
    id: '3',
    participants: [
      currentUser,
      {
        id: '3',
        name: 'Jane Smith',
        avatar: 'https://via.placeholder.com/40',
        status: 'away'
      }
    ],
    isGroup: false,
    lastMessage: {
      id: 'msg2',
      content: 'Can we schedule a meeting this week?',
      timestamp: new Date(Date.now() - 86400000), // 1 day ago
      status: 'delivered',
      senderId: '3'
    },
    lastMessageTime: new Date(Date.now() - 86400000),
    unreadCount: 5
  };
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ChatItem Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ChatItem</h2>
    <div class="flex flex-col gap-4">
      <ChatItem
        {chat}
        {currentUser}
        {isActive}
        on:select={handleSelect as (e: Event) => void}
        on:delete={handleDelete as (e: Event) => void}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="chat-is-active" class="flex items-center gap-1">
          <input id="chat-is-active" type="checkbox" bind:checked={isActive} />
          Is Active
        </label>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">One-on-One Chat</h2>
      <ChatItem
        {chat}
        {currentUser}
        on:select={handleSelect as (e: Event) => void}
        on:delete={handleDelete as (e: Event) => void}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Group Chat</h2>
      <ChatItem
        chat={groupChat}
        {currentUser}
        on:select={handleSelect as (e: Event) => void}
        on:delete={handleDelete as (e: Event) => void}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Chat with Unread Messages</h2>
      <ChatItem
        chat={chatWithUnread}
        {currentUser}
        on:select={handleSelect as (e: Event) => void}
        on:delete={handleDelete as (e: Event) => void}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Chat with No Messages</h2>
      <ChatItem
        chat={ {...chat, lastMessage: undefined, lastMessageTime: undefined, unreadCount: 0} }
        {currentUser}
        on:select={handleSelect as (e: Event) => void}
        on:delete={handleDelete as (e: Event) => void}
      />
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default ChatItem</h2>
    <ChatItem
      {chat}
      {currentUser}
      on:select={handleSelect as (e: Event) => void}
      on:delete={handleDelete as (e: Event) => void}
    />
  </div>
</div>
