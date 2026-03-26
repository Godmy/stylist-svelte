<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  type RadioOption = {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
  };

  type Orientation = 'vertical' | 'horizontal';

  type GroupProps = {
    name: string;
    value?: string;
    options: RadioOption[];
    label?: string;
    description?: string;
    orientation?: Orientation;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    class?: string;
  } & Omit<HTMLInputAttributes, 'type' | 'value' | 'name' | 'checked'>;

  let {
    name,
    value,
    options,
    label,
    description,
    orientation = 'vertical',
    disabled = false,
    required = false,
    error,
    class: className = '',
    ...restProps
  }: GroupProps = $props();

  // State for managing the radio group value
  let internalValue = $state(value || '');

  // Update internal value when prop changes
  $effect(() => {
    if (value !== undefined) {
      internalValue = value;
    }
  });

  const layoutClass =
    orientation === 'horizontal'
      ? 'flex flex-wrap gap-4'
      : 'flex flex-col gap-3';
</script>

<fieldset class="space-y-3 {className}">
  {#if label}
    <legend class="text-sm font-medium text-[var(--color-text-primary)]">
      {label}
      {#if required}
        <span class="text-[var(--color-danger-500)]" aria-hidden="true">*</span>
      {/if}
    </legend>
  {/if}

  {#if description}
    <p class="text-sm text-[var(--color-text-secondary)]">{description}</p>
  {/if}

  <div class={layoutClass}>
    {#each options as option (option.value)}
      {@const isChecked = value === option.value}
      <label
        class="flex items-start gap-3 rounded-md border border-[var(--color-border-primary)] px-3 py-2 transition-colors duration-[var(--duration-150)] {disabled || option.disabled ? 'opacity-[var(--opacity-50)] cursor-not-allowed' : 'cursor-pointer hover:border-[var(--color-primary-400)]'} {isChecked ? 'border-[var(--color-primary-500)] bg-[var(--color-primary-50)]' : ''}"
      >
        <span class="mt-1">
          <span class="relative inline-flex h-4 w-4 items-center justify-center">
            <input
              type="radio"
              class="peer absolute h-4 w-4 rounded-full border border-[var(--color-border-primary)] text-[var(--color-primary-600)] focus:ring-indigo-500 focus:outline-none"
              name={name}
              value={option.value}
              bind:group={value}
              disabled={disabled || option.disabled}
              required={required}
              {...restProps}
            />
            <span
              class="pointer-events-none inline-flex h-2 w-2 rounded-full bg-[var(--color-primary-600)] opacity-[var(--opacity-0)] transition-opacity duration-[var(--duration-150)] peer-checked:opacity-[var(--opacity-100)]"
              aria-hidden="true"
            ></span>
          </span>
        </span>

        <span class="flex flex-col">
          <span class="text-sm font-medium text-[var(--color-text-primary)]">
            {option.label}
          </span>
          {#if option.description}
            <span class="text-xs text-[var(--color-text-secondary)]">{option.description}</span>
          {/if}
        </span>
      </label>
    {/each}
  </div>

  {#if error}
    <p class="text-sm text-[var(--color-danger-600)]">{error}</p>
  {/if}
</fieldset>




