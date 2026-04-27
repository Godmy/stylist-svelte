<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import RecipePlaygroundAiPanel from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'selectedProviderId', type: 'select', defaultValue: 'claude', options: ['claude', 'codex', 'gemini', 'qwen'] }
  ];
</script>

<Story
  component={RecipePlaygroundAiPanel}
  title="Playground AI Panel"
  description="Side panel for AI assistant interactions."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundAiPanel selectedProviderId={values.selectedProviderId} />
  {/snippet}
</Story>

