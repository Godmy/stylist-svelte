<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import type { SlotMessage as Message } from '$stylist/chat/interface/slot/message';
import type { SlotUser as User } from '$stylist/chat/interface/slot/user';
  import MessageList from './index.svelte';

  let lastAction = $state('none');

  const controls: InterfaceControllerSettings[] = [
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
    <div class="p-4 rounded-xl bg-[var(--color-background-secondary)] space-y-3">
      <div class="h-80 rounded border border-[var(--color-border-primary)] overflow-hidden bg-[var(--color-background-primary)]">
        <MessageList
          messages={(args.includeAttachments ? messagesWithAttachments : messages).slice(0, args.messageCount)}
          {currentUser}
          onMessageAction={(action, message) => (lastAction = `${action}:${message.id}`)}
        />
      </div>
      <p class="text-sm text-[var(--color-text-secondary)]">Last action: {lastAction}</p>
    </div>
  {/snippet}
</Story>





