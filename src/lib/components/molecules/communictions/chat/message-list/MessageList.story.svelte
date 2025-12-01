<script lang="ts">
  import MessageList from './MessageList.svelte';
  import type { Message, User } from '$lib/types';

  let currentUser: User = {
    id: '1',
    name: 'Current User',
    avatar: 'https://via.placeholder.com/40',
    status: 'online'
  };

  let otherUser: User = {
    id: '2',
    name: 'John Doe',
    avatar: 'https://via.placeholder.com/40',
    status: 'online'
  };

  let messages: Message[] = [
    {
      id: '1',
      sender: otherUser,
      content: 'Hey there! How are you doing?',
      timestamp: new Date(Date.now() - 3600000), // 1 hour ago
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
      sender: otherUser,
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
      sender: otherUser,
      content: 'That\'s awesome! I\'d love to see it when it\'s ready.',
      timestamp: new Date(Date.now() - 3200000),
      status: 'read',
      senderId: '2'
    },
    {
      id: '6',
      sender: currentUser,
      content: 'Sure! I\'ll send you a demo link once I have something working.',
      timestamp: new Date(Date.now() - 3100000),
      status: 'read',
      senderId: '1'
    },
    {
      id: '7',
      sender: otherUser,
      content: 'By the way, did you attend the Svelte Summit?',
      timestamp: new Date(Date.now() - 3000000),
      status: 'delivered',
      senderId: '2'
    },
    {
      id: '8',
      sender: currentUser,
      content: 'Yes, I did! The talks on performance optimization were really insightful.',
      timestamp: new Date(Date.now() - 2900000),
      status: 'delivered',
      senderId: '1'
    }
  ];

  function handleMessageClick(e: CustomEvent<{ message: Message }>) {
    console.log('Message clicked:', e.detail.message.id);
  }

  function handleMessageReaction(e: CustomEvent<{ message: Message; reaction: string }>) {
    console.log('Reaction added:', e.detail.reaction, 'to message:', e.detail.message.id);
  }

  function handleOnMessageAction(action: string, message: Message) {
    console.log(`Message action (${action}):`, message.id);
  }
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">MessageList Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive MessageList</h2>
    <div class="h-96 flex flex-col gap-4">
      <MessageList
        {messages}
        {currentUser}
        on:messageClick={handleMessageClick}
        on:messageReaction={handleMessageReaction}
        on:messageAction={(e) => handleOnMessageAction(e.detail.action, e.detail.message)}
      />
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">MessageList with Few Messages</h2>
      <div class="h-64">
        <MessageList
          messages={messages.slice(0, 3)}
          {currentUser}
          on:messageClick={handleMessageClick}
          on:messageReaction={handleMessageReaction}
          on:messageAction={(e) => handleOnMessageAction(e.detail.action, e.detail.message)}
        />
      </div>
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">MessageList with Own Messages</h2>
      <div class="h-64">
        <MessageList
          messages={[
            { ...messages[0], senderId: currentUser.id, sender: currentUser },
            { ...messages[1], senderId: otherUser.id, sender: otherUser },
            { ...messages[2], senderId: currentUser.id, sender: currentUser }
          ]}
          {currentUser}
          on:messageClick={handleMessageClick}
          on:messageReaction={handleMessageReaction}
          on:messageAction={(e) => handleOnMessageAction(e.detail.action, e.detail.message)}
        />
      </div>
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default MessageList</h2>
    <div class="h-64">
      <MessageList
        {messages}
        {currentUser}
        on:messageClick={handleMessageClick}
        on:messageReaction={handleMessageReaction}
        on:messageAction={(e) => handleOnMessageAction(e.detail.action, e.detail.message)}
      />
    </div>
  </div>
</div>