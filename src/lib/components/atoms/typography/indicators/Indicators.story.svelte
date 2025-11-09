<script lang="ts">
  import { CountBadge, PageEllipsis, StatusIndicator } from '$lib';
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';

  let count = 5;
  let maxCount = 99;
  let showZero = false;
  let status: 'success' | 'error' | 'warning' | 'info' | 'default' = 'default';
  let size: 'sm' | 'md' | 'lg' = 'md';
  let label = 'Example label';

  const controls: ControlConfig[] = [
    { name: 'count', type: 'number', defaultValue: 5, min: 0 },
    { name: 'maxCount', type: 'number', defaultValue: 99 },
    { name: 'showZero', type: 'boolean', defaultValue: false },
    { name: 'status', type: 'select', options: ['success', 'error', 'warning', 'info', 'default'], defaultValue: 'default' },
    { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
    { name: 'label', type: 'text', defaultValue: 'Example label' }
  ];
</script>

# Indicators

## CountBadge

<Story title="CountBadge" {controls}>
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

<Story title="PageEllipsis">
  <div class="space-y-4 p-8">
    <div class="flex items-center">
      <span>Стр. 1</span>
      <PageEllipsis />
      <span>Стр. 10</span>
    </div>
  </div>
</Story>

## StatusIndicator

<Story title="StatusIndicator" {controls}>
  <script>
    let status: 'success' | 'error' | 'warning' | 'info' | 'default' = 'default';
    let size: 'sm' | 'md' | 'lg' = 'md';
    let label = 'Текст примера';
  </script>

  <div class="space-y-4 p-8">
    <div class="flex items-center space-x-2">
      <StatusIndicator status={status} size={size} />
      <span>{label}</span>
    </div>

    <div class="space-y-4">
      <div>
        <label>
          Status:
          <select bind:value={status}>
            <option value="success">Success</option>
            <option value="error">Error</option>
            <option value="warning">Warning</option>
            <option value="info">Info</option>
            <option value="default">Default</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Size: 
          <select bind:value={size}>
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </label>
      </div>

      <div>
        <label>Label: <input type="text" bind:value={label} /></label>
      </div>
    </div>
  </div>
</Story>