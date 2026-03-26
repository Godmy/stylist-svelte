<script lang="ts">
  import Story from '$stylist/interaction/playground/Story.svelte';
  import ZoomToolbar from './index.svelte';
  import type { TokenControllerType } from '$stylist/interaction/type/token/controller-type';

  const controls = [
    {
      name: 'zoomLevel',
      type: 'number' as TokenControllerType,
      defaultValue: 100,
      description: 'Current zoom level percentage'
    },
    {
      name: 'minZoom',
      type: 'number' as TokenControllerType,
      defaultValue: 50,
      description: 'Minimum zoom level'
    },
    {
      name: 'maxZoom',
      type: 'number' as TokenControllerType,
      defaultValue: 200,
      description: 'Maximum zoom level'
    },
    {
      name: 'showReset',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether to show the reset button'
    },
    {
      name: 'showPercentage',
      type: 'boolean' as TokenControllerType,
      defaultValue: true,
      description: 'Whether to show the percentage display'
    }
  ];

  let step = 10;
  let log: string[] = [];

  function handleZoomChange(value: number) {
    log = [`${new Date().toLocaleTimeString()} — масштаб ${value}%`, ...log].slice(0, 5);
  }
</script>

<Story
  {controls}
  title="ZoomToolbar Component"
  description="Interactive zoom toolbar with customizable options"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
      <ZoomToolbar
        zoomLevel={controlValues.zoomLevel}
        minZoom={controlValues.minZoom}
        maxZoom={controlValues.maxZoom}
        step={step}
        showReset={controlValues.showReset}
        showPercentage={controlValues.showPercentage}
        onZoomChange={handleZoomChange}
      />
    </div>

    <div class="mt-4 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] p-4">
      <h3 class="text-sm font-semibold text-[var(--color-text-primary)]">История</h3>
      {#if log.length > 0}
        <ul class="mt-2 space-y-1 text-sm text-[var(--color-text-primary)]">
          {#each log as entry}
            <li class="rounded-md bg-[var(--color-background-primary)] px-3 py-1 shadow-sm">{entry}</li>
          {/each}
        </ul>
      {:else}
        <p class="mt-2 text-sm text-[var(--color-text-secondary)]">История появится после взаимодействия с панелью.</p>
      {/if}
    </div>
  </div>

  {/snippet}
</Story>




