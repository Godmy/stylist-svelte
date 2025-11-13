<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { Menu, X } from 'lucide-svelte';

  type NavItem = {
    id: string;
    label: string;
    href?: string;
    icon?: Snippet;
    onClick?: () => void;
    disabled?: boolean;
    active?: boolean;
    badge?: string | number;
  };

  type Props = {
    items: NavItem[];
    title?: string;
    logo?: Snippet;
    footer?: Snippet;
    collapsed?: boolean;
    collapsible?: boolean;
    mobileBreakpoint?: number;
    width?: string;
    mobileWidth?: string;
    class?: string;
    navClass?: string;
    itemClass?: string;
    activeItemClass?: string;
    disabledItemClass?: string;
    titleClass?: string;
    logoClass?: string;
    footerClass?: string;
  } & HTMLAttributes<HTMLElement>;

  let {
    items = [],
    title = 'Navigation',
    logo,
    footer,
    collapsed = false,
    collapsible = true,
    mobileBreakpoint = 768,
    width = '280px',
    mobileWidth = '280px',
    class: className = '',
    navClass = '',
    itemClass = '',
    activeItemClass = 'bg-blue-50 text-blue-600 border-r-2 border-blue-600',
    disabledItemClass = 'opacity-50 cursor-not-allowed',
    titleClass = '',
    logoClass = '',
    footerClass = '',
    ...restProps
  }: Props = $props();

  let isMobile = $state(window.innerWidth < mobileBreakpoint);
  let isSidebarOpen = $state(!collapsed);

  // Handle window resize to detect mobile view
  $effect(() => {
    const handleResize = () => {
      isMobile = window.innerWidth < mobileBreakpoint;
      if (isMobile) {
        isSidebarOpen = false;
      } else {
        isSidebarOpen = !collapsed;
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
  }

  function handleClick(item: NavItem) {
    if (item.disabled) return;
    
    if (item.onClick) {
      item.onClick();
    } else if (item.href) {
      window.location.href = item.href;
    }
  }
</script>

<div class={`flex ${className}`} {...restProps}>
  <!-- Mobile menu button -->
  {#if collapsible && isMobile}
    <button
      type="button"
      class="absolute top-4 left-4 z-50 p-2 rounded-md text-gray-700 lg:hidden"
      on:click={toggleSidebar}
    >
      {#if isSidebarOpen}
        <X class="h-6 w-6" />
      {:else}
        <Menu class="h-6 w-6" />
      {/if}
    </button>
  {/if}

  <!-- Sidebar overlay for mobile -->
  {#if isMobile && isSidebarOpen}
    <div
      class="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
      on:click={toggleSidebar}
    ></div>
  {/if}

  <!-- Sidebar -->
  <aside
    class={`fixed lg:sticky top-0 left-0 h-screen z-40 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
      isMobile
        ? isSidebarOpen 
          ? 'translate-x-0 w-' + mobileWidth.replace('px', '') 
          : '-translate-x-full w-' + mobileWidth.replace('px', '')
        : isSidebarOpen 
          ? 'translate-x-0 w-' + width.replace('px', '') 
          : `translate-x-0 -ml-${width.replace('px', '')} w-${width.replace('px', '')}`
    } lg:translate-x-0 lg:w-${width.replace('px', '')}`}
  >
    <div class="h-full flex flex-col border-r border-gray-200">
      <!-- Header with logo and title -->
      <div class={`flex items-center p-4 border-b border-gray-200 ${logoClass}`}>
        {#if logo}
          <div class="mr-3">
            {@render logo()}
          </div>
        {/if}
        {#if title && isSidebarOpen}
          <h1 class={`text-xl font-semibold text-gray-900 ${titleClass}`}>{title}</h1>
        {/if}
      </div>

      <!-- Navigation items -->
      <nav class={`flex-1 overflow-y-auto py-4 ${navClass}`}>
        <ul class="space-y-1 px-2">
          {#each items as item (item.id)}
            <li>
              <a
                href={item.href || '#'}
                class={`flex items-center p-3 rounded-lg transition-colors ${
                  item.active ? activeItemClass : 'text-gray-700 hover:bg-gray-100'
                } ${item.disabled ? disabledItemClass : 'cursor-pointer'} ${itemClass}`}
                on:click|preventDefault={() => handleClick(item)}
                aria-current={item.active ? 'page' : undefined}
              >
                {#if item.icon && isSidebarOpen}
                  <span class="mr-3">
                    {@render item.icon()}
                  </span>
                {/if}
                {#if isSidebarOpen}
                  <span class="flex-1 text-left">{item.label}</span>
                  {#if item.badge}
                    <span class="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  {/if}
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <!-- Footer -->
      {#if footer}
        <div class={`mt-auto p-4 border-t border-gray-200 ${footerClass}`}>
          {@render footer()}
        </div>
      {/if}
    </div>
  </aside>

  <!-- Content area (placeholder) -->
  <div class="flex-1 lg:ml-0 transition-all duration-300">
    <!-- Actual content would go here -->
    {#if isSidebarOpen && !isMobile}
      <!-- Space occupied when sidebar is open on desktop -->
    {/if}
  </div>
</div>