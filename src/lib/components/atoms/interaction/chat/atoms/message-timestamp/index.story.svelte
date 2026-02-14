<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import MessageTimestamp from './index.svelte';

  type MessageTimestampStoryProps = {
    formatStyle: 'datetime' | 'time' | 'date';
    showRelative: boolean;
  };

  const formatStyleOptions = ['datetime', 'time', 'date'];

  const controls: ControlConfig[] = [
    {
      name: 'formatStyle',
      type: 'select',
      defaultValue: 'datetime',
      options: formatStyleOptions
    },
    {
      name: 'showRelative',
      type: 'boolean',
      defaultValue: false
    }
  ];
</script>

<Story
  id="atoms-message-timestamp"
  title="MessageTimestamp"
  component={MessageTimestamp}
  category="Atoms"
  description="MessageTimestamp component for showing time of a message."
  tags={['indicator', 'message', 'timestamp', 'time']}
  controls={controls}
>
  {#snippet children(props: any)}
    <div class="flex items-center space-x-2">
      <span>Message sent at:</span>
      <MessageTimestamp
        timestamp={new Date()}
        formatStyle={props.formatStyle}
        showRelative={props.showRelative}
      />
    </div>
  {/snippet}
</Story>





