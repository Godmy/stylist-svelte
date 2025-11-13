<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Paperclip, Mic, Send } from 'lucide-svelte';
  import { Button } from '$lib/components/atoms';
  import { createEventDispatcher } from 'svelte';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  // Define the events this component can dispatch
  const dispatch = createEventDispatcher<{
    sendMessage: { text: string };
  }>();

  type Props = RestProps & {
    value?: string;
    placeholder?: string;
    class?: string;
    inputClass?: string;
    buttonClass?: string;
    disabled?: boolean;
    showAttachmentButton?: boolean;
    showVoiceButton?: boolean;
    onSendMessage?: (text: string) => void;
    onAttachmentClick?: () => void;
    onVoiceClick?: () => void;
  };

  let {
    value = '',
    placeholder = 'Type a message...',
    class: hostClass = '',
    inputClass = '',
    buttonClass = '',
    disabled = false,
    showAttachmentButton = true,
    showVoiceButton = true,
    onSendMessage,
    onAttachmentClick,
    onVoiceClick,
    ...restProps
  }: Props = $props();

  let messageText = $state(value);

  $effect(() => {
    messageText = value;
  });

  function handleInput(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    messageText = target.value;
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (messageText.trim() && !disabled) {
      onSendMessage?.(messageText);
      dispatch('sendMessage', { text: messageText });
      messageText = '';
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  }

  function handleAttachmentClick() {
    onAttachmentClick?.();
  }

  function handleVoiceClick() {
    onVoiceClick?.();
  }
</script>

<div class={`message-composer flex items-end border-t border-gray-200 bg-white p-4 ${hostClass}`} {...restProps}>
  <form class="flex-1 flex items-end" onsubmit={handleSubmit}>
    {#if showAttachmentButton}
      <Button
        variant="ghost"
        size="sm"
        type="button"
        onclick={handleAttachmentClick}
        disabled={disabled}
        class="mr-2"
      >
        <Paperclip class="h-5 w-5 text-gray-500" />
      </Button>
    {/if}
    
    <div class="flex-1 relative">
      <textarea
        class={`w-full border border-gray-300 rounded-lg py-2 px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none max-h-32 ${inputClass}`}
        value={messageText}
        placeholder={placeholder}
        oninput={handleInput}
        onkeydown={handleKeyDown}
        disabled={disabled}
        rows="1"
      ></textarea>
    </div>
    
    {#if messageText.trim()}
      <Button
        variant="primary"
        type="submit"
        disabled={disabled}
        class={`ml-2 ${buttonClass}`}
      >
        <Send class="h-5 w-5" />
      </Button>
    {:else if showVoiceButton}
      <Button
        variant="ghost"
        size="sm"
        type="button"
        onclick={handleVoiceClick}
        disabled={disabled}
        class={`ml-2 ${buttonClass}`}
      >
        <Mic class="h-5 w-5 text-gray-500" />
      </Button>
    {/if}
  </form>
</div>
