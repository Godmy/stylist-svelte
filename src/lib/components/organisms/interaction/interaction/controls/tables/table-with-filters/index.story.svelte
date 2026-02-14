<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import TableWithFilters from './index.svelte';
  const columns=['id','name','role'];
  const data=[{id:1,name:'Alice',role:'Admin'},{id:2,name:'Bob',role:'User'},{id:3,name:'Chris',role:'Manager'}];
</script>
<Story id="organisms-table-with-filters" title="Organisms / Interaction / Controls / Tables / Table With Filters" component={TableWithFilters} category="Organisms/Interaction/Controls/Tables">
  {#snippet children()}<div class="sb-organisms-table-with-filters p-4"><TableWithFilters {data} {columns} /></div>{/snippet}
</Story>
