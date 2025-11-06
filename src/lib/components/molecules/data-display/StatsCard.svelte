<script lang="ts">
  import type { Snippet } from 'svelte';
  import { ArrowUp, ArrowDown, Minus } from 'lucide-svelte';

  type Trend = 'up' | 'down' | 'neutral';

  type Props = {
    label: string;
    value: string;
    trend?: Trend;
    trendValue?: string;
    description?: string;
    icon?: Snippet;
    class?: string;
  };

  let {
    label,
    value,
    trend = 'neutral',
    trendValue,
    description,
    icon,
    class: className = ''
  }: Props = $props();

  const trendClasses = $derived(() => {
    if (trend === 'up') return 'text-emerald-600';
    if (trend === 'down') return 'text-rose-600';
    return 'text-gray-500';
  });
</script>

<article class="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow transition {className}">
  <div class="flex items-start justify-between">
    <div>
      <p class="text-sm font-medium text-gray-500">{label}</p>
      <p class="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
    </div>

    {#if icon}
      <div class="rounded-full bg-indigo-50 p-3 text-indigo-500">
        {@render icon()}
      </div>
    {/if}
  </div>

  <div class="mt-3 flex items-center gap-2 text-sm">
    {#if trendValue}
      <span class="inline-flex items-center gap-1 font-medium {trendClasses}">
        {#if trend === 'up'}
          <ArrowUp class="h-4 w-4" />
        {:else if trend === 'down'}
          <ArrowDown class="h-4 w-4" />
        {:else}
          <Minus class="h-4 w-4" />
        {/if}
        {trendValue}
      </span>
    {/if}

    {#if description}
      <span class="text-gray-500">{description}</span>
    {/if}
  </div>
</article>
