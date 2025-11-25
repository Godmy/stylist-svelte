<script lang="ts">
  import { SkeletonStyleManager } from './styles';
  import type { ISkeletonProps } from './types';

  /**
   * Skeleton component - displays a loading placeholder
   *
   * SOLID Principles applied:
   *
   * Single Responsibility Principle: This component is responsible only for displaying a skeleton loading placeholder.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: Skeleton can be substituted with other loading placeholders without breaking functionality.
   * Interface Segregation Principle: ISkeletonProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  const props = $props<{
    variant?: 'text' | 'circular' | 'rectangular';
    width?: string;
    height?: string;
    class?: string;
  } & ISkeletonProps>();

  // Set default values
  const variant = props.variant ?? 'text';
  const width = props.width ?? '100%';
  const height = props.height;

  // Generate the CSS class using the style manager
  let combinedClass = $derived(SkeletonStyleManager.generateClass(variant, props.class));

  // Calculate dimensions
  const defaultHeight = $derived(SkeletonStyleManager.getDefaultHeight(variant));
  const computedHeight = $derived(height || defaultHeight);
  const computedWidth = $derived(variant === 'circular' ? computedHeight : width);

  // Добавляем width и height как CSS переменные для использования в классах
  const styleVars = $derived(`--skeleton-width: ${computedWidth}; --skeleton-height: ${computedHeight};`);
</script>

<div
  class={combinedClass}
  style={styleVars}
  aria-busy="true"
  aria-live="polite"
  {...props}
></div>