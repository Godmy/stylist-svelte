<script lang="ts">
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const X = 'x';
const Send = 'send';


  interface Props {
    onClose?: () => void;
  }

  let { onClose }: Props = $props();

  let inputMessage = $state('');
  let messages = $state<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content: 'Р—РґСЂР°РІСЃС‚РІСѓР№С‚Рµ! РЇ РїРѕРјРѕРіСѓ РІР°Рј СЃ Р°РЅР°Р»РёР·РѕРј СЃРєСЂРёРЅС€РѕС‚Р°. РћРїРёС€РёС‚Рµ, С‡С‚Рѕ РІС‹ С…РѕС‚РёС‚Рµ СѓР·РЅР°С‚СЊ РёР»Рё РѕР±СЃСѓРґРёС‚СЊ.'
    }
  ]);

  function sendMessage() {
    if (!inputMessage.trim()) return;

    // Add user message
    messages.push({ role: 'user', content: inputMessage });
    const userMsg = inputMessage;
    inputMessage = '';

    // Simulate AI response
    setTimeout(() => {
      messages.push({
        role: 'assistant',
        content: `Р’С‹ РЅР°РїРёСЃР°Р»Рё: "${userMsg}". Р­С‚Рѕ РґРµРјРѕРЅСЃС‚СЂР°С†РёРѕРЅРЅС‹Р№ РѕС‚РІРµС‚. Р’ СЂРµР°Р»СЊРЅРѕР№ РІРµСЂСЃРёРё Р·РґРµСЃСЊ Р±СѓРґРµС‚ РЅР°СЃС‚РѕСЏС‰РёР№ РѕС‚РІРµС‚ РѕС‚ AI РјРѕРґРµР»Рё.`
      });
    }, 500);
  }

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }
</script>

<style>
  .chat-panel {
    position: fixed;
    top: 3.5rem; /* Height of the header */
    right: 0;
    bottom: 0;
    width: 400px;
    max-width: 90vw;
    background: white;
    border-left: 1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent);
    z-index: var(--z-index-layer9998);
    display: flex;
    flex-direction: column;
    animation: slideInRight var(--duration-300) var(--animation-ease-out);
  }

  :global(.dark) .chat-panel {
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
    gap: var(--spacing-3);
  }

  .message {
    padding: var(--spacing-3) var(--spacing-4);
    border-radius: var(--border-radius-xl);
    max-width: 85%;
  }

  .message.user {
    align-self: flex-end;
    background: var(--playground-accent, var(--color-warning-500));
    color: white;
  }

  .message.assistant {
    align-self: flex-start;
    background: var(--color-background-secondary);
    color: var(--color-text-primary);
  }

  :global(.dark) .message.assistant {
    background: var(--color-border-primary);
    color: var(--color-background-primary);
  }

  .input-container {
    padding: var(--spacing-4);
    border-top: 1px solid color-mix(in srgb, var(--color-text-primary) 10%, transparent);
  }

  :global(.dark) .input-container {
    border-top-color: color-mix(in srgb, var(--color-background-primary) 10%, transparent);
  }
</style>

<div class="chat-panel">
  <!-- Header -->
  <div class="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
    <div class="flex items-center gap-2">
      <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
      <h3 class="font-semibold text-gray-900 dark:text-white">AI Assistant</h3>
    </div>
    <button
      onclick={onClose}
      class="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
    >
      <BaseIcon name={X} class="w-5 h-5" />
    </button>
  </div>

  <!-- Messages -->
  <div class="messages-container">
    {#each messages as message}
      <div class="message {message.role}">
        {message.content}
      </div>
    {/each}
  </div>

  <!-- Input -->
  <div class="input-container">
    <div class="flex gap-2">
      <input
        type="text"
        bind:value={inputMessage}
        onkeypress={handleKeyPress}
        placeholder="Р’РІРµРґРёС‚Рµ СЃРѕРѕР±С‰РµРЅРёРµ..."
        class="flex-1 px-3 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--playground-accent)] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
      />
      <button
        onclick={sendMessage}
        disabled={!inputMessage.trim()}
        class="p-2 bg-[var(--playground-accent)] text-white rounded-lg hover:opacity-[var(--opacity-90)] disabled:opacity-[var(--opacity-50)] disabled:cursor-not-allowed transition-all"
      >
        <BaseIcon name={Send} class="w-5 h-5" />
      </button>
    </div>
    <p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
      Press Enter to send, Shift+Enter for new line
    </p>
  </div>
</div>



