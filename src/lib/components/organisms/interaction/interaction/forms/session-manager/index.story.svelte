<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import SessionManager from './index.svelte';
</script>
<Story id="organisms-session-manager" title="Organisms / Interaction / Forms / Session Manager" component={SessionManager} category="Organisms/Interaction/Forms">
  {#snippet children()}<div class="sb-organisms-session-manager p-4"><SessionManager activeSessions={3} /></div>{/snippet}
</Story>
