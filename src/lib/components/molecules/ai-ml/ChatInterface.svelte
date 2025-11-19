<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Send, Bot, User, Settings, MoreVertical } from 'lucide-svelte';
  import { ChatInterfaceStyleManager } from './ChatInterface.styles';

  type Message = {
    id: string;
    content: string;
    sender: 'user' | 'ai';
    timestamp: Date;
    status?: 'sending' | 'delivered' | 'read' | 'error';
  };

  type AIProvider = {
    id: string;
    name: string;
    description: string;
  };

  type Props = {
    messages: Message[];
    onSend: (message: string) => void;
    aiProviders?: AIProvider[];
    currentProvider?: string;
    placeholder?: string;
    showSettings?: boolean;
    showProviderSelector?: boolean;
    class?: string;
    headerClass?: string;
    messageListClass?: string;
    messageClass?: string;
    inputClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    messages = [],
    onSend,
    aiProviders = [],
    currentProvider = '',
    placeholder = 'Type your message...',
    showSettings = true,
    showProviderSelector = true,
    class: className = '',
    headerClass = '',
    messageListClass = '',
    messageClass = '',
    inputClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  // Define variables that are not props
  let unused = { ...restProps }; // Using restProps to avoid unused variable warnings

  let newMessage = $state('');
  let selectedProvider = $state(currentProvider);

  function sendMessage() {
    if (newMessage.trim() === '' || !onSend) return;

    onSend(newMessage.trim());
    newMessage = '';
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(ChatInterfaceStyleManager.getContainerClass(className));
  const headerClassComputed = $derived(ChatInterfaceStyleManager.getHeaderClass(headerClass));
  const messageListContainerClass = $derived(ChatInterfaceStyleManager.getMessagesContainerClass(messageListClass));
  const userMessageClass = $derived(ChatInterfaceStyleManager.getMessageClass(true, messageClass));
  const aiMessageClass = $derived(ChatInterfaceStyleManager.getMessageClass(false, messageClass));
  const messageContentWrapperClass = $derived(ChatInterfaceStyleManager.getMessageContentWrapperClass());
  const botIconClass = $derived(ChatInterfaceStyleManager.getBotIconClass());
  const userIconClass = $derived(ChatInterfaceStyleManager.getUserIconClass());
  const timestampClass = $derived(ChatInterfaceStyleManager.getTimestampClass(false));
  const userTimestampClass = $derived(ChatInterfaceStyleManager.getTimestampClass(true));
  const inputAreaClass = $derived(ChatInterfaceStyleManager.getInputAreaClass(footerClass));
  const messageInputClass = $derived(ChatInterfaceStyleManager.getMessageInputClass(inputClass));
  const sendButtonClass = $derived(ChatInterfaceStyleManager.getSendButtonClass(!newMessage.trim()));
  const sendIconClass = $derived(ChatInterfaceStyleManager.getSendIconClass());
</script>

<div class={containerClass} {...restProps}>
  <!-- Header -->
  <div class={headerClassComputed}>
    <div class="flex items-center">
      <Bot class="h-6 w-6 text-[--color-primary-500] mr-2" />
      <h2 class="text-lg font-semibold text-[--color-text-primary]">
        {aiProviders.find(p => p.id === selectedProvider)?.name || 'AI Assistant'}
      </h2>
    </div>
    <div class="flex items-center space-x-2">
      {#if showProviderSelector && aiProviders.length > 1}
        <select
          class={`text-sm border border-[--color-border-primary] rounded-md px-2 py-1 ${inputClass}`}
          bind:value={selectedProvider}
        >
          {#each aiProviders as provider}
            <option value={provider.id}>{provider.name}</option>
          {/each}
        </select>
      {/if}
      {#if showSettings}
        <button type="button" class="text-[--color-text-secondary] hover:text-[--color-text-primary]">
          <Settings class="h-5 w-5" />
        </button>
      {/if}
      <button type="button" class="text-[--color-text-secondary] hover:text-[--color-text-primary]">
        <MoreVertical class="h-5 w-5" />
      </button>
    </div>
  </div>

  <!-- Messages -->
  <div class={messageListContainerClass}>
    {#each messages as message}
      <div class={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div class={`max-w-[80%] rounded-lg p-3 ${
          message.sender === 'user'
            ? userMessageClass
            : aiMessageClass
        }`}>
          <div class={messageContentWrapperClass}>
            {#if message.sender === 'ai'}
              <Bot class={botIconClass} />
            {/if}
            <div>
              <p>{message.content}</p>
              <div class={`text-xs mt-1 ${
                message.sender === 'user' ? userTimestampClass : timestampClass
              }`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                {#if message.status}
                  {#if message.status === 'sending'} • Sending...
                  {:else if message.status === 'delivered'} • Delivered
                  {:else if message.status === 'read'} • Read
                  {:else if message.status === 'error'} • Error
                  {/if}
                {/if}
              </div>
            </div>
            {#if message.sender === 'user'}
              <User class={`h-4 w-4 mt-0.5 text-[--color-primary-200] flex-shrink-0`} />
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Input Area -->
  <div class={inputAreaClass}>
    <div class="flex items-end space-x-2">
      <div class="flex-1 relative">
        <textarea
          class={`w-full border border-[--color-border-primary] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] ${
            inputClass
          }`}
          placeholder={placeholder}
          bind:value={newMessage}
          onkeydown={handleKeyDown}
          rows={1}
        ></textarea>
      </div>
      <button
        type="button"
        class={sendButtonClass}
        onclick={sendMessage}
        disabled={!newMessage.trim()}
      >
        <Send class={sendIconClass} />
      </button>
    </div>
  </div>
</div>