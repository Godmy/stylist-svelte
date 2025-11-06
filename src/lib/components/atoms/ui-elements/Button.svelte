<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { Loader2 } from 'lucide-svelte';

  type Snippet = any; // Placeholder for now

  type ButtonVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
  type ButtonSize = 'sm' | 'md' | 'lg';

  type Props = {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    block?: boolean;
    content?: Snippet; // Add content prop
  } & HTMLButtonAttributes;

  let {
    variant = 'primary',
    size = 'md',
    disabled = false,
    loading = false,
    block = false,
    class: className = '',
    content, // Destructure content
    ...restProps
  }: Props = $props();

  let variantClasses = $derived({
    primary: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
    success: 'bg-green-600 hover:bg-green-700 text-white',
    warning: 'bg-yellow-600 hover:bg-yellow-700 text-white',
    danger: 'bg-red-600 hover:bg-red-700 text-white',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300',
    link: 'bg-transparent hover:bg-gray-100 text-indigo-600 underline'
  }[variant]);

  let sizeClasses = $derived({
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }[size]);

  let disabledClass = $derived((disabled || loading)
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '');

  let blockClass = $derived(block ? 'w-full' : '');

  let classes = $derived(`inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${variantClasses} ${sizeClasses} ${disabledClass} ${blockClass} ${className}`);
</script>

<button {...restProps} class={classes}>
  {#if loading}
    <Loader2 class="animate-spin -ml-1 mr-2 h-4 w-4" />
  {/if}

  {#if content}
    {@render content()}
  {:else if loading}
    Loading...
  {/if}
</button>
