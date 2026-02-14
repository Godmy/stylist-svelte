<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import SearchForm from './index.svelte';
</script>
<Story id="organisms-search-form" title="Organisms / Interaction / Forms / Search Form" component={SearchForm} category="Organisms/Interaction/Forms">
  {#snippet children()}<div class="sb-organisms-search-form p-4"><SearchForm /></div>{/snippet}
</Story>
