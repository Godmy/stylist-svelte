<script lang="ts">
  import Icon from '../media/Icon.svelte';
  import type { Snippet } from 'svelte';
  
  /**
   * StatusIndicator component - Displays status with icon and optional text label
   * 
   * @param status - Status type ('default' | 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary')
   * @param size - Size of the indicator ('sm' | 'md' | 'lg')
   * @param label - Text label to display next to the indicator
   * @param showIcon - Whether to show the status icon
   * @param children - Snippet content to display instead of label
   * @returns A styled status indicator with appropriate icon and coloring
   */
  type StatusIndicatorProps = {
    status?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    showIcon?: boolean;
    children?: Snippet;
  };

  let {
    status = 'default',
    size = 'md',
    label = '',
    showIcon = true,
    children
  }: StatusIndicatorProps = $props();

  // Define status classes
  let statusClasses = $derived({
    default: 'text-gray-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500',
    info: 'text-blue-500',
    primary: 'text-indigo-500',
    secondary: 'text-gray-500'
  }[status satisfies keyof Record<'default' | 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary', string>]);
  
  // Define size classes
  let sizeClasses = $derived({
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }[size satisfies keyof Record<'sm' | 'md' | 'lg', string>]);
  
  // Define icon names for each status
  let iconNames = $derived({
    default: 'info',
    success: 'check',
    warning: 'alert',
    error: 'x',
    info: 'info',
    primary: 'star',
    secondary: 'info'
  }[status satisfies keyof Record<'default' | 'success' | 'warning' | 'error' | 'info' | 'primary' | 'secondary', string>]);
</script>

<div class="flex items-center gap-2">
  {#if showIcon}
    <Icon name={iconNames} size={size} class={statusClasses} />
  {/if}
  {#if children}
    {@render children()}
  {:else if label}
    <span class="{statusClasses} {sizeClasses}">
      {label}
    </span>
  {/if}
</div>