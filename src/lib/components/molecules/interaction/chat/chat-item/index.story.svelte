<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import ChatItem from './index.svelte';
  import type { Chat, User } from '$stylist/design-system/props/chat';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

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

  const controls = [
    {
      name: 'isActive',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the chat item is active'
    }
  ];

  function handleSelect() {
    console.log('Chat selected');
  }

  function handleDelete() {
    console.log('Chat deleted');
  }

  const chatItemProps = (isActive: boolean) =>
    ({ chat, currentUser, isActive }) as any;
</script>

<Story
  {controls}
  title="ChatItem Component"
  description="A component to display a single chat item in a chat list"
 
>
  {#snippet children(controlValues: any)}
  <ChatItem
    {...chatItemProps(controlValues.isActive)}
    on:select={handleSelect}
    on:delete={handleDelete}
  />

  {/snippet}
</Story>
