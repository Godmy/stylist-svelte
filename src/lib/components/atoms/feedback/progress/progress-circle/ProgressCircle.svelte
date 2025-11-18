<script lang="ts">
  import { ProgressCircleStyleManager } from './styles';
  import type { IProgressCircleProps } from './types';

  /**
   * ProgressCircle component - Circular indicator of task completion
   * 
   * SOLID Principles applied:
   * 
   * Single Responsibility Principle: This component is responsible only for displaying a circular progress indicator.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: ProgressCircle can be substituted with other progress indicators without breaking functionality.
   * Interface Segregation Principle: IProgressCircleProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  const props = $props<{
    progress?: number;
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'gray';
    strokeWidth?: number;
  } & IProgressCircleProps>();

  // Set default values
  const progress = props.progress ?? 0;
  const size = props.size ?? 'md';
  const color = props.color ?? 'primary';
  const strokeWidth = props.strokeWidth ?? 8;

  // Calculate normalized progress and circle properties
  const normalizedProgress = $derived(Math.min(100, Math.max(0, progress)));
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = $derived(circumference - (normalizedProgress / 100) * circumference);

  // Generate the CSS classes using the style manager
  const containerClass = $derived(ProgressCircleStyleManager.generateContainerClass(size, props.class));
  const svgClass = $derived(ProgressCircleStyleManager.generateSvgClass());
  const backgroundCircleClass = $derived(ProgressCircleStyleManager.generateBackgroundCircleClass());
  const progressCircleClass = $derived(ProgressCircleStyleManager.generateProgressCircleClass(color));
  const labelClass = $derived(ProgressCircleStyleManager.generateLabelClass());
</script>

<div class={containerClass} {...props}>
  <svg class={svgClass} viewBox="0 0 100 100">
    <!-- Фоновый круг -->
    <circle
      cx="50"
      cy="50"
      r="45"
      fill="none"
      stroke="currentColor"
      stroke-width={strokeWidth}
      class={backgroundCircleClass}
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
      class={progressCircleClass}
      style="transition-property: stroke-dashoffset, stroke"
    />
  </svg>
  <span class={labelClass}>
    {normalizedProgress}%
  </span>
</div>