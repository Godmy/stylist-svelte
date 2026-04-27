<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundComponentInfoCard from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'componentName', type: 'text', defaultValue: 'Button' },
    { name: 'propsCount', type: 'number', defaultValue: 6 },
    { name: 'isOpen', type: 'boolean', defaultValue: true }
  ];
</script>

<Story
  component={RecipePlaygroundComponentInfoCard}
  title="Playground Component Info Card"
  description="Information card displaying component details and props."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundComponentInfoCard
      componentName={values.componentName}
      propsCount={values.propsCount}
      isOpen={values.isOpen}
      category="Atoms"
      subcategory="Controls"
    />
  {/snippet}
</Story>

