<script lang="ts">
  /**
   * @component MessageBubble
   * @description Chat message bubble component for displaying messages in a conversation
   *
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles chat message display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any message display
   * - Interface Segregation: Minimal interface via IMessageBubbleProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   *
   * Atomic Design: Atom - Basic UI element for chat message display
   */

  import type { SlotMessageBubble as IMessageBubbleProps } from '$stylist/communication/interface/slot/message-bubble';
  import { createMessageBubbleState } from '$stylist/communication/function/state/message-bubble';
  import Avatar from '$stylist/media/component/atom/avatar/index.svelte';

  let props: IMessageBubbleProps = $props();

  const state = createMessageBubbleState(props);
</script>

<div class={state.containerClasses}>
  {#if props.avatar && state.showLeftAvatar}
    <div class={state.avatarContainerClasses}>
      <Avatar src={props.avatar} size="sm" />
    </div>
  {/if}

  <div class={state.wrapperClasses}>
    <div class={state.authorClasses}>{props.author}</div>
    <div class={state.messageClasses}>{props.message}</div>
    {#if props.timestamp}
      <div class={state.timestampClasses}>{props.timestamp}</div>
    {/if}
  </div>

  {#if props.avatar && state.showRightAvatar}
    <div class={state.avatarContainerClasses}>
      <Avatar src={props.avatar} size="sm" />
    </div>
  {/if}
</div>
