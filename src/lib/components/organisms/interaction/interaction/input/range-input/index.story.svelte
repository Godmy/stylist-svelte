<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import RangeInput from './index.svelte';
</script>

<Story id="organisms-range-input" title="Organisms / Interaction / Input / Range Input" component={RangeInput} category="Organisms/Interaction/Input">
  {#snippet children()}<div class="p-4 max-w-md"><RangeInput min={0} max={500} minValue={50} maxValue={350} /></div>{/snippet}
</Story>
