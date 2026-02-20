<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import TabGroup from './index.svelte';
  import type { ControlType } from '$stylist/design-system/tokens/controls';

  const complexTabs = [
    { id: 'dashboard', title: 'Dashboard', content: '<div class="p-4">Dashboard content with charts and metrics</div>' },
    { id: 'analytics', title: 'Analytics', content: '<div class="p-4">Detailed analytics and reports</div>' },
    { id: 'settings', title: 'Settings', content: '<div class="p-4">Application settings and preferences</div>' },
    { id: 'reports', title: 'Reports', content: '<div class="p-4">Generated reports and data summaries</div>' },
    { id: 'users', title: 'Users', content: '<div class="p-4">User management and permissions</div>' }
  ];

  const controls = [
    {
      name: 'activeTab',
      type: 'text' as ControlType,
      defaultValue: 'dashboard',
      description: 'ID of the active tab'
    }
  ];

  function handleTabChange(tabId: string) {
    console.log(`Tab changed to: ${tabId}`);
  }
</script>

<Story
  {controls}
  title="TabGroup Component"
  description="Advanced TabGroup with multiple tabs"
 
>
  {#snippet children(controlValues: any)}
  <div class="p-4">
    <TabGroup
      tabs={complexTabs as any}
      activeTab={controlValues.activeTab}
      onValueChange={handleTabChange}
    />
  </div>

  {/snippet}
</Story>
