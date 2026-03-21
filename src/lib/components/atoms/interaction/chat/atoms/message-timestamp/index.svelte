<script lang="ts">
  import { createMessageTimestampState } from '$stylist/design-system/models/interaction/message-timestamp.svelte';
  import type { MessageTimestampProps } from '$stylist/design-system/contracts/interaction/message-timestamp';
  import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';

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



