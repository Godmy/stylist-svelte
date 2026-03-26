<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import PlaygroundFeatureGrid from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Why Stylist?' },
    { name: 'subtitle', type: 'text', defaultValue: 'The most advanced AI-generated component library' }
  ];
</script>

<Story
  component={PlaygroundFeatureGrid}
  title="Playground Feature Grid"
  description="Landing grid with key value propositions for the component ecosystem."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundFeatureGrid title={values.title} subtitle={values.subtitle} />
  {/snippet}
</Story>



