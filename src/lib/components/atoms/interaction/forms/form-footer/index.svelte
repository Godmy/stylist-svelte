<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    primaryButtonLabel?: string;
    secondaryButtonLabel?: string;
    primaryButtonDisabled?: boolean;
    secondaryButtonDisabled?: boolean;
    showSecondaryButton?: boolean;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    class?: string;
    primaryButtonClass?: string;
    secondaryButtonClass?: string;
    actionsClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    primaryButtonLabel = 'Submit',
    secondaryButtonLabel = 'Cancel',
    primaryButtonDisabled = false,
    secondaryButtonDisabled = false,
    showSecondaryButton = true,
    onPrimaryClick,
    onSecondaryClick,
    class: className = '',
    primaryButtonClass = '',
    secondaryButtonClass = '',
    actionsClass = '',
    ...restProps
  }: Props = $props();
</script>

<div class={`border-t border-gray-200 pt-5 ${className}`} {...restProps}>
  <div class="flex justify-end space-x-3">
    {#if showSecondaryButton}
      <button
        type="button"
        class={`px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          secondaryButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
        } ${secondaryButtonClass}`}
        onclick={onSecondaryClick}
        disabled={secondaryButtonDisabled}
      >
        {secondaryButtonLabel}
      </button>
    {/if}
    
    <button
      type="button"
      class={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        primaryButtonDisabled ? 'opacity-50 cursor-not-allowed' : ''
      } ${primaryButtonClass}`}
      onclick={onPrimaryClick}
      disabled={primaryButtonDisabled}
    >
      {primaryButtonLabel}
    </button>
  </div>
</div>



