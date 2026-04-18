<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipePlaygroundCtaButtons from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'totalComponents', type: 'number', defaultValue: 320, min: 0, max: 1000, step: 1 },
    { name: 'componentsTitle', type: 'text', defaultValue: 'Browse Components' },
    { name: 'playgroundTitle', type: 'text', defaultValue: 'Interactive Playground' }
  ];
</script>

<Story
  component={RecipePlaygroundCtaButtons}
  title="Playground CTA Buttons"
  description="Dual CTA cards for browsing components and opening the interactive playground."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundCtaButtons
      totalComponents={values.totalComponents}
      componentsTitle={values.componentsTitle}
      playgroundTitle={values.playgroundTitle}
    />
  {/snippet}
</Story>



