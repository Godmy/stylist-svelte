<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon, Avatar } from '$stylist/media';
  import { createChatMessageState } from '$stylist/communication/function/state/chat-message';

  export type ChatMessageStatus = 'sent' | 'delivered' | 'read';

  export type ChatMessageProps = {
    text?: string;
    sender?: string;
    senderAvatar?: string;
    timestamp?: string;
    status?: ChatMessageStatus;
    isOwn?: boolean;
    children?: Snippet;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    footerClass?: string;
    variant?: 'default' | 'primary' | 'secondary';
  } & InteractionHTMLAttributes<HTMLDivElement>;

  let props: ChatMessageProps = $props();

  const state = createChatMessageState({
    text: props.text,
    sender: props.sender,
    senderAvatar: props.senderAvatar,
    timestamp: props.timestamp,
    status: props.status,
    isOwn: props.isOwn,
    class: props.class,
    contentClass: props.contentClass,
    headerClass: props.headerClass,
    footerClass: props.footerClass,
    variant: props.variant
  });
</script>

<div class={state.containerClasses} {...props}>
  <div class={state.contentClasses}>
    {#if !props.isOwn}
      <div class={state.headerClasses}>
        {#if props.senderAvatar}
          <Avatar src={props.senderAvatar} alt={props.sender} size="sm" class="mr-2" />
        {/if}
        <span class="text-xs font-semibold text-[var(--color-text-secondary)]">{props.sender}</span>
      </div>
    {/if}

    <div class={`rounded-lg px-4 py-2 ${props.isOwn ? state.bgClass : state.variantClass} ${state.bubbleShapeClass}`}>
      {#if props.text}
        <p class="text-sm">{props.text}</p>
      {/if}
      {#if props.children}
        <div>
          {#if props.children}{@render props.children()}{/if}
        </div>
      {/if}
    </div>

    <div class={state.footerClasses}>
      <span>{props.timestamp}</span>
      {#if props.isOwn && props.status}
        <BaseIcon name={state.statusIcon} class={state.statusIconClasses} />
      {/if}
    </div>
  </div>
</div>
