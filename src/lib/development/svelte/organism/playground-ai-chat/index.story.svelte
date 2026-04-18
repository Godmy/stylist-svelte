<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings';
  import RecipePlaygroundAiChat from './index.svelte';

  const controls: InterfaceControllerSettings[] = [];
</script>

<Story
  component={RecipePlaygroundAiChat}
  title="Playground AI Chat"
  description="Chat interface for AI-powered conversations."
  {controls}
>
  {#snippet children()}
    <RecipePlaygroundAiChat />
  {/snippet}
</Story>

