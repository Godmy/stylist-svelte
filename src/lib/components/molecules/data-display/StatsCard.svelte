<script lang="ts">
  import type { Snippet } from 'svelte';

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
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.19l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3.75A.75.75 0 0110 3z" clip-rule="evenodd" />
          </svg>
        {:else if trend === 'down'}
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V6.06L6.03 9.28a.75.75 0 11-1.06-1.06l4.5-4.5a.75.75 0 011.06 0l4.5 4.5a.75.75 0 11-1.06 1.06l-3.22-3.22v10.19a.75.75 0 01-.75.75z" clip-rule="evenodd" />
          </svg>
        {:else}
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 10h12v1.5H4z" />
          </svg>
        {/if}
        {trendValue}
      </span>
    {/if}

    {#if description}
      <span class="text-gray-500">{description}</span>
    {/if}
  </div>
</article>
