<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import QuoteRequest from './index.svelte';
</script>

<Story id="organisms-quote-request" title="Organisms / Interaction / Input / Quote Request" component={QuoteRequest} category="Organisms/Interaction/Input">
  {#snippet children()}<div class="p-4"><QuoteRequest /></div>{/snippet}
</Story>
