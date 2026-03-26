<script lang="ts">
  /**
   * РљРѕРјРїРѕРЅРµРЅС‚ BarChart
   *
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * - SRP: РљРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ СЃС‚РѕР»Р±С‡Р°С‚РѕР№ РґРёР°РіСЂР°РјРјС‹
   * - OCP: Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµРј Р·Р° СЃС‡РµС‚ РїСЂРѕРїСЃРѕРІ
   * - LSP: РџРѕРґС‡РёРЅСЏРµС‚СЃСЏ РєРѕРЅС‚СЂР°РєС‚Сѓ, Р·Р°РґР°РЅРЅРѕРјСѓ РёРЅС‚РµСЂС„РµР№СЃРѕРј IBarChartProps
   * - ISP: РРЅС‚РµСЂС„РµР№СЃ РїСЂРѕРїСЃРѕРІ СЂР°Р·РґРµР»РµРЅ РЅР° РєРѕРЅРєСЂРµС‚РЅС‹Рµ, РЅРµРѕР±С…РѕРґРёРјС‹Рµ С‡Р°СЃС‚Рё
   * - DIP: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёР№ (С‚РёРїРѕРІ Рё СЃС‚РёР»РµР№), Р° РЅРµ РѕС‚ РґРµС‚Р°Р»РµР№ СЂРµР°Р»РёР·Р°С†РёРё
   *
   * РЎР»РµРґСѓРµС‚ Atomic Design: Р­С‚Рѕ РјРѕР»РµРєСѓР»Р°, РІРёР·СѓР°Р»РёР·РёСЂСѓСЋС‰Р°СЏ РЅР°Р±РѕСЂ РґР°РЅРЅС‹С…
   */

  import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
  import { Icon as BaseIcon } from '$stylist';
const Info = 'info';

  import Tooltip from '$stylist/interaction/atom/controls/tooltip/index.svelte';
  import { BarChartStyleManager } from '$stylist/architecture/class/style-manager/bar-chart';
  import type { IBarChartProps, IBarPosition } from '$stylist/architecture/interface/bar-chart';

  let {
    data = [],
    title = 'Bar Chart',
    width = 600,
    height = 400,
    showTooltip = true,
    showLegend = true,
    colorScheme = 'minimal',
    maxValue,
    barGap = 10,
    barWidth = 30,
    showAxis = true,
    axisColor = 'var(--color-border-primary)',
    onBarClick,
    class: hostClass = '',
    chartClass = '',
    ...restProps
  }: IBarChartProps & ArchitectureHTMLAttributes<HTMLDivElement> = $props();
  const containerHostClass = hostClass == null ? undefined : String(hostClass);

  // Calculate max value if not provided
  let calculatedMaxValue = $derived(maxValue || Math.max(...data.map(d => d.value), 0));

  // Calculate dimensions
  let chartWidth = $derived(width - (showAxis ? 60 : 10));
  let chartHeight = $derived(height - (showAxis ? 40 : 10));

  // Calculate bar positions
  // Using imported IBarPosition type instead of local definition

  const barPositions = $derived(() => {
    const positions: IBarPosition[] = [];
    const totalBarWidth = barWidth * data.length + barGap * (data.length - 1);
    const startX = showAxis ? 50 : 5;

    for (let i = 0; i < data.length; i++) {
      const x = startX + i * (barWidth + barGap);
      const barHeight = (data[i].value / calculatedMaxValue) * chartHeight;
      const y = chartHeight + (showAxis ? 10 : 5) - barHeight;

      positions.push({
        x,
        y,
        width: barWidth,
        height: barHeight,
        color: data[i].color || getDefaultColor(i, colorScheme)
      });
    }

    return positions;
  });

  // Get default color based on index and scheme
  function getDefaultColor(index: number, scheme: IBarChartProps['colorScheme']): string {
    const schemes = {
      minimal: ['var(--color-primary-500)', 'var(--color-success-500)', 'var(--color-error-500)', 'var(--color-warning-500)', 'var(--color-info-500)', 'var(--color-secondary-500)'],
      ocean: ['var(--color-primary-400)', 'var(--color-info-400)', 'var(--color-secondary-400)', 'var(--color-success-300)', 'var(--color-info-300)'],
      forest: ['var(--color-success-600)', 'var(--color-success-500)', 'var(--color-success-400)', 'var(--color-neutral-500)', 'var(--color-neutral-400)'],
      sunset: ['var(--color-danger-400)', 'var(--color-error-500)', 'var(--color-warning-400)', 'var(--color-warning-500)', 'var(--color-warning-200)']
    } as const;

    const colorList = schemes[scheme ?? 'minimal'];
    return colorList[index % colorList.length];
  }

  let hoveredBar: number | null = $state(null);
</script>

<div class={BarChartStyleManager.getContainerClasses(containerHostClass)} style={`width: ${width}px; height: ${height}px;`} {...restProps}>
  {#if title}
    <div class={BarChartStyleManager.getTitleContainerClasses()}>
      <h3 class={BarChartStyleManager.getTitleClasses()}>{title}</h3>
      {#if showTooltip}
        <Tooltip content="This is a bar chart showing categorical data with rectangular bars proportional to the values they represent." placement="top">
          <BaseIcon name={Info} class={BarChartStyleManager.getInfoIconClasses()} />
        </Tooltip>
      {/if}
    </div>
  {/if}

  <div class={BarChartStyleManager.getChartContainerClasses(chartClass)}>
    <svg
      width={width}
      height={height}
      class={BarChartStyleManager.getSvgClasses()}
    >
      {#if showAxis}
        <!-- X axis -->
        <line
          x1={showAxis ? 50 : 5}
          y1={height - 10}
          x2={width - 10}
          y2={height - 10}
          stroke={axisColor}
          stroke-width="1"
        />
        <!-- Y axis -->
        <line
          x1={showAxis ? 50 : 5}
          y1={10}
          x2={showAxis ? 50 : 5}
          y2={height - 10}
          stroke={axisColor}
          stroke-width="1"
        />

        <!-- Y axis labels -->
        {#each [0, calculatedMaxValue * 0.25, calculatedMaxValue * 0.5, calculatedMaxValue * 0.75, calculatedMaxValue] as val, i}
          <text
            x={showAxis ? 45 : 0}
            y={height - 15 - (i * (chartHeight / 4))}
            text-anchor="end"
            font-size="10"
            fill="var(--color-text-tertiary)"
          >
            {Math.round(val)}
          </text>
          <line
            x1={showAxis ? 48 : 3}
            y1={height - 10 - (i * (chartHeight / 4))}
            x2={width - 10}
            y2={height - 10 - (i * (chartHeight / 4))}
            stroke={axisColor}
            stroke-dasharray="3,3"
            stroke-width="0.5"
          />
        {/each}

        <!-- X axis labels -->
        {#each barPositions() as position, i (position.x)}
          <text
            x={position.x + barWidth / 2}
            y={height - 5}
            text-anchor="middle"
            font-size="10"
            fill="var(--color-text-tertiary)"
          >
            {data[i].name}
          </text>
        {/each}
      {/if}

      <!-- Bars -->
      {#each barPositions() as position, i}
        <g
          class="cursor-pointer"
          onclick={() => onBarClick?.(data[i])}
          onkeydown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onBarClick?.(data[i]);
            }
          }}
          onfocus={() => hoveredBar = i}
          onblur={() => hoveredBar = null}
          role="button"
          tabindex="0"
          aria-label={`Bar chart item: ${data[i].name}, Value: ${data[i].value}`}
        >
          <rect
            x={position.x}
            y={position.y}
            width={position.width}
            height={position.height}
            fill={position.color}
            rx="2"
            ry="2"
            class={BarChartStyleManager.getBarClasses(hoveredBar === i)}
            style={`opacity: ${hoveredBar === i ? 0.8 : 1};`}

          />
        </g>
      {/each}
    </svg>
  </div>

  {#if showLegend}
    <div class={BarChartStyleManager.getLegendClasses()}>
      {#each data as item, i}
        <div class={BarChartStyleManager.getLegendItemClasses()}>
          <div
            class="w-4 h-4 rounded mr-2"
            style={`background-color: ${item.color || getDefaultColor(i, colorScheme)}`}
          ></div>
          <span class={BarChartStyleManager.getLegendTextClasses()}>{item.name}</span>
          <span class={BarChartStyleManager.getLegendValueClasses()}>({item.value})</span>
        </div>
      {/each}
    </div>
  {/if}
</div>






