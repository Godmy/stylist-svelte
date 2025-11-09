<script lang="ts">
  import { CountBadge, PageEllipsis, StatusIndicator } from '$lib';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let count = $state(5);
  let maxCount = $state(99);
  let showZero = $state(false);
  let status = $state<'online' | 'offline' | 'away' | 'busy'>('online');
  let label = $state('Example label');

  const controls: ControlConfig[] = [
    { name: 'count', type: 'number', defaultValue: 5, min: 0 },
    { name: 'maxCount', type: 'number', defaultValue: 99 },
    { name: 'showZero', type: 'boolean', defaultValue: false },
    { name: 'status', type: 'select', options: ['online', 'offline', 'away', 'busy'], defaultValue: 'online' },
    { name: 'label', type: 'text', defaultValue: 'Example label' }
  ];
</script>

# Indicators

## CountBadge

<Story id="countbadge-story" title="CountBadge" component={CountBadge} {controls}>
  <div class="space-y-4 p-8">
    <CountBadge count={count} max={maxCount} showZero={showZero}>Уведомления</CountBadge>

    <div class="grid grid-cols-3 gap-4">
      <div>
        <label>Count: <input type="number" bind:value={count} min="0" /></label>
      </div>
      <div>
        <label>Max Count: <input type="number" bind:value={maxCount} min="{count}" /></label>
      </div>
      <div>
        <label>
          <input type="checkbox" bind:checked={showZero} /> Show Zero
        </label>
      </div>
    </div>
  </div>
</Story>

## PageEllipsis

<Story id="pageellipsis-story" title="PageEllipsis" component={PageEllipsis}>
  <div class="space-y-4 p-8">
    <div class="flex items-center">
      <span>Стр. 1</span>
      <PageEllipsis />
      <span>Стр. 10</span>
    </div>
  </div>
</Story>

## StatusIndicator

<Story id="statusindicator-story" title="StatusIndicator" component={StatusIndicator} {controls}>

  <div class="space-y-4 p-8">
    <div class="flex items-center space-x-2">
      <StatusIndicator status={status} />
      <span>{label}</span>
    </div>

    <div class="space-y-4">
      <div>
        <label>
          Status:
          <select bind:value={status}>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="away">Away</option>
            <option value="busy">Busy</option>
          </select>
        </label>
      </div>

      <div>
        <label>Label: <input type="text" bind:value={label} /></label>
      </div>
    </div>
  </div>
</Story>