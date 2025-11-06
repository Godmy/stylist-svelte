<script lang="ts">
  // Types
  export interface TimingConfig {
    duration: number;
    easing?: string;
  }
  
  export type NumberFlowProps = {
    value?: number;
    format?: Intl.NumberFormatOptions;
    locales?: string | string[];
    prefix?: string;
    suffix?: string;
    animated?: boolean;
    trend?: number;
    digits?: any[] | null;
    respectMotionPreference?: boolean;
    transformTiming?: TimingConfig;
    spinTiming?: TimingConfig;
    opacityTiming?: TimingConfig;
    willChange?: boolean;
    onAnimationsStart?: () => void;
    onAnimationsFinish?: () => void;
  };

  let {
    value = 0,
    format = {},
    locales = 'en-US',
    prefix = '',
    suffix = '',
    animated = true,
    trend = 0,
    digits = null,
    respectMotionPreference = true,
    transformTiming = { duration: 500, easing: 'ease-in-out' } as TimingConfig,
    spinTiming = { duration: 800, easing: 'ease-in-out' } as TimingConfig,
    opacityTiming = { duration: 300, easing: 'ease-in-out' } as TimingConfig,
    willChange = false,
    onAnimationsStart = () => {},
    onAnimationsFinish = () => {}
  }: NumberFlowProps = $props();
  
  // State
  let currentValue = $state(0);
  let oldValue = $state(0);
  let formattedValue = $state('');
  let formattedOldValue = $state('');
  let isReducedMotion = $state(false);
  let containerRef: HTMLDivElement | null = null;
  
  // Initialize values
  $effect(() => {
    const numberFormat = new Intl.NumberFormat(locales, format);
    oldValue = currentValue;
    currentValue = value;
    formattedValue = numberFormat.format(currentValue);
    formattedOldValue = numberFormat.format(oldValue);
  });

  // Check for reduced motion preference
  $effect(() => {
    if (typeof window !== 'undefined' && respectMotionPreference) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      isReducedMotion = mediaQuery.matches;
      
      const handleChange = (e: MediaQueryListEvent) => {
        isReducedMotion = e.matches;
      };
      
      mediaQuery.addEventListener('change', handleChange);
      
      return () => {
        mediaQuery.removeEventListener('change', handleChange);
      };
    }
  });
  
  // Helper function to get formatted digits
  const getFormattedDigits = (current: string, previous: string) => {
    // Ensure we have strings to work with
    const currentStr = String(current);
    const previousStr = String(previous);
    
    // Pad the shorter string to match length
    const maxLength = Math.max(currentStr.length, previousStr.length);
    
    // Pad with leading zeros or spaces if needed
    const paddedCurrent = currentStr.padStart(maxLength, ' ');
    const paddedPrevious = previousStr.padStart(maxLength, ' ');
    
    return paddedCurrent.split('').map((currentDigit, i) => [
      currentDigit,
      paddedPrevious[i] || ' '
    ]);
  };
  


  // Function to handle animation
  const animateValue = () => {
    if (!animated || isReducedMotion) return;
    
    // Skip animation if value hasn't changed
    if (currentValue === oldValue) return;
    
    onAnimationsStart();
    
    // Get all digit containers and animate them
    const digitContainers = containerRef?.querySelectorAll('.digit-container') || [];
    
    // Set CSS variables for animation timing
    if (containerRef) {
      (containerRef as HTMLElement).style.setProperty('--spin-duration', `${spinTiming.duration}ms`);
      (containerRef as HTMLElement).style.setProperty('--easing', spinTiming.easing || 'ease-in-out');
      (containerRef as HTMLElement).style.setProperty('--transform-duration', `${transformTiming.duration}ms`);
      (containerRef as HTMLElement).style.setProperty('--opacity-duration', `${opacityTiming.duration}ms`);
    }
    
    // Add animation class to trigger animations
    digitContainers.forEach((container, index) => {
      // Add delay based on position to create wave effect
      const delay = (index * 50); // 50ms delay per digit
      
      (container as HTMLElement).style.setProperty('--delay', `${delay}ms`);
      (container as HTMLElement).classList.add('animating');
      
      // Reset animation class after animation completes
      setTimeout(() => {
        container.classList.remove('animating');
      }, Math.max(spinTiming.duration, opacityTiming.duration) + delay);
    });
    
    // Dispatch finish event after animation completes
    setTimeout(() => {
      onAnimationsFinish();
    }, Math.max(spinTiming.duration, opacityTiming.duration) + (digitContainers.length * 50));
  };
  
  $effect(() => {
    animateValue();
  });
</script>

<div 
  class="number-flow" 
  bind:this={containerRef}
  class:reduced-motion={isReducedMotion}
  class:animating={animated && !isReducedMotion && currentValue !== oldValue}
  role="status"
  aria-live="polite"
>
  {#if prefix}
    <span class="prefix" aria-hidden="true">{prefix}</span>
  {/if}
  
  {#each getFormattedDigits(formattedValue, formattedOldValue) as [currentDigit, oldDigit], i (i)}
    <span class="digit-container" aria-hidden="true">
      <span class="digit-face digit-old">{oldDigit}</span>
      <span class="digit-face digit-current">{currentDigit}</span>
    </span>
  {/each}
  
  {#if suffix}
    <span class="suffix" aria-hidden="true">{suffix}</span>
  {/if}
  
  <!-- Screen reader content -->
  <span class="sr-only" aria-live="assertive">
    {prefix}{formattedValue}{suffix}
  </span>
</div>

<style>
  .number-flow {
    display: inline-flex;
    align-items: center;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    position: relative;
  }
  
  .prefix,
  .suffix {
    display: inline-block;
  }
  
  .digit-container {
    position: relative;
    display: inline-block;
    height: 1em;
    width: 0.6em;
    overflow: hidden;
    perspective: 400px;
    margin: 0 0.05em;
  }
  
  .digit-face {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }
  
  .digit-old {
    transform: rotateX(0deg);
    opacity: 1;
  }
  
  .digit-current {
    transform: rotateX(90deg);
    opacity: 0;
  }
  

  
  @keyframes spinOldDigit {
    0% {
      transform: rotateX(0deg);
      opacity: 1;
    }
    100% {
      transform: rotateX(-90deg);
      opacity: 0;
    }
  }
  
  @keyframes spinCurrentDigit {
    0% {
      transform: rotateX(90deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0deg);
      opacity: 1;
    }
  }
  
  .reduced-motion {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>