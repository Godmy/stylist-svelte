<script lang="ts">
  import type { Snippet } from 'svelte';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const ArrowUp = 'arrow-up';
const ArrowDown = 'arrow-down';
const Minus = 'minus';


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
    return 'text-[var(--color-text-secondary)]';
  });
</script>

<article class="rounded-xl border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-5 shadow-sm hover:shadow transition {className}">
  <div class="flex items-start justify-between">
    <div>
      <p class="text-sm font-medium text-[var(--color-text-secondary)]">{label}</p>
      <p class="mt-2 text-2xl font-semibold text-[var(--color-text-primary)]">{value}</p>
    </div>

    {#if icon}
      <div class="rounded-full bg-[var(--color-primary-50)] p-3 text-[var(--color-primary-500)]">
        {@render icon()}
      </div>
    {/if}
  </div>

  <div class="mt-3 flex items-center gap-2 text-sm">
    {#if trendValue}
      <span class="inline-flex items-center gap-1 font-medium {trendClasses}">
        {#if trend === 'up'}
          <BaseIcon name={ArrowUp} class="h-4 w-4" />
        {:else if trend === 'down'}
          <BaseIcon name={ArrowDown} class="h-4 w-4" />
        {:else}
          <BaseIcon name={Minus} class="h-4 w-4" />
        {/if}
        {trendValue}
      </span>
    {/if}

    {#if description}
      <span class="text-[var(--color-text-secondary)]">{description}</span>
    {/if}
  </div>
</article>





