<script lang="ts">
  import { PriceFilterStyleManager } from '$stylist/design-system/styles/information/price-filter';

  let {
    minPrice = 0,
    maxPrice = 1000,
    currentMin = 0,
    currentMax = 1000,
    currency = '$',
    onPriceChange = (min: number, max: number) => {},
    class: className = ''
  } = $props<{
    minPrice?: number;
    maxPrice?: number;
    currentMin?: number;
    currentMax?: number;
    currency?: string;
    onPriceChange?: (min: number, max: number) => void;
    class?: string;
  }>();

  let min = $state(currentMin);
  let max = $state(currentMax);

  $effect(() => {
    min = currentMin;
    max = currentMax;
  });

  const handleMinChange = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value);
    min = Math.min(value, max);
    onPriceChange(min, max);
  };

  const handleMaxChange = (e: Event) => {
    const value = parseInt((e.target as HTMLInputElement).value);
    max = Math.max(value, min);
    onPriceChange(min, max);
  };

  // Generate CSS classes using the style manager
  const containerClass = $derived(PriceFilterStyleManager.getContainerClass(className));
  const rangeContainerClass = $derived(PriceFilterStyleManager.getRangeContainerClass());
  const labelsContainerClass = $derived(PriceFilterStyleManager.getLabelsContainerClass());
  const labelClass = $derived(PriceFilterStyleManager.getLabelClass());
  const sliderClass = $derived(PriceFilterStyleManager.getSliderClass());
  const priceRangeClass = $derived(PriceFilterStyleManager.getPriceRangeClass());
</script>

<div class={containerClass}>
  <div class={rangeContainerClass}>
    <div class={labelsContainerClass}>
      <span class={labelClass}>Min: {currency}{min}</span>
      <span class={labelClass}>Max: {currency}{max}</span>
    </div>
    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      value={min}
      oninput={handleMinChange}
      class={sliderClass}
    />
    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      value={max}
      oninput={handleMaxChange}
      class={`${sliderClass} ${PriceFilterStyleManager.getSecondSliderClass()}`}
    />
  </div>
  <div class={priceRangeClass}>
    <span>{currency}{minPrice}</span>
    <span>{currency}{maxPrice}</span>
  </div>
</div>
