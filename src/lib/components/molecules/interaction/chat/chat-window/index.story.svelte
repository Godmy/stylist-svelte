<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import ChatWindow from './index.svelte';
  import type { Chat, User, Message } from '$stylist/design-system/props/chat';

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

  function handleMessageSend(e: CustomEvent<{ content: string; chatId: string }>) {
    console.log('Message sent:', e.detail.content, 'to chat:', e.detail.chatId);
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
</script>

<Story
  title="ChatWindow Component"
  description="A component to display a complete chat window with messages and input"
>
  <ChatWindow
    {chat}
    {currentUser}
    {messages}
    on:messageSend={handleMessageSend}
    on:messageReaction={handleMessageReaction}
    on:call={handleCall}
    on:videoCall={handleVideoCall}
    on:chatInfo={handleChatInfo}
  />
</Story>
