<script lang="ts">
  import type { Snippet } from 'svelte';
  import ChatMessage from '../chat-message/index.svelte';
  import { MessageComposer } from '$stylist/communication';
  import { createChatRoomState as stateFn } from '$stylist/communication/function/state/chat-room';
  import type { ChatRoomProps } from '$stylist/communication/type/alias/chat-room-props';

  let props: ChatRoomProps = $props();
  const state = stateFn(props);
</script>

<div class={state.containerClasses} {...props}>
  <!-- Header -->
  <header class={state.headerClasses}>
    <div class="flex-1">
      {#if props.title}
        <h2 class="font-semibold text-lg">{props.title}</h2>
      {/if}
      {#if props.subtitle}
        <p class="text-sm text-[var(--color-text-secondary)]">{props.subtitle}</p>
      {/if}
    </div>
    <div class="flex items-center">
      {#each props.participants.slice(0, 3) as participant, index}
        <div class={state.participantAvatarClasses(index)} style="z-index: {10 - index};">
          <img src={participant.avatar} alt={participant.name} class="w-full h-full object-cover" />
        </div>
      {/each}
      {#if props.participants.length > 3}
        <div class="w-8 h-8 rounded-full bg-[var(--color-background-tertiary)] flex items-center justify-center -ml-2 border-2 border-[var(--color-background-primary)]" style="z-index: var(--z-index-base);">
          <span class="text-xs">+{props.participants.length - 3}</span>
        </div>
      {/if}
    </div>
  </header>

  <!-- Messages area -->
  <div class={state.messagesAreaClasses}>
    {#if props.loading}
      <div class="flex justify-center items-center h-full">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[var(--color-primary-500)]"></div>
      </div>
    {:else}
      {#each props.messages as message}
        <ChatMessage
          text={message.text}
          sender={message.sender}
          senderAvatar={message.senderAvatar}
          timestamp={message.timestamp}
          status={message.status}
          isOwn={message.isOwn}
        />
      {/each}
    {/if}
  </div>

  <!-- Message composer -->
  <footer class={state.footerClasses}>
    <MessageComposer
      value={state.messageText}
      onSendMessage={state.handleSend}
      placeholder="Type a message..."
    />
  </footer>
</div>
