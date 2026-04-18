<script lang="ts">
  import { createMessageTimestampState } from '$stylist/communication/function/state/message-timestamp';
  import type { SlotMessageTimestamp as MessageTimestampContract } from '$stylist/communication/interface/slot/message-timestamp';

  let props: MessageTimestampContract = $props();

  const state = createMessageTimestampState(props);
</script>

<time class={state.classes} datetime={state.formattedDateTime}>
  {state.formattedTime}
</time>



