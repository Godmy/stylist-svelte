<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import TableWithGrouping from './index.svelte';
  const data=[{id:1,name:'A',team:'Blue'},{id:2,name:'B',team:'Red'},{id:3,name:'C',team:'Blue'}];
</script>
<Story id="organisms-table-with-grouping" title="Organisms / Interaction / Controls / Tables / Table With Grouping" component={TableWithGrouping} category="Organisms/Interaction/Controls/Tables">
  {#snippet children()}<div class="sb-organisms-table-with-grouping p-4"><TableWithGrouping {data} groupBy="team" /></div>{/snippet}
</Story>
