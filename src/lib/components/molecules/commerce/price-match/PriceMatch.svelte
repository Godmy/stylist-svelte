<script lang="ts">
  let {
    targetPrice = 0,
    competitorPrices = [],
    currency = '$',
    productName = '',
    onFindLower = () => {},
    class: className = ''
  } = $props<{
    targetPrice?: number;
    competitorPrices: Array<{ name: string; price: number; url?: string }>;
    currency?: string;
    productName?: string;
    onFindLower?: () => void;
    class?: string;
  }>();

  const bestPrice = $derived(competitorPrices.length > 0
    ? Math.min(...competitorPrices.map((p: { name: string; price: number; url?: string }) => p.price))
    : null);
  const isLowerAvailable = $derived(bestPrice !== null && bestPrice < targetPrice);
</script>

<div class={`p-4 rounded-lg border ${isLowerAvailable ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'} ${className}`}>
  <h3 class="font-semibold mb-2">{productName || 'Price Match'}</h3>
  <div class="mb-3">
    <p>Your price: <span class="font-bold">{currency}{targetPrice}</span></p>
    {#if isLowerAvailable}
      <p class="text-yellow-700 font-semibold">Lower price found: {currency}{bestPrice}</p>
    {:else}
      <p class="text-green-700 font-semibold">Best price available!</p>
    {/if}
  </div>
  
  {#if competitorPrices.length > 0}
    <div class="mb-3">
      {#each competitorPrices as competitor}
        <div class="flex justify-between py-1">
          <span>{competitor.name}</span>
          <span>{currency}{competitor.price}</span>
        </div>
      {/each}
    </div>
  {/if}
  
  {#if isLowerAvailable}
    <button
      onclick={onFindLower}
      class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
    >
      Find Lower Price
    </button>
  {/if}
</div>