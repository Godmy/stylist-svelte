<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import TableWithGrouping from './TableWithGrouping.svelte';

    type Props = {
        columns?: Array<{
            key: string;
            header: string;
        }>;
        data?: Array<any>;
        groupBy?: string;
        expandedGroups?: string[];
    };

    const defaultColumns = [
        { key: 'category', header: 'Category' },
        { key: 'name', header: 'Name' },
        { key: 'value', header: 'Value' }
    ];

    const defaultData = [
        { id: 1, category: 'Electronics', name: 'Laptop', value: '$1200' },
        { id: 2, category: 'Electronics', name: 'Phone', value: '$800' },
        { id: 3, category: 'Clothing', name: 'Shirt', value: '$30' },
        { id: 4, category: 'Clothing', name: 'Jeans', value: '$70' },
        { id: 5, category: 'Books', name: 'Novel', value: '$15' },
        { id: 6, category: 'Books', name: 'Magazine', value: '$5' }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'groupBy',
            type: 'text',
            defaultValue: 'category'
        }
    ];
</script>

<Story
    id="molecules-table-with-grouping"
    title="TableWithGrouping"
    component={TableWithGrouping}
    category="Molecules"
    description="Table with grouping functionality"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TableWithGrouping
                columns={props.columns || defaultColumns}
                data={props.data || defaultData}
                groupBy={props.groupBy || 'category'}
                expandedGroups={props.expandedGroups}
            />
        </div>
    {/snippet}
</Story>