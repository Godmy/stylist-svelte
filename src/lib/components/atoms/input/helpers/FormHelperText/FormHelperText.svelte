<script lang="ts">
  import { FormHelperTextStyleManager } from './styles';
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
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  let {
    text = '',
    variant = 'default',
    content,
    class: className = '',
    ...restProps
  }: IFormHelperTextProps = $props();

  // Generate the CSS class using the style manager
  const combinedClass = $derived(FormHelperTextStyleManager.generateClass(variant, className));
</script>

<p class={combinedClass} {...restProps}>
  {#if content}
    {@render content()}
  {:else}
    {text}
  {/if}
</p>
