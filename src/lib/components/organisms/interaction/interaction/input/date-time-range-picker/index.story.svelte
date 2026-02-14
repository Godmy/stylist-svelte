<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import DateTimeRangePicker from './index.svelte';
</script>

<Story id="organisms-date-time-range-picker" title="Organisms / Interaction / Input / Date Time Range Picker" component={DateTimeRangePicker} category="Organisms/Interaction/Input">
  {#snippet children()}<div class="p-4 max-w-lg"><DateTimeRangePicker /></div>{/snippet}
</Story>
