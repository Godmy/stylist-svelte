<script lang="ts">
  let {
    title = '',
    value = 0,
    max = 100,
    unit = '%',
    status = 'normal', // 'normal', 'warning', 'critical'
    class: className = ''
  } = $props<{
    title?: string;
    value?: number;
    max?: number;
    unit?: string;
    status?: 'normal' | 'warning' | 'critical';
    class?: string;
  }>();

  const percentage = $derived(Math.round((value / max) * 100));

  const statusColors = {
    normal: 'bg-green-500',
    warning: 'bg-yellow-500',
    critical: 'bg-red-500'
  };
</script>

<div class={`flex flex-col ${className}`}>
  <div class="flex justify-between items-center mb-1">
    <h3 class="font-medium">{title}</h3>
    <span class="text-sm text-gray-500">{percentage}{unit}</span>
  </div>
  <div class="w-full bg-gray-200 rounded-full h-2.5">
    <div
      class={`h-2.5 rounded-full ${statusColors[status as keyof typeof statusColors]}`}
      style={`width: ${percentage}%`}
    ></div>
  </div>
</div>
