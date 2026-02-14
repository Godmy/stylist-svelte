<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import Modal from './index.svelte';
</script>
<Story id="organisms-modal" title="Organisms / Interaction / Dialogs / Modal" component={Modal} category="Organisms/Interaction/Dialogs">
  {#snippet children()}<div class="sb-organisms-modal p-4"><Modal open={true} title="Modal Window" /></div>{/snippet}
</Story>
