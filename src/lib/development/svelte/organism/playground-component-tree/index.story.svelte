<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipePlaygroundComponentTree from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'selectedStoryId', type: 'select', defaultValue: 'button-story', options: ['button-story', 'input-story', 'card-story'] }
  ];

  const groupedStories = {
    Atoms: {
      Controls: [
        { id: 'button-story', componentName: 'Button', category: 'Atoms', subcategory: 'Controls', path: 'src/lib/components/atoms/interaction/controls/buttons/button/index.story.svelte' },
        { id: 'input-story', componentName: 'Input', category: 'Atoms', subcategory: 'Controls', path: 'src/lib/components/atoms/interaction/input/field/input-text/index.story.svelte' }
      ]
    },
    Organisms: {
      Layout: [
        { id: 'card-story', componentName: 'DashboardCard', category: 'Organisms', subcategory: 'Layout', path: 'src/lib/components/organisms/architecture/card/dashboard-card/index.story.svelte' }
      ]
    }
  };
</script>

<Story
  component={RecipePlaygroundComponentTree}
  title="Playground Component Tree"
  description="Tree view of component hierarchy and structure."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundComponentTree groupedStories={groupedStories} selectedStoryId={values.selectedStoryId} />
  {/snippet}
</Story>

