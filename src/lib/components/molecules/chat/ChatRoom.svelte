<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import ChatMessage from './ChatMessage.svelte';
  import MessageComposer from './MessageComposer.svelte';

  type Message = {
    id: string;
    text: string;
    sender: string;
    senderAvatar?: string;
    timestamp: string;
    status?: 'sent' | 'delivered' | 'read';
    isOwn: boolean;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    messages: Message[];
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
  };

  let {
    messages = [],
    currentUser,
    participants = [],
    title,
    subtitle,
    class: hostClass = '',
    messagesClass = '',
    headerClass = '',
    footerClass = '',
    onMessageSend,
    loading = false,
    variant = 'default',
    ...restProps
  }: Props = $props();

  let newMessage = $state('');

  function handleSend(text: string) {
    onMessageSend?.(text);
    newMessage = '';
  }

  let variantClass = $derived({
    'default': 'p-4',
    'compact': 'p-2',
    'spacious': 'p-6'
  }[variant]);
</script>

<div class={`chat-room flex flex-col h-full border rounded-lg shadow-sm ${hostClass}`} {...restProps}>
  <!-- Header -->
  <header class={`bg-white border-b p-4 flex items-center ${headerClass}`}>
    <div class="flex-1">
      {#if title}
        <h2 class="font-semibold text-lg">{title}</h2>
      {/if}
      {#if subtitle}
        <p class="text-sm text-gray-500">{subtitle}</p>
      {/if}
    </div>
    <div class="flex items-center">
      {#each participants.slice(0, 3) as participant, index}
        <div class={`w-8 h-8 rounded-full overflow-hidden -ml-2 first:ml-0 border-2 border-white`} style="z-index: {10 - index};">
          <img src={participant.avatar} alt={participant.name} class="w-full h-full object-cover" />
        </div>
      {/each}
      {#if participants.length > 3}
        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center -ml-2 border-2 border-white" style="z-index: 0;">
          <span class="text-xs">+{participants.length - 3}</span>
        </div>
      {/if}
    </div>
  </header>

  <!-- Messages area -->
  <div class={`flex-1 overflow-y-auto p-4 space-y-4 ${messagesClass} ${variantClass}`}>
    {#if loading}
      <div class="flex justify-center items-center h-full">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    {:else}
      {#each messages as message}
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
  <footer class={`bg-gray-50 border-t p-4 ${footerClass}`}>
    <MessageComposer
      value={newMessage}
      on:sendMessage={(e: CustomEvent<{ text: string }>) => handleSend(e.detail.text)}
      placeholder="Type a message..."
    />
  </footer>
</div>
