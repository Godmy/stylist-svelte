<script lang="ts">
  import { Story } from '$stylist/playground/component/molecule/story';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import ChatList from './index.svelte';
  import type { SlotChat as Chat } from '$stylist/chat/interface/slot/chat';
  import type { SlotUser as User } from '$stylist/chat/interface/slot/user';

  const currentUser: User = {
    id: '1',
    name: 'Current User',
    avatar: 'https://via.placeholder.com/40',
    status: 'online'
  };

  const chats: Chat[] = [
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
        content: 'Can we schedule a meeting this week?',
        timestamp: new Date(Date.now() - 86400000), // 1 day ago
        status: 'delivered',
        senderId: '3'
      },
      lastMessageTime: new Date(Date.now() - 86400000),
      unreadCount: 5
    }
  ];

  const controls: InterfaceControllerSettings[] = [
    { name: 'activeChatId', type: 'text', defaultValue: '1' }
  ];

  function handleChatSelect(chat: Chat) {
    console.log('Chat selected:', chat.id);
  }

  function handleChatDelete(chat: Chat) {
    console.log('Chat deleted:', chat.id);
  }
</script>

<Story
  {controls}
  title="ChatList Component"
  description="A component to display a list of chats"
>
  {#snippet children(controlValues: any)}
  <ChatList
    {chats}
    {currentUser}
    activeChatId={controlValues.activeChatId}
    onChatSelect={handleChatSelect}
    onChatDelete={handleChatDelete}
  />
  {/snippet}
</Story>




