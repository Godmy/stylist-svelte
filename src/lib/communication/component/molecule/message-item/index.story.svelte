<script lang="ts">
	// @ts-nocheck
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import type { SlotMessage as Message } from '$stylist/communication/interface/slot/message';
import type { SlotUser as User } from '$stylist/communication/interface/slot/user';
  import MessageItem from './index.svelte';

  let lastEvent = $state('none');

  const controls: InterfaceControllerSettings[] = [
    { name: 'isOwn', type: 'boolean', defaultValue: false },
    { name: 'showAvatar', type: 'boolean', defaultValue: true },
    { name: 'enableReactions', type: 'boolean', defaultValue: true },
    { name: 'withAttachment', type: 'boolean', defaultValue: false }
  ];

  const currentUser: User = { id: '1', name: 'Current User', avatar: 'https://i.pravatar.cc/80?img=19', status: 'online' };
  const otherUser: User = { id: '2', name: 'John Doe', avatar: 'https://i.pravatar.cc/80?img=20', status: 'online' };

  const baseMessage: Message = {
    id: 'm1',
    content: 'Hello! We have completed the API integration for this sprint.',
    timestamp: new Date(),
    status: 'read',
    senderId: '2'
  };

  const attachmentMessage: Message = {
    ...baseMessage,
    id: 'm2',
    type: 'image',
    attachments: [{ id: 'a1', name: 'preview.png', type: 'image/png', size: 20480, url: 'https://placehold.co/160x100' }]
  };
</script>

<Story
  id="molecules-message-item"
  title="Molecules / Information / Messages / MessageItem"
  component={MessageItem}
  category="Molecules/Information/Messages"
  description="Single message block supporting avatar, reactions and actions."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 rounded-xl bg-[var(--color-background-secondary)] space-y-3">
      <MessageItem
        message={args.withAttachment ? attachmentMessage : baseMessage}
        isOwn={args.isOwn}
        showAvatar={args.showAvatar}
        enableReactions={args.enableReactions}
        sender={args.isOwn ? currentUser : otherUser}
        on:reaction={(e) => (lastEvent = `reaction:${e.detail.reaction}`)}
        on:reply={() => (lastEvent = 'reply')}
        on:forward={() => (lastEvent = 'forward')}
      />
      <p class="text-sm text-[var(--color-text-secondary)]">Last event: {lastEvent}</p>
    </div>
  {/snippet}
</Story>





