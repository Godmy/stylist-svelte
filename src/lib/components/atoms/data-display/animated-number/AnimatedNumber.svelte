<script lang="ts">
  /**
   * @component AnimatedNumber
   * @description Animated number component that counts up to a target value
   *
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles number display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any number display
   * - Interface Segregation: Minimal interface via IAnimatedNumberProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   *
   * Atomic Design: Atom - Basic UI element for number animation
   */

  import type { IAnimatedNumberProps } from './types';

  // Define component props using the interface
  let {
    value,
    format,
    prefix = '',
    suffix = '',
    separator = ',',
    decimals = 0,
    class: className = ''
  }: IAnimatedNumberProps = $props();

  /**
   * Formats the number with proper separators and decimal places
   * @param n - Number to format
   * @returns Formatted number string
   */
  function formatNumber(n: number): string {
    if (format) return format(n);

    const fixed = n.toFixed(decimals);
    const [integer, decimal] = fixed.split('.');

    // Add thousand separators
    const withSeparator = integer.replace(/\B(?=(\d{3})+(?!\d))/g, separator);

    return decimal ? `${withSeparator}.${decimal}` : withSeparator;
  }

  // Get CSS classes using utility classes
  let classes = $derived(`${className} font-mono`);
</script>

<span class={classes}>
  {prefix}{formatNumber(value)}{suffix}
</span>