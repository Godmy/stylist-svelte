<script lang="ts">
  import MessageItem from './index.svelte';
  import type { Message, User } from '$stylist/design-system/props/chat';

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

  let messageWithReactions: Message = {
    id: '4',
    content: 'What do you think about this new feature?',
    timestamp: new Date(Date.now() - 86400000), // 1 day ago
    status: 'read',
    senderId: '2'
  };

  let isOwn: boolean = false;
  let showAvatar: boolean = true;
  let enableReactions: boolean = true;

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
  <h1 class="text-lg font-semibold mb-4">MessageItem Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive MessageItem</h2>
    <div class="flex flex-col gap-4">
      <MessageItem
        {message}
        {isOwn}
        {showAvatar}
        {enableReactions}
        sender={message.senderId === currentUser.id ? currentUser : otherUser}
        on:reaction={handleReaction}
        on:reply={handleReply}
        on:forward={handleForward}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div class="flex items-end">
        <label for="message-is-own" class="flex items-center gap-1">
          <input id="message-is-own" type="checkbox" bind:checked={isOwn} />
          Is Own Message
        </label>
      </div>

      <div class="flex items-end">
        <label for="message-show-avatar" class="flex items-center gap-1">
          <input id="message-show-avatar" type="checkbox" bind:checked={showAvatar} />
          Show Avatar
        </label>
      </div>

      <div class="flex items-end">
        <label for="message-enable-reactions" class="flex items-center gap-1">
          <input id="message-enable-reactions" type="checkbox" bind:checked={enableReactions} />
          Enable Reactions
        </label>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Own Message</h2>
      <MessageItem
        message={ownMessage}
        isOwn={true}
        {enableReactions}
        sender={currentUser}
        on:reaction={handleReaction}
        on:reply={handleReply}
        on:forward={handleForward}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Other User Message</h2>
      <MessageItem
        {message}
        isOwn={false}
        {enableReactions}
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
        {enableReactions}
        sender={otherUser}
        on:reaction={handleReaction}
        on:reply={handleReply}
        on:forward={handleForward}
      />
    </div>

    <div class="p-4 border rounded">
      <h2 class="text-md font-semibold mb-2">Message without Reactions</h2>
      <MessageItem
        {message}
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
      {message}
      isOwn={false}
      {enableReactions}
      sender={otherUser}
      on:reaction={handleReaction}
      on:reply={handleReply}
      on:forward={handleForward}
    />
  </div>
</div>
