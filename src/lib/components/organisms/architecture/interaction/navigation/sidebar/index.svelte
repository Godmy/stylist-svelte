<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { ComponentType, Snippet } from 'svelte';
  import { IconMenu, IconX } from '$stylist/components/atoms';
  import { SidebarStyleManager } from '$stylist/design-system/styles';
  import type { SidebarProps, NavItem } from '$stylist/design-system/props';

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
  }: SidebarProps & HTMLAttributes<HTMLDivElement> = $props();

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

  // Generate CSS classes using the style manager
  const containerClass = $derived(SidebarStyleManager.getHostClasses(className));
  const mobileButtonClass = $derived(SidebarStyleManager.getMobileButtonClasses());
  const overlayClass = $derived(SidebarStyleManager.getOverlayClasses());
  const sidebarClass = $derived(SidebarStyleManager.getSidebarClasses(isMobile, isSidebarOpen, width, mobileWidth));
  const sidebarContainerClass = $derived(SidebarStyleManager.getSidebarContainerClasses());
  const headerClass = $derived(SidebarStyleManager.getHeaderClasses(logoClass));
  const logoWrapperClass = $derived(SidebarStyleManager.getLogoWrapperClasses());
  const titleClassComputed = $derived(SidebarStyleManager.getTitleClasses(titleClass));
  const navClassComputed = $derived(SidebarStyleManager.getNavClasses(navClass));
  const navListClass = $derived(SidebarStyleManager.getNavListClasses());
  const navItemClass = $derived(SidebarStyleManager.getNavItemClasses(false, false, itemClass, activeItemClass, disabledItemClass));
  const navItemActiveClass = $derived(SidebarStyleManager.getNavItemClasses(true, false, itemClass, activeItemClass, disabledItemClass));
  const navItemDisabledClass = $derived(SidebarStyleManager.getNavItemClasses(false, true, itemClass, activeItemClass, disabledItemClass));
  const navItemIconWrapperClass = $derived(SidebarStyleManager.getNavItemIconWrapperClasses());
  const navItemLabelClass = $derived(SidebarStyleManager.getNavItemLabelClasses());
  const navItemBadgeClass = $derived(SidebarStyleManager.getNavItemBadgeClasses());
  const footerClassComputed = $derived(SidebarStyleManager.getFooterClasses(footerClass));
  const contentAreaClass = $derived(SidebarStyleManager.getContentAreaClasses(isSidebarOpen, isMobile));
</script>

<div class={containerClass} {...restProps}>
  <!-- Mobile menu button -->
  {#if collapsible && isMobile}
    <button
      type="button"
      class={mobileButtonClass}
      onclick={toggleSidebar}
      aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
    >
      {#if isSidebarOpen}
        <IconX size="lg" />
      {:else}
        <IconMenu size="lg" />
      {/if}
    </button>
  {/if}

  <!-- Sidebar overlay for mobile -->
  {#if isMobile && isSidebarOpen}
    <div
      class={overlayClass}
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
    class={sidebarClass}
    aria-label="Sidebar navigation"
  >
    <div class={sidebarContainerClass}>
      <!-- Header with logo and title -->
      <div class={headerClass}>
        {#if logo}
          <div class={logoWrapperClass}>
            {@render logo()}
          </div>
        {/if}
        {#if title && isSidebarOpen}
          <h1 class={titleClassComputed}>{title}</h1>
        {/if}
      </div>

      <!-- Navigation items -->
      <nav class={navClassComputed}>
        <ul class={navListClass}>
          {#each items as item (item.id)}
            <li>
              <a
                href={item.href || '#'}
                class={
                  item.active ? navItemActiveClass :
                  item.disabled ? navItemDisabledClass :
                  navItemClass
                }
                onclick={(e) => {
                  e.preventDefault();
                  handleClick(item);
                }}
                aria-current={item.active ? 'page' : undefined}
                aria-disabled={item.disabled}
              >
                {#if item.icon && isSidebarOpen}
                  <span class={navItemIconWrapperClass}>
                    <item.icon class="h-5 w-5" />
                  </span>
                {/if}
                {#if isSidebarOpen}
                  <span class={navItemLabelClass}>{item.label}</span>
                  {#if item.badge}
                    <span class={navItemBadgeClass}>
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
        <div class={footerClassComputed}>
          {@render footer()}
        </div>
      {/if}
    </div>
  </aside>

  <!-- Content area (placeholder) -->
  <div class={contentAreaClass}>
    <!-- Actual content would go here -->
  </div>
</div>


