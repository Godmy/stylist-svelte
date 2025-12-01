<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SearchResults from './SearchResults.svelte';

    type SearchResult = {
        id: string;
        title: string;
        description: string;
    };

    type Props = {
        results?: SearchResult[];
        loading?: boolean;
    };

    const defaultResults: SearchResult[] = [
        { id: '1', title: 'First Result', description: 'Description of the first result' },
        { id: '2', title: 'Second Result', description: 'Description of the second result' },
        { id: '3', title: 'Third Result', description: 'Description of the third result' },
    ];

    const controls: ControlConfig[] = [
        {
            name: 'loading',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-search-results"
    title="SearchResults"
    component={SearchResults}
    category="Molecules"
    description="Component to display search results"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SearchResults
                results={props.results || defaultResults}
                loading={props.loading}
            />
        </div>
    {/snippet}
</Story>