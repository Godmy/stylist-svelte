<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { PriceAlertElementProps } from '$stylist/design-system/props/price-alert';
  import { createState } from '$stylist/design-system/models/price-alert.svelte';
  import { PRICE_ALERT_PRESET } from '$stylist/design-system/state/price-alert';

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

  let props: PriceAlertElementProps & HTMLAttributes<HTMLDivElement> = $props();

  // Централизованное управление состоянием
  let state = createState(PRICE_ALERT_PRESET, props as any);

  // Извлечение rest-props вручную для работы в режиме runes
  let {
    variant,
    size,
    disabled,
    currentPrice = 0,
    targetPrice = 0,
    currency = '$',
    status = 'monitoring',
    productName = '',
    onStatusChange = (status: 'monitoring' | 'reached' | 'exceeded') => {},
    class: classProp,
    children,
    ...restProps
  } = props;
  
  // Import classes from the design system
  import { 
    PRICE_ALERT_TITLE_CLASSES, 
    PRICE_ALERT_CONTENT_CLASSES, 
    PRICE_ALERT_PRICE_INFO_CLASSES, 
    PRICE_ALERT_CURRENT_PRICE_CLASSES, 
    PRICE_ALERT_TARGET_PRICE_CLASSES, 
    PRICE_ALERT_STATUS_BADGE_CLASSES 
  } from '$stylist/design-system/classes/price-alert';
  
  const isTargetReached = $derived(currentPrice <= targetPrice);
  const statusText = $derived(isTargetReached ? 'reached' : 'monitoring');
  const statusMsg = $derived(isTargetReached
    ? `Target price of ${currency}${targetPrice} reached!`
    : `Waiting for price to reach ${currency}${targetPrice}`);
    
  // Determine status-specific classes
  const statusBadgeTypeClass = $derived(isTargetReached 
    ? 'bg-green-100 text-green-800' 
    : 'bg-blue-100 text-blue-800');
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
