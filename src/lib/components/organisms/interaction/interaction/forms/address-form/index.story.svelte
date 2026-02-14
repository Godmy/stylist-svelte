<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import AddressForm from './index.svelte';
</script>
<Story id="organisms-address-form" title="Organisms / Interaction / Forms / Address Form" component={AddressForm} category="Organisms/Interaction/Forms">
  {#snippet children()}<div class="sb-organisms-address-form p-4"><AddressForm /></div>{/snippet}
</Story>
