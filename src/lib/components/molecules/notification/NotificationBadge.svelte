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
  }: Props = $props()>;

  // Determine position classes
  let positionClasses = '';
  switch(position) {
    case 'top-left':
      positionClasses = '-top-1 -left-1';
      break;
    case 'top-right':
      positionClasses = '-top-1 -right-1';
      break;
    case 'bottom-left':
      positionClasses = '-bottom-1 -left-1';
      break;
    case 'bottom-right':
      positionClasses = '-bottom-1 -right-1';
      break;
  }

  // Determine variant classes
  let variantClasses = '';
  switch(variant) {
    case 'primary':
      variantClasses = 'bg-blue-500 text-white';
      break;
    case 'secondary':
      variantClasses = 'bg-gray-500 text-white';
      break;
    case 'success':
      variantClasses = 'bg-green-500 text-white';
      break;
    case 'warning':
      variantClasses = 'bg-yellow-500 text-gray-900';
      break;
    case 'error':
      variantClasses = 'bg-red-500 text-white';
      break;
    default: // default
      variantClasses = 'bg-gray-500 text-white';
      break;
  }

  // Determine badge content
  let badgeContent = '';
  if (dot) {
    badgeContent = '';
  } else if (count > maxCount) {
    badgeContent = `${maxCount}+`;
  } else {
    badgeContent = count.toString();
  }
</script>

{#if count > 0 || showZero || dot}
  <div class={`relative inline-block ${className}`} {...restProps}>
    {#if children}
      {@render children}
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
      {@render children}
    {/if}
  </div>
{/if}