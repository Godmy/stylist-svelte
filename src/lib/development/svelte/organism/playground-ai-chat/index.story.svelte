<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';
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

