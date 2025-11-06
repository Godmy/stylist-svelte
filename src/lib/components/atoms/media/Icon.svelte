<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  
  let {
    name = 'box',
    size = 'md',
    className = '',
    strokeWidth = 1.5,
    ...restProps
  }: {
    name?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    strokeWidth?: number;
  } & HTMLAttributes<SVGSVGElement> = $props();

  // Define size classes
  type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  let sizeClasses = $derived({
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-8 h-8'
  }[size as IconSize]);

  // Define the icon names type
  type IconName = 'search' | 'plus' | 'minus' | 'check' | 'x' | 'chevron-down' | 'chevron-up' | string;
  
  // This is a simplified version - in a real implementation, you would
  // have a mapping of icon names to their actual SVG paths
  // For now, we'll provide a simple box as a placeholder
  let iconPath = $derived<string>(
    // This is a simplified approach - typically you would map names to SVG paths
    name === 'search' ? 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' :
    name === 'plus' ? 'M12 6v6m0 0v6m0-6h6m-6 0H6' :
    name === 'minus' ? 'M20 12H4' :
    name === 'check' ? 'M5 13l4 4L19 7' :
    name === 'x' ? 'M6 18L18 6M6 6l12 12' :
    name === 'chevron-down' ? 'M19 9l-7 7-7-7' :
    name === 'chevron-up' ? 'M5 15l7-7 7 7' :
    'M3 3l18 18M3 21l18-18' // Default box icon
  );
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class={`inline-block ${sizeClasses} ${className}`}
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width={strokeWidth}
  stroke-linecap="round"
  stroke-linejoin="round"
  {...restProps}
>
  <path d={iconPath} />
</svg>