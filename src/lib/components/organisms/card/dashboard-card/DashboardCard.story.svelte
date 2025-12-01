<script lang="ts">
  import DashboardCard from './DashboardCard.svelte';
  import type { Snippet } from 'svelte';

  let title: string = $state('Dashboard Card Title');
  let subtitle: string = $state('Dashboard Card Subtitle');
  let collapsible: boolean = $state(false);
  let initiallyCollapsed: boolean = $state(false);
  let variant: 'default' | 'compact' | 'minimal' = $state('default');
</script>

<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">DashboardCard Component</h1>

  {#snippet contentDefault()}
    <div class="p-4">
      <p>Default card content goes here.</p>
      <p>This is where you would put the main content of the dashboard card.</p>
    </div>
  {/snippet}

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">Default Card</h2>
    <div class="border p-4 rounded">
      <DashboardCard
        {title}
        {subtitle}
        {collapsible}
        {initiallyCollapsed}
        {variant}
        content={contentDefault}
      />
    </div>
  </div>

  {#snippet contentCompact()}
    <div class="p-4">
      <p>Compact card content.</p>
    </div>
  {/snippet}

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">Compact Card</h2>
    <div class="border p-4 rounded">
      <DashboardCard
        title="Dashboard Card Title"
        subtitle="Dashboard Card Subtitle"
        collapsible={false}
        initiallyCollapsed={false}
        variant="compact"
        content={contentCompact}
      />
    </div>
  </div>

  {#snippet contentCollapsible()}
    <div class="p-4">
      <p>Collapsible card content.</p>
      <p>This content can be toggled by the collapsible header.</p>
    </div>
  {/snippet}

  <div class="mb-6">
    <h2 class="text-md font-semibold mb-2">Collapsible Card</h2>
    <div class="border p-4 rounded">
      <DashboardCard
        title="Dashboard Card Title"
        subtitle="Dashboard Card Subtitle"
        collapsible={true}
        initiallyCollapsed={false}
        variant="default"
        content={contentCollapsible}
      />
    </div>
  </div>
</div>