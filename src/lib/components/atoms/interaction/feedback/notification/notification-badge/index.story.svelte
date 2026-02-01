<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import NotificationBadge from './index.svelte';

  type Props = {
    count: number;
    maxCount: number;
    variant: 'dot' | 'number';
  };

  const controls: ControlConfig[] = [
    {
      name: 'count',
      type: 'number',
      defaultValue: 3,
      min: 0,
      max: 100
    },
    {
      name: 'maxCount',
      type: 'number',
      defaultValue: 99,
      min: 1,
      max: 999
    },
    {
      name: 'variant',
      type: 'select',
      defaultValue: 'number',
      options: ['dot', 'number']
    }
  ];
</script>

<Story
  id="molecules-notification-badge"
  title="NotificationBadge"
  component={NotificationBadge}
  category="Molecules"
  description="A badge component to display notification counts."
  tags={['badge', 'count', 'notification']}
  controls={controls}
>
  {#snippet children(props: Props)}
    <div class="p-6">
      <h2 class="text-xl font-semibold mb-6">Notification Badge</h2>
      <div class="flex items-center justify-center space-x-8">
        <div class="relative">
          <div class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            Icon
          </div>
          <NotificationBadge count={props.count} maxCount={props.maxCount} variant={props.variant} />
        </div>
        
        <div class="relative">
          <div class="w-12 h-12 bg-gray-300 rounded-lg flex items-center justify-center">
            Button
          </div>
          <NotificationBadge count={props.count} maxCount={props.maxCount} variant="dot" />
        </div>
      </div>
    </div>
  {/snippet}
</Story>
