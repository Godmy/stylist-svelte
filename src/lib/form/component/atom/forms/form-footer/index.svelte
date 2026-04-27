<script lang="ts">
  import { createFormFooterState } from '$stylist/form/function/state/form-footer';
  import type { SlotFormFooter as FormFooterProps } from '$stylist/form/interface/slot/form-footer';

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
  }: FormFooterProps = $props();

  const state = createFormFooterState({
    primaryButtonLabel,
    secondaryButtonLabel,
    primaryButtonDisabled,
    secondaryButtonDisabled,
    showSecondaryButton,
    onPrimaryClick,
    onSecondaryClick,
    class: className,
    primaryButtonClass,
    secondaryButtonClass,
    actionsClass
  });
</script>

<div class={state.rootClass} {...restProps}>
  <div class="flex justify-end space-x-3">
    {#if showSecondaryButton}
      <button
        type="button"
        class={state.secondaryButtonClass}
        onclick={onSecondaryClick}
        disabled={secondaryButtonDisabled}
      >
        {secondaryButtonLabel}
      </button>
    {/if}
    
    <button
      type="button"
      class={state.primaryButtonClass}
      onclick={onPrimaryClick}
      disabled={primaryButtonDisabled}
    >
      {primaryButtonLabel}
    </button>
  </div>
</div>






