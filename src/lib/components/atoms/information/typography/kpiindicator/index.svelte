<script lang="ts">
  import type { IKPIIndicatorProps } from '$stylist/design-system/props/information/kpiindicator';
  import { KPIIndicatorStyleManager } from '$stylist/design-system/styles/information/kpiindicator';
  import { TrendingUp, TrendingDown, Minus } from 'lucide-svelte';

  /**
   * KPIIndicator - компонент для отображения индикатора эффективности с прогрессом
   *
   * Принципы SOLID:
   * - SRP: Компонент отвечает только за отображение KPI индикатора
   * - OCP: Открыт для расширения через пропсы, но закрыт для модификации внутренней логики
   * - LSP: Может быть использован вместо любого базового компонента отображения данных
   * - ISP: Предоставляет только необходимые свойства для отображения KPI
   * - DIP: Зависит от абстракций (типы и стиль-менеджер), а не от конкретных реализаций
   */
  let props: IKPIIndicatorProps = $props();

  let {
    title = props.title,
    currentValue = props.currentValue,
    targetValue = props.targetValue,
    unit = props.unit ?? '',
    status = props.status ?? 'on-track',
    trend = props.trend ?? 'neutral',
    trendValue = props.trendValue ?? 0,
    size = props.size ?? 'md',
    class: className = props.class ?? '',
    titleClass = props.titleClass ?? '',
    valueClass = props.valueClass ?? '',
    ...restProps
  } = props;

  // Calculate percentage towards target
  const percentage = $derived(Math.round((currentValue / targetValue) * 100));

  // Get CSS classes from style manager
  const containerClasses = $derived(
    `${KPIIndicatorStyleManager.getContainerClasses(size)} ${KPIIndicatorStyleManager.getStatusColorClasses(status)} ${className}`.trim()
  );

  const titleClasses = $derived(KPIIndicatorStyleManager.getTitleClasses(titleClass));
  const valueClasses = $derived(KPIIndicatorStyleManager.getValueClasses(valueClass));
  const trendColorClasses = $derived(KPIIndicatorStyleManager.getTrendColorClasses(trend));
  const statusText = $derived(KPIIndicatorStyleManager.getStatusText(status));

  // Determine trend icon
  const TrendIcon = $derived(trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus);

  // Get progress bar classes
  const progressTrackClasses = $derived(KPIIndicatorStyleManager.getProgressTrackClasses());
  const progressFillClasses = $derived(KPIIndicatorStyleManager.getProgressFillClasses());
</script>

<div class={containerClasses} {...restProps}>
  <div class="flex items-center justify-between">
    <div>
      <h3 class={titleClasses}>{title}</h3>
      <p class={valueClasses}>
        {currentValue}{unit} <span class="text-sm font-normal text-[--stylist-kpi-subvalue-text]">/ {targetValue}{unit}</span>
      </p>
    </div>
    <div class="flex items-center">
      <div class="mr-3">
        <div class="w-3 h-3 rounded-full bg-current"></div>
      </div>
      <div class="flex items-center">
        <span class={trendColorClasses}>
          <TrendIcon class="h-5 w-5" />
        </span>
        {#if trendValue !== 0}
          <span class={`ml-1 text-sm ${trendColorClasses}`}>
            {trendValue > 0 ? '+' : ''}{trendValue}%
          </span>
        {/if}
      </div>
    </div>
  </div>

  <div class="mt-3">
    <div class="flex items-center justify-between text-sm text-[--stylist-kpi-status-text] mb-1">
      <span>{statusText}</span>
      <span>{percentage}%</span>
    </div>
    <div class={progressTrackClasses}>
      <div
        class={progressFillClasses}
        style={`width: ${Math.min(percentage, 100)}%`}
      ></div>
    </div>
  </div>
</div>
