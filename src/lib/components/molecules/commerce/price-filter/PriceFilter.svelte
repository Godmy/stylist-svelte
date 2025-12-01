<script lang="ts">
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
</script>

<div class={`p-4 ${className}`}>
  <div class="mb-4">
    <div class="flex justify-between mb-1">
      <span class="text-sm font-medium">Min: {currency}{min}</span>
      <span class="text-sm font-medium">Max: {currency}{max}</span>
    </div>
    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      value={min}
      oninput={handleMinChange}
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
    />
    <input
      type="range"
      min={minPrice}
      max={maxPrice}
      value={max}
      oninput={handleMaxChange}
      class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4"
    />
  </div>
  <div class="flex justify-between">
    <span>{currency}{minPrice}</span>
    <span>{currency}{maxPrice}</span>
  </div>
</div>