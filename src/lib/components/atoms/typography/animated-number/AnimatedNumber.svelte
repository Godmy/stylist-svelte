<script lang="ts">
  /**
   * @component AnimatedNumber
   * @description Animated number component that counts up to a target value
   * 
   * SOLID Principles Applied:
   * - Single Responsibility: Only handles number animation display
   * - Open/Closed: Extensible through props without modifying source
   * - Liskov Substitution: Can substitute any number display
   * - Interface Segregation: Minimal interface via IAnimatedNumberProps
   * - Dependency Inversion: Depends on abstractions (props interface)
   * 
   * Atomic Design: Atom - Basic UI element for number animation
   */

  import type { IAnimatedNumberProps } from './types';
  import { AnimatedNumberStyleManager } from './styles';
  import { onMount, onDestroy } from 'svelte';

  // Define component props using the interface
  let {
    value,
    duration = 2000,
    delay = 0,
    easing = 'ease-out',
    format,
    prefix = '',
    suffix = '',
    separator = ',',
    decimals = 0,
    class: className = ''
  }: IAnimatedNumberProps = $props();

  // State for the displayed value
  let displayValue = $state(0);
  let animationFrame: number;

  // Easing functions for smooth animation
  const easingFunctions = {
    linear: (t: number) => t,
    'ease-in': (t: number) => t * t,
    'ease-out': (t: number) => t * (2 - t),
    'ease-in-out': (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
  };

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

  /**
   * Animates the number from 0 to target value
   */
  function animate() {
    const startTime = Date.now() + delay;
    const endTime = startTime + duration;
    const startValue = 0;
    const change = value - startValue;

    function step() {
      const now = Date.now();

      if (now < startTime) {
        animationFrame = requestAnimationFrame(step);
        return;
      }

      if (now >= endTime) {
        displayValue = value;
        return;
      }

      const progress = (now - startTime) / duration;
      const easedProgress = easingFunctions[easing](progress);
      displayValue = startValue + change * easedProgress;

      animationFrame = requestAnimationFrame(step);
    }

    step();
  }

  onMount(() => {
    animate();
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  });

  // Get CSS classes from style manager
  let classes = $derived(AnimatedNumberStyleManager.getBaseClasses(className));
</script>

<span class={classes}>
  {prefix}{formatNumber(displayValue)}{suffix}
</span>