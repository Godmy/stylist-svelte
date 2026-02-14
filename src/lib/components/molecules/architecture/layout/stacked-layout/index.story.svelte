<script lang="ts">
    import { Story } from '$stylist/design-system/playground';
    import type { ControlConfig } from '$stylist/design-system/tokens/controls';
    import StackedLayout from './index.svelte';

    type Props = {
        direction?: 'vertical' | 'horizontal';
        spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
        alignItems?: 'start' | 'center' | 'end' | 'stretch';
    };

    const controls: ControlConfig[] = [
        {
            name: 'direction',
            type: 'select',
            options: ['vertical', 'horizontal'],
            defaultValue: 'vertical'
        },
        {
            name: 'spacing',
            type: 'select',
            options: ['none', 'sm', 'md', 'lg', 'xl'],
            defaultValue: 'md'
        },
        {
            name: 'alignItems',
            type: 'select',
            options: ['start', 'center', 'end', 'stretch'],
            defaultValue: 'stretch'
        }
    ];
</script>

<Story
    id="molecules-stacked-layout"
    title="StackedLayout"
    component={StackedLayout}
    category="Molecules"
    description="Stacked layout component for organizing content"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <StackedLayout
                direction={props.direction}
                gap={props.spacing as 'none' | 'sm' | 'md' | 'lg' | 'xl'}
                alignItems={props.alignItems}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
            </StackedLayout>
        </div>
    {/snippet}
</Story>

