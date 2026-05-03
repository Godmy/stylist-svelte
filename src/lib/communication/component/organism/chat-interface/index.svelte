<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/media';
  import { ChatInterfaceStyleManager } from '$stylist/communication/class/style-manager/chat-interface';
  import type { Message } from '$stylist/communication/type/struct/chat-interface/message';
  import type { AIProvider } from '$stylist/communication/type/struct/chat-interface/ai-provider';
  import type { ChatInterfaceProps } from '$stylist/communication/type/struct/chat-interface-props';
  import { createChatInterfaceState } from '$stylist/communication/function/state/chat-interface';

  let props: ChatInterfaceProps = $props();

  const state = createChatInterfaceState(props);

  $effect(() => {
    state.selectedProvider = props.currentProvider ?? '';
  });
</script>
<div class={state.containerClass} {...props}>
  <!-- Header -->
  <div class={state.headerClassComputed}>
    <div class="flex items-center">
      <BaseIcon name={state.Bot} class="h-6 w-6 text-[--color-primary-500] mr-2" />
      <h2 class="text-lg font-semibold text-[--color-text-primary]">
        {state.currentProviderName}
      </h2>
    </div>
    <div class="flex items-center space-x-2">
      {#if state.showProviderSelector && props.aiProviders && props.aiProviders.length > 1}
        <select
          class={`text-sm border border-[--color-border-primary] rounded-md px-2 py-1 ${props.inputClass ?? ''}`}
          bind:value={state.selectedProvider}
        >
          {#each props.aiProviders as provider}
            <option value={provider.id}>{provider.name}</option>
          {/each}
        </select>
      {/if}
      {#if state.showSettings}
        <button type="button" class="text-[--color-text-secondary] hover:text-[--color-text-primary]">
          <BaseIcon name={state.Settings} class="h-5 w-5" />
        </button>
      {/if}
      <button type="button" class="text-[--color-text-secondary] hover:text-[--color-text-primary]">
        <BaseIcon name={state.MoreVertical} class="h-5 w-5" />
      </button>
    </div>
  </div>

  <!-- Messages -->
  <div class={state.messageListContainerClass}>
    {#each props.messages as message}
      <div class={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
        <div class={`max-w-[80%] rounded-lg p-3 ${
          message.sender === 'user'
            ? state.userMessageClass
            : state.aiMessageClass
        }`}>
          <div class={state.messageContentWrapperClass}>
            {#if message.sender === 'ai'}
              <BaseIcon name={state.Bot} class={state.botIconClass} />
            {/if}
            <div>
              <p>{message.content}</p>
              <div class={`text-xs mt-1 ${
                message.sender === 'user' ? state.userTimestampClass : state.timestampClass
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
              <BaseIcon name={state.User} class={`h-4 w-4 mt-0.5 text-[--color-primary-200] flex-shrink-0`} />
            {/if}
          </div>
        </div>
      </div>
    {/each}
  </div>

  <!-- Input Area -->
  <div class={state.inputAreaClass}>
    <div class="flex items-end space-x-2">
      <div class="flex-1 relative">
        <textarea
          class={`w-full border border-[--color-border-primary] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-[--color-primary-500] ${props.inputClass ?? ''}`}
          placeholder={state.placeholder}
          bind:value={state.newMessage}
          onkeydown={state.handleKeyDown}
          rows={1}
        ></textarea>
      </div>
      <button
        type="button"
        class={state.sendButtonClass}
        onclick={state.sendMessage}
        disabled={!state.newMessage.trim()}
      >
        <BaseIcon name={state.Send} class={state.sendIconClass} />
      </button>
    </div>
  </div>
</div>
