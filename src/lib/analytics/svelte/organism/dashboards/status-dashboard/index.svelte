<script lang="ts">
  
  import { Icon as BaseIcon } from '$stylist';
  import { StatusDashboardStyleManager } from '$stylist/analytics/class/style-manager/status-dashboard';
  import type { StatusDashboardRecipe } from '$stylist/analytics/interface/recipe/status-dashboard';
  import { ObjectManagerStatusDashboard } from '$stylist/analytics/class/object-manager/status-dashboard';

  let {
    title,
    subtitle,
    items = [],
    layout = 'horizontal',
    size = 'md',
    class: className = '',
    itemClass = '',
    headerClass = '',
    variant = 'default',
    ...restProps
  }: StatusDashboardRecipe = $props();

  const classNameStr = className == null ? undefined : String(className);
  const headerClassStr = headerClass == null ? undefined : String(headerClass);
  const itemClassStr = itemClass == null ? undefined : String(itemClass);

  // Generate CSS classes using the style manager
  const containerClass = $derived(StatusDashboardStyleManager.getContainerClass(variant, size, classNameStr));
  const headerClassComputed = $derived(StatusDashboardStyleManager.getHeaderClass(headerClassStr));
  const titleClass = StatusDashboardStyleManager.getTitleClass();
  const subtitleClass = StatusDashboardStyleManager.getSubtitleClass();
  const itemsGridClass = $derived(StatusDashboardStyleManager.getItemsGridClass(layout));
  const itemCardClass = $derived(StatusDashboardStyleManager.getItemCardClass(itemClassStr));
  const itemContentClass = StatusDashboardStyleManager.getItemContentClass();
  const itemHeaderClass = StatusDashboardStyleManager.getItemHeaderClass();
  const itemTitleClass = $derived(StatusDashboardStyleManager.getItemTitleClass(size));
  const itemValueClass = StatusDashboardStyleManager.getItemValueClass();
  const itemDescriptionClass = $derived(StatusDashboardStyleManager.getItemDescriptionClass(size));
  const itemFooterClass = StatusDashboardStyleManager.getItemFooterClass();
  const itemActionsClass = StatusDashboardStyleManager.getItemActionsClass();
  const statusIconWrapperClass = StatusDashboardStyleManager.getStatusIconWrapperClass();
  const statusIconClass = StatusDashboardStyleManager.getStatusIconClass();
</script>

<div class={containerClass} {...restProps}>
  {#if title || subtitle}
    <div class={headerClassComputed}>
      {#if title}
        <h2 class={titleClass}>{title}</h2>
      {/if}
      {#if subtitle}
        <p class={subtitleClass}>{subtitle}</p>
      {/if}
    </div>
  {/if}

  <div class={itemsGridClass}>
    {#each items as item}
      {@const statusInfo = ObjectManagerStatusDashboard.resolveStatusPresentation(item.status)}
      <div class={itemCardClass + ' ' + statusInfo.border}>
        <div class={itemContentClass}>
          <div class={statusIconWrapperClass + ' ' + statusInfo.bg}>
            <BaseIcon name={statusInfo.icon} class={statusIconClass + ' ' + statusInfo.color} />
          </div>
          <div class="ml-3 flex-1">
            <div class={itemHeaderClass}>
              <h3 class={itemTitleClass}>{item.title}</h3>
              {#if item.value}
                <span class={itemValueClass}>{item.value}</span>
              {/if}
            </div>
            {#if item.description}
              <p class={itemDescriptionClass}>{item.description}</p>
            {/if}
          </div>
          {#if item.actions}
            <div class={itemActionsClass}>
              {@render item.actions()}
            </div>
          {/if}
        </div>

        {#if item.footer}
          <div class={itemFooterClass}>
            {@render item.footer()}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>


















