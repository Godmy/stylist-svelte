<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import Alert from './Alert.svelte';

  type AlertStoryProps = {
    variant: 'info' | 'success' | 'warning' | 'error';
    title: string;
    closable: boolean;
    icon: boolean;
  };

  const variantOptions = ['info', 'success', 'warning', 'error'];

  const controls: ControlConfig[] = [
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'info',
      options: variantOptions
    },
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Information'
    },
    {
      name: 'closable',
      type: 'boolean',
      defaultValue: false
    },
    {
      name: 'icon',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="atoms-alert"
  title="Alert"
  component={Alert}
  category="Atoms"
  description="Alert component for displaying important messages."
  tags={['feedback', 'alert', 'notification']}
  controls={controls}
>
  {#snippet children(props: AlertStoryProps)}
    <Alert
      variant={props.variant}
      title={props.title}
      closable={props.closable}
      icon={props.icon}
      content={() => `This is an alert message. You can put any content here to demonstrate the alert component.`}
    />
  {/snippet}
</Story>