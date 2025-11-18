<script lang="ts">
  import { CharacterCountStyleManager } from './styles';
  import type { ICharacterCountProps } from './types';

  /**
   * CharacterCount component - displays current/max character count with color indication
   * 
   * SOLID Principles applied:
   * 
   * Single Responsibility Principle: This component is responsible only for displaying character count.
   * Open/Closed Principle: The component is closed for modification but open for extension via CSS classes.
   * Liskov Substitution Principle: CharacterCount can be substituted with other character count indicators without breaking functionality.
   * Interface Segregation Principle: ICharacterCountProps provides a focused interface for the component.
   * Dependency Inversion Principle: Component depends on abstractions (styles manager and types) rather than concretions.
   */
  const props = $props<{
    current?: number;
    max?: number;
    showPercentage?: boolean;
    content?: any;
  } & ICharacterCountProps>();

  // Set default values
  const current = props.current ?? 0;
  const max = props.max ?? 100;
  const showPercentage = props.showPercentage ?? false;
  const content = props.content;

  // Calculate derived values
  const percentage = $derived(max > 0 ? Math.min(100, (current / max) * 100) : 0);
  const ratio = $derived(current / max);

  const message = $derived(showPercentage
    ? `${Math.round(percentage)}% (${current}/${max})`
    : `${current}/${max}`
  );

  // Generate the CSS class using the style manager
  const combinedClass = $derived(CharacterCountStyleManager.generateClass(ratio, props.class));
</script>

<div class={combinedClass} {...props}>
  {#if content}
    {@render content()}
  {:else}
    {message}
  {/if}
</div>