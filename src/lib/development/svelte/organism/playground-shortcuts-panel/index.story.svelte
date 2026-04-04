<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import PlaygroundShortcutsPanel from './index.svelte';

  const controls: InterfaceControllerSettings[] = [];
</script>

<Story
  component={PlaygroundShortcutsPanel}
  title="Playground Shortcuts Panel"
  description="Panel displaying keyboard shortcuts reference."
  {controls}
>
  {#snippet children()}
    <PlaygroundShortcutsPanel />
  {/snippet}
</Story>

