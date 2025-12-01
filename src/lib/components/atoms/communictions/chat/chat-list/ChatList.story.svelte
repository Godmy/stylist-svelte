<script lang="ts">
  import ChatList from './ChatList.svelte';
  import type { Chat, User, Message } from '$lib/types';

  let currentUser: User = {
    id: '1',
    name: 'Current User',
    avatar: 'https://via.placeholder.com/40',
    status: 'online'
  };

  let chats: Chat[] = [
    {
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
    },
    {
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
    },
    {
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
        sender: {
          id: '3',
          name: 'Jane Smith',
          avatar: 'https://via.placeholder.com/40',
          status: 'away'
        },
        content: 'Can we schedule a meeting this week?',
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
        status: 'delivered',
        senderId: '3'
      },
      lastMessageTime: new Date(Date.now() - 86400000),
      unreadCount: 5
    },
    {
      id: '4',
      participants: [
        currentUser,
        {
          id: '4',
          name: 'Bob Johnson',
          avatar: 'https://via.placeholder.com/40',
          status: 'offline'
        }
      ],
      isGroup: false,
      lastMessage: {
        id: 'msg3',
        sender: {
          id: '4',
          name: 'Bob Johnson',
          avatar: 'https://via.placeholder.com/40',
          status: 'offline'
        },
        content: 'Thanks for the help with the project!',
        timestamp: new Date(Date.now() - 172800000), // 2 days ago
        status: 'read',
        senderId: '4'
      },
      lastMessageTime: new Date(Date.now() - 172800000),
      unreadCount: 0
    },
    {
      id: '5',
      name: 'Family Group',
      participants: [
        currentUser,
        { id: '5', name: 'Mom', avatar: 'https://via.placeholder.com/40', status: 'online' },
        { id: '6', name: 'Dad', avatar: 'https://via.placeholder.com/40', status: 'away' },
        { id: '7', name: 'Sister', avatar: 'https://via.placeholder.com/40', status: 'online' }
      ],
      isGroup: true,
      lastMessage: 'Mom: Dinner at 7pm tonight!',
      lastMessageTime: new Date(Date.now() - 36000000), // 10 hours ago
      unreadCount: 2
    }
  ];

  let activeChatId: string = '1';

  function handleChatSelect(e: CustomEvent<{ chat: Chat }>) {
    console.log('Chat selected:', e.detail.chat.id);
    activeChatId = e.detail.chat.id;
  }

  function handleChatDelete(e: CustomEvent<{ chat: Chat }>) {
    console.log('Chat deleted:', e.detail.chat.id);
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">ChatList Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive ChatList</h2>
    <div class="h-96 flex flex-col gap-4">
      <ChatList
        {chats}
        {currentUser}
        {activeChatId}
        on:chatSelect={handleChatSelect}
        on:chatDelete={handleChatDelete}
      />
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">ChatList with Active Chat</h2>
      <div class="h-64">
        <ChatList
          {chats}
          {currentUser}
          activeChatId="2"
          on:chatSelect={handleChatSelect}
          on:chatDelete={handleChatDelete}
        />
      </div>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">ChatList with Unread Messages</h2>
      <div class="h-64">
        <ChatList
          {chats}
          {currentUser}
          activeChatId="3"
          on:chatSelect={handleChatSelect}
          on:chatDelete={handleChatDelete}
        />
      </div>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">ChatList with Group Chats</h2>
      <div class="h-64">
        <ChatList
          chats={chats.filter(chat => chat.isGroup)}
          {currentUser}
          activeChatId="2"
          on:chatSelect={handleChatSelect}
          on:chatDelete={handleChatDelete}
        />
      </div>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">ChatList with One-on-One Chats</h2>
      <div class="h-64">
        <ChatList
          chats={chats.filter(chat => !chat.isGroup)}
          {currentUser}
          activeChatId="1"
          on:chatSelect={handleChatSelect}
          on:chatDelete={handleChatDelete}
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default ChatList</h2>
    <div class="h-64">
      <ChatList
        {chats}
        {currentUser}
        on:chatSelect={handleChatSelect}
        on:chatDelete={handleChatDelete}
      />
    </div>
  </div>
</div>