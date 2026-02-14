<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import DateRangePicker from './index.svelte';
</script>

<Story id="organisms-date-range-picker" title="Organisms / Interaction / Input / Date Range Picker" component={DateRangePicker} category="Organisms/Interaction/Input">
  {#snippet children()}<div class="p-4 max-w-md"><DateRangePicker /></div>{/snippet}
</Story>
