<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
  import PlaygroundAiPanel from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'selectedProviderId', type: 'select', defaultValue: 'claude', options: ['claude', 'codex', 'gemini', 'qwen'] }
  ];
</script>

<Story
  component={PlaygroundAiPanel}
  title="Playground AI Panel"
  description="Side panel for AI assistant interactions."
  {controls}
>
  {#snippet children(values: any)}
    <PlaygroundAiPanel selectedProviderId={values.selectedProviderId} />
  {/snippet}
</Story>

