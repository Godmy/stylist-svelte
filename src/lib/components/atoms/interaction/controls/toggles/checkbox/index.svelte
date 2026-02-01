<script lang="ts">
  import type { CheckboxProps } from '$stylist/design-system/interaction/controls/toggles/checkbox';
  import { createCheckboxState } from '../../state.svelte';

  let {
    id,
    label,
    description,
    checked = $bindable<boolean>(),
    errors = [],
    required = false,
    disabled = false,
    class: className = '',
    ...restProps
  }: CheckboxProps = $props();

  const state = createCheckboxState({ id, label, description, checked, errors, required, disabled, class: className });

  let checkboxClasses = $derived(state.checkboxClasses);
</script>

<div class={state.containerClasses}>
  <div class={state.wrapperClasses}>
    <div class={state.checkboxWrapperClasses}>
      <input
        id={id}
        type="checkbox"
        bind:checked={checked}
        class={checkboxClasses}
        disabled={state.disabled}
        required={state.required}
        aria-describedby={state.hasError ? state.errorId : undefined}
        {...restProps}
      />
    </div>
    <div class={state.labelWrapperClasses}>
      <label for={id} class={state.labelClasses}>
        {label}
        {#if state.required}
          <span class="text-[--color-danger-500]">*</span>
        {/if}
      </label>
      {#if description}
        <p class={state.descriptionClasses}>{description}</p>
      {/if}
    </div>
  </div>

  {#if state.hasError}
    <p id={state.errorId} class={state.errorClasses}>
      {#each state.errors as error, i}
        {error}{i < state.errors.length - 1 ? ' ' : ''}
      {/each}
    </p>
  {/if}
</div>
