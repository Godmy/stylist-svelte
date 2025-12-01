<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import AlertCard from './AlertCard.svelte';

  type Props = {
    title?: string;
    subtitle?: string;
    icon?: string;
    class?: string;
  };

  const controls: ControlConfig[] = [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Alert Title'
    },
    {
      name: 'subtitle',
      type: 'text',
      defaultValue: 'This is a sample alert message'
    }
  ];
</script>

<Story
  id="molecules-alert-card"
  title="AlertCard"
  component={AlertCard}
  category="Molecules"
  description="A card component to display important alerts and notifications."
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">AlertCard Story</h2>
      <AlertCard
        {...props}
        actions={[
          { label: 'OK', onClick: () => console.log('OK clicked') },
          { label: 'Cancel', onClick: () => console.log('Cancel clicked') }
        ]}
      />
    </div>
  {/snippet}
</Story>