<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    count?: number;
    maxCount?: number;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    dot?: boolean;
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    showZero?: boolean;
    class?: string;
    badgeClass?: string;
    children?: any; // To support wrapping other components
  } & HTMLAttributes<HTMLDivElement>;

  let {
    count = 0,
    maxCount = 99,
    variant = 'error',
    dot = false,
    position = 'top-right',
    showZero = false,
    class: className = '',
    badgeClass = '',
    children,
    ...restProps
  }: Props = $props();

  // Determine position classes
  const positionClasses = (() => {
    switch(position) {
      case 'top-left':
        return '-top-1 -left-1';
      case 'top-right':
        return '-top-1 -right-1';
      case 'bottom-left':
        return '-bottom-1 -left-1';
      case 'bottom-right':
        return '-bottom-1 -right-1';
      default:
        return '';
    }
  })();

  // Determine variant classes
  const variantClasses = (() => {
    switch(variant) {
      case 'primary':
        return 'bg-blue-500 text-white';
      case 'secondary':
        return 'bg-gray-500 text-white';
      case 'success':
        return 'bg-green-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-gray-900';
      case 'error':
        return 'bg-red-500 text-white';
      default: // default
        return 'bg-gray-500 text-white';
    }
  })();

  // Determine badge content
  const badgeContent = (() => {
    if (dot) {
      return '';
    } else if (count > maxCount) {
      return `${maxCount}+`;
    } else {
      return count.toString();
    }
  })();
</script>

{#if count > 0 || showZero || dot}
  <div class={`relative inline-block ${className}`} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
    
    <span class={`absolute ${positionClasses} flex items-center justify-center rounded-full text-xs font-bold ${
      dot ? 'h-2 w-2' : 'px-1 min-w-[1.25rem] h-5'
    } ${variantClasses} ${badgeClass}`}>
      {#if !dot && (count > 0 || showZero)}
        {badgeContent}
      {/if}
    </span>
  </div>
{:else}
  <div class={`inline-block ${className}`} {...restProps}>
    {#if children}
      {@render children()}
    {/if}
  </div>
{/if}
