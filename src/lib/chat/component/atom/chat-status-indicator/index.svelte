<script lang="ts">
  import { createChatStatusIndicatorState } from '$stylist/chat/function/state/chat-status-indicator';
  import type { SlotChatStatusIndicator as ChatStatusIndicatorContract } from '$stylist/chat/interface/slot/chat-status-indicator';

  let props: ChatStatusIndicatorContract = $props();

  const state = createChatStatusIndicatorState(props);
</script>

<span class={state.containerClasses} role="status" aria-label={`Status: ${state.status}`}>
  <span class={state.indicatorClasses}></span>
  {#if state.showLabel}
    <span class={state.labelClasses}>{state.statusText}</span>
  {/if}
</span>




