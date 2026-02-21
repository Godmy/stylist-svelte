<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import MessageThread from './index.svelte';

  let lastAction = $state('none');

  const controls: ControlConfig[] = [
    { name: 'title', type: 'text', defaultValue: 'Project chat' },
    { name: 'loading', type: 'boolean', defaultValue: false },
    { name: 'messageCount', type: 'number', defaultValue: 4, min: 1, max: 8 }
  ];

  const allMessages = [
    { id: '1', text: 'Hello!', sender: 'contact', timestamp: '14:30', isOwn: false },
    { id: '2', text: 'Hi there!', sender: 'current-user', timestamp: '14:31', isOwn: true },
    { id: '3', text: 'Can we ship this today?', sender: 'contact', timestamp: '14:32', isOwn: false },
    { id: '4', text: 'Yes, after final QA.', sender: 'current-user', timestamp: '14:33', isOwn: true },
    { id: '5', text: 'Perfect, thanks.', sender: 'contact', timestamp: '14:34', isOwn: false }
  ];
</script>

<Story
  id="molecules-message-thread"
  title="Molecules / Information / Messages / MessageThread"
  component={MessageThread}
  category="Molecules/Information/Messages"
  description="Composed thread container for rendering a full conversation."
  {controls}
>
  {#snippet children(args: any)}
    <div class="h-96 p-4 rounded-xl bg-gray-50 space-y-3">
      <MessageThread
        title={args.title}
        messages={allMessages.slice(0, args.messageCount)}
        loading={args.loading}
        class="h-[320px]"
        onMessageAction={(action: string, message: { id: string }) => (lastAction = `${action}:${message.id}`)}
      />
      <p class="text-sm text-gray-600">Last action: {lastAction}</p>
    </div>
  {/snippet}
</Story>
