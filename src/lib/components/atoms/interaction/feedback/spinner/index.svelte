<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Loader2 = 'loader-2';


  type SpinnerVariant = 'css' | 'svg' | 'icon';

  type Props = {
    /** Visual style variant of the spinner */
    variant?: SpinnerVariant;
    /** Size of the spinner */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color of the spinner (for svg variant) */
    color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'white' | string;
    /** Label text displayed below the spinner */
    label?: string;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Additional CSS classes for the container */
    class?: string;
    /** Additional CSS classes for the spinner element */
    spinnerClass?: string;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    variant = 'icon',
    size = 'md',
    color = 'blue',
    label = 'Loading...',
    showLabel = false,
    class: className = '',
    spinnerClass = '',
    ...restProps
  }: Props = $props();

  // Size classes mapping
  const sizeClasses = $derived(() => {
    const sizeMap: Record<string, string> = {
      xs: 'w-4 h-4',
      sm: 'w-5 h-5',
      md: 'w-8 h-8',
      lg: 'w-12 h-12',
      xl: 'w-16 h-16'
    };
    return sizeMap[size] || sizeMap.md;
  });

  // Color classes mapping for SVG variant
  const colorClasses = $derived(() => {
    const colorMap: Record<string, string> = {
      blue: 'text-[var(--color-primary-500)]',
      gray: 'text-[var(--color-text-secondary)]',
      green: 'text-[var(--color-success-500)]',
      red: 'text-[var(--color-danger-500)]',
      yellow: 'text-yellow-500',
      white: 'text-[var(--color-text-inverse)]'
    };
    return colorMap[color] || `text-[${color}]`;
  });

  // Variant color for icon
  const iconColorClasses = $derived(() => {
    const variantColorMap: Record<string, string> = {
      primary: 'text-[var(--color-primary-500)]',
      white: 'text-[var(--color-text-inverse)]',
      gray: 'text-[var(--color-text-secondary)]'
    };
    // Map color prop to variant colors
    if (color === 'blue') return 'text-[var(--color-primary-500)]';
    if (color === 'gray') return 'text-[var(--color-text-secondary)]';
    if (color === 'green') return 'text-[var(--color-success-500)]';
    if (color === 'red') return 'text-[var(--color-danger-500)]';
    if (color === 'yellow') return 'text-yellow-500';
    if (color === 'white') return 'text-[var(--color-text-inverse)]';
    return variantColorMap[variant] || 'text-[var(--color-primary-500)]';
  });
</script>

<div class={`flex flex-col items-center justify-center ${className}`} {...restProps} role="status" aria-live="polite">
  {#if variant === 'svg'}
    <!-- SVG Spinner: Classic ring spinner -->
    <svg
      class={`animate-spin ${sizeClasses} ${colorClasses} ${spinnerClass}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        class="opacity-[var(--opacity-25)]"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        stroke-width="4"
      ></circle>
      <path
        class="opacity-[var(--opacity-75)]"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  {:else if variant === 'css'}
    <!-- CSS Spinner: Minimal CSS-only spinner -->
    <span
      class={`loader-container ${sizeClasses} ${spinnerClass}`}
      aria-hidden="true"
    >
      <style>
        .loader-container {
          position: relative;
          display: inline-block;
        }
        .loader-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border: 3px solid currentColor;
          border-radius: 50%;
          border-color: currentColor transparent currentColor transparent;
          animation: spin var(--duration-1000) var(--animation-linear) infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </span>
  {:else}
    <!-- Icon Spinner: Lucide Loader2 icon -->
    <BaseIcon name={Loader2}
      class={`animate-spin ${sizeClasses} ${iconColorClasses} ${spinnerClass}`}
      aria-hidden="true"
    />
  {/if}

  {#if showLabel}
    <span class="mt-2 text-sm text-[var(--color-text-secondary)]">{label}</span>
  {/if}
  
  <span class="sr-only">{label}</span>
</div>




