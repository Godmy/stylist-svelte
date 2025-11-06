<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import SearchBar from './search/SearchBar.svelte';

  const list = [
    'Dashboard overview',
    'Team members',
    'Billing settings',
    'Notifications',
    'Security preferences',
    'API access',
    'Integrations',
    'Usage analytics',
    'Support tickets'
  ] as const;

  type SearchBarStoryProps = {
    placeholder: string;
    debounceMs: number;
  };

  const controls: ControlConfig[] = [
    {
      name: 'placeholder',
      type: 'text',
      defaultValue: 'Search settings…'
    },
    {
      name: 'debounceMs',
      type: 'number',
      defaultValue: 300,
      min: 50,
      max: 1000,
      step: 50
    }
  ];

  let query = $state('');

  const filtered = $derived(() => {
    if (!query) return list;
    const lower = query.toLowerCase();
    return list.filter((item) => item.toLowerCase().includes(lower));
  });

  function handleSearch(value: string) {
    query = value;
  }
</script>

<Story
  id="molecules-search-bar"
  title="SearchBar"
  component={SearchBar}
  category="Molecules"
  description="Debounced search input with clear button."
  tags={['search', 'input', 'filter']}
  controls={controls}
>
  {#snippet children(props: SearchBarStoryProps)}
    {@const results = filtered()}
    <div class="space-y-6">
      <SearchBar
        bind:value={query}
        placeholder={props.placeholder}
        debounceMs={props.debounceMs}
        onchange={handleSearch}
        class="max-w-lg"
      />

      <div class="rounded-lg border border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-700">
        <div class="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-300">
          {query ? `Results for “${query}”` : 'Recent destinations'}
        </div>
        <ul class="divide-y divide-gray-200 dark:divide-gray-800">
          {#if results.length > 0}
            {#each results as item}
              <li class="px-4 py-3 text-sm text-gray-700 dark:text-gray-200">
                {item}
              </li>
            {/each}
          {:else}
            <li class="px-4 py-6 text-sm text-gray-500 text-center">
              Nothing matches the current query.
            </li>
          {/if}
        </ul>
      </div>
    </div>
  {/snippet}
</Story>
