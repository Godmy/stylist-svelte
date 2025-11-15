<script lang="ts">
  import type { NumberFlowProps } from './type';
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
    NUMBER_FLOW_CLASS,
    REDUCED_MOTION_CLASS,
    ANIMATING_CLASS,
    PREFIX_CLASS,
    SUFFIX_CLASS,
    DIGIT_CONTAINER_CLASS,
    DIGIT_FACE_CLASS,
    DIGIT_OLD_CLASS,
    DIGIT_CURRENT_CLASS,
    SR_ONLY_CLASS,
    ARIA_ROLE,
    ARIA_LIVE_POLITE,
    ARIA_LIVE_ASSERTIVE,
    REDUCED_MOTION_MEDIA_QUERY
  } from './constant';
  import {
    formatNumber,
    numbersEqual,
    getFormattedDigits,
    checkReducedMotionPreference,
    calculateTotalAnimationDuration
  } from './util';

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
    oldValue = currentValue;
    currentValue = value;
    formattedValue = formatNumber(currentValue, locales, format);
    formattedOldValue = formatNumber(oldValue, locales, format);
  });

  // Check for reduced motion preference
  $effect(() => {
    if (typeof window !== 'undefined' && respectMotionPreference) {
      const mediaQuery = window.matchMedia(REDUCED_MOTION_MEDIA_QUERY);
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

  // Function to handle animation
  const animateValue = () => {
    if (!animated || isReducedMotion) return;

    // Skip animation if value hasn't changed
    if (numbersEqual(currentValue, oldValue)) return;

    onAnimationsStart();

    // Get all digit containers and animate them
    const digitContainers = containerRef?.querySelectorAll(`.${DIGIT_CONTAINER_CLASS}`) || [];

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
      (container as HTMLElement).classList.add(ANIMATING_CLASS);

      // Reset animation class after animation completes
      setTimeout(() => {
        container.classList.remove(ANIMATING_CLASS);
      }, Math.max(spinTiming.duration, opacityTiming.duration) + delay);
    });

    // Dispatch finish event after animation completes
    const totalDuration = calculateTotalAnimationDuration(
      { duration: Math.max(spinTiming.duration, opacityTiming.duration) },
      digitContainers.length
    );
    setTimeout(() => {
      onAnimationsFinish();
    }, totalDuration);
  };

  $effect(() => {
    animateValue();
  });
</script>

<div
  class={NUMBER_FLOW_CLASS}
  bind:this={containerRef}
  class:reduced-motion={isReducedMotion}
  class:animating={animated && !isReducedMotion && !numbersEqual(currentValue, oldValue)}
  role={ARIA_ROLE}
  aria-live={ARIA_LIVE_POLITE}
>
  {#if prefix}
    <span class={PREFIX_CLASS} aria-hidden="true">{prefix}</span>
  {/if}

  {#each getFormattedDigits(formattedValue, formattedOldValue) as [currentDigit, oldDigit], i (i)}
    <span class={DIGIT_CONTAINER_CLASS} aria-hidden="true">
      <span class={`${DIGIT_FACE_CLASS} ${DIGIT_OLD_CLASS}`}>{oldDigit}</span>
      <span class={`${DIGIT_FACE_CLASS} ${DIGIT_CURRENT_CLASS}`}>{currentDigit}</span>
    </span>
  {/each}

  {#if suffix}
    <span class={SUFFIX_CLASS} aria-hidden="true">{suffix}</span>
  {/if}

  <!-- Screen reader content -->
  <span class={SR_ONLY_CLASS} aria-live={ARIA_LIVE_ASSERTIVE}>
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