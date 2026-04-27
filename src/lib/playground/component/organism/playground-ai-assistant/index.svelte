<script lang="ts">
  import type { PlaygroundAiAssistantProps } from '$stylist/playground/type/struct/playground-ai-assistant-props';
  import { createPlaygroundAiAssistantState } from '$stylist/playground/function/state/playground-ai-assistant';
  import { Icon as BaseIcon } from '$stylist';

  let { ...props }: PlaygroundAiAssistantProps = $props();
  const state = createPlaygroundAiAssistantState(props);
</script>

<div class={state.containerClass}>
  <!-- Header -->
  <div class={state.headerClass}>
    <div class="flex items-center gap-3">
      <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-white">
          {state.currentProviderName} AI
        </h3>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {#if state.aiClient.getSessionId()}
            Session: {state.aiClient.getSessionId()?.substring(0, 8)}...
          {:else}
            New session
          {/if}
        </p>
      </div>
    </div>
    <div class="flex items-center gap-1">
      <button
        onclick={state.clearChat}
        class="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title="Clear chat"
      >
        <BaseIcon name={state.Trash2} class="w-4 h-4" />
      </button>
      <button
        onclick={state.onClose}
        class="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title="Close"
      >
        <BaseIcon name={state.X} class="w-5 h-5" />
      </button>
    </div>
  </div>

  <!-- Error banner -->
  {#if state.error}
    <div class={state.errorBannerClass}>
      <strong>Error:</strong>
      {state.error}
    </div>
  {/if}

  <!-- Messages -->
  <div bind:this={state.messagesContainer} class={state.messagesContainerClass}>
    {#each state.messages as message}
      <div class={state.messageClass(message.role)}>
        {message.content}
      </div>
    {/each}

    {#if state.isLoading}
      <div class={state.loadingIndicatorClass}>
        <BaseIcon name={state.Loader2} class="w-4 h-4 animate-spin" />
        <span>{state.currentProviderName} is thinking...</span>
      </div>
    {/if}
  </div>

  <!-- Input -->
  <div class={state.inputContainerClass}>
    <div class="flex gap-2">
      <textarea
        bind:value={state.inputMessage}
        onkeypress={state.handleKeyPress}
        placeholder="Введите сообщение..."
        rows="2"
        disabled={state.isLoading}
        class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none disabled:opacity-[var(--opacity-50)]"
      ></textarea>
      <button
        onclick={state.sendMessage}
        disabled={!state.inputMessage.trim() || state.isLoading}
        class="p-2 h-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
      >
        {#if state.isLoading}
          <BaseIcon name={state.Loader2} class="w-5 h-5 animate-spin" />
        {:else}
          <BaseIcon name={state.Send} class="w-5 h-5" />
        {/if}
      </button>
    </div>
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
      Press Enter to send, Shift+Enter for new line
    </p>
  </div>
</div>
