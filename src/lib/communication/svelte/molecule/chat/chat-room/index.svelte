<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import type { Snippet } from 'svelte';
  import ChatMessage from '../chat-message/index.svelte';
  import { MessageComposer } from '$stylist';
  import { createChatRoomState } from '$stylist/communication/function/state/chat-room';

  export type ChatRoomMessage = {
    id: string;
    text: string;
    sender: string;
    senderAvatar?: string;
    timestamp: string;
    status?: 'sent' | 'delivered' | 'read';
    isOwn: boolean;
  };

  export type ChatRoomProps = {
    messages: ChatRoomMessage[];
    currentUser: {
      id: string;
      name: string;
      avatar?: string;
    };
    participants: {
      id: string;
      name: string;
      avatar?: string;
    }[];
    title?: string;
    subtitle?: string;
    class?: string;
    messagesClass?: string;
    headerClass?: string;
    footerClass?: string;
    onMessageSend?: (text: string) => void;
    loading?: boolean;
    variant?: 'default' | 'compact' | 'spacious';
  } & InteractionHTMLAttributes<HTMLDivElement>;

  let props: ChatRoomProps = $props();

  const state = createChatRoomState(props);

  let messageText = $state('');

  function handleSend(text: string) {
    props.onMessageSend?.(text);
    messageText = '';
  }
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
      value={messageText}
      onSendMessage={handleSend}
      placeholder="Type a message..."
    />
  </footer>
</div>
