<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import StatusDashboard from './StatusDashboard.svelte';
    import type { Snippet } from 'svelte';

    type StatusItem = {
        id: string;
        title: string;
        description?: string;
        status: 'success' | 'warning' | 'error' | 'pending' | 'info';
        value?: string | number;
        footer?: Snippet;
        actions?: Snippet;
    };

    type Props = {
        title?: string;
        subtitle?: string;
        items: StatusItem[];
        layout?: 'horizontal' | 'vertical';
        size?: 'sm' | 'md' | 'lg';
    };

    const defaultItems: StatusItem[] = [
        {
            id: 'api-service',
            title: 'API Service',
            description: 'Core API functionality',
            status: 'success',
            value: 'Operational'
        },
        {
            id: 'database',
            title: 'Database',
            description: 'Data storage and retrieval',
            status: 'warning',
            value: 'Degraded Performance'
        },
        {
            id: 'frontend',
            title: 'Frontend',
            description: 'User interface availability',
            status: 'error',
            value: 'Outage'
        },
        {
            id: 'payments',
            title: 'Payment Gateway',
            description: 'Processing payments',
            status: 'pending',
            value: 'Investigating'
        }
    ];

    const controls: ControlConfig[] = [];
</script>

<Story
    id="molecules-status-dashboard"
    title="StatusDashboard"
    component={StatusDashboard}
    category="Molecules"
    description="Status dashboard component for monitoring system status"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <StatusDashboard
                items={defaultItems}
            />
        </div>
    {/snippet}
</Story>