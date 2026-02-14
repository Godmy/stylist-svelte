<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import DocumentPreview from './index.svelte';
</script>
<Story id="organisms-document-preview" title="Organisms / Interaction / Forms / Document Preview" component={DocumentPreview} category="Organisms/Interaction/Forms">
  {#snippet children()}<div class="sb-organisms-document-preview p-4"><DocumentPreview content={'{"status":"ok"}'} format="json" /></div>{/snippet}
</Story>

