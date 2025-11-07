<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import MessageStatus from './MessageStatus.svelte';

  type MessageStatusStoryProps = {
    status: 'sent' | 'delivered' | 'read';
    size: 'sm' | 'md';
  };

  const statusOptions = ['sent', 'delivered', 'read'];
  const sizeOptions = ['sm', 'md'];

  const controls: ControlConfig[] = [
    {
      name: 'status',
      type: 'select',
      defaultValue: 'sent',
      options: statusOptions
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'sm',
      options: sizeOptions
    }
  ];
</script>

<Story
  id="atoms-message-status"
  title="MessageStatus"
  component={MessageStatus}
  category="Atoms"
  description="MessageStatus component for showing status of a message."
  tags={['indicator', 'message', 'status']}
  controls={controls}
>
  {#snippet children(props: MessageStatusStoryProps)}
    <div class="flex items-center space-x-2">
      <span>Message Status:</span>
      <MessageStatus
        status={props.status}
        size={props.size}
      />
    </div>
  {/snippet}
</Story>