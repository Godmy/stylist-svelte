<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
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
  } & InteractionHTMLAttributes<HTMLDivElement>;

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

<div class={`border-t border-[var(--color-border-primary)] pt-5 ${className}`} {...restProps}>
  <div class="flex justify-end space-x-3">
    {#if showSecondaryButton}
      <button
        type="button"
        class={`px-4 py-2 border border-[var(--color-border-primary)] rounded-md shadow-sm text-sm font-medium text-[var(--color-text-primary)] bg-[var(--color-background-primary)] hover:bg-[var(--color-background-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          secondaryButtonDisabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
        } ${secondaryButtonClass}`}
        onclick={onSecondaryClick}
        disabled={secondaryButtonDisabled}
      >
        {secondaryButtonLabel}
      </button>
    {/if}
    
    <button
      type="button"
      class={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-[var(--color-text-inverse)] bg-[var(--color-primary-600)] hover:bg-[var(--color-primary-700)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
        primaryButtonDisabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : ''
      } ${primaryButtonClass}`}
      onclick={onPrimaryClick}
      disabled={primaryButtonDisabled}
    >
      {primaryButtonLabel}
    </button>
  </div>
</div>







