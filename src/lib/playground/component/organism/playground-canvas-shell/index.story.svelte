<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundCanvasShell from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'showGrid', type: 'boolean', defaultValue: true },
    { name: 'zoom', type: 'number', defaultValue: 1, min: 0.25, max: 2 },
    { name: 'viewport', type: 'select', defaultValue: 'desktop', options: ['mobile', 'tablet', 'desktop', 'fullscreen'] }
  ];
</script>

<Story
  component={RecipePlaygroundCanvasShell}
  title="Playground Canvas Shell"
  description="Container shell for canvas-based component previews."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundCanvasShell showGrid={values.showGrid} zoom={values.zoom} viewport={values.viewport}>
      <div style="min-height: 240px; border-radius: 16px; background: white; padding: 24px;">
        Canvas shell content
      </div>
    </RecipePlaygroundCanvasShell>
  {/snippet}
</Story>

