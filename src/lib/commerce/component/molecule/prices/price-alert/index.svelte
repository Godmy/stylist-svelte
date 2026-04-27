<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotPriceAlertElement as IPriceAlertElementProps } from '$stylist/commerce/interface/slot/price-alert-element';
import { createPriceAlertState } from '$stylist/commerce/function/state/price-alert';
import { TOKEN_SIZE } from '$stylist/layout/const/enum/size';
import { createBasePreset } from '$stylist/interaction/preset/base';
import { TOKEN_MONITORING_TYPE } from '$stylist/management/const/enum/monitoring-type';
import type { TokenMonitoringType } from '$stylist/management/type/enum/monitoring-type';

let props: IPriceAlertElementProps & HTMLAttributes<HTMLDivElement> = $props();

const state = createPriceAlertState(
  createBasePreset(TOKEN_MONITORING_TYPE, TOKEN_SIZE, {
    variant: 'monitoring',
    size: 'md'
  }),
  props as any
);

let {
  currentPrice = 0,
  targetPrice = 0,
  currency = '$',
  productName = '',
  ...restProps
} = props;
  
const PRICE_ALERT_TITLE_CLASSES = 'font-semibold mb-2';
const PRICE_ALERT_CONTENT_CLASSES = 'flex justify-between items-center';
const PRICE_ALERT_PRICE_INFO_CLASSES = 'space-y-1';
const PRICE_ALERT_CURRENT_PRICE_CLASSES = 'text-sm text-[var(--color-text-secondary)]';
const PRICE_ALERT_TARGET_PRICE_CLASSES = 'text-sm font-medium';
const PRICE_ALERT_STATUS_BADGE_CLASSES = 'px-2 py-1 rounded text-xs font-medium';

const isTargetReached = $derived(currentPrice <= targetPrice);
const statusMsg = $derived(isTargetReached
  ? `Target price of ${currency}${targetPrice} reached!`
  : `Waiting for price to reach ${currency}${targetPrice}`);
  
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
