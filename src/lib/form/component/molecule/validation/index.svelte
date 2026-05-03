<script lang="ts">
  import { createValidationState } from '$stylist/form/function/state/validation';

  const props = $props();
  const state = createValidationState(props);
</script>

<div class={state.containerClasses} {...props}>
  {#if props.label}
    <label for={props.id} class={state.labelClass}>
      {props.label}
      {#if props.required}
        <span class={state.requiredMarkClass} aria-label="required field">*</span>
      {/if}
    </label>
  {/if}

  <div class={state.contentClass}>
    {#if props.children}{@render props.children()}{/if}

    {#if props.description}
      <p class={state.descriptionClass}>
        {props.description}
      </p>
    {/if}

    {#if state.hasError}
      <p class={state.errorClass} aria-live="polite">
        {props.error}
      </p>
    {/if}

    {#if props.hint && !state.hasError}
      <p class={state.hintClass}>
        {props.hint}
      </p>
    {/if}
  </div>
</div>

<style>
  .field-group {
    width: 100%;
  }

  .field-label {
    min-width: 120px;
  }

  .field-content {
    width: 100%;
  }

  .field-group.horizontal .field-label {
    padding-top: var(--spacing-2);
  }

  .field-group.vertical .field-label {
    padding-bottom: var(--spacing-1);
  }
</style>



