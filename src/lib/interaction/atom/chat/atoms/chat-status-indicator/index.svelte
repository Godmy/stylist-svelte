<script lang="ts">
  import { createChatStatusIndicatorState } from '$stylist/interaction/state/chat-status-indicator';
  import type { ChatStatusIndicatorProps } from '$stylist/interaction/interface/chat-status-indicator';
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

  type Props = ChatStatusIndicatorProps & InteractionHTMLAttributes<HTMLSpanElement>;
  let props: Props = $props();

  const state = createChatStatusIndicatorState(props);
</script>

<span class={state.containerClasses} role="status" aria-label={`Status: ${state.status}`}>
  <span class={state.indicatorClasses}></span>
  {#if state.showLabel}
    <span class={state.labelClasses}>{state.statusText}</span>
  {/if}
</span>




