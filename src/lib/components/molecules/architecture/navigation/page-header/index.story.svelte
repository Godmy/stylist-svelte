<script lang="ts">
  import PageHeader from './index.svelte';

  // Define example data for each example
  const pageHeaderData = {
    title: "SAMO Methodology",
    description: "Automated architecture verification for component libraries",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "SAMO" }
    ],
    actions: undefined
  };

  const pageHeaderWithActionsData = {
    title: "Component Library",
    description: "Comprehensive collection of reusable UI components",
    breadcrumbs: [
      { label: "Dashboard", href: "/" },
      { label: "Libraries", href: "/libraries" },
      { label: "Component Library" }
    ],
    actions: undefined
  };

  const pageHeaderWithoutBreadcrumbsData = {
    title: "Project Settings",
    description: "Configure your project preferences and settings",
    actions: undefined
  };

  const pageHeaderWithoutDescriptionData = {
    title: "User Dashboard",
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Dashboard" }
    ],
    actions: undefined
  };
</script>

<!-- Example 1: Default PageHeader -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Default PageHeader</h3>
  <PageHeader {...pageHeaderData} />
</div>

<!-- Example 2: With Actions - skipping actions for now due to complexity -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">With Actions</h3>
  <PageHeader {...pageHeaderWithActionsData} />
</div>

<!-- Example 3: Without Breadcrumbs -->
<div class="p-4 border-b">
  <h3 class="text-lg font-semibold mb-2">Without Breadcrumbs</h3>
  <PageHeader {...pageHeaderWithoutBreadcrumbsData} />
</div>

<!-- Example 4: Without Description -->
<div class="p-4">
  <h3 class="text-lg font-semibold mb-2">Without Description</h3>
  <PageHeader {...pageHeaderWithoutDescriptionData} />
</div>