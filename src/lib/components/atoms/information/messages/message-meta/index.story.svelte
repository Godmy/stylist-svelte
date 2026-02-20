<script lang="ts">
  import MessageMeta from './index.svelte';
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { Message } from '$stylist/design-system/props/chat';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/controls';

  const message = {
    id: '1',
    senderId: 'user1',
    content: 'Test message',
    timestamp: new Date(2023, 5, 15, 14, 30),
    status: 'read'
  };

  const controls = [
    {
      name: 'showTimestamp',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showStatus',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    }
  ];
</script>

<Story
  {controls}
  component={MessageMeta}
  title="MessageMeta"
  category="Atoms/Information/Messages"
  description="Displays metadata for a message including timestamp and status."
  tags={['message', 'meta', 'timestamp', 'status']}
>
  {#snippet children(values: any)}
    <div class="p-4">
      <h1 class="mb-4 text-lg font-semibold">MessageMeta Component</h1>

      <div class="mb-6 rounded border p-4">
        <h2 class="text-md mb-2 font-semibold">Interactive MessageMeta</h2>
        <MessageMeta
          message={message}
          showTimestamp={values.showTimestamp}
          showStatus={values.showStatus}
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">With Timestamp Only</h2>
          <MessageMeta
            message={message}
            showTimestamp={true}
            showStatus={false}
          />
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">With Status Only</h2>
          <MessageMeta
            message={message}
            showTimestamp={false}
            showStatus={true}
          />
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">Without Meta Info</h2>
          <MessageMeta
            message={message}
            showTimestamp={false}
            showStatus={false}
          />
        </div>

        <div class="p-4 border rounded">
          <h2 class="text-md font-semibold mb-2">Default MessageMeta</h2>
          <MessageMeta
            message={message}
            showTimestamp={true}
            showStatus={true}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>