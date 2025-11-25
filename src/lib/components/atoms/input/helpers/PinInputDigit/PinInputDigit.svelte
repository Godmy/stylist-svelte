<script lang="ts">
  import { PinInputDigitStyleManager } from './styles';
  import type { IPinInputDigitProps } from './types';

  /**
   * PinInputDigit component - displays a single digit input for PIN codes
   * 
   * SOLID Principles applied:
   * 
   * Single Responsibility Principle: This component is responsible only for displaying a single digit input for PIN codes.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: PinInputDigit can be substituted with other digit input components without breaking functionality.
   * Interface Segregation Principle: IPinInputDigitProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  let {
    value = '',
    focused = false,
    invalid = false,
    ...restProps
  }: IPinInputDigitProps & HTMLInputAttributes = $props();

  // Generate the CSS class using the style manager
  const combinedClass = $derived(PinInputDigitStyleManager.generateClass(focused, invalid));
</script>

<input
  class={combinedClass}
  maxLength={1}
  value={value}
  {...props}
/>