<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import TableWithStripes from './TableWithStripes.svelte';

    type Props = {
        columns?: Array<{
            key: string;
            title: string;
            sortable?: boolean;
        }>;
        data?: Array<any>;
        striped?: boolean;
        hoverable?: boolean;
        stripeColor?: string;
        baseColor?: string;
        onRowClick?: (item: any) => void;
    };

    const defaultColumns = [
        { key: 'id', title: 'ID' },
        { key: 'name', title: 'Name' },
        { key: 'email', title: 'Email' },
        { key: 'role', title: 'Role' }
    ];

    const defaultData = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Viewer' },
        { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'Editor' },
        { id: 5, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Admin' }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'striped',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'hoverable',
            type: 'boolean',
            defaultValue: false
        }
    ];

    function handleRowClick(item: any) {
        console.log('Row clicked:', item);
    }
</script>

<Story
    id="molecules-table-with-stripes"
    title="TableWithStripes"
    component={TableWithStripes}
    category="Molecules"
    description="Table with striped rows"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TableWithStripes
                columns={props.columns || defaultColumns}
                data={props.data || defaultData}
                striped={props.striped}
                hoverable={props.hoverable}
                onRowClick={handleRowClick}
            />
        </div>
    {/snippet}
</Story>