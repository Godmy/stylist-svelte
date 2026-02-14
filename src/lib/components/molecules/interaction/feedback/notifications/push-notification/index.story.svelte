<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import PushNotification from './index.svelte';

  const typeOptions = ['info', 'success', 'warning', 'error'] as const;

  type PushNotificationStoryProps = {
    title: string;
    message: string;
    type: (typeof typeOptions)[number];
    showIcon: boolean;
    autoDismiss: boolean;
    duration: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'New Message'
    },
    {
      name: 'message',
      type: 'text',
      defaultValue: 'You have received a new message from John Doe.'
    },
    {
      name: 'type',
      type: 'select',
      defaultValue: 'info',
      options: [...typeOptions]
    },
    {
      name: 'showIcon',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'autoDismiss',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'duration',
      type: 'number',
      defaultValue: 5000
    }
  ];
</script>

<Story
  id="molecules-push-notification"
  title="PushNotification"
  component={PushNotification}
  category="Molecules"
  description="A push notification component."
  tags={['notification', 'alert', 'message']}
  controls={controls}
>
  {#snippet children(props: any)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">PushNotification Story</h2>
      <PushNotification
        title={props.title}
        message={props.message}
        type={props.type}
        showIcon={props.showIcon}
        autoDismiss={props.autoDismiss}
        duration={props.duration}
        onClose={() => console.log('Notification closed')}
      />
    </div>
  {/snippet}
</Story>


