<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipePlaygroundEnhancedExportPanel from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'componentName', type: 'text', defaultValue: 'Button' }
  ];
</script>

<Story
  component={RecipePlaygroundEnhancedExportPanel}
  title="Playground Enhanced Export Panel"
  description="Advanced export options for component code."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundEnhancedExportPanel
      componentName={values.componentName}
      svelteCode="<button class='btn'>Click me</button>"
      props={{ variant: 'primary' }}
    />
  {/snippet}
</Story>

