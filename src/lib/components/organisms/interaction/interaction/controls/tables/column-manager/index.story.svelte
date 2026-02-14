<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import ColumnManager from './index.svelte';

  const columns = [
    { key: 'name', header: 'Name', visible: true },
    { key: 'email', header: 'Email', visible: true },
    { key: 'status', header: 'Status', visible: true }
  ];
</script>

<Story id="organisms-column-manager" title="Organisms / Interaction / Controls / Tables / Column Manager" component={ColumnManager} category="Organisms/Interaction/Controls/Tables">
  {#snippet children()}
    <div class="sb-organisms-column-manager p-4"><ColumnManager {columns} /></div>
  {/snippet}
</Story>

