<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import SearchResults from './index.svelte';
  import type { SearchResultItem } from '$stylist/design-system/props';

  const results: SearchResultItem[] = [
    { id: '1', title: 'Order #1001', description: 'Order detail page', type: 'page', metadata: { date: '2026-02-14', author: 'Admin' } },
    { id: '2', title: 'Invoice Document', description: 'PDF invoice', type: 'document', metadata: { date: '2026-02-10' } },
    { id: '3', title: 'John Doe', description: 'Customer profile', type: 'user', metadata: { location: 'NYC' } }
  ];

  type Props = { showMetadata: boolean; loading: boolean };
  const controls: ControlConfig[] = [
    { name: 'showMetadata', type: 'boolean', defaultValue: true },
    { name: 'loading', type: 'boolean', defaultValue: false }
  ];
</script>

<Story id="organisms-search-results" title="Organisms / Interaction / Controls / Search / Search Results" component={SearchResults} category="Organisms/Interaction/Controls/Search" controls={controls}>
  {#snippet children(values: any)}
    {@const typedProps = values as Props}
    <div class="sb-organisms-search-results p-4">
      <SearchResults {results} query="order" showMetadata={typedProps.showMetadata} loading={typedProps.loading} />
    </div>
  {/snippet}
</Story>




