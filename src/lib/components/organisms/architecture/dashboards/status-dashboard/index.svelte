<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { CheckCircle, AlertCircle, XCircle, Clock, MoreHorizontal } from 'lucide-svelte';

  export type StatusItem = {
    id: string;
    title: string;
    description?: string;
    status: 'success' | 'warning' | 'error' | 'pending' | 'info';
    value?: string | number;
    footer?: Snippet;
    actions?: Snippet;
  };

  export type Props = {
    title?: string;
    subtitle?: string;
    items: StatusItem[];
    layout?: 'horizontal' | 'vertical';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    itemClass?: string;
    headerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let props: Props = $props();

  let {
    title = props.title,
    subtitle = props.subtitle,
    items = props.items ?? [],
    layout = props.layout ?? 'horizontal',
    size = props.size ?? 'md',
    class: className = props.class ?? '',
    itemClass = props.itemClass ?? '',
    headerClass = props.headerClass ?? '',
    ...restProps
  } = props;

  const paddingClass = $derived(
    size === 'sm' ? 'p-3' : size === 'lg' ? 'p-6' : 'p-4'
  );
  const titleSizeClass = $derived(
    size === 'sm' ? 'text-sm' : size === 'lg' ? 'text-lg' : 'text-base'
  );
  const descSizeClass = $derived(
    size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-sm' : 'text-sm'
  );

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
</script>

<div class={`c-status-dashboard bg-[--color-background-primary] rounded-lg shadow border border-[--color-border-default] ${className}`} {...restProps}>
  {#if title || subtitle}
    <div class={`border-b px-4 py-3 ${headerClass}`}>
      {#if title}
        <h2 class="text-lg font-semibold text-[--color-text-primary]">{title}</h2>
      {/if}
      {#if subtitle}
        <p class="text-sm text-[--color-text-secondary]">{subtitle}</p>
      {/if}
    </div>
  {/if}

  <div class={`p-4 ${layout === 'horizontal' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}`}>
    {#each items as item}
      {@const statusInfo = getStatusClasses(item.status)}
      <div class={`border rounded-lg p-4 ${itemClass} ${statusInfo.border}`}>
        <div class="flex items-start">
          <div class={`p-2 rounded-full ${statusInfo.bg}`}>
            <statusInfo.icon class={`h-5 w-5 ${statusInfo.color}`} />
          </div>
          <div class="ml-3 flex-1">
            <div class="flex items-baseline justify-between">
              <h3 class={`font-medium text-[--color-text-primary] ${titleSizeClass}`}>{item.title}</h3>
              {#if item.value}
                <span class="text-sm font-semibold text-[--color-text-primary]">{item.value}</span>
              {/if}
            </div>
            {#if item.description}
              <p class={`mt-1 text-[--color-text-secondary] ${descSizeClass}`}>{item.description}</p>
            {/if}
          </div>
          {#if item.actions}
            <div class="ml-2">
              {@render item.actions()}
            </div>
          {/if}
        </div>

        {#if item.footer}
          <div class="mt-3 pt-3 border-t border-[--color-border-default]">
            {@render item.footer()}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>
