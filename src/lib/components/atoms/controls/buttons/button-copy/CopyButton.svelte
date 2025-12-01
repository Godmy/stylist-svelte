<script lang="ts">
  import { copyToClipboard } from '$lib/utils/clipboard';
  import { Copy, Check } from 'lucide-svelte';
  import type { ICopyButtonProps } from './types';
  import { getCopyButtonClasses, getCopyButtonIconClasses } from './styles';

  let {
    text,
    label = 'Copy',
    successMessage = 'Copied to clipboard',
    showIcon = true,
    class: className = '',
    onSuccess,
    onError
  }: ICopyButtonProps = $props();

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

  let buttonClasses = $derived(getCopyButtonClasses(className, copied));
  let iconClasses = $derived(getCopyButtonIconClasses(copied));
</script>

<button
  type="button"
  onclick={handleCopy}
  class={buttonClasses}
  aria-label={copied ? 'Copied' : label}
>
  {#if showIcon}
    {#if copied}
      <Check class={iconClasses} aria-hidden="true" />
    {:else}
      <Copy class={iconClasses} aria-hidden="true" />
    {/if}
  {/if}
  <span>{copied ? 'Copied!' : label}</span>
</button>
