<script lang="ts">
  import { Story } from '$stylist/playground/component/molecule/story';
  import ChatWindow from './index.svelte';
  import type { SlotChat as Chat } from '$stylist/communication/interface/slot/chat';
  import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
  import type { SlotMessage as Message } from '$stylist/communication/interface/slot/message';

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

  const messages: Message[] = [
    {
      id: '1',
      content: 'Hey there! How are you doing?',
      timestamp: new Date(Date.now() - 3600000),
      status: 'read',
      senderId: '2'
    },
    {
      id: '2',
      content: 'I\'m doing great! Just working on a new Svelte project.',
      timestamp: new Date(Date.now() - 3500000),
      status: 'read',
      senderId: '1'
    },
    {
      id: '3',
      content: 'That sounds interesting! What kind of project?',
      timestamp: new Date(Date.now() - 3400000),
      status: 'read',
      senderId: '2'
    }
  ];

  function handleMessageSend(content: string) {
    console.log('Message sent:', content, 'to chat:', chat.id);
  }

  function handleMessageReaction(messageId: string, reaction: string) {
    console.log('Reaction added:', reaction, 'to message:', messageId);
  }

  function handleCall() {
    console.log('Call initiated for chat:', chat.id);
  }

  function handleVideoCall() {
    console.log('Video call initiated for chat:', chat.id);
  }

  function handleChatInfo() {
    console.log('Chat info requested for chat:', chat.id);
  }
</script>

<Story
  component={ChatWindow}
  title="ChatWindow Component"
  description="A component to display a complete chat window with messages and input"
>
  {#snippet children()}
    <ChatWindow
      {chat}
      {currentUser}
      {messages}
      onMessageSend={handleMessageSend}
      onMessageReaction={handleMessageReaction}
      onCall={handleCall}
      onVideoCall={handleVideoCall}
      onChatInfo={handleChatInfo}
    />
  {/snippet}
</Story>



