<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import ChatRoom from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';
  import type { Message as ChatRoomMessage } from './index.svelte';

  // Sample users and messages
  const sampleCurrentUser = {
    id: 'current',
    name: 'You',
    avatar: ''
  };

  const sampleParticipants = [
    { id: 'user1', name: 'Alex Morgan', avatar: '' },
    { id: 'user2', name: 'Taylor Swift', avatar: '' },
    { id: 'user3', name: 'Jamie Johnson', avatar: '' },
    { id: 'user4', name: 'Jordan Smith', avatar: '' }
  ];

  const sampleMessages: ChatRoomMessage[] = [
    {
      id: 'msg1',
      text: 'Hey team! How is everyone doing with the project?',
      sender: 'Alex Morgan',
      timestamp: '10:24 AM',
      isOwn: false
    },
    {
      id: 'msg2',
      text: 'I\'m making good progress on the UI components. Should have the first draft ready by EOD.',
      sender: 'You',
      timestamp: '10:25 AM',
      isOwn: true,
      status: 'read'
    },
    {
      id: 'msg3',
      text: 'That\'s great to hear! I\'ve finished the backend API implementation.',
      sender: 'Taylor Swift',
      timestamp: '10:26 AM',
      isOwn: false
    }
  ];

  const controls = [
    {
      name: 'loading',
      type: 'boolean' as ControlType,
      defaultValue: false,
      description: 'Whether the chat room is in loading state'
    },
    {
      name: 'variant',
      type: 'select' as ControlType,
      defaultValue: 'default',
      options: ['default', 'compact', 'spacious'],
      description: 'Visual variant of the chat room'
    }
  ];

  // Function to handle message sending
  function handleSendMessage(text: string) {
    console.log('Message sent:', text);
  }
</script>

<Story
  {controls}
  title="ChatRoom Component"
  description="A component to display a chat room with message history and composer"
 
>
  {#snippet children(controlValues: any)}
  <ChatRoom
    messages={sampleMessages}
    currentUser={sampleCurrentUser}
    participants={sampleParticipants}
    title="Design Team Chat"
    subtitle="3 teammates online"
    loading={controlValues.loading}
    variant={controlValues.variant}
    onMessageSend={handleSendMessage}
  />

  {/snippet}
</Story>

