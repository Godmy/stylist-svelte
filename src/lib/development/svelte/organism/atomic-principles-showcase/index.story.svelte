<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipeAtomicPrinciplesShowcase from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'atoms', type: 'number', defaultValue: 180, min: 0, max: 1000, step: 1 },
    { name: 'molecules', type: 'number', defaultValue: 90, min: 0, max: 1000, step: 1 },
    { name: 'organisms', type: 'number', defaultValue: 50, min: 0, max: 1000, step: 1 },
    { name: 'title', type: 'text', defaultValue: 'Built on Atomic Principles' },
    { name: 'description', type: 'text', defaultValue: 'Every component follows the proven Atomic Design methodology' }
  ];
</script>

<Story
  component={RecipeAtomicPrinciplesShowcase}
  title="Atomic Principles Showcase"
  description="Landing block that presents atomic architecture levels with highlighted counters."
  {controls}
>
  {#snippet children(values: any)}
    <RecipeAtomicPrinciplesShowcase
      stats={{ atoms: values.atoms, molecules: values.molecules, organisms: values.organisms }}
      title={values.title}
      description={values.description}
    />
  {/snippet}
</Story>



