<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import PlaygroundDeviceFrame from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'device', type: 'select', defaultValue: 'desktop', options: ['mobile', 'tablet', 'desktop', 'fullscreen'] }
  ];
</script>

<Story
  component={PlaygroundDeviceFrame}
  title="Playground Device Frame"
  description="Device frame wrapper for responsive preview."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundDeviceFrame device={values.device}>
      <div style="min-height: 240px; padding: 24px; background: linear-gradient(135deg, #f8fafc, #e2e8f0);">
        Preview content
      </div>
    </PlaygroundDeviceFrame>
  {/snippet}
</Story>

