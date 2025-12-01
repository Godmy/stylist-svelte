<script>
  import RangeInput from './RangeInput.svelte';

  export let min = 0;
  export let max = 100;
  export let minValue = 25;
  export let maxValue = 75;
  export let step = 1;
  export let disabled = false;
</script>

<div class="p-4">
  <h1>RangeInput Story</h1>
  <RangeInput
    {min}
    {max}
    {minValue}
    {maxValue}
    {step}
    {disabled}
    class="my-2"
  />
</div>