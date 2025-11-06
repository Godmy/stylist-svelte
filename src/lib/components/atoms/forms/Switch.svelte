<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  type Size = 'sm' | 'md' | 'lg';

  type Props = {
    id: string;
    label?: string;
    description?: string;
    checked?: boolean;
    disabled?: boolean;
    size?: Size;
    required?: boolean;
  } & Omit<HTMLInputAttributes, 'type' | 'size'>;

  let {
    id,
    label,
    description,
    checked = $bindable(false),
    disabled = false,
    size = 'md',
    required = false,
    class: className = '',
    ...restProps
  }: Props = $props();

  const trackClasses: Record<Size, string> = {
    sm: 'w-10 h-6',
    md: 'w-11 h-6',
    lg: 'w-14 h-7'
  };

  const knobSizes: Record<Size, string> = {
    sm: 'h-5 w-5',
    md: 'h-5 w-5',
    lg: 'h-6 w-6'
  };

  const translateChecked: Record<Size, string> = {
    sm: 'translate-x-4',
    md: 'translate-x-5',
    lg: 'translate-x-7'
  };
</script>

<label class="flex items-start gap-3 select-none {disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'} {className}">
  <span class="relative inline-flex flex-shrink-0 {trackClasses[size]} border-2 border-transparent rounded-full transition-colors duration-200 ease-in-out {checked ? 'bg-indigo-600' : 'bg-gray-200'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
    <input
      id={id}
      type="checkbox"
      class="absolute block w-full h-full opacity-0 cursor-pointer"
      bind:checked
      disabled={disabled}
      required={required}
      aria-describedby={description ? `${id}-description` : undefined}
      {...restProps}
    />
    <span
      aria-hidden="true"
      class="inline-block {knobSizes[size]} rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out {checked ? translateChecked[size] : 'translate-x-0'}"
    ></span>
  </span>

  {#if label || description}
    <span class="flex flex-col pt-0.5">
      {#if label}
        <span class="text-sm font-medium text-gray-900">
          {label}
          {#if required}
            <span class="text-red-500" aria-hidden="true">*</span>
          {/if}
        </span>
      {/if}
      {#if description}
        <span id={`${id}-description`} class="text-sm text-gray-500">
          {description}
        </span>
      {/if}
    </span>
  {/if}
</label>
