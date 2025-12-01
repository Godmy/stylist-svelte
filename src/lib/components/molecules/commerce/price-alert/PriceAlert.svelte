<script lang="ts">
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
</script>

<div class={`p-4 rounded-lg border ${
  statusText === 'reached' 
    ? 'bg-green-50 border-green-200' 
    : 'bg-blue-50 border-blue-200'
} ${className}`}>
  <h3 class="font-semibold mb-2">{productName || 'Price Alert'}</h3>
  <div class="flex justify-between items-center">
    <div>
      <p class="text-sm text-gray-600">Current: {currency}{currentPrice}</p>
      <p class="text-sm text-gray-600">Target: {currency}{targetPrice}</p>
    </div>
    <div class={`px-3 py-1 rounded-full text-sm font-medium ${
      statusText === 'reached' 
        ? 'bg-green-100 text-green-800' 
        : 'bg-blue-100 text-blue-800'
    }`}>
      {statusMsg}
    </div>
  </div>
</div>