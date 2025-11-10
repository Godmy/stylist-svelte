<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Badge = {
    id: string;
    label: string;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
    size?: 'sm' | 'md' | 'lg';
    disabled?: boolean;
    onClick?: () => void;
  };

  type Props = {
    badges: Badge[];
    maxVisible?: number;
    showOverflow?: boolean;
    class?: string;
    badgeClass?: string;
    overflowClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    badges = [],
    maxVisible = 5,
    showOverflow = true,
    class: className = '',
    badgeClass = '',
    overflowClass = '',
    ...restProps
  }: Props = $props();

  // Get visible badges and overflow count
  let visibleBadges = badges.slice(0, maxVisible);
  let overflowCount = Math.max(0, badges.length - maxVisible);

  // Define variant classes
  function getVariantClasses(variant: string, size: string) {
    let base = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';
    let variantClass = '';
    
    switch (variant) {
      case 'primary':
        variantClass = 'bg-blue-100 text-blue-800';
        break;
      case 'secondary':
        variantClass = 'bg-gray-100 text-gray-800';
        break;
      case 'success':
        variantClass = 'bg-green-100 text-green-800';
        break;
      case 'warning':
        variantClass = 'bg-yellow-100 text-yellow-800';
        break;
      case 'error':
        variantClass = 'bg-red-100 text-red-800';
        break;
      case 'info':
        variantClass = 'bg-indigo-100 text-indigo-800';
        break;
      default: // default
        variantClass = 'bg-gray-100 text-gray-800';
        break;
    }
    
    // Size classes
    if (size === 'sm') {
      base = base.replace('text-xs', 'text-xs');
    } else if (size === 'lg') {
      base = base.replace('text-xs', 'text-sm');
      base = base.replace('px-2.5 py-0.5', 'px-3 py-1');
    }
    
    return `${base} ${variantClass}`;
  }
</script>

<div class={`flex flex-wrap items-center gap-2 ${className}`} {...restProps}>
  {#each visibleBadges as badge}
    <span
      class={`${getVariantClasses(badge.variant || 'default', badge.size || 'md')} ${
        badge.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      } ${badgeClass}`}
      onclick={() => !badge.disabled && badge.onClick && badge.onClick()}
      role="button"
      tabindex="0"
      onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && !badge.disabled && badge.onClick && badge.onClick()}
    >
      {badge.label}
    </span>
  {/each}
  
  {#if showOverflow && overflowCount > 0}
    <span class={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 ${overflowClass}`}>
      +{overflowCount}
    </span>
  {/if}
</div>