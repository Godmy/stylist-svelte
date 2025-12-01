<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SortableTableHeader from './SortableTableHeader.svelte';

    type SortDirection = 'asc' | 'desc' | null;

    type Props = {
        title: string;
        sortKey?: string;
        currentSortKey?: string;
        currentSortDirection?: SortDirection;
    };

    const controls: ControlConfig[] = [
        {
            name: 'title',
            type: 'text',
            defaultValue: 'Name'
        },
        {
            name: 'sortKey',
            type: 'text',
            defaultValue: 'name'
        },
        {
            name: 'currentSortKey',
            type: 'text',
            defaultValue: 'name'
        },
        {
            name: 'currentSortDirection',
            type: 'select',
            options: ['asc', 'desc', 'null'], // 'null' as a string to represent null
            defaultValue: 'asc'
        }
    ];
</script>

<Story
    id="molecules-sortable-table-header"
    title="SortableTableHeader"
    component={SortableTableHeader}
    category="Molecules"
    description="Sortable table header component for organizing columns"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SortableTableHeader
                title={props.title}
                sortKey={props.sortKey}
                currentSortKey={props.currentSortKey}
                currentSortDirection={props.currentSortDirection}
            />
        </div>
    {/snippet}
</Story>