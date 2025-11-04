<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  type Snippet = any;

  type Variant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
  type Size = 'sm' | 'md';

  type Props = {
    text?: string;
    variant?: Variant;
    size?: Size;
    closable?: boolean;
    disabled?: boolean;
    icon?: Snippet;
    content?: Snippet;
    class?: string;
  };

  const dispatch = createEventDispatcher<{ close: void }>();

  let {
    text,
    variant = 'neutral',
    size = 'md',
    closable = false,
    disabled = false,
    icon,
    content,
    class: className = ''
  }: Props = $props();

  const variantClasses: Record<Variant, string> = {
    neutral: 'bg-gray-100 text-gray-700 border-gray-200',
    primary: 'bg-indigo-100 text-indigo-700 border-indigo-200',
    success: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    warning: 'bg-amber-100 text-amber-700 border-amber-200',
    danger: 'bg-rose-100 text-rose-700 border-rose-200'
  };

  const sizeClasses: Record<Size, string> = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-3 py-1 gap-1.5'
  };

  function handleClose() {
    if (disabled) return;
    dispatch('close');
  }
</script>

<span
  class="inline-flex items-center border rounded-full font-medium {variantClasses[variant]} {sizeClasses[size]} {disabled ? 'opacity-60 cursor-not-allowed' : ''} {className}"
>
  {#if icon}
    <span class="flex items-center" aria-hidden="true">
      {@render icon()}
    </span>
  {/if}

  <span>
    {#if content}
      {@render content()}
    {:else if text}
      {text}
    {/if}
  </span>

  {#if closable}
    <button
      type="button"
      class="ml-1 inline-flex h-4 w-4 items-center justify-center rounded-full hover:bg-white/60 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 disabled:opacity-50"
      onclick={handleClose}
      disabled={disabled}
      aria-label="Удалить тег"
    >
      <svg class="h-3 w-3" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 3l8 8M11 3l-8 8" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  {/if}
</span>
