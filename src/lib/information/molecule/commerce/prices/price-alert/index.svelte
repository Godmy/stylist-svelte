<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
import type { IPriceAlertElementProps } from '$stylist/information/interface/price-alert';
import { createPriceAlertState } from '$stylist/information/state/price-alert';
import { TOKEN_SIZE } from '$stylist/architecture/const/token/size';
  import { createBasePreset } from '$stylist/interaction/preset/base';
import { TOKEN_MONITORING_TYPE } from '$stylist/interaction/const/token/monitoring-type';
  import type { TokenMonitoringType } from '$stylist/interaction/type/token/monitoring-type';

  /**
   * PriceAlert - компонент для отслеживания цен и уведомлений о достижении целевой цены
   *
   * @param variant - Визуальный стиль компонента ('monitoring' | 'reached' | 'exceeded' ...)
   * @param size - Размер компонента ('sm' | 'md' | 'lg')
   * @param disabled - Отключен ли компонент
   * @param currentPrice - Текущая цена
   * @param targetPrice - Целевая цена
   * @returns Стилизованный компонент уведомления о цене
   */

  let props: IPriceAlertElementProps & HTMLAttributes<HTMLDivElement> = $props();

  // Централизованное управление состоянием
  let state = createPriceAlertState(
    createBasePreset(TOKEN_MONITORING_TYPE, TOKEN_SIZE, {
      variant: 'monitoring',
      size: 'md'
    }),
    props as any
  );

  // Извлечение rest-props вручную для работы в режиме runes
  let {
    variant,
    size,
    disabled,
    currentPrice = 0,
    targetPrice = 0,
    currency = '$',
    status = 'monitoring' as TokenMonitoringType,
    productName = '',
    onStatusChange = (status: TokenMonitoringType) => {},
    class: classProp,
    children,
    ...restProps
  } = props;
  
  // Import classes from the design system
  const PRICE_ALERT_TITLE_CLASSES = 'font-semibold mb-2';
  const PRICE_ALERT_CONTENT_CLASSES = 'flex justify-between items-center';
  const PRICE_ALERT_PRICE_INFO_CLASSES = 'space-y-1';
  const PRICE_ALERT_CURRENT_PRICE_CLASSES = 'text-sm text-[var(--color-text-secondary)]';
  const PRICE_ALERT_TARGET_PRICE_CLASSES = 'text-sm font-medium';
  const PRICE_ALERT_STATUS_BADGE_CLASSES = 'px-2 py-1 rounded text-xs font-medium';
  
  const isTargetReached = $derived(currentPrice <= targetPrice);
  const statusText = $derived((isTargetReached ? 'reached' : 'monitoring') as TokenMonitoringType);
  const statusMsg = $derived(isTargetReached
    ? `Target price of ${currency}${targetPrice} reached!`
    : `Waiting for price to reach ${currency}${targetPrice}`);
    
  // Determine status-specific classes
  const statusBadgeTypeClass = $derived(isTargetReached 
    ? 'bg-[var(--color-success-100)] text-[var(--color-success-800)]' 
    : 'bg-[var(--color-primary-100)] text-[var(--color-primary-800)]');
</script>

<div {...restProps} class={state.classes} {...state.attrs}>
  <h3 class={PRICE_ALERT_TITLE_CLASSES}>{productName || 'Price Alert'}</h3>
  <div class={PRICE_ALERT_CONTENT_CLASSES}>
    <div class={PRICE_ALERT_PRICE_INFO_CLASSES}>
      <p class={PRICE_ALERT_CURRENT_PRICE_CLASSES}>Current: {currency}{currentPrice}</p>
      <p class={PRICE_ALERT_TARGET_PRICE_CLASSES}>Target: {currency}{targetPrice}</p>
    </div>
    <div class={`${PRICE_ALERT_STATUS_BADGE_CLASSES} ${statusBadgeTypeClass}`}>
      {statusMsg}
    </div>
  </div>
</div>













