<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundHero from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'RecipeStylist' },
    { name: 'subtitle', type: 'text', defaultValue: "The world's largest Svelte 5 component library" },
    { name: 'badgeLabel', type: 'text', defaultValue: 'AI-Generated Component Library' }
  ];
</script>

<Story
  component={RecipePlaygroundHero}
  title="Playground Hero"
  description="Landing hero section used by the playground homepage."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundHero title={values.title} subtitle={values.subtitle} badgeLabel={values.badgeLabel} />
  {/snippet}
</Story>



