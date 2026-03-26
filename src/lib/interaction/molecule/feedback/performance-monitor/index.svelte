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
    normal: 'bg-[var(--color-success-500)]',
    warning: 'bg-yellow-500',
    critical: 'bg-[var(--color-danger-500)]'
  };
</script>

<div class={`flex flex-col ${className}`}>
  <div class="flex justify-between items-center mb-1">
    <h3 class="font-medium">{title}</h3>
    <span class="text-sm text-[var(--color-text-secondary)]">{percentage}{unit}</span>
  </div>
  <div class="w-full bg-[var(--color-background-tertiary)] rounded-full h-2.5">
    <div
      class={`h-2.5 rounded-full ${statusColors[status as keyof typeof statusColors]}`}
      style={`width: ${percentage}%`}
    ></div>
  </div>
</div>




