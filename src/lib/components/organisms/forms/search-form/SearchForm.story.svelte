<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SearchForm from './SearchForm.svelte';

    type Props = {
        placeholder?: string;
        disabled?: boolean;
        showButton?: boolean;
    };

    const controls: ControlConfig[] = [
        {
            name: 'placeholder',
            type: 'text',
            defaultValue: 'Search...'
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: false
        },
        {
            name: 'showButton',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-search-form"
    title="SearchForm"
    component={SearchForm}
    category="Molecules"
    description="Search form component"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SearchForm
                placeholder={props.placeholder}
                disabled={props.disabled}
                showButton={props.showButton}
            />
        </div>
    {/snippet}
</Story>