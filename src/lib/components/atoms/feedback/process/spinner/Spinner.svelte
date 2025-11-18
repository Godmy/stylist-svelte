<script lang="ts">
  import { SpinnerStyleManager } from './styles';
  import { Loader2 } from 'lucide-svelte';
  import type { ISpinnerProps } from './types';

  /**
   * Spinner component - displays a rotating loading indicator
   * 
   * SOLID Principles applied:
   * 
   * Single Responsibility Principle: This component is responsible only for displaying a rotating loading indicator.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: Spinner can be substituted with other loading indicators without breaking functionality.
   * Interface Segregation Principle: ISpinnerProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  const props = $props<{
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'white' | 'gray';
    label?: string;
  } & ISpinnerProps>();

  // Set default values
  const size = props.size ?? 'md';
  const variant = props.variant ?? 'primary';
  const label = props.label ?? 'Loading...';

  // Generate the CSS classes using the style manager
  const containerClass = $derived(SpinnerStyleManager.generateContainerClass(props.class));
  const iconClass = $derived(SpinnerStyleManager.generateIconClass(size, variant));
  const labelClass = $derived(SpinnerStyleManager.generateLabelClass());
</script>

<div class={containerClass} role="status" aria-live="polite">
  <Loader2
    class={iconClass}
    aria-hidden="true"
  />
  <span class={labelClass}>{label}</span>
</div>