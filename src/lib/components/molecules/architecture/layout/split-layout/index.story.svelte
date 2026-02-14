<script lang="ts">
    import { Story } from '$stylist/design-system/playground';
    import type { ControlConfig } from '$stylist/design-system/tokens/controls';
    import SplitLayout from './index.svelte';
    import { createRawSnippet } from 'svelte';

    type Props = {
        direction?: 'horizontal' | 'vertical';
    };

    const primaryContent = createRawSnippet(() => ({
        render: () =>
            '<div class="p-4 bg-gray-100 rounded-lg h-full flex items-center justify-center">Left Panel</div>'
    }));

    const secondaryContent = createRawSnippet(() => ({
        render: () =>
            '<div class="p-4 bg-blue-100 rounded-lg h-full flex items-center justify-center">Right Panel</div>'
    }));

    const controls: ControlConfig[] = [
        {
            name: 'direction',
            type: 'select',
            options: ['horizontal', 'vertical'],
            defaultValue: 'horizontal'
        }
    ];
</script>

<Story
    id="molecules-split-layout"
    title="SplitLayout"
    component={SplitLayout}
    category="Molecules"
    description="Split layout component for organizing content in two sections"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <SplitLayout
                direction={props.direction}
                primary={primaryContent}
                secondary={secondaryContent}
            />
        </div>
    {/snippet}
</Story>


