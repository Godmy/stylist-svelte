<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Color = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
  type Size = 'sm' | 'md' | 'lg';

  type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;

  type Props = RestProps & {
    progress?: number;
    size?: Size;
    color?: Color;
    strokeWidth?: number;
    className?: string;
  };

  const {
    progress = 0,
    size = 'md',
    color = 'primary',
    strokeWidth = 8,
    className = '',
    ...restProps
  }: Props = $props();

  const normalizedProgress = $derived(Math.min(100, Math.max(0, progress)));
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = $derived(circumference - (normalizedProgress / 100) * circumference);

  const sizeClasses = $derived({
    sm: 'w-12 h-12 text-xs',
    md: 'w-16 h-16 text-sm',
    lg: 'w-24 h-24 text-base'
  }[size]);

  const colorClasses = $derived({
    primary: 'text-indigo-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
    info: 'text-blue-600',
    gray: 'text-gray-400'
  }[color]);
</script>

<div class={`relative inline-flex items-center justify-center ${sizeClasses} ${className}`} {...restProps}>
  <svg class="h-full w-full" viewBox="0 0 100 100">
    <!-- Фоновый круг -->
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="currentColor"
      stroke-width={strokeWidth}
      class="opacity-20 text-current"
    />
    <!-- Прогресс-круг -->
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="currentColor"
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-dasharray={circumference}
      stroke-dashoffset={strokeDashoffset}
      transform="rotate(-90 50 50)"
      class={`transition-all ease-out ${colorClasses}`}
      style="transition-property: stroke-dashoffset, stroke"
    />
  </svg>
  <span class="absolute text-xs font-medium text-gray-700 dark:text-gray-300">
    {normalizedProgress}%
  </span>
</div>