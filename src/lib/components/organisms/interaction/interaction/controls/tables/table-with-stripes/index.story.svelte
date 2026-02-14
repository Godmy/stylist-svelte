<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import TableWithStripes from './index.svelte';
  const columns=['id','name','status'];
  const data=[{id:1,name:'Item 1',status:'ok'},{id:2,name:'Item 2',status:'warn'},{id:3,name:'Item 3',status:'ok'}];
</script>
<Story id="organisms-table-with-stripes" title="Organisms / Interaction / Controls / Tables / Table With Stripes" component={TableWithStripes} category="Organisms/Interaction/Controls/Tables">
  {#snippet children()}<div class="sb-organisms-table-with-stripes p-4"><TableWithStripes {data} {columns} /></div>{/snippet}
</Story>
