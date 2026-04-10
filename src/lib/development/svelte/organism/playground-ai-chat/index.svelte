<script lang="ts">
  import type { Props } from '$stylist/development/type/struct/playground-ai-chat';
  import { createPlaygroundAiChatState } from '$stylist/development/function/state/playground-ai-chat';
  import { Icon as BaseIcon } from '$stylist';

  let { ...props }: Props = $props();
  const state = createPlaygroundAiChatState(props);
</script>

<div class={state.containerClass}>
  <!-- Header -->
  <div class={state.headerClass}>
    <div class="flex items-center gap-2">
      <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <h3 class="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
    </div>
    <button
      onclick={state.onClose}
      class="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <BaseIcon name={state.X} class="w-5 h-5" />
    </button>
  </div>

  <!-- Messages -->
  <div class={state.messagesContainerClass}>
    {#each state.messages as message}
      <div class={state.messageClass(message.role)}>
        {message.content}
      </div>
    {/each}
  </div>

  <!-- Input -->
  <div class={state.inputContainerClass}>
    <div class="flex gap-2">
      <input
        type="text"
        bind:value={state.inputMessage}
        onkeypress={state.handleKeyPress}
        placeholder="Введите сообщение..."
        class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--playground-accent)] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
      <button
        onclick={state.sendMessage}
        disabled={!state.inputMessage.trim()}
        class="p-2 bg-[var(--playground-accent)] text-white rounded-lg hover:opacity-[var(--opacity-90)] disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed transition-all"
      >
        <BaseIcon name={state.Send} class="w-5 h-5" />
      </button>
    </div>
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
      Press Enter to send, Shift+Enter for new line
    </p>
  </div>
</div>
