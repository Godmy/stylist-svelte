<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import SecuritySettings from './index.svelte';
</script>
<Story id="organisms-security-settings" title="Organisms / Interaction / Forms / Settings / Security Settings" component={SecuritySettings} category="Organisms/Interaction/Forms/Settings">
  {#snippet children()}<div class="sb-organisms-security-settings p-4 max-w-md"><SecuritySettings /></div>{/snippet}
</Story>
