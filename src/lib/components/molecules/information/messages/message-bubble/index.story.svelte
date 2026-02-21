<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/interaction/controls';
  import MessageBubble from './index.svelte';

  const controls: ControlConfig[] = [
    { name: 'author', type: 'text', defaultValue: 'John Doe' },
    { name: 'message', type: 'text', defaultValue: 'Hello, how is the release going?' },
    { name: 'timestamp', type: 'text', defaultValue: '2 min ago' },
    { name: 'align', type: 'select', options: ['left', 'right'], defaultValue: 'left' },
    { name: 'variant', type: 'select', options: ['default', 'system'], defaultValue: 'default' },
    { name: 'avatar', type: 'text', defaultValue: 'https://i.pravatar.cc/80?img=18' }
  ];
</script>

<Story
  id="molecules-message-bubble"
  title="Molecules / Information / Messages / MessageBubble"
  component={MessageBubble}
  category="Molecules/Information/Messages"
  description="Single chat bubble with alignment and variant controls."
  {controls}
>
  {#snippet children(args: any)}
    <div class="p-6 rounded-xl bg-gray-50 space-y-4">
      <MessageBubble author={args.author} message={args.message} timestamp={args.timestamp} align={args.align} variant={args.variant} avatar={args.avatar} />
    </div>
  {/snippet}
</Story>
