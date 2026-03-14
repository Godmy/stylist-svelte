<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/defaults/interaction/controls';
  import PlaygroundFeatureGrid from './index.svelte';

  const controls: ControlConfig[] = [
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


