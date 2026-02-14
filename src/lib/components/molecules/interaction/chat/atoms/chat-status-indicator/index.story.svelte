<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import ChatStatusIndicator from './index.svelte';

  type ChatStatusIndicatorStoryProps = {
    status: 'online' | 'offline' | 'away' | 'typing';
    size: 'sm' | 'md' | 'lg';
    showLabel: boolean;
  };

  const statusOptions = ['online', 'offline', 'away', 'typing'];
  const sizeOptions = ['sm', 'md', 'lg'];

  const controls: ControlConfig[] = [
    {
      name: 'status',
      type: 'select',
      defaultValue: 'online',
      options: statusOptions
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'sm',
      options: sizeOptions
    },
    {
      name: 'showLabel',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-chat-status-indicator"
  title="ChatStatusIndicator"
  component={ChatStatusIndicator}
  category="Atoms"
  description="ChatStatusIndicator component for showing user's status in chat."
  tags={['indicator', 'chat', 'status']}
  controls={controls}
>
  {#snippet children(props: any)}
    <div class="flex items-center space-x-4">
      <ChatStatusIndicator
        status={props.status}
        size={props.size}
        showLabel={props.showLabel}
      />
      <span>User Status</span>
    </div>
  {/snippet}
</Story>


