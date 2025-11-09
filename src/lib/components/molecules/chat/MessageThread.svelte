<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import ChatMessage from './ChatMessage.svelte';

  type Message = {
    id: string;
    text: string;
    sender: string;
    senderAvatar?: string;
    timestamp: string;
    status?: 'sent' | 'delivered' | 'read';
    isOwn: boolean;
    children?: Snippet;
  };

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    messages: Message[];
    title?: string;
    class?: string;
    containerClass?: string;
    messageContainerClass?: string;
    headerClass?: string;
    loading?: boolean;
    variant?: 'default' | 'compact' | 'spacious';
  };

  let {
    messages = [],
    title,
    class: hostClass = '',
    containerClass = '',
    messageContainerClass = '',
    headerClass = '',
    loading = false,
    variant = 'default',
    ...restProps
  }: Props = $props();

  let variantClass = $derived({
    'default': 'p-4',
    'compact': 'p-2',
    'spacious': 'p-6'
  }[variant]);
</script>

<div class={`message-thread flex flex-col h-full ${hostClass}`} {...restProps}>
  {#if title}
    <header class={`bg-white border-b p-4 ${headerClass}`}>
      <h2 class="text-lg font-semibold">{title}</h2>
    </header>
  {/if}

  <div class={`flex-1 overflow-y-auto ${containerClass} ${variantClass}`}>
    {#if loading}
      <div class="flex justify-center items-center h-full">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    {:else}
      <div class={`space-y-4 ${messageContainerClass}`}>
        {#each messages as message}
          <ChatMessage
            text={message.text}
            sender={message.sender}
            senderAvatar={message.senderAvatar}
            timestamp={message.timestamp}
            status={message.status}
            isOwn={message.isOwn}
          >
            {#if message.children}
              {@render message.children()}
            {/if}
          </ChatMessage>
        {/each}
      </div>
    {/if}
  </div>
</div>
