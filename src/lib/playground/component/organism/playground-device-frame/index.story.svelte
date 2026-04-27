<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundDeviceFrame from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'device', type: 'select', defaultValue: 'desktop', options: ['mobile', 'tablet', 'desktop', 'fullscreen'] }
  ];
</script>

<Story
  component={RecipePlaygroundDeviceFrame}
  title="Playground Device Frame"
  description="Device frame wrapper for responsive preview."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundDeviceFrame device={values.device}>
      <div style="min-height: 240px; padding: 24px; background: linear-gradient(135deg, #f8fafc, #e2e8f0);">
        Preview content
      </div>
    </RecipePlaygroundDeviceFrame>
  {/snippet}
</Story>

