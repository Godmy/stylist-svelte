<script lang="ts">
  import { createMessageTimestampState } from '$stylist/communication/function/state/message-timestamp';
  import type { MessageTimestampProps } from '$stylist/communication/interface/component/message-timestamp/other';
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

  type Props = MessageTimestampProps & InteractionHTMLAttributes<HTMLTimeElement>;
  let props: Props = $props();

  const state = createMessageTimestampState(props);
  const classes = state.classes;
  const formattedDateTime = state.formattedDateTime;
  const formattedTime = state.formattedTime;
</script>

<time class={state.classes} datetime={state.formattedDateTime}>
  {state.formattedTime}
</time>



