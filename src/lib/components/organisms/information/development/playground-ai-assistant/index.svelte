<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const X = 'x';
const Send = 'send';
const Trash2 = 'trash-2';
const RotateCcw = 'rotate-ccw';
const Loader2 = 'loader-2';

  import { onMount } from 'svelte';

  type AIProviderId = 'gemini' | 'qwen' | 'claude' | 'codex';

  interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
  }

  interface ChatResponse {
    text?: string;
  }

  interface AIClientLike {
    chat: (params: { prompt: string; autoApproveTools?: boolean }) => Promise<ChatResponse>;
    resetSession: () => void;
    getSessionId: () => string | null;
  }

  type CreateAIClient = (providerId: AIProviderId) => AIClientLike;

  interface Props {
    providerId?: AIProviderId;
    createAIClient?: CreateAIClient;
    onClose?: () => void;
  }

  const fallbackCreateAIClient: CreateAIClient = () => ({
    chat: async () => {
      throw new Error('AI client is not configured');
    },
    resetSession: () => {},
    getSessionId: () => null
  });

  let { providerId = 'gemini', createAIClient = fallbackCreateAIClient, onClose }: Props = $props();

  // State
  let inputMessage = $state('');
  let messages = $state<ChatMessage[]>([]);
  let isLoading = $state(false);
  let error = $state<string | null>(null);
  let messagesContainer: HTMLDivElement;

  // Create AI client
  let aiClient = $derived(createAIClient(providerId));

  // Provider names mapping
  const providerNames: Record<typeof providerId, string> = {
    gemini: 'Gemini',
    qwen: 'Qwen',
    claude: 'Claude',
    codex: 'Codex',
  };

  // Send message to AI
  async function sendMessage() {
    if (!inputMessage.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: Date.now(),
    };

    messages.push(userMessage);
    const userPrompt = inputMessage;
    inputMessage = '';
    isLoading = true;
    error = null;

    // Scroll to bottom
    setTimeout(scrollToBottom, 100);

    try {
      const response = await aiClient.chat({
        prompt: userPrompt,
        autoApproveTools: true,
      });

      const assistantMessage: ChatMessage = {
        role: 'assistant',
        content: response.text || '(empty response)',
        timestamp: Date.now(),
      };

      messages.push(assistantMessage);
      setTimeout(scrollToBottom, 100);
    } catch (err) {
      console.error('AI chat error:', err);

      // Detailed error message
      if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
        const sessionId = typeof aiClient.getSessionId === 'function' ? aiClient.getSessionId() : undefined;
        error = `Cannot connect to ${providerNames[providerId]} server. Please check:\n1. Server is running\n2. URL is correct: ${sessionId ? 'configured' : 'not configured'}\n3. CORS is enabled`;
      } else {
        error = err instanceof Error ? err.message : 'Failed to get response from AI';
      }
    } finally {
      isLoading = false;
    }
  }

  // Handle keyboard shortcuts
  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  // Clear chat history
  function clearChat() {
    messages = [];
    aiClient.resetSession();
    error = null;
  }

  // Scroll to bottom of messages
  function scrollToBottom() {
    if (messagesContainer) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }

  // Add initial greeting
  onMount(() => {
    messages = [
      {
        role: 'assistant',
        content: `Р—РґСЂР°РІСЃС‚РІСѓР№С‚Рµ! РЇ ${providerNames[providerId]} AI Assistant. Р§РµРј РјРѕРіСѓ РїРѕРјРѕС‡СЊ?`,
        timestamp: Date.now(),
      },
    ];
  });
</script>

<style>
  .chat-assistant {
    position: fixed;
    top: 3.5rem;
    right: 0;
    bottom: 0;
    width: 450px;
    max-width: 90vw;
    background: white;
    border-left: 1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent);
    z-index: var(--z-index-layer9998);
    display: flex;
    flex-direction: column;
    animation: slideInRight var(--duration-300) var(--animation-ease-out);
  }

  :global(.dark) .chat-assistant {
    background: var(--color-text-primary);
    border-left-color: color-mix(in srgb, var(--color-background-primary) 10%, transparent);
  }

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .messages-container {
    flex: 1;
    overflow-y: auto;
    padding: var(--spacing-4);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-4);
  }

  .message {
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--border-radius-xl);
    max-width: 85%;
    line-height: var(--line-height-normal);
    word-wrap: break-word;
  }

  .message.user {
    align-self: flex-end;
    background: var(--gradient-custom62);
    color: white;
    box-shadow: var(--shadow-custom35);
  }

  .message.assistant {
    align-self: flex-start;
    background: var(--color-background-secondary);
    color: var(--color-text-primary);
    box-shadow: var(--shadow-custom29);
  }

  :global(.dark) .message.assistant {
    background: var(--color-border-primary);
    color: var(--color-background-primary);
  }

  .input-container {
    padding: var(--spacing-4);
    border-top: 1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent);
    background: white;
  }

  :global(.dark) .input-container {
    border-top-color: color-mix(in srgb, var(--color-background-primary) 10%, transparent);
    background: var(--color-text-primary);
  }

  .error-banner {
    background: var(--color-danger-100);
    color: var(--color-danger-800);
    padding: var(--spacing-3) var(--spacing-4);
    border-left: 4px solid var(--color-danger-600);
    margin: var(--spacing-2) var(--spacing-4);
    border-radius: var(--border-radius-lg);
    font-size: var(--font-size-3);
  }

  :global(.dark) .error-banner {
    background: var(--color-danger-900);
    color: var(--color-danger-200);
    border-left-color: var(--color-error-500);
  }

  .loading-indicator {
    display: flex;
    align-items: center;
    gap: var(--spacing-2);
    padding: var(--spacing-3) var(--spacing-4);
    background: var(--color-background-secondary);
    border-radius: var(--border-radius-xl);
    max-width: 85%;
    align-self: flex-start;
    color: var(--color-text-tertiary);
    font-size: var(--font-size-3);
  }

  :global(.dark) .loading-indicator {
    background: var(--color-border-primary);
    color: var(--color-text-secondary);
  }
</style>

<div class="chat-assistant">
  <!-- Header -->
  <div
    class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700"
  >
    <div class="flex items-center gap-3">
      <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <div>
        <h3 class="font-semibold text-gray-900 dark:text-white">
          {providerNames[providerId]} AI
        </h3>
        <p class="text-xs text-gray-500 dark:text-gray-400">
          {#if aiClient.getSessionId()}
            Session: {aiClient.getSessionId()?.substring(0, 8)}...
          {:else}
            New session
          {/if}
        </p>
      </div>
    </div>
    <div class="flex items-center gap-1">
      <button
        onclick={clearChat}
        class="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title="Clear chat"
      >
        <BaseIcon name={Trash2} class="w-4 h-4" />
      </button>
      <button
        onclick={onClose}
        class="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        title="Close"
      >
        <BaseIcon name={X} class="w-5 h-5" />
      </button>
    </div>
  </div>

  <!-- Error banner -->
  {#if error}
    <div class="error-banner">
      <strong>Error:</strong>
      {error}
    </div>
  {/if}

  <!-- Messages -->
  <div bind:this={messagesContainer} class="messages-container">
    {#each messages as message}
      <div class="message {message.role}">
        {message.content}
      </div>
    {/each}

    {#if isLoading}
      <div class="loading-indicator">
        <BaseIcon name={Loader2} class="w-4 h-4 animate-spin" />
        <span>{providerNames[providerId]} is thinking...</span>
      </div>
    {/if}
  </div>

  <!-- Input -->
  <div class="input-container">
    <div class="flex gap-2">
      <textarea
        bind:value={inputMessage}
        onkeypress={handleKeyPress}
        placeholder="Р’РІРµРґРёС‚Рµ СЃРѕРѕР±С‰РµРЅРёРµ..."
        rows="2"
        disabled={isLoading}
        class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none disabled:opacity-[var(--opacity-50)]"
      ></textarea>
      <button
        onclick={sendMessage}
        disabled={!inputMessage.trim() || isLoading}
        class="p-2 h-10 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl"
      >
        {#if isLoading}
          <BaseIcon name={Loader2} class="w-5 h-5 animate-spin" />
        {:else}
          <BaseIcon name={Send} class="w-5 h-5" />
        {/if}
      </button>
    </div>
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
      Press Enter to send, Shift+Enter for new line
    </p>
  </div>
</div>


