<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Notification from './Notification.svelte';

  type Props = {
    title: string;
    message: string;
    type: 'info' | 'success' | 'warning' | 'error';
    showIcon: boolean;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Notification Title'
    },
    {
      name: 'message',
      type: 'text',
      defaultValue: 'This is a notification message.'
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'info',
      options: ['info', 'success', 'warning', 'error']
    },
    {
      name: 'showIcon',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-notification"
  title="Notification"
  component={Notification}
  category="Molecules"
  description="A component to display notifications to the user."
  tags={['message', 'alert', 'toast']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Notification</h2>
      <div class="max-w-md mx-auto space-y-4">
        <Notification 
          title={props.title} 
          message={props.message} 
          type={props.type} 
          showIcon={props.showIcon} 
        />
      </div>
    </div>
  {/snippet}
</Story>