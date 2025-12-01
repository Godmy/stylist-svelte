<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SortableList from './SortableList.svelte';

    type ListItem = {
        id: string;
        title: string;
        description?: string;
        content?: string;
        status?: string;
        data?: any;
    };

    type Props = {
        items?: ListItem[];
        disabled?: boolean;
    };

    const defaultItems: ListItem[] = [
        { id: '1', title: 'First Item' },
        { id: '2', title: 'Second Item' },
        { id: '3', title: 'Third Item' },
        { id: '4', title: 'Fourth Item' },
    ];

    const controls: ControlConfig[] = [
        {
            name: 'disabled',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-sortable-list"
    title="SortableList"
    component={SortableList}
    category="Molecules"
    description="Sortable list component for organizing items"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SortableList
                items={props.items || defaultItems}
                disabled={props.disabled}
            />
        </div>
    {/snippet}
</Story>