<script lang="ts">
  import { Story } from '$lib/playground';
  import type { ControlConfig } from '$lib/playground';
  import DashboardLayout from './DashboardLayout.svelte';

  type DashboardLayoutStoryProps = {
    collapsibleSidebar: boolean;
    showSidebarToggle: boolean;
    variant: 'default' | 'compact' | 'spacious';
  };

  const controls: ControlConfig[] = [
    {
      name: 'collapsibleSidebar',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'showSidebarToggle',
      type: 'boolean',
      defaultValue: true
    },
    {
      name: 'variant',
      type: 'select',
      options: ['default', 'compact', 'spacious'],
      defaultValue: 'default'
    }
  ];
</script>

<Story
  id="molecules-dashboard-layout"
  title="DashboardLayout"
  component={DashboardLayout}
  category="Molecules"
  description="A layout component for dashboards with header and sidebar."
  tags={['layout', 'dashboard', 'structure']}
  controls={controls}
>
  {#snippet children(props: DashboardLayoutStoryProps)}
    <div class="p-8 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-bold mb-4">DashboardLayout Story</h2>
      <DashboardLayout
        collapsibleSidebar={props.collapsibleSidebar}
        showSidebarToggle={props.showSidebarToggle}
        variant={props.variant}
      >
        {#snippet header()}
          <div class="w-full">
            <h1 class="text-xl font-semibold">Dashboard Header</h1>
          </div>
        {/snippet}
        {#snippet sidebar()}
          <div class="space-y-2 p-2">
            <div>Navigation Item 1</div>
            <div>Navigation Item 2</div>
            <div>Navigation Item 3</div>
          </div>
        {/snippet}
        {#snippet children()}
          <div class="p-4">
            <h2 class="text-lg font-medium mb-2">Main Content</h2>
            <p>This is the main content area of the dashboard.</p>
          </div>
        {/snippet}
      </DashboardLayout>
    </div>
  {/snippet}
</Story>