<script lang="ts">
  import type { NumberFlowProps } from './types';

  /**
   * NumberFlow component - Simple number display component
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles number rendering
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other number display components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param value - The number value to display
   * @param format - Format options for the number
   * @param locales - Locale for number formatting
   * @param prefix - Prefix string for the number
   * @param suffix - Suffix string for the number
   * @param class - Additional CSS classes
   * @returns A simple number display element
   */
  let {
    value,
    format,
    locales = 'en-US',
    prefix = '',
    suffix = '',
    class: className = ''
  }: NumberFlowProps = $props();

  // Format the number based on provided options
  const formattedValue = new Intl.NumberFormat(locales, format).format(value ?? 0);

  // Generate CSS classes using utility classes
  let containerClass = $derived(`inline-flex items-center font-variant-numeric-tabular ${className}`);
  let prefixClass = $derived('inline-block');
  let suffixClass = $derived('inline-block');
  let srOnlyClass = $derived('absolute w-1 h-1 p-0 m-[-1px] overflow-hidden clip-[rect(0,0,0,0)] whitespace-nowrap border-0');
</script>

<div
  class={containerClass}
  role="status"
  aria-live="polite"
>
  {#if prefix}
    <span class={prefixClass} aria-hidden="true">{prefix}</span>
  {/if}

  <span>{formattedValue}</span>

  {#if suffix}
    <span class={suffixClass} aria-hidden="true">{suffix}</span>
  {/if}

  <!-- Screen reader content -->
  <span class={srOnlyClass} aria-live="assertive">
    {prefix}{formattedValue}{suffix}
  </span>
</div>
