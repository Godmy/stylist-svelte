<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Menu, X } from 'lucide-svelte';
  import { Button } from '$stylist/components/atoms';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  export type Props = RestProps & {
    header?: Snippet;
    sidebar?: Snippet;
    sidebarOpen?: boolean;
    footer?: Snippet;
    children: Snippet;
    class?: string;
    headerClass?: string;
    sidebarClass?: string;
    contentClass?: string;
    footerClass?: string;
    collapsibleSidebar?: boolean;
    onSidebarToggle?: (open: boolean) => void;
    mobileBreakpoint?: string;
    showSidebarToggle?: boolean;
    variant?: 'default' | 'compact' | 'spacious';
  };

  let {
    header,
    sidebar,
    sidebarOpen = true,
    footer,
    children,
    class: hostClass = '',
    headerClass = '',
    sidebarClass = '',
    contentClass = '',
    footerClass = '',
    collapsibleSidebar = true,
    onSidebarToggle,
    mobileBreakpoint = 'lg',
    showSidebarToggle = true,
    variant = 'default',
    ...restProps
  }: Props = $props();

  let isSidebarOpen = $state(sidebarOpen);

  $effect(() => {
    isSidebarOpen = sidebarOpen;
  });

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    onSidebarToggle?.(isSidebarOpen);
  }

  let variantClasses = $derived({
    'default': 'p-4',
    'compact': 'p-2',
    'spacious': 'p-6'
  }[variant]);

  let sidebarWidthClass = $derived(isSidebarOpen ? 'w-64' : 'w-16');
</script>

<div class={`c-dashboard-layout flex h-screen bg-[--color-background-secondary] ${hostClass}`} {...restProps}>
  <!-- Sidebar -->
  {#if sidebar}
    <aside
      class={`hidden md:block ${sidebarWidthClass} bg-[--color-background-primary] shadow-md flex flex-col transition-all duration-300 ease-in-out ${sidebarClass}`}
    >
      {#if collapsibleSidebar && showSidebarToggle}
        <div class="p-4 flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            onclick={toggleSidebar}
            aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {#if isSidebarOpen}
              <X class="h-4 w-4" />
            {:else}
              <Menu class="h-4 w-4" />
            {/if}
          </Button>
        </div>
      {/if}
      <div class="flex-1 overflow-y-auto py-4">
        {@render sidebar()}
      </div>
    </aside>
  {/if}

  <!-- Mobile sidebar toggle button -->
  {#if showSidebarToggle && sidebar}
    <div class="md:hidden fixed top-4 left-4 z-50">
      <Button
        variant="secondary"
        onclick={toggleSidebar}
        aria-label={isSidebarOpen ? 'Close menu' : 'Open menu'}
      >
        <Menu class="h-5 w-5" />
      </Button>
    </div>
  {/if}

  <!-- Mobile sidebar overlay -->
  {#if sidebar && isSidebarOpen}
    <div
      class="fixed inset-0 z-40 bg-[--color-overlay-primary] bg-opacity-50 md:hidden"
      onclick={toggleSidebar}
      role="button"
      tabindex={0}
      onkeydown={(e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSidebar();
        }
      }}
    ></div>
  {/if}

  <!-- Mobile sidebar -->
  {#if sidebar && isSidebarOpen}
    <aside
      class="fixed inset-y-0 left-0 z-50 w-64 bg-[--color-background-primary] shadow-lg md:hidden"
    >
      <div class="p-4 flex justify-end">
        <Button
          variant="ghost"
          size="sm"
          onclick={toggleSidebar}
          aria-label="Close menu"
        >
          <X class="h-5 w-5" />
        </Button>
      </div>
      <div class="flex-1 overflow-y-auto py-4">
        {@render sidebar()}
      </div>
    </aside>
  {/if}

  <!-- Main content -->
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- Header -->
    {#if header}
      <header class={`bg-[--color-background-primary] shadow-sm z-10 ${headerClass}`}>
        <div class="px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {@render header()}
        </div>
      </header>
    {/if}

    <!-- Content area -->
    <main class={`flex-1 overflow-y-auto ${contentClass} ${variantClasses}`}>
      {@render children()}
    </main>

    <!-- Footer -->
    {#if footer}
      <footer class={`bg-[--color-background-primary] border-t ${footerClass}`}>
        <div class="px-4 py-3 sm:px-6 lg:px-8">
          {@render footer()}
        </div>
      </footer>
    {/if}
  </div>
</div>

