<script lang="ts">
  import type { IFormHelperTextProps } from './types';

  /**
   * FormHelperText component - displays helper text for form fields
   *
   * SOLID Principles applied:
   *
   * Single Responsibility Principle: This component is responsible only for displaying helper text for form fields.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: FormHelperText can be substituted with other helper text components without breaking functionality.
   * Interface Segregation Principle: IFormHelperTextProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (types) rather than concretions.
   */
  let {
    text = '',
    variant = 'default',
    content,
    class: className = '',
    ...restProps
  }: IFormHelperTextProps = $props();

  // Generate CSS classes using utility classes based on variant
  let combinedClass = $derived(() => {
    const baseClasses = 'text-sm mt-1';

    switch(variant) {
      case 'success':
        return `${baseClasses} text-[--color-success-600] ${className}`;
      case 'warning':
        return `${baseClasses} text-[--color-warning-600] ${className}`;
      case 'info':
        return `${baseClasses} text-[--color-primary-600] ${className}`;
      case 'default':
      default:
        return `${baseClasses} text-[--color-text-secondary] ${className}`;
    }
  });
</script>

<p class={combinedClass} {...restProps}>
  {#if content}
    {@render content()}
  {:else}
    {text}
  {/if}
</p>
