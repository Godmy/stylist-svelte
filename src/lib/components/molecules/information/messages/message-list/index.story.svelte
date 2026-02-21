<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import type { Message, User } from '$stylist/design-system/props/information/chat';
  import MessageList from './index.svelte';

  let lastAction = $state('none');

  const controls: ControlConfig[] = [
    { name: 'messageCount', type: 'number', defaultValue: 6, min: 1, max: 12 },
    { name: 'includeAttachments', type: 'boolean', defaultValue: false }
  ];

  const currentUser: User = { id: '1', name: 'Current User', avatar: 'https://i.pravatar.cc/80?img=25', status: 'online' };

  const messages: Message[] = Array.from({ length: 10 }, (_, i) => ({
    id: `msg-${i + 1}`,
    senderId: i % 2 === 0 ? '1' : '2',
    content: `Message ${i + 1} from ${i % 2 === 0 ? 'me' : 'teammate'}`,
    timestamp: new Date(Date.now() - i * 60000),
    status: i % 3 === 0 ? 'read' : 'delivered',
    type: 'text'
  }));

  const messagesWithAttachments: Message[] = messages.map((msg, i) => (i === 1 ? {
    ...msg,
    type: 'image',
    attachments: [{ id: 'ax1', name: 'image.png', type: 'image/png', size: 12000, url: 'https://placehold.co/120x80' }]
  } : msg));
</script>

<Story
  id="molecules-message-list"
  title="Molecules / Information / Messages / MessageList"
  component={MessageList}
  category="Molecules/Information/Messages"
  description="Scrollable chat message list with delegated item events."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-4 rounded-xl bg-gray-50 space-y-3">
      <div class="h-80 rounded border border-gray-200 overflow-hidden bg-white">
        <MessageList
          messages={(args.includeAttachments ? messagesWithAttachments : messages).slice(0, args.messageCount)}
          {currentUser}
          on:messageClick={(e) => (lastAction = `click:${e.detail.message.id}`)}
          on:messageReaction={(e) => (lastAction = `reaction:${e.detail.reaction}`)}
          onMessageAction={(action, message) => (lastAction = `${action}:${message.id}`)}
        />
      </div>
      <p class="text-sm text-gray-600">Last action: {lastAction}</p>
    </div>
  {/snippet}
</Story>
