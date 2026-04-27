<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundScreenshotSelector from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'drawingMode', type: 'boolean', defaultValue: false },
    { name: 'drawColor', type: 'color', defaultValue: '#ef4444' }
  ];
</script>

<Story
  component={RecipePlaygroundScreenshotSelector}
  title="Playground Screenshot Selector"
  description="Tool for selecting and capturing screenshot regions."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundScreenshotSelector drawingMode={values.drawingMode} drawColor={values.drawColor} />
  {/snippet}
</Story>

