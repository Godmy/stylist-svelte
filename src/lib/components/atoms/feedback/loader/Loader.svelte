<script lang="ts">
  import { LoaderStyleManager } from './styles';
  import type { ILoaderProps } from './types';

  /**
   * Loader component - displays a loading spinner
   * 
   * SOLID Principles applied:
   * 
   * Single Responsibility Principle: This component is responsible only for displaying a loading indicator.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: Loader can be substituted with other loading indicators without breaking functionality.
   * Interface Segregation Principle: ILoaderProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  const props = $props<{ 
    class?: string;
  } & ILoaderProps>();

  // Generate the CSS class using the style manager
  const combinedClass = $derived(LoaderStyleManager.generateClass(props.class));

  // Default accessibility properties
  const role = 'status';
  const ariaLabel = 'Loading...';
</script>

<div
  class={combinedClass}
  role={role}
  aria-label={ariaLabel}
  {...props}
>
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >{ariaLabel}</span
  >
</div>