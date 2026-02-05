<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import AlertPanel from './alert-panel/index.svelte';

  type Props = {
    title?: string;
    description?: string;
    status?: 'info' | 'success' | 'warning' | 'error';
    showIcon?: boolean;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Alert Panel Title'
    },
    {
      name: 'description',
      type: 'text',
      defaultValue: 'This is a sample alert panel description'
    },
    {
      name: 'status',
      type: 'select',
      options: ['info', 'success', 'warning', 'error'],
      defaultValue: 'info'
    },
    {
      name: 'showIcon',
      type: 'boolean',
      defaultValue: true
    }
  ];
</script>

<Story
  id="molecules-alert-panel"
  title="AlertPanel"
  component={AlertPanel}
  category="Molecules"
  description="A panel component to display important alert messages."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AlertPanel Story</h2>
      <AlertPanel {...props} />
    </div>
  {/snippet}
</Story>
