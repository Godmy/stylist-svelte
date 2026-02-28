<script lang="ts">
  import type { IKPIIndicatorProps } from '$stylist/design-system/contracts/information/kpiindicator';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
  import { KPIIndicatorStyleManager } from '$stylist/design-system/styles/information/kpiindicator';

  const TrendingUp = 'trending-up';
  const TrendingDown = 'trending-down';
  const Minus = 'minus';

  /**
   * KPIIndicator - РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РёРЅРґРёРєР°С‚РѕСЂР° СЌС„С„РµРєС‚РёРІРЅРѕСЃС‚Рё СЃ РїСЂРѕРіСЂРµСЃСЃРѕРј
   *
   * РџСЂРёРЅС†РёРїС‹ SOLID:
   * - SRP: РљРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ KPI РёРЅРґРёРєР°С‚РѕСЂР°
   * - OCP: РћС‚РєСЂС‹С‚ РґР»СЏ СЂР°СЃС€РёСЂРµРЅРёСЏ С‡РµСЂРµР· РїСЂРѕРїСЃС‹, РЅРѕ Р·Р°РєСЂС‹С‚ РґР»СЏ РјРѕРґРёС„РёРєР°С†РёРё РІРЅСѓС‚СЂРµРЅРЅРµР№ Р»РѕРіРёРєРё
   * - LSP: РњРѕР¶РµС‚ Р±С‹С‚СЊ РёСЃРїРѕР»СЊР·РѕРІР°РЅ РІРјРµСЃС‚Рѕ Р»СЋР±РѕРіРѕ Р±Р°Р·РѕРІРѕРіРѕ РєРѕРјРїРѕРЅРµРЅС‚Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ РґР°РЅРЅС‹С…
   * - ISP: РџСЂРµРґРѕСЃС‚Р°РІР»СЏРµС‚ С‚РѕР»СЊРєРѕ РЅРµРѕР±С…РѕРґРёРјС‹Рµ СЃРІРѕР№СЃС‚РІР° РґР»СЏ РѕС‚РѕР±СЂР°Р¶РµРЅРёСЏ KPI
   * - DIP: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёР№ (С‚РёРїС‹ Рё СЃС‚РёР»СЊ-РјРµРЅРµРґР¶РµСЂ), Р° РЅРµ РѕС‚ РєРѕРЅРєСЂРµС‚РЅС‹С… СЂРµР°Р»РёР·Р°С†РёР№
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
  const trendIcon = $derived(trend === 'up' ? TrendingUp : trend === 'down' ? TrendingDown : Minus);

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
          <BaseIcon name={trendIcon} class="h-5 w-5" />
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
