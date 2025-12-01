<script lang="ts">
  import RangeSlider from './RangeSlider.svelte';

  let label = $state('Volume');
  let min = $state(0);
  let max = $state(100);
  let step = $state(1);
  let showValue = $state(true);
  let disabled = $state(false);
  let description = $state('Adjust the volume level');
  let range = $state(false);

  let sliderValue = $state<number | [number, number]>(50);

  $effect(() => {
    // Update sliderValue when range changes
    if (range) {
      sliderValue = [20, 80];
    } else {
      sliderValue = 50;
    }
  });
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">RangeSlider Component</h1>

  <div class="mb-6 p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Interactive Range Slider</h2>
    <div class="flex flex-col gap-4">
      <RangeSlider
        id="volume-slider"
        {label}
        value={sliderValue}
        {min}
        {max}
        {step}
        {showValue}
        {disabled}
        {description}
        {range}
      />
    </div>

    <div class="mt-4 flex flex-wrap gap-2">
      <div>
        <label for="label-input" class="block text-sm mb-1">Label:</label>
        <input
          id="label-input"
          type="text"
          bind:value={label}
          class="border rounded p-1"
        />
      </div>

      <div>
        <label for="min-input" class="block text-sm mb-1">Min:</label>
        <input
          id="min-input"
          type="number"
          bind:value={min}
          class="border rounded p-1 w-20"
        />
      </div>

      <div>
        <label for="max-input" class="block text-sm mb-1">Max:</label>
        <input
          id="max-input"
          type="number"
          bind:value={max}
          class="border rounded p-1 w-20"
        />
      </div>

      <div>
        <label for="step-input" class="block text-sm mb-1">Step:</label>
        <input
          id="step-input"
          type="number"
          bind:value={step}
          class="border rounded p-1 w-20"
        />
      </div>

      <div class="flex items-end">
        <label for="show-value-checkbox" class="flex items-center gap-1">
          <input id="show-value-checkbox" type="checkbox" bind:checked={showValue} />
          Show Value
        </label>
      </div>

      <div class="flex items-end">
        <label for="disabled-checkbox" class="flex items-center gap-1">
          <input id="disabled-checkbox" type="checkbox" bind:checked={disabled} />
          Disabled
        </label>
      </div>

      <div class="flex items-end">
        <label for="range-checkbox" class="flex items-center gap-1">
          <input id="range-checkbox" type="checkbox" bind:checked={range} />
          Range Mode
        </label>
      </div>
    </div>

    <div class="mt-4">
      <label for="description-input" class="block text-sm mb-1">Description:</label>
      <input
        id="description-input"
        type="text"
        bind:value={description}
        class="border rounded p-1 w-full"
      />
    </div>
  </div>

  <div class="p-4 border rounded">
    <h2 class="text-md font-semibold mb-2">Single vs Range Slider</h2>
    <div class="space-y-6">
      <div>
        <h3 class="text-sm font-medium mb-2">Single Value Slider</h3>
        <RangeSlider
          id="single-slider"
          label="Progress"
          value={30}
          min={0}
          max={100}
          step={1}
          showValue={true}
          description="This slider controls a single value"
        />
      </div>

      <div>
        <h3 class="text-sm font-medium mb-2">Range Slider</h3>
        <RangeSlider
          id="range-slider"
          label="Price Range"
          value={[25, 75]}
          min={0}
          max={100}
          step={1}
          showValue={true}
          range={true}
          description="This slider controls a range of values"
        />
      </div>
    </div>
  </div>
</div>