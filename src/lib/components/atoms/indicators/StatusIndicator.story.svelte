<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import StatusIndicator from './StatusIndicator.svelte';

  type StatusIndicatorStoryProps = {
    status: 'default' | 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary';
    size: 'sm' | 'md' | 'lg';
    label: string;
    showIcon: boolean;
  };

  const statusOptions = ['default', 'success', 'warning', 'error', 'info', 'primary', 'secondary'];
  const sizeOptions = ['sm', 'md', 'lg'];

  const controls: ControlConfig[] = [
    {
      name: 'status',
      type: 'select',
      defaultValue: 'default',
      options: statusOptions
    },
    {
      name: 'size',
      type: 'select',
      defaultValue: 'md',
      options: sizeOptions
    },
    {
      name: 'label',
      type: 'text',
      defaultValue: 'Status Label'
    },
    {
      name: 'showIcon',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="atoms-status-indicator"
  title="StatusIndicator"
  component={StatusIndicator}
  category="Atoms"
  description="StatusIndicator component for showing various statuses."
  tags={['indicator', 'status', 'badge']}
  controls={controls}
>
  {#snippet children(props: StatusIndicatorStoryProps)}
    <StatusIndicator
      status={props.status}
      size={props.size}
      label={props.label}
      showIcon={props.showIcon}
    >
      {props.label}
    </StatusIndicator>
  {/snippet}
</Story>