<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Status = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'custom';

  type Props = {
    status: Status;
    label: string;
    customColor?: string;
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
    class?: string;
    indicatorClass?: string;
    labelClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    status = 'neutral',
    label = 'Status',
    customColor,
    size = 'md',
    showLabel = true,
    class: className = '',
    indicatorClass = '',
    labelClass = '',
    ...restProps
  }: Props = $props();

  // Define size classes
  let sizeClasses = $state('');
  if (size === 'sm') {
    sizeClasses = 'w-2 h-2';
  } else if (size === 'md') {
    sizeClasses = 'w-3 h-3';
  } else if (size === 'lg') {
    sizeClasses = 'w-4 h-4';
  }

  // Define status color classes
  let statusClasses = $state('');
  if (status === 'success') {
    statusClasses = 'bg-green-500';
  } else if (status === 'warning') {
    statusClasses = 'bg-yellow-500';
  } else if (status === 'error') {
    statusClasses = 'bg-red-500';
  } else if (status === 'info') {
    statusClasses = 'bg-blue-500';
  } else if (status === 'neutral') {
    statusClasses = 'bg-gray-500';
  } else if (status === 'custom' && customColor) {
    statusClasses = `bg-[${customColor}]`;
  } else {
    statusClasses = 'bg-gray-500';
  }
</script>

<div class={`flex items-center ${className}`} {...restProps}>
  <span class={`inline-block rounded-full ${statusClasses} ${sizeClasses} ${indicatorClass} mr-2`}></span>
  {#if showLabel}
    <span class={`${labelClass}`}>{label}</span>
  {/if}
</div>