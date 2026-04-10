<script lang="ts">
  import { createMessageTimestampState } from '$stylist/communication/function/state/message-timestamp';
  import type { MessageTimestampContract } from '$stylist/communication/interface/component/message-timestamp/contract';

  let props: MessageTimestampContract = $props();

  const state = createMessageTimestampState(props);
</script>

<time class={state.classes} datetime={state.formattedDateTime}>
  {state.formattedTime}
</time>



