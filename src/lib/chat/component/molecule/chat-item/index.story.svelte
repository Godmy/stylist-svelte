<script lang="ts">
  import { Story } from '$stylist/playground/component/molecule/story';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import ChatItem from './index.svelte';
  import type { SlotChat as Chat } from '$stylist/chat/interface/slot/chat';
  import type { SlotUser as User } from '$stylist/chat/interface/slot/user';

  const currentUser: User = {
    id: '1',
    name: 'Current User',
    avatar: 'https://via.placeholder.com/40',
    status: 'online'
  };

  const chat: Chat = {
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

  const controls: InterfaceControllerSettings[] = [
    { name: 'isActive', type: 'boolean', defaultValue: false }
  ];

  function handleSelect() {
    console.log('Chat selected');
  }

  function handleDelete() {
    console.log('Chat deleted');
  }

</script>

<Story
  {controls}
  title="ChatItem Component"
  description="A component to display a single chat item in a chat list"
>
  {#snippet children(controlValues: any)}
  <ChatItem
    {chat}
    {currentUser}
    isActive={controlValues.isActive}
    onSelect={handleSelect}
    onDelete={handleDelete}
  />
  {/snippet}
</Story>




