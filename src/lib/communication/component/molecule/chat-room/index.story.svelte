<script lang="ts">
  import { Story } from '$stylist/playground/component/molecule/story';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import ChatRoom from './index.svelte';
  import type { SlotUser } from '$stylist/communication/interface/slot/user';

  // Sample users and messages
  const sampleCurrentUser: SlotUser = {
    id: 'current',
    name: 'You',
    avatar: ''
  };

  const sampleParticipants: SlotUser[] = [
    { id: 'user1', name: 'Alex Morgan', avatar: '' },
    { id: 'user2', name: 'Taylor Swift', avatar: '' },
    { id: 'user3', name: 'Jamie Johnson', avatar: '' },
    { id: 'user4', name: 'Jordan Smith', avatar: '' }
  ];

  const sampleMessages = [
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

  const controls: InterfaceControllerSettings[] = [
    { name: 'loading', type: 'boolean', defaultValue: false },
    { name: 'variant', type: 'select', defaultValue: 'default', options: ['default', 'compact', 'spacious'] }
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




