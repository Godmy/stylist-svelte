<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';
  import DashboardLayout from './index.svelte';
  import type { Props } from './index.svelte';

  let {
    id = '',
    title = '',
    description = '',
    controls = [
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
    ]
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    controls?: ControlConfig[]
  }>();

  type DashboardLayoutStoryProps = {
    collapsibleSidebar: boolean;
    showSidebarToggle: boolean;
    variant: 'default' | 'compact' | 'spacious';
  };
</script>

<div class="sb-organisms-dashboard-layout">
  <Story
    {id}
    {title}
    component={DashboardLayout}
    category="Organisms"
    description="A layout component for dashboards with header and sidebar."
    tags={['layout', 'dashboard', 'structure']}
    controls={controls}
  >
    {#snippet children(props: DashboardLayoutStoryProps)}
      <div class="p-8 bg-[--color-background-secondary] rounded-lg">
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
</div>


