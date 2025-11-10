<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    class?: string;
    barClass?: string;
    labelClass?: string;
    valueClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    value = 0,
    max = 100,
    label = 'Progress',
    showValue = true,
    color = 'primary',
    class: className = '',
    barClass = '',
    labelClass = '',
    valueClass = '',
    ...restProps
  }: Props = $props();

  $effect(() => {
    // Ensure value stays within valid range
    if (value < 0) value = 0;
    if (value > max) value = max;
  });

  // Calculate percentage with proper type conversion
  const percentage = Math.round((Number(value) / Number(max)) * 100);

  // Define color classes
  let colorClasses = $state('');
  if (color === 'primary') {
    colorClasses = 'bg-blue-500';
  } else if (color === 'secondary') {
    colorClasses = 'bg-gray-500';
  } else if (color === 'success') {
    colorClasses = 'bg-green-500';
  } else if (color === 'warning') {
    colorClasses = 'bg-yellow-500';
  } else if (color === 'error') {
    colorClasses = 'bg-red-500';
  }
</script>

<div class={`flex flex-col ${className}`} {...restProps}>
  <div class="flex justify-between items-center mb-1">
    <span class={`text-sm font-medium ${labelClass}`}>{label}</span>
    {#if showValue}
      <span class={`text-sm font-medium ${valueClass}`}>{percentage}%</span>
    {/if}
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div 
      class={`h-2.5 rounded-full ${colorClasses} ${barClass}`} 
      style={`width: ${percentage}%`}
    ></div>
  </div>
</div>