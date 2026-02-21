<script lang="ts">
  import Story from '$stylist/design-system/playground/Story.svelte';
  import DashboardLayout from './index.svelte';
  import { CONTROL_TYPES } from '$stylist/design-system/tokens/interaction/controls';

  const controls = [
    {
      name: 'collapsibleSidebar',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'showSidebarToggle',
      type: CONTROL_TYPES.BOOLEAN,
      defaultValue: true
    },
    {
      name: 'variant',
      type: CONTROL_TYPES.SELECT,
      options: ['default', 'compact', 'spacious'],
      defaultValue: 'default'
    }
  ];
</script>

<Story
  {controls}
  title="DashboardLayout"
  category="Organisms/Dashboards"
  description="A layout component for dashboards with header and sidebar."
  tags={['layout', 'dashboard', 'structure']}
>
  {#snippet children(values: any)}
    <div class="p-8 bg-[--color-background-secondary] rounded-lg">
      <DashboardLayout
        collapsibleSidebar={values.collapsibleSidebar}
        showSidebarToggle={values.showSidebarToggle}
        variant={values.variant}
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


