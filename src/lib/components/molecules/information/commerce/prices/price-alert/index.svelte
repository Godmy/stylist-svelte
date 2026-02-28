<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { PriceAlertElementProps } from '$stylist/design-system/contracts/information/price-alert';
  import { createState } from '$stylist/design-system/models/information/price-alert.svelte';
  import { COMPONENT_SIZE } from '$stylist/design-system/tokens/architecture/component-size';
  import { createBasePreset } from '$stylist/design-system/runtime/preset';
  import { PRICE_ALERT_STATUSES } from '$stylist/design-system/tokens/information/price-alert-statuses';
  import type { PriceAlertStatus } from '$stylist/design-system/tokens/information/price-alert-statuses';

  /**
   * PriceAlert - РєРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РѕС‚СЃР»РµР¶РёРІР°РЅРёСЏ С†РµРЅ Рё СѓРІРµРґРѕРјР»РµРЅРёР№ Рѕ РґРѕСЃС‚РёР¶РµРЅРёРё С†РµР»РµРІРѕР№ С†РµРЅС‹
   *
   * @param variant - Р’РёР·СѓР°Р»СЊРЅС‹Р№ СЃС‚РёР»СЊ РєРѕРјРїРѕРЅРµРЅС‚Р° ('monitoring' | 'reached' | 'exceeded' ...)
   * @param size - Р Р°Р·РјРµСЂ РєРѕРјРїРѕРЅРµРЅС‚Р° ('sm' | 'md' | 'lg')
   * @param disabled - РћС‚РєР»СЋС‡РµРЅ Р»Рё РєРѕРјРїРѕРЅРµРЅС‚
   * @param currentPrice - РўРµРєСѓС‰Р°СЏ С†РµРЅР°
   * @param targetPrice - Р¦РµР»РµРІР°СЏ С†РµРЅР°
   * @returns РЎС‚РёР»РёР·РѕРІР°РЅРЅС‹Р№ РєРѕРјРїРѕРЅРµРЅС‚ СѓРІРµРґРѕРјР»РµРЅРёСЏ Рѕ С†РµРЅРµ
   */

  let props: PriceAlertElementProps & HTMLAttributes<HTMLDivElement> = $props();

  // Р¦РµРЅС‚СЂР°Р»РёР·РѕРІР°РЅРЅРѕРµ СѓРїСЂР°РІР»РµРЅРёРµ СЃРѕСЃС‚РѕСЏРЅРёРµРј
  let state = createState(
    createBasePreset(PRICE_ALERT_STATUSES, COMPONENT_SIZE, {
      variant: 'monitoring',
      size: 'md'
    }),
    props as any
  );

  // РР·РІР»РµС‡РµРЅРёРµ rest-props РІСЂСѓС‡РЅСѓСЋ РґР»СЏ СЂР°Р±РѕС‚С‹ РІ СЂРµР¶РёРјРµ runes
  let {
    variant,
    size,
    disabled,
    currentPrice = 0,
    targetPrice = 0,
    currency = '$',
    status = 'monitoring' as PriceAlertStatus,
    productName = '',
    onStatusChange = (status: PriceAlertStatus) => {},
    class: classProp,
    children,
    ...restProps
  } = props;
  
  // Import classes from the design system
  const PRICE_ALERT_TITLE_CLASSES = 'font-semibold mb-2';
  const PRICE_ALERT_CONTENT_CLASSES = 'flex justify-between items-center';
  const PRICE_ALERT_PRICE_INFO_CLASSES = 'space-y-1';
  const PRICE_ALERT_CURRENT_PRICE_CLASSES = 'text-sm text-gray-600';
  const PRICE_ALERT_TARGET_PRICE_CLASSES = 'text-sm font-medium';
  const PRICE_ALERT_STATUS_BADGE_CLASSES = 'px-2 py-1 rounded text-xs font-medium';
  
  const isTargetReached = $derived(currentPrice <= targetPrice);
  const statusText = $derived((isTargetReached ? 'reached' : 'monitoring') as PriceAlertStatus);
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



