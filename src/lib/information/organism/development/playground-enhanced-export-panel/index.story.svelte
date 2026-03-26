<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import PlaygroundEnhancedExportPanel from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'componentName', type: 'text', defaultValue: 'Button' }
  ];
</script>

<Story
  component={PlaygroundEnhancedExportPanel}
  title="Playground Enhanced Export Panel"
  description="Advanced export options for component code."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundEnhancedExportPanel
      componentName={values.componentName}
      svelteCode="<button class='btn'>Click me</button>"
      props={{ variant: 'primary' }}
    />
  {/snippet}
</Story>

