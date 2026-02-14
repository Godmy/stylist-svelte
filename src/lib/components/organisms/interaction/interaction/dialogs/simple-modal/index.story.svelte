<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import SimpleModal from './index.svelte';
</script>
<Story id="organisms-simple-modal" title="Organisms / Interaction / Dialogs / Simple Modal" component={SimpleModal} category="Organisms/Interaction/Dialogs">
  {#snippet children()}<div class="sb-organisms-simple-modal p-4"><SimpleModal open={true} title="Notice" /></div>{/snippet}
</Story>
