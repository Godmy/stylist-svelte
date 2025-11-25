<script lang="ts">
  import type { NumberFlowProps } from './types';
  import { NumberFlowStyleManager } from './styles';
  import {
    DEFAULT_VALUE,
    DEFAULT_FORMAT,
    DEFAULT_LOCALES,
    DEFAULT_PREFIX,
    DEFAULT_SUFFIX,
    DEFAULT_ANIMATED,
    DEFAULT_TREND,
    DEFAULT_RESPECT_MOTION_PREFERENCE,
    DEFAULT_WILL_CHANGE,
    DEFAULT_TRANSFORM_TIMING,
    DEFAULT_SPIN_TIMING,
    DEFAULT_OPACITY_TIMING,
    ARIA_ROLE,
    ARIA_LIVE_POLITE,
    ARIA_LIVE_ASSERTIVE,
    DIGIT_CONTAINER_CLASS
  } from './constant';
  import {
    computeFormattedValues,
    numbersEqual,
    getFormattedDigits,
    watchReducedMotion,
    animateDigits
  } from './util';

  /**
   * NumberFlow component - Animated number display component with smooth transitions
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles animated number rendering and state
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
   * @param animated - Whether to animate number changes
   * @param class - Additional CSS classes
   * @returns An accessible, animated number display element
   */
  let {
    value = DEFAULT_VALUE,
    format = DEFAULT_FORMAT,
    locales = DEFAULT_LOCALES,
    prefix = DEFAULT_PREFIX,
    suffix = DEFAULT_SUFFIX,
    animated = DEFAULT_ANIMATED,
    trend = DEFAULT_TREND,
    digits = null,
    respectMotionPreference = DEFAULT_RESPECT_MOTION_PREFERENCE,
    transformTiming = DEFAULT_TRANSFORM_TIMING,
    spinTiming = DEFAULT_SPIN_TIMING,
    opacityTiming = DEFAULT_OPACITY_TIMING,
    willChange = DEFAULT_WILL_CHANGE,
    class: className = '',
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
    const {
      currentValue: nextValue,
      previousValue,
      formattedCurrent,
      formattedPrevious
    } = computeFormattedValues(currentValue, value, locales, format);

    oldValue = previousValue;
    currentValue = nextValue;
    formattedValue = formattedCurrent;
    formattedOldValue = formattedPrevious;
  });

  // Check for reduced motion preference
  $effect(() => {
    return watchReducedMotion(respectMotionPreference, (value) => {
      isReducedMotion = value;
    });
  });

  // Function to handle animation
  const animateValue = () => {
    animateDigits({
      animated,
      reducedMotion: isReducedMotion,
      currentValue,
      previousValue: oldValue,
      container: containerRef,
      digitSelector: DIGIT_CONTAINER_CLASS,
      spinTiming,
      transformTiming,
      opacityTiming,
      onStart: onAnimationsStart,
      onFinish: onAnimationsFinish
    });
  };

  $effect(() => {
    animateValue();
  });

  let containerClass = $derived(
    NumberFlowStyleManager.getContainerClasses(
      animated && !isReducedMotion && !numbersEqual(currentValue, oldValue),
      isReducedMotion,
      className ? className.toString() : ''
    )
  );
</script>

<div
  class={containerClass}
  bind:this={containerRef}
  role={ARIA_ROLE}
  aria-live={ARIA_LIVE_POLITE}
>
  {#if prefix}
    <span class={NumberFlowStyleManager.getPrefixClasses()} aria-hidden="true">{prefix}</span>
  {/if}

  {#each getFormattedDigits(formattedValue, formattedOldValue) as [currentDigit, oldDigit], i (i)}
    <span class={NumberFlowStyleManager.getDigitContainerClasses()} aria-hidden="true">
      <span class={`${NumberFlowStyleManager.getDigitFaceClasses()} ${NumberFlowStyleManager.getDigitOldClasses()}`}>{oldDigit}</span>
      <span class={`${NumberFlowStyleManager.getDigitFaceClasses()} ${NumberFlowStyleManager.getDigitCurrentClasses()}`}>{currentDigit}</span>
    </span>
  {/each}

  {#if suffix}
    <span class={NumberFlowStyleManager.getSuffixClasses()} aria-hidden="true">{suffix}</span>
  {/if}

  <!-- Screen reader content -->
  <span class={NumberFlowStyleManager.getScreenReaderClasses()} aria-live={ARIA_LIVE_ASSERTIVE}>
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
