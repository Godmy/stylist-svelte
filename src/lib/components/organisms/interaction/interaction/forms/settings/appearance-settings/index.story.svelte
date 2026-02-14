<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import AppearanceSettings from './index.svelte';
</script>
<Story id="organisms-appearance-settings" title="Organisms / Interaction / Forms / Settings / Appearance Settings" component={AppearanceSettings} category="Organisms/Interaction/Forms/Settings">
  {#snippet children()}<div class="sb-organisms-appearance-settings p-4 max-w-md"><AppearanceSettings /></div>{/snippet}
</Story>
