<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import PlaygroundDrawingOverlay from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'drawColor', type: 'color', defaultValue: '#ff0000' }
  ];
</script>

<Story
  component={PlaygroundDrawingOverlay}
  title="Playground Drawing Overlay"
  description="Overlay for drawing annotations on component previews."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundDrawingOverlay drawColor={values.drawColor} />
  {/snippet}
</Story>

