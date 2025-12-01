<script lang="ts">
    import { Story } from '$lib/playground';
    import type { ControlConfig } from '$lib/playground';
    import TabGroup from './TabGroup.svelte';

    type Props = {
        tabs?: Array<{
            id: string;
            title: string;
            content: any; // Snippet type
        }>;
        activeTab?: string;
        onChange?: (tabId: string) => void;
    };

    const complexTabs = [
        { id: 'dashboard', title: 'Dashboard', content: '<div class="p-4">Dashboard content with charts and metrics</div>' },
        { id: 'analytics', title: 'Analytics', content: '<div class="p-4">Detailed analytics and reports</div>' },
        { id: 'settings', title: 'Settings', content: '<div class="p-4">Application settings and preferences</div>' },
        { id: 'reports', title: 'Reports', content: '<div class="p-4">Generated reports and data summaries</div>' },
        { id: 'users', title: 'Users', content: '<div class="p-4">User management and permissions</div>' }
    ];

    const controls: ControlConfig[] = [
        {
            name: 'activeTab',
            type: 'text',
            defaultValue: 'dashboard'
        }
    ];

    function handleTabChange(tabId: string) {
        console.log(`Tab changed to: ${tabId}`);
    }
</script>

<Story
    id="molecules-tab-group-advanced"
    title="TabGroupAdvanced"
    component={TabGroup}
    category="Molecules"
    description="Advanced TabGroup with more tabs"
    controls={controls}
>
    {#snippet children(props: Props)}
        <div class="p-4">
            <TabGroup
                tabs={props.tabs || complexTabs}
                activeTab={props.activeTab || 'dashboard'}
                onChange={handleTabChange}
            />
        </div>
    {/snippet}
</Story>