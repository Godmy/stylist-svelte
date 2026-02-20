<script lang="ts">
  import MessageItem from './index.svelte';
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { Message, User } from '$stylist/design-system/props/chat';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  // Define controls for the story
  const controls: ControlConfig[] = [
    {
      name: 'isOwn',
      type: 'boolean',
      defaultValue: false,
      description: 'Whether this is the current user\'s message'
    },
    {
      name: 'showAvatar',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether to show the sender\'s avatar'
    },
    {
      name: 'enableReactions',
      type: 'boolean',
      defaultValue: true,
      description: 'Whether to enable reactions for the message'
    }
  ];

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

  let message: Message = {
    id: '1',
    content: 'Hello! How are you doing today? I\'m working on a new Svelte project.',
    timestamp: new Date(Date.now() - 3600000), // 1 hour ago
    status: 'read',
    senderId: '2'
  };

  let ownMessage: Message = {
    id: '2',
    content: 'I\'m doing great! Just finished implementing the new component library.',
    timestamp: new Date(Date.now() - 3500000), // 1 hour ago
    status: 'read',
    senderId: '1'
  };

  let messageWithAttachment: Message = {
    id: '3',
    content: 'Check out this image',
    timestamp: new Date(Date.now() - 7200000), // 2 hours ago
    status: 'delivered',
    senderId: '2',
    type: 'image',
    attachments: [
      {
        id: 'att1',
        name: 'screenshot.png',
        type: 'image/png',
        size: 102400,
        url: 'https://via.placeholder.com/150'
      }
    ]
  };

  function handleReaction(e: CustomEvent<{ reaction: string }>) {
    console.log('Reaction added:', e.detail.reaction);
  }

  function handleReply(e: CustomEvent<{ message: Message }>) {
    console.log('Reply to message:', e.detail.message.id);
  }

  function handleForward(e: CustomEvent<{ message: Message }>) {
    console.log('Forward message:', e.detail.message.id);
  }
</script>

<div class="p-4">
  <h1 class="mb-4 text-lg font-semibold">MessageItem Component</h1>

  <div class="mb-6 rounded border p-4">
    <h2 class="text-md mb-2 font-semibold">Interactive MessageItem</h2>
    <Story {controls}>
      {#snippet children(values: any)}
        <div class="flex flex-col gap-4">
          <MessageItem
            message={message}
            isOwn={values.isOwn}
            showAvatar={values.showAvatar}
            enableReactions={values.enableReactions}
            sender={message.senderId === '1' ? currentUser : otherUser}
            on:reaction={handleReaction}
            on:reply={handleReply}
            on:forward={handleForward}
          />
        </div>
      {/snippet}
    </Story>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Own Message</h2>
      <MessageItem
        message={ownMessage}
        isOwn={true}
        enableReactions={true}
        sender={currentUser}
        on:reaction={handleReaction}
        on:reply={handleReply}
        on:forward={handleForward}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Other User Message</h2>
      <MessageItem
        message={message}
        isOwn={false}
        enableReactions={true}
        sender={otherUser}
        on:reaction={handleReaction}
        on:reply={handleReply}
        on:forward={handleForward}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Message with Attachment</h2>
      <MessageItem
        message={messageWithAttachment}
        isOwn={false}
        enableReactions={true}
        sender={otherUser}
        on:reaction={handleReaction}
        on:reply={handleReply}
        on:forward={handleForward}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Message without Reactions</h2>
      <MessageItem
        message={message}
        isOwn={false}
        enableReactions={false}
        sender={otherUser}
        on:reaction={handleReaction}
        on:reply={handleReply}
        on:forward={handleForward}
      />
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Default MessageItem</h2>
    <MessageItem
      message={message}
      isOwn={false}
      enableReactions={true}
      sender={otherUser}
      on:reaction={handleReaction}
      on:reply={handleReply}
      on:forward={handleForward}
    />
  </div>
</div>
