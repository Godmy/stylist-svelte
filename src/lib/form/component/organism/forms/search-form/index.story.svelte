<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';
  import type { SlotSearchForm as SearchFormProps } from '$stylist/form/interface/slot/search-form';
  import { SearchFormStyleManager } from '$stylist';
  import SearchForm from './index.svelte';

  type Props = {
    placeholder: string;
    showFilters: boolean;
    showAdvanced: boolean;
    showRecentSearches: boolean;
    debounce: number;
  };

  const controls: InterfaceControllerSettings[] = [
    { name: 'placeholder', type: 'text', defaultValue: 'Search...' },
    { name: 'showFilters', type: 'boolean', defaultValue: true },
    { name: 'showAdvanced', type: 'boolean', defaultValue: false },
    { name: 'showRecentSearches', type: 'boolean', defaultValue: true },
    { name: 'debounce', type: 'number', defaultValue: 300 }
  ];

  function handleSearch(query: string, filters?: any) {
    console.log('Search submitted:', query, filters);
    alert(`Searching for: ${query}`);
  }

  function handleFilterChange(filters: any) {
    console.log('Filters changed:', filters);
  }
</script>

<Story
  id="organisms-search-form"
  title="Organisms / Interaction / Forms / Search Form"
  component={SearchForm}
  category="Organisms/Interaction/Forms"
  description="A search form component with filters and advanced search capabilities."
  tags={['search', 'form', 'filters']}
  controls={controls}
>
  {#snippet children(values: any)}
    <div class={SearchFormStyleManager.container('sb-organisms-search-form p-4')}>
      <h1 class="text-lg font-semibold mb-4">SearchForm Component</h1>

      <div class="mb-6 p-4 border rounded">
        <h2 class="text-md font-semibold mb-2">Interactive SearchForm</h2>
        <div class="max-w-lg">
          <SearchForm 
            placeholder={values.placeholder}
          />
        </div>
      </div>
    </div>
  {/snippet}
</Story>




