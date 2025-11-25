<script lang="ts">
  import { FormErrorMessageStyleManager } from './styles';
  import type { IFormErrorMessageProps } from './types';

  /**
   * FormErrorMessage component - displays an error message for form fields
   * 
   * SOLID Principles applied:
   * 
   * Single Responsibility Principle: This component is responsible only for displaying form error messages.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: FormErrorMessage can be substituted with other error message components without breaking functionality.
   * Interface Segregation Principle: IFormErrorMessageProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  let {
    text = '',
    visible = true,
    content,
    class: className = '',
    ...restProps
  }: IFormErrorMessageProps = $props();

  // Generate the CSS class using the style manager
  const combinedClass = $derived(FormErrorMessageStyleManager.generateClass(className));
</script>

{#if visible}
  <p class={combinedClass} {...restProps}>
    {#if content}
      {@render content()}
    {:else}
      {text}
    {/if}
  </p>
{/if}
