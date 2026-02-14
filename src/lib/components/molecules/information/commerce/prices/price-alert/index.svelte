<script lang="ts">
  import { PriceAlertStyleManager } from '$stylist/design-system/styles/price-alert';

  let {
    currentPrice = 0,
    targetPrice = 0,
    currency = '$',
    status = 'monitoring', // 'monitoring', 'reached', 'exceeded'
    productName = '',
    onStatusChange = (status: string) => {},
    class: className = ''
  } = $props<{
    currentPrice?: number;
    targetPrice?: number;
    currency?: string;
    status?: 'monitoring' | 'reached' | 'exceeded';
    productName?: string;
    onStatusChange?: (status: 'monitoring' | 'reached' | 'exceeded') => void;
    class?: string;
  }>();

  const isTargetReached = $derived(currentPrice <= targetPrice);
  const statusText = $derived(isTargetReached ? 'reached' : 'monitoring');
  const statusMsg = $derived(isTargetReached
    ? `Target price of ${currency}${targetPrice} reached!`
    : `Waiting for price to reach ${currency}${targetPrice}`);

  // Generate CSS classes using the style manager
  const containerClass = $derived(
    PriceAlertStyleManager.getContainerClass(
      statusText === 'reached' 
        ? PriceAlertStyleManager.getReachedStatusClass() 
        : PriceAlertStyleManager.getMonitoringStatusClass(),
      className
    )
  );
  const titleClass = $derived(PriceAlertStyleManager.getTitleClass());
  const contentClass = $derived(PriceAlertStyleManager.getContentClass());
  const priceInfoClass = $derived(PriceAlertStyleManager.getPriceInfoClass());
  const statusBadgeClass = $derived(
    PriceAlertStyleManager.getStatusBadgeClass(
      statusText === 'reached' 
        ? PriceAlertStyleManager.getReachedBadgeClass() 
        : PriceAlertStyleManager.getMonitoringBadgeClass()
    )
  );
</script>

<div class={containerClass}>
  <h3 class={titleClass}>{productName || 'Price Alert'}</h3>
  <div class={contentClass}>
    <div class={priceInfoClass}>
      <p class={PriceAlertStyleManager.getCurrentPriceClass()}>Current: {currency}{currentPrice}</p>
      <p class={PriceAlertStyleManager.getTargetPriceClass()}>Target: {currency}{targetPrice}</p>
    </div>
    <div class={statusBadgeClass}>
      {statusMsg}
    </div>
  </div>
</div>
