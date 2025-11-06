<script lang="ts">
  import { copyToClipboard } from '../../utils/clipboard';
  import { Copy, Check } from 'lucide-svelte';

  type Props = {
    text: string;
    label?: string;
    successMessage?: string;
    showIcon?: boolean;
    class?: string;
    onSuccess?: (message: string) => void;
    onError?: (message: string) => void;
  };

  let {
    text,
    label = 'Copy',
    successMessage = 'Copied to clipboard',
    showIcon = true,
    class: className = '',
    onSuccess,
    onError
  }: Props = $props();

  let copied = $state(false);

  async function handleCopy() {
    const success = await copyToClipboard(text);

    if (success) {
      copied = true;
      onSuccess?.(successMessage);
      setTimeout(() => {
        copied = false;
      }, 2000);
    } else {
      onError?.('Failed to copy to clipboard');
    }
  }
</script>

<button
  type="button"
  onclick={handleCopy}
  class="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors {className}"
  aria-label={copied ? 'Copied' : label}
>
  {#if showIcon}
    {#if copied}
      <Check class="h-4 w-4 text-green-500" aria-hidden="true" />
    {:else}
      <Copy class="h-4 w-4" aria-hidden="true" />
    {/if}
  {/if}
  <span>{copied ? 'Copied!' : label}</span>
</button>
