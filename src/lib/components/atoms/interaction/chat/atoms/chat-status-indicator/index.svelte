<script lang="ts">
  import { createChatStatusIndicatorState } from '$stylist/design-system/models/chat-status-indicator.svelte';
  import type { ChatStatusIndicatorProps } from '$stylist/design-system/props/chat-status-indicator';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = ChatStatusIndicatorProps & HTMLAttributes<HTMLSpanElement>;
  let props: Props = $props();

  const state = createChatStatusIndicatorState(props);
</script>

<span class={state.containerClasses} role="status" aria-label={`Status: ${state.status}`}>
  <span class={state.indicatorClasses}></span>
  {#if state.showLabel}
    <span class={state.labelClasses}>{state.statusText}</span>
  {/if}
</span>

