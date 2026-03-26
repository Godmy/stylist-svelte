<script lang="ts">
  import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist';
const CheckCircle = 'check-circle';
const AlertCircle = 'alert-circle';
const XCircle = 'x-circle';
const Clock = 'clock';
const MoreHorizontal = 'more-horizontal';

  import { StatusDashboardStyleManager } from '$stylist/information/class/style-manager/status-dashboard';
  import type { StatusDashboardProps, StatusItem } from '$stylist';

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
  }: StatusDashboardProps & ArchitectureHTMLAttributes<HTMLDivElement> = $props();

  // Define status classes
  function getStatusClasses(status: string) {
    switch(status) {
      case 'success':
        return { icon: CheckCircle, color: 'text-[--color-success-500]', bg: 'bg-[--color-success-100]', border: 'border-[--color-success-200]' };
      case 'warning':
        return { icon: AlertCircle, color: 'text-[--color-warning-500]', bg: 'bg-[--color-warning-100]', border: 'border-[--color-warning-200]' };
      case 'error':
        return { icon: XCircle, color: 'text-[--color-danger-500]', bg: 'bg-[--color-danger-100]', border: 'border-[--color-danger-200]' };
      case 'pending':
        return { icon: Clock, color: 'text-[--color-primary-500]', bg: 'bg-[--color-primary-100]', border: 'border-[--color-primary-200]' };
      default: // info
        return { icon: AlertCircle, color: 'text-[--color-text-secondary]', bg: 'bg-[--color-background-tertiary]', border: 'border-[--color-border-primary]' };
    }
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(StatusDashboardStyleManager.getContainerClass(variant, size, className));
  const headerClassComputed = $derived(StatusDashboardStyleManager.getHeaderClass(headerClass));
  const titleClass = StatusDashboardStyleManager.getTitleClass();
  const subtitleClass = StatusDashboardStyleManager.getSubtitleClass();
  const itemsGridClass = $derived(StatusDashboardStyleManager.getItemsGridClass(layout));
  const itemCardClass = $derived(StatusDashboardStyleManager.getItemCardClass(itemClass));
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
      {@const statusInfo = getStatusClasses(item.status)}
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






