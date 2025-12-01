<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import ScreenReaderTester from './ScreenReaderTester.svelte';

    type TestItem = {
        id: string;
        name: string;
        description: string;
        text: string;
    };

    type Props = {
        items?: TestItem[];
        title?: string;
        description?: string;
    };

    const defaultItems = [
        {
            id: '1',
            name: 'Test Item 1',
            description: 'A test item for screen reader accessibility.',
            text: 'This content is accessible to screen readers'
        },
        {
            id: '2',
            name: 'Test Item 2',
            description: 'Another test item for accessibility testing.',
            text: 'Another test item for accessibility testing'
        }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'title',
            type: 'text',
            defaultValue: 'Screen Reader Test'
        },
        {
            name: 'description',
            type: 'text',
            defaultValue: 'Test content for screen reader accessibility'
        },
        {
            name: 'showVisibleContent',
            type: 'boolean',
            defaultValue: false
        }
    ];
</script>

<Story
    id="molecules-screen-reader-tester"
    title="ScreenReaderTester"
    component={ScreenReaderTester}
    category="Molecules"
    description="Component for testing screen reader accessibility"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <ScreenReaderTester
                items={props.items || defaultItems}
                title={props.title}
                description={props.description}
            />
        </div>
    {/snippet}
</Story>