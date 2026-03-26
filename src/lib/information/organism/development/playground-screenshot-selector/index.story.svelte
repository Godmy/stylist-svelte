<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import PlaygroundScreenshotSelector from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'drawingMode', type: 'boolean', defaultValue: false },
    { name: 'drawColor', type: 'color', defaultValue: '#ef4444' }
  ];
</script>

<Story
  component={PlaygroundScreenshotSelector}
  title="Playground Screenshot Selector"
  description="Tool for selecting and capturing screenshot regions."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundScreenshotSelector drawingMode={values.drawingMode} drawColor={values.drawColor} />
  {/snippet}
</Story>

