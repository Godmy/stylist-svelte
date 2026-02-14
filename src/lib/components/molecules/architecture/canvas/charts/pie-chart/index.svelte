<script lang="ts">
  let {
    data = [],
    width = 200,
    height = 200,
    colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'],
    class: className = ''
  } = $props<{
    data: Array<{ label: string; value: number }>;
    width?: number;
    height?: number;
    colors?: string[];
    class?: string;
  }>();

  const total = $derived(data.reduce((sum: number, item: { label: string; value: number }) => sum + item.value, 0));

  function createSegments(data: Array<{ label: string; value: number }>, total: number, colors: string[]) {
    const segs: Array<{ label: string; value: number; startAngle: number; endAngle: number; color: string }> = [];
    let startAngle = 0;

    for (const item of data) {
      const angle = (item.value / total) * 360;
      segs.push({
        ...item,
        startAngle,
        endAngle: startAngle + angle,
        color: colors[segs.length % colors.length]
      });
      startAngle += angle;
    }
    return segs;
  }

  const segments = $derived(createSegments(data, total, colors));
</script>

<div class={`inline-block ${className}`}>
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
    {#each segments as segment, i}
      <path
        d={`
          M ${width / 2} ${height / 2}
          L ${width / 2 + (width / 3) * Math.cos((segment.startAngle - 90) * Math.PI / 180)} 
            ${height / 2 + (height / 3) * Math.sin((segment.startAngle - 90) * Math.PI / 180)}
          A ${width / 3} ${height / 3} 0 ${segment.endAngle - segment.startAngle > 180 ? 1 : 0} 1
            ${width / 2 + (width / 3) * Math.cos((segment.endAngle - 90) * Math.PI / 180)} 
            ${height / 2 + (height / 3) * Math.sin((segment.endAngle - 90) * Math.PI / 180)}
          Z
        `}
        fill={segment.color}
      />
    {/each}
  </svg>
  <div class="mt-4 grid grid-cols-2 gap-2">
    {#each segments as segment, i}
      <div class="flex items-center">
        <div class="w-4 h-4 mr-2" style={`background-color: ${segment.color}`}></div>
        <span class="text-sm">{segment.label}: {segment.value}</span>
      </div>
    {/each}
  </div>
</div>
