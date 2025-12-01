<script lang="ts">
  let {
    value = 0,
    max = 100,
    label = '',
    showPercentage = true,
    color = 'blue',
    height = 'h-2',
    class: className = ''
  } = $props<{
    value?: number;
    max?: number;
    label?: string;
    showPercentage?: boolean;
    color?: string;
    height?: string;
    class?: string;
  }>();

  let percentage = $derived(Math.round((value / max) * 100));

  const colorClasses: Record<string, string> = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    purple: 'bg-purple-500'
  };
</script>

<div class={`${className}`}>
  {#if label}
    <div class="flex justify-between mb-1">
      <span class="text-sm font-medium">{label}</span>
      {#if showPercentage}
        <span class="text-sm font-medium">{percentage}%</span>
      {/if}
    </div>
  {/if}
  <div class="w-full bg-gray-200 rounded-full ${height}">
    <div 
      class="h-full rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.blue}" 
      style={`width: ${percentage}%`}
    ></div>
  </div>
  {#if !label && showPercentage}
    <div class="text-right mt-1">
      <span class="text-sm font-medium">{percentage}%</span>
    </div>
  {/if}
</div>