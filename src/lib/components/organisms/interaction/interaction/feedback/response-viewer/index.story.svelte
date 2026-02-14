<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import ResponseViewer from './index.svelte';
</script>
<Story id="organisms-response-viewer" title="Organisms / Interaction / Feedback / Response Viewer" component={ResponseViewer} category="Organisms/Interaction/Feedback">
  {#snippet children()}<div class="sb-organisms-response-viewer p-4"><ResponseViewer title="API Response" status="success" response={'{"ok":true,"items":[1,2,3]}'} /></div>{/snippet}
</Story>

