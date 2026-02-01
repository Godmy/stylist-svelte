<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import StatusIndicatorWithLabel from './StatusIndicatorWithLabel.svelte';

    type Status = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'custom';

    type Props = {
        status: Status;
        label: string;
        customColor?: string;
        size?: 'sm' | 'md' | 'lg';
        showLabel?: boolean;
    };

    const controls: ControlConfig[] = [
        {
            name: 'status',
            type: 'select',
            options: ['success', 'warning', 'error', 'info', 'neutral', 'custom'],
            defaultValue: 'neutral'
        },
        {
            name: 'label',
            type: 'text',
            defaultValue: 'Active'
        },
        {
            name: 'size',
            type: 'select',
            options: ['sm', 'md', 'lg'],
            defaultValue: 'md'
        }
    ];
</script>

<Story
    id="molecules-status-indicator-with-label"
    title="StatusIndicatorWithLabel"
    component={StatusIndicatorWithLabel}
    category="Molecules"
    description="Status indicator with label component"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <StatusIndicatorWithLabel
                status={props.status}
                label={props.label}
                size={props.size}
            />
        </div>
    {/snippet}
</Story>
