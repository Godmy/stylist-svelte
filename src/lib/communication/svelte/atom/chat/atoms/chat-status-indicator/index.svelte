<script lang="ts">
  import { createChatStatusIndicatorState } from '$stylist/communication/function/state/chat-status-indicator';
  import type { ChatStatusIndicatorProps } from '$stylist/communication/interface/component/chat-status-indicator/other';
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

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




