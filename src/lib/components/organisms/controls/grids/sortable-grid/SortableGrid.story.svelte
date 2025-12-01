<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import type { Snippet } from 'svelte';
    import SortableGrid from './SortableGrid.svelte';

    type GridItem = {
        id: string;
        title: string;
        content?: string;
        render?: Snippet;
        data?: any;
    };

    type Props = {
        items?: GridItem[];
        cols?: number;
        disabled?: boolean;
    };

    const defaultItems: GridItem[] = [
        { id: '1', title: 'Item 1', content: 'Content for Item 1' },
        { id: '2', title: 'Item 2', content: 'Content for Item 2' },
        { id: '3', title: 'Item 3', content: 'Content for Item 3' },
        { id: '4', title: 'Item 4', content: 'Content for Item 4' },
        { id: '5', title: 'Item 5', content: 'Content for Item 5' },
        { id: '6', title: 'Item 6', content: 'Content for Item 6' },
    ];

    const controls: ControlConfig[] = [
        {
            name: 'cols',
            type: 'number',
            defaultValue: 3
        },
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-sortable-grid"
    title="SortableGrid"
    component={SortableGrid}
    category="Molecules"
    description="Sortable grid component for organizing items"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SortableGrid
                items={props.items || defaultItems}
                cols={props.cols}
                disabled={props.disabled}
            />
        </div>
    {/snippet}
</Story>