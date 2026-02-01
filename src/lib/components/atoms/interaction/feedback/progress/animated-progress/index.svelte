<script lang="ts">
  let {
    value = 0,
    min = 0,
    max = 100,
    label = 'Progress',
    showPercentage = true,
    class: className = ''
  } = $props<{
    value?: number;
    min?: number;
    max?: number;
    label?: string;
    showPercentage?: boolean;
    class?: string;
  }>();

  let percentage = $derived(Math.round(((value - min) / (max - min)) * 100));
</script>

<div class={`w-full ${className}`}>
  <div class="flex justify-between mb-1">
    <span class="text-sm font-medium">{label}</span>
    {#if showPercentage}
      <span class="text-sm font-medium">{percentage}%</span>
    {/if}
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div 
      class="bg-blue-600 h-2.5 rounded-full" 
      style={`width: ${percentage}%`}
    ></div>
  </div>
</div>