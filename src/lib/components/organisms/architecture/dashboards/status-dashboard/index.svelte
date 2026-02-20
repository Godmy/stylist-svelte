<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { CheckCircle, AlertCircle, XCircle, Clock, MoreHorizontal } from 'lucide-svelte';
  import { StatusDashboardStyleManager } from '$stylist/design-system/styles';
  import type { StatusDashboardProps, StatusItem } from '$stylist/design-system/props';

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
  }: StatusDashboardProps & HTMLAttributes<HTMLDivElement> = $props();

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
        return { icon: AlertCircle, color: 'text-[--color-text-secondary]', bg: 'bg-[--color-surface-muted]', border: 'border-[--color-border-default]' };
    }
  }

  // Generate CSS classes using the style manager
  const containerClass = $derived(StatusDashboardStyleManager.getContainerClass(variant, size, className));
  const headerClassComputed = $derived(StatusDashboardStyleManager.getHeaderClass(headerClass));
  const titleClass = $derived(StatusDashboardStyleManager.getTitleClass());
  const subtitleClass = $derived(StatusDashboardStyleManager.getSubtitleClass());
  const itemsGridClass = $derived(StatusDashboardStyleManager.getItemsGridClass(layout));
  const itemCardClass = $derived(StatusDashboardStyleManager.getItemCardClass(itemClass));
  const itemContentClass = $derived(StatusDashboardStyleManager.getItemContentClass());
  const itemHeaderClass = $derived(StatusDashboardStyleManager.getItemHeaderClass());
  const itemTitleClass = $derived(StatusDashboardStyleManager.getItemTitleClass(size));
  const itemValueClass = $derived(StatusDashboardStyleManager.getItemValueClass());
  const itemDescriptionClass = $derived(StatusDashboardStyleManager.getItemDescriptionClass(size));
  const itemFooterClass = $derived(StatusDashboardStyleManager.getItemFooterClass());
  const itemActionsClass = $derived(StatusDashboardStyleManager.getItemActionsClass());
  const statusIconWrapperClass = $derived(StatusDashboardStyleManager.getStatusIconWrapperClass());
  const statusIconClass = $derived(StatusDashboardStyleManager.getStatusIconClass());
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
            <statusInfo.icon class={statusIconClass + ' ' + statusInfo.color} />
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
