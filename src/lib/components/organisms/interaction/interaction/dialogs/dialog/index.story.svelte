<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import Dialog from './index.svelte';
</script>
<Story id="organisms-dialog" title="Organisms / Interaction / Dialogs / Dialog" component={Dialog} category="Organisms/Interaction/Dialogs">
  {#snippet children()}<div class="sb-organisms-dialog p-4"><Dialog open={true} title="Confirm action" description="Are you sure you want to continue?" /></div>{/snippet}
</Story>
