<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Send, Bot, User, Settings, MoreVertical } from 'lucide-svelte';

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

  // Определяем переменные, которые не являются пропсами
  let unused = { ...restProps }; // Используем restProps, чтобы избежать предупреждения о неиспользуемых переменных

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
</script>

<div class={`flex flex-col h-[600px] border border-gray-200 rounded-lg shadow ${className}`} {...restProps}>
  <!-- Header -->
  <div class={`flex items-center justify-between p-4 border-b ${headerClass}`}>
    <div class="flex items-center">
      <Bot class="h-6 w-6 text-blue-500 mr-2" />
      <h2 class="text-lg font-semibold text-gray-900">
        {aiProviders.find(p => p.id === selectedProvider)?.name || 'AI Assistant'}
      </h2>
    </div>
    <div class="flex items-center space-x-2">
      {#if showProviderSelector && aiProviders.length > 1}
        <select
          class={`text-sm border border-gray-300 rounded-md px-2 py-1 ${inputClass}`}
          bind:value={selectedProvider}
        >
          {#each aiProviders as provider}
            <option value={provider.id}>{provider.name}</option>
          {/each}
        </select>
      {/if}
      {#if showSettings}
        <button type="button" class="text-gray-500 hover:text-gray-700">
          <Settings class="h-5 w-5" />
        </button>
      {/if}
      <button type="button" class="text-gray-500 hover:text-gray-700">
        <MoreVertical class="h-5 w-5" />
      </button>
    </div>
  </div>

  <!-- Messages -->
  <div class={`flex-1 overflow-y-auto p-4 space-y-4 ${messageListClass}`}>
    {#each messages as message}
      <div class={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div class={`max-w-[80%] rounded-lg p-3 ${
          message.sender === 'user' 
            ? 'bg-blue-500 text-white rounded-br-none' 
            : 'bg-gray-100 text-gray-800 rounded-bl-none'
        } ${messageClass}`}>
          <div class="flex items-start space-x-2">
            {#if message.sender === 'ai'}
              <Bot class="h-4 w-4 mt-0.5 text-gray-500 flex-shrink-0" />
            {/if}
            <div>
              <p>{message.content}</p>
              <div class={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
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
              <User class="h-4 w-4 mt-0.5 text-blue-200 flex-shrink-0" />
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Input Area -->
  <div class={`border-t p-4 ${footerClass}`}>
    <div class="flex items-end space-x-2">
      <div class="flex-1 relative">
        <textarea
          class={`w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
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
        class={`flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          !newMessage.trim() ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        onclick={sendMessage}
        disabled={!newMessage.trim()}
      >
        <Send class="h-5 w-5" />
      </button>
    </div>
  </div>
</div>