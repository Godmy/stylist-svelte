<script lang="ts">
  /**
   * @component StatCard
   * @description Card with statistics (number + description + trend)
   *
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles stat card display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any stat card
   * - Interface Segregation: Minimal interface via IStatCardProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   *
   * Atomic Design: Molecule - Composes atoms into a meaningful unit
   */

  import type { IStatCardProps } from '$stylist/design-system/props/stat-card';
  import { StatCardStyleManager } from '$stylist/design-system/styles/stat-card';
  import AnimatedNumber from '$stylist/components/atoms/information/data-display/animated-number/index.svelte';

  // Define component props using the interface
  let {
    title,
    value,
    icon,
    trend,
    trendValue,
    description,
    variant = 'default',
    animated = false,
    class: className = ''
  }: IStatCardProps = $props();

  // Get CSS classes from style manager
  let classes = $derived(StatCardStyleManager.getBaseClasses(variant, className));
  let titleClasses = $derived(StatCardStyleManager.getTitleClasses());
  let valueClasses = $derived(StatCardStyleManager.getValueClasses());
  let trendContainerClasses = $derived(StatCardStyleManager.getTrendContainerClasses());
  let trendTextClasses = $derived(StatCardStyleManager.getTrendTextClasses(trend));
  let trendIconClasses = $derived(StatCardStyleManager.getTrendIconClasses(trend));
  let descriptionClasses = $derived(StatCardStyleManager.getDescriptionClasses());
  let iconContainerClasses = $derived(StatCardStyleManager.getIconContainerClasses());

  // Format value for AnimatedNumber if it's a number
  let numericValue = typeof value === 'number' ? value : parseFloat(value.replace(/[^\d.-]/g, ''));
</script>

<div class={`c-stat-card ${classes}`}>
  {#if icon}
    <div class={iconContainerClasses}>
      <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">{icon}</span>
    </div>
  {/if}

  <h3 class={titleClasses}>{title}</h3>

  <div class={valueClasses}>
    {#if animated && typeof value === 'number'}
      <AnimatedNumber value={value} />
    {:else if animated && typeof value === 'string' && !isNaN(numericValue)}
      <AnimatedNumber value={numericValue} />
    {:else}
      {value}
    {/if}
  </div>

  {#if trendValue}
    <div class={trendContainerClasses}>
      {#if trend === 'up'}
        <svg class={trendIconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
      {:else if trend === 'down'}
        <svg class={trendIconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      {/if}
      <span class={trendTextClasses}>{trendValue}</span>
    </div>
  {/if}

  {#if description}
    <p class={descriptionClasses}>{description}</p>
  {/if}
</div>


