<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { Search, X } from 'lucide-svelte';
  import { createEventDispatcher } from 'svelte';

  type Size = 'sm' | 'md' | 'lg';

  type Props = {
    placeholder?: string;
    value?: string;
    loading?: boolean;
    disabled?: boolean;
    size?: Size;
    clearable?: boolean;
    class?: string;
  } & Omit<HTMLInputAttributes, 'size'>;

  let {
    placeholder = 'Search...',
    value = $bindable(''),
    loading = false,
    disabled = false,
    size = 'md',
    clearable = true,
    class: className = '',
    ...restProps
  }: Props = $props();

  const dispatch = createEventDispatcher<{
    input: { value: string };
    change: { value: string };
    clear: Record<string, never>;
  }>();

  let internalValue = $state(value);
  let focused = $state(false);

  const sizeClasses: Record<Size, string> = {
    sm: 'h-8 text-sm',
    md: 'h-10 text-base',
    lg: 'h-12 text-lg'
  };

  $effect(() => {
    if (value !== internalValue) {
      internalValue = value ?? '';
    }
  });

  function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    internalValue = target.value;
    value = internalValue;
    dispatch('input', { value: internalValue });
    dispatch('change', { value: internalValue });
  }

  function clearInput() {
    if (!clearable) return;

    internalValue = '';
    value = '';
    dispatch('input', { value: '' });
    dispatch('change', { value: '' });
    dispatch('clear', {});
  }

  function handleKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && internalValue) {
      clearInput();
    }
  }
</script>

<div class={`search-input ${className} ${disabled ? 'is-disabled' : ''} ${focused ? 'is-focused' : ''}`}>
  <div class="search-input__icon">
    <Search class="h-4 w-4" aria-hidden="true" />
  </div>

  <input
    type="text"
    class={`search-input__field ${sizeClasses[size]}`}
    bind:value={internalValue}
    placeholder={placeholder}
    disabled={disabled}
    oninput={handleInput}
    onkeydown={handleKeydown}
    onfocus={() => (focused = true)}
    onblur={() => (focused = false)}
    {...restProps}
  />

  {#if loading}
    <div class="search-input__spinner" aria-hidden="true"></div>
  {:else if clearable && internalValue && !disabled}
    <button
      type="button"
      class="search-input__clear"
      onclick={clearInput}
      aria-label="Clear search input"
    >
      <X class="h-4 w-4" aria-hidden="true" />
    </button>
  {/if}
</div>

<style>
  .search-input {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid #cbd5e1;
    border-radius: 0.5rem;
    padding: 0 0.5rem;
    background-color: #fff;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }

  .search-input.is-focused {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }

  .search-input.is-disabled {
    background-color: #f1f5f9;
    color: #94a3b8;
  }

  .search-input__icon {
    display: flex;
    align-items: center;
    color: #94a3b8;
  }

  .search-input__field {
    flex: 1;
    border: none;
    background: transparent;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    color: inherit;
  }

  .search-input__field:focus {
    outline: none;
  }

  .search-input__clear {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.125rem;
    color: #94a3b8;
    border-radius: 0.25rem;
  }

  .search-input__clear:hover {
    color: #475569;
    background-color: rgba(148, 163, 184, 0.15);
  }

  .search-input__spinner {
    width: 1rem;
    height: 1rem;
    border-radius: 9999px;
    border: 2px solid #cbd5e1;
    border-top-color: #6366f1;
    animation: spin 0.8s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
