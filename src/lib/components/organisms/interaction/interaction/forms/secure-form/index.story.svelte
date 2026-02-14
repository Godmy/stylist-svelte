<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import SecureForm from './index.svelte';
</script>
<Story id="organisms-secure-form" title="Organisms / Interaction / Forms / Secure Form" component={SecureForm} category="Organisms/Interaction/Forms">
  {#snippet children()}<div class="sb-organisms-secure-form p-4 max-w-md"><SecureForm /></div>{/snippet}
</Story>
