<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import Timeline from './Timeline.svelte';

    import type { Snippet } from 'svelte';

    type Props = {
        items?: Array<{
            id: string;
            date: string;
            title: string;
            content?: Snippet;
            status?: 'completed' | 'current' | 'pending';
        }>;
        orientation?: 'vertical' | 'horizontal';
    };

    const defaultItems = [
        { id: '1', date: '2023-01-15', title: 'Project Started', content: undefined },
        { id: '2', date: '2023-02-01', title: 'Design Phase', content: undefined },
        { id: '3', date: '2023-03-10', title: 'Development', content: undefined },
        { id: '4', date: '2023-04-20', title: 'Testing', content: undefined },
        { id: '5', date: '2023-05-05', title: 'Launch', content: undefined }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'orientation',
            type: 'select',
            options: ['vertical', 'horizontal'],
            defaultValue: 'vertical'
        }
    ];
</script>

<Story
    id="molecules-timeline"
    title="Timeline"
    component={Timeline}
    category="Molecules"
    description="Timeline component to show events chronologically"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <Timeline
                items={props.items || defaultItems}
                orientation={props.orientation}
            />
        </div>
    {/snippet}
</Story>