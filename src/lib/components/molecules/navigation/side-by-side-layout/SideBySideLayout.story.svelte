<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import SideBySideLayout from './SideBySideLayout.svelte';
    import { createRawSnippet } from 'svelte';
    import type { Snippet } from 'svelte';

    type SideBySideSection = {
        id: string;
        content: Snippet;
        size?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | 'full';
        className?: string;
    };

    type Props = {
        sections?: SideBySideSection[];
        gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
        alignItems?: 'start' | 'center' | 'end' | 'stretch';
        justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
        responsive?: boolean;
    };



    const controls: ControlConfig[] = [
        {
            name: 'gap',
            type: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl'],
            defaultValue: 'md'
        },
        {
            name: 'alignItems',
            type: 'select',
            options: ['center', 'start', 'end', 'stretch'],
            defaultValue: 'stretch'
        },
        {
            name: 'justifyContent',
            type: 'select',
            options: ['start', 'center', 'end', 'between', 'around', 'evenly'],
            defaultValue: 'start'
        },
        {
            name: 'responsive',
            type: 'boolean',
            defaultValue: true
        }
    ];

    // Helper to convert raw markup into a typed snippet for Svelte 5
    const createContentSnippet = (htmlString: string): Snippet =>
        createRawSnippet(() => ({
            render: () => htmlString
        }));
</script>

<Story
    id="molecules-side-by-side-layout"
    title="SideBySideLayout"
    component={SideBySideLayout}
    category="Molecules"
    description="Layout component that shows content side by side"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SideBySideLayout
                sections={[
                    {
                        id: 'left',
                        size: '1/2',
                        content: createContentSnippet(`<div class="p-4">Left Panel Content</div>`)
                    },
                    {
                        id: 'right',
                        size: '1/2',
                        content: createContentSnippet(`<div class="p-4">Right Panel Content</div>`)
                    }
                ]}
                gap={props.gap}
                alignItems={props.alignItems}
                justifyContent={props.justifyContent}
                responsive={props.responsive}
            />
        </div>
    {/snippet}
</Story>
