<script lang="ts">
  import { createMessageTimestampState } from '$stylist/design-system/models/interaction/message-timestamp.svelte';
  import type { MessageTimestampProps } from '$stylist/design-system/props/interaction/message-timestamp';
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = MessageTimestampProps & HTMLAttributes<HTMLTimeElement>;
  let props: Props = $props();

  const state = createMessageTimestampState(props);
  const classes = state.classes;
  const formattedDateTime = state.formattedDateTime;
  const formattedTime = state.formattedTime;
</script>

<time class={state.classes} datetime={state.formattedDateTime}>
  {state.formattedTime}
</time>
