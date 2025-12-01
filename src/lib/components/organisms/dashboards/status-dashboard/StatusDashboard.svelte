<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';
  import { CheckCircle, AlertCircle, XCircle, Clock, MoreHorizontal } from 'lucide-svelte';

  type StatusItem = {
    id: string;
    title: string;
    description?: string;
    status: 'success' | 'warning' | 'error' | 'pending' | 'info';
    value?: string | number;
    footer?: Snippet;
    actions?: Snippet;
  };

  type Props = {
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
        return { icon: CheckCircle, color: 'text-green-500', bg: 'bg-green-100', border: 'border-green-200' };
      case 'warning':
        return { icon: AlertCircle, color: 'text-yellow-500', bg: 'bg-yellow-100', border: 'border-yellow-200' };
      case 'error':
        return { icon: XCircle, color: 'text-red-500', bg: 'bg-red-100', border: 'border-red-200' };
      case 'pending':
        return { icon: Clock, color: 'text-blue-500', bg: 'bg-blue-100', border: 'border-blue-200' };
      default: // info
        return { icon: AlertCircle, color: 'text-gray-500', bg: 'bg-gray-100', border: 'border-gray-200' };
    }
  }
</script>

<div class={`bg-white rounded-lg shadow border border-gray-200 ${className}`} {...restProps}>
  {#if title || subtitle}
    <div class={`border-b px-4 py-3 ${headerClass}`}>
      {#if title}
        <h2 class="text-lg font-semibold text-gray-900">{title}</h2>
      {/if}
      {#if subtitle}
        <p class="text-sm text-gray-500">{subtitle}</p>
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
              <h3 class={`font-medium text-gray-900 ${titleSizeClass}`}>{item.title}</h3>
              {#if item.value}
                <span class="text-sm font-semibold text-gray-900">{item.value}</span>
              {/if}
            </div>
            {#if item.description}
              <p class={`mt-1 text-gray-500 ${descSizeClass}`}>{item.description}</p>
            {/if}
          </div>
          {#if item.actions}
            <div class="ml-2">
              {@render item.actions()}
            </div>
          {/if}
        </div>
        
        {#if item.footer}
          <div class="mt-3 pt-3 border-t border-gray-100">
            {@render item.footer()}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>