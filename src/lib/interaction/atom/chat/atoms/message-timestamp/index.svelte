<script lang="ts">
  import { createMessageTimestampState } from '$stylist/interaction/state/message-timestamp';
  import type { MessageTimestampProps } from '$stylist/interaction/interface/message-timestamp';
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';

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



