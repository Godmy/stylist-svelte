<script lang="ts">
    import { Story } from '$stylist/design-system/playground';
    import type { ControlConfig } from '$stylist/design-system/tokens/controls';
    import SearchSuggestion from './index.svelte';

    type SearchSuggestionType = {
        id: string;
        text: string;
        category?: string;
        icon?: string;
    };

    type Props = {
        suggestions?: SearchSuggestionType[];
        query?: string;
        loading?: boolean;
    };

    const defaultSuggestions: SearchSuggestionType[] = [
        { id: '1', text: 'Apple', category: 'Fruits' },
        { id: '2', text: 'Banana', category: 'Fruits' },
        { id: '3', text: 'Cherry', category: 'Fruits' },
    ];

    const controls: ControlConfig[] = [
        {
            name: 'query',
            type: 'text',
            defaultValue: ''
        },
        {
            name: 'loading',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-search-suggestion"
    title="SearchSuggestion"
    component={SearchSuggestion}
    category="Molecules"
    description="Component for search suggestions"
    controls={controls}
>
    {#snippet children(values: any)}
        <div class="p-4">
            <SearchSuggestion
                suggestions={values.suggestions || defaultSuggestions}
                query={values.query}
                loading={values.loading}
            />
        </div>
    {/snippet}
</Story>





