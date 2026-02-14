<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { ComponentType, Snippet } from 'svelte';
  import { Menu, X } from 'lucide-svelte';
  import { SidebarStyleManager } from '$stylist/design-system/styles';
  import type { NavItem, SidebarProps } from '$stylist/design-system/props';

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
    variant = 'default',
    position = 'left',
    disabled = false,
    class: className = '',
    navClass = '',
    itemClass = '',
    activeItemClass = 'bg-[--color-surface-selected] text-[--color-text-accent] border-r-2 border-[--color-border-accent]',
    disabledItemClass = 'opacity-50 cursor-not-allowed',
    titleClass = '',
    logoClass = '',
    footerClass = '',
    ...restProps
  }: SidebarProps = $props();

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

<div class={SidebarStyleManager.getHostClasses(className)} {...restProps}>
  <!-- Mobile menu button -->
  {#if collapsible && isMobile}
    <button
      type="button"
      class={SidebarStyleManager.getMobileButtonClasses()}
      onclick={toggleSidebar}
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
      class={SidebarStyleManager.getOverlayClasses()}
      onclick={toggleSidebar}
      onkeydown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleSidebar();
        }
      }}
      role="button"
      tabindex="0"
      aria-label="Close sidebar"
    ></div>
  {/if}

  <!-- Sidebar -->
  <aside
    class={SidebarStyleManager.getSidebarClasses(isMobile, isSidebarOpen, width, mobileWidth)}
  >
    <div class={SidebarStyleManager.getSidebarContainerClasses()}>
      <!-- Header with logo and title -->
      <div class={SidebarStyleManager.getHeaderClasses(logoClass)}>
        {#if logo}
          <div class={SidebarStyleManager.getLogoWrapperClasses()}>
            {@render logo()}
          </div>
        {/if}
        {#if title && isSidebarOpen}
          <h1 class={SidebarStyleManager.getTitleClasses(titleClass)}>{title}</h1>
        {/if}
      </div>

      <!-- Navigation items -->
      <nav class={SidebarStyleManager.getNavClasses(navClass)}>
        <ul class={SidebarStyleManager.getNavListClasses()}>
          {#each items as item (item.id)}
            <li>
              <a
                href={item.href || '#'}
                class={SidebarStyleManager.getNavItemClasses(item.active ?? false, item.disabled ?? false, itemClass, activeItemClass, disabledItemClass)}
                onclick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
                aria-current={item.active ? 'page' : undefined}
              >
                {#if item.icon && isSidebarOpen}
                  <span class={SidebarStyleManager.getNavItemIconWrapperClasses()}>
                    <item.icon class="h-5 w-5" />
                  </span>
                {/if}
                {#if isSidebarOpen}
                  <span class={SidebarStyleManager.getNavItemLabelClasses()}>{item.label}</span>
                  {#if item.badge}
                    <span class={SidebarStyleManager.getNavItemBadgeClasses()}>
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
        <div class={SidebarStyleManager.getFooterClasses(footerClass)}>
          {@render footer()}
        </div>
      {/if}
    </div>
  </aside>

  <!-- Content area (placeholder) -->
  <div class={SidebarStyleManager.getContentAreaClasses(isSidebarOpen, isMobile)}>
    <!-- Actual content would go here -->
  </div>
</div>



