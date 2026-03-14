<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  type Props = {
    label?: string;
    description?: string;
    required?: boolean;
    error?: string;
    hint?: string;
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    id?: string; // Added for accessibility
    children: Snippet; // Explicitly define children as a slot prop
  } & HTMLAttributes<HTMLDivElement>;

  let {
    label,
    description,
    required = false,
    error,
    hint,
    disabled = false,
    orientation = 'vertical',
    class: className = '',
    id,
    children,
    ...restProps
  }: Props = $props();

  let containerClasses = $derived(`field-group ${orientation === 'horizontal' ? 'flex items-start gap-3' : 'flex flex-col gap-2'} ${disabled ? 'opacity-[var(--opacity-70)] cursor-not-allowed' : ''} ${className}`);
  let hasError = $derived(!!error);
</script>

<div class={containerClasses} {...restProps}>
  {#if label}
    <label for={id} class="field-label text-sm font-medium text-[var(--color-text-primary)] flex items-center gap-1">
      {label}
      {#if required}
        <span class="text-[var(--color-danger-500)]" aria-label="required field">*</span>
      {/if}
    </label>
  {/if}

      <div class="field-content flex-1">
        <!--
          The input element rendered in the slot should have an `id` attribute
          matching the `id` prop passed to FormFieldGroup for accessibility.
        -->
        {@render children()}
  
        {#if description}
          <p class="mt-1 text-sm text-[var(--color-text-secondary)]">
            {description}
          </p>
        {/if}
    {#if hasError}
      <p class="mt-1 text-sm text-[var(--color-danger-600)]" aria-live="polite">
        {error}
      </p>
    {/if}

    {#if hint && !hasError}
      <p class="mt-1 text-sm text-[var(--color-text-secondary)]">
        {hint}
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



