<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipePlaygroundFeatureGrid from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Why RecipeStylist?' },
    { name: 'subtitle', type: 'text', defaultValue: 'The most advanced AI-generated component library' }
  ];
</script>

<Story
  component={RecipePlaygroundFeatureGrid}
  title="Playground Feature Grid"
  description="Landing grid with key value propositions for the component ecosystem."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundFeatureGrid title={values.title} subtitle={values.subtitle} />
  {/snippet}
</Story>



