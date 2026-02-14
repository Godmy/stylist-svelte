<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import ScreenReader from './index.svelte';
</script>
<Story id="organisms-screen-reader" title="Organisms / Interaction / Forms / Screen Reader" component={ScreenReader} category="Organisms/Interaction/Forms">
  {#snippet children()}<div class="sb-organisms-screen-reader p-4"><ScreenReader /></div>{/snippet}
</Story>
