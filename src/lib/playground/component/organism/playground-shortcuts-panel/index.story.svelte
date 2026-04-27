<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundShortcutsPanel from './index.svelte';

  const controls: InterfaceControllerSettings[] = [];
</script>

<Story
  component={RecipePlaygroundShortcutsPanel}
  title="Playground Shortcuts Panel"
  description="Panel displaying keyboard shortcuts reference."
  {controls}
>
  {#snippet children()}
    <RecipePlaygroundShortcutsPanel />
  {/snippet}
</Story>

