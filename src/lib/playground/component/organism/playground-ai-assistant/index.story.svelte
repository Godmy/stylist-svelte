<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
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

