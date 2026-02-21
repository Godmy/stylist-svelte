<script lang="ts">
  import { PriceMatchStyleManager } from '$stylist/design-system/styles/information/price-match';

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

  // Generate CSS classes using the style manager
  const containerClass = $derived(
    PriceMatchStyleManager.getContainerClass(
      isLowerAvailable 
        ? PriceMatchStyleManager.getLowerAvailableClass() 
        : PriceMatchStyleManager.getBestPriceClass(),
      className
    )
  );
  const titleClass = $derived(PriceMatchStyleManager.getTitleClass());
  const priceInfoClass = $derived(PriceMatchStyleManager.getPriceInfoClass());
  const yourPriceClass = $derived(PriceMatchStyleManager.getYourPriceClass());
  const lowerPriceClass = $derived(PriceMatchStyleManager.getLowerPriceClass());
  const bestPriceClass = $derived(PriceMatchStyleManager.getBestPriceTextClass());
  const competitorsContainerClass = $derived(PriceMatchStyleManager.getCompetitorsContainerClass());
  const competitorRowClass = $derived(PriceMatchStyleManager.getCompetitorRowClass());
  const buttonClass = $derived(PriceMatchStyleManager.getButtonClass());
</script>

<div class={containerClass}>
  <h3 class={titleClass}>{productName || 'Price Match'}</h3>
  <div class={priceInfoClass}>
    <p class={yourPriceClass}>Your price: <span class={PriceMatchStyleManager.getBoldClass()}>{currency}{targetPrice}</span></p>
    {#if isLowerAvailable}
      <p class={lowerPriceClass}>Lower price found: {currency}{bestPrice}</p>
    {:else}
      <p class={bestPriceClass}>Best price available!</p>
    {/if}
  </div>

  {#if competitorPrices.length > 0}
    <div class={competitorsContainerClass}>
      {#each competitorPrices as competitor}
        <div class={competitorRowClass}>
          <span>{competitor.name}</span>
          <span>{currency}{competitor.price}</span>
        </div>
      {/each}
    </div>
  {/if}

  {#if isLowerAvailable}
    <button
      onclick={onFindLower}
      class={buttonClass}
    >
      Find Lower Price
    </button>
  {/if}
</div>
