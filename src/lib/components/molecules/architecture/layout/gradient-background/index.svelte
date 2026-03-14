<script lang="ts">
  import type { IGradientBackgroundProps } from '$stylist/design-system/contracts/architecture/gradient-background';
  import { GradientBackgroundStyleManager } from '$stylist/design-system/styles/architecture/gradient-background';

  let {
    variant = 'dynamic',
    colors = ['var(--color-danger-400)', 'var(--color-success-400)', 'var(--color-info-500)', 'var(--color-success-300)', 'var(--color-warning-300)'],
    speed = 20,
    intensity = 50,
    direction = 'diagonal',
    class: className = '',
    children
  } = $props();

  const typedVariant = variant as 'dynamic' | 'static' | 'particles';
  const typedDirection = direction as 'diagonal' | 'horizontal' | 'vertical' | 'radial';

  const containerClasses = $derived(GradientBackgroundStyleManager.getContainerClasses(className));
  const gradientClasses = $derived(GradientBackgroundStyleManager.getGradientClasses(typedVariant, typedDirection));
  const contentWrapperClasses = $derived(GradientBackgroundStyleManager.getContentWrapperClasses());

  const gradientImageByDirection = (value: 'diagonal' | 'horizontal' | 'vertical' | 'radial'): string => {
    if (value === 'radial') return 'var(--gradient-radial-center)';
    if (value === 'horizontal') return 'var(--gradient-directional-horizontal)';
    if (value === 'vertical') return 'var(--gradient-directional-vertical)';
    return 'var(--gradient-directional-diagonal)';
  };

  const gradientStyle = $derived(() => {
    const animationDuration = `${speed * 0.75}s`;
    const startColor = colors[0] ?? 'var(--color-primary-500)';
    const endColor = colors[colors.length - 1] ?? startColor;

    return {
      backgroundImage: gradientImageByDirection(typedDirection),
      gradientStart: startColor,
      gradientEnd: endColor,
      gradientInner: startColor,
      gradientOuter: endColor,
      animationDuration: variant === 'dynamic' ? animationDuration : undefined
    };
  });
</script>

<style>
  .gradient-background {
    background-size: 400% 400%;
    animation: gradientAnimation var(--duration-s15) var(--animation-ease) infinite;
  }

  @keyframes gradientAnimation {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
</style>

<div class={containerClasses} role="presentation">
  <div
    class={gradientClasses}
    style={`--gradient-start: ${gradientStyle().gradientStart}; --gradient-end: ${gradientStyle().gradientEnd}; --gradient-inner: ${gradientStyle().gradientInner}; --gradient-outer: ${gradientStyle().gradientOuter}; background-image: ${gradientStyle().backgroundImage}; ${variant === 'dynamic' && gradientStyle().animationDuration ? `animation-duration: ${gradientStyle().animationDuration};` : ''}`}
    aria-hidden="true"
  ></div>

  {#if children}
    <div class={contentWrapperClasses}>
      {@render children()}
    </div>
  {/if}
</div>
