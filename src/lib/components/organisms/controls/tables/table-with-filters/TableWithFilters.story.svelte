<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import type { IColumn } from './types';
    import TableWithFilters from './TableWithFilters.svelte';

    type Props = {
        columns?: IColumn[];
        data?: Array<any>;
        showFilters?: boolean;
    };

    import type { FilterType } from './types';

    const defaultColumns: Array<{
        key: string;
        title: string;
        filterable: boolean;
        filterType?: FilterType;
        filterOptions?: Array<{ value: string; label: string }>;
    }> = [
        { key: 'name', title: 'Name', filterable: true },
        { key: 'age', title: 'Age', filterable: true, filterType: 'number' },
        { key: 'email', title: 'Email', filterable: true },
        {
          key: 'status',
          title: 'Status',
          filterable: true,
          filterType: 'select',
          filterOptions: [
            { value: 'Active', label: 'Active' },
            { value: 'Inactive', label: 'Inactive' },
            { value: 'Pending', label: 'Pending' }
          ]
        }
    ];

    const defaultData = [
        { id: 1, name: 'John Doe', age: 35, email: 'john@example.com', status: 'Active' },
        { id: 2, name: 'Jane Smith', age: 28, email: 'jane@example.com', status: 'Inactive' },
        { id: 3, name: 'Bob Johnson', age: 42, email: 'bob@example.com', status: 'Active' },
        { id: 4, name: 'Alice Williams', age: 31, email: 'alice@example.com', status: 'Pending' }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'showFilters',
            type: 'boolean',
            defaultValue: true
        }
    ];
</script>

<Story
    id="molecules-table-with-filters"
    title="TableWithFilters"
    component={TableWithFilters}
    category="Molecules"
    description="Table with filter functionality"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TableWithFilters
                columns={props.columns || defaultColumns}
                data={props.data || defaultData}
                showFilters={props.showFilters}
            />
        </div>
    {/snippet}
</Story>