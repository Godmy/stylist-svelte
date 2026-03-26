<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
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

