<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipePlaygroundAiAssistant from './index.svelte';

  const controls: InterfaceControllerSettings[] = [
    { name: 'providerId', type: 'select', defaultValue: 'gemini', options: ['gemini', 'qwen', 'claude', 'codex'] }
  ];
</script>

<Story
  component={RecipePlaygroundAiAssistant}
  title="Playground AI Assistant"
  description="AI-powered assistant for generating components and code."
  {controls}
>
  {#snippet children(values: any)}
    <RecipePlaygroundAiAssistant providerId={values.providerId} />
  {/snippet}
</Story>

