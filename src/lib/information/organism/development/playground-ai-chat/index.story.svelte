<script lang="ts">
  import { Story } from '$stylist/interaction/playground';
  import type { InterfaceControllerSettings } from '$stylist/interaction/interface/controller-settings';
  import PlaygroundAiChat from './index.svelte';

  const controls: InterfaceControllerSettings[] = [];
</script>

<Story
  component={PlaygroundAiChat}
  title="Playground AI Chat"
  description="Chat interface for AI-powered conversations."
  {controls}
>
  {#snippet children()}
    <PlaygroundAiChat />
  {/snippet}
</Story>

