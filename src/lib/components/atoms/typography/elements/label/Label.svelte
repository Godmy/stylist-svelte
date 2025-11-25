<script lang="ts">
  import type { Snippet } from 'svelte';

  import type { LabelProps } from './types';
  import {
    DEFAULT_LABEL_SIZE,
    DEFAULT_LABEL_REQUIRED,
    DEFAULT_LABEL_DISABLED,
    REQUIRED_INDICATOR_CLASSES
  } from './constant';
  import { LabelStyleManager } from './styles';

  /**
   * Label component - A label component for form elements.
   * If `children` is provided, it will be rendered; otherwise, `text` will be used.
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles component rendering and state.
   * - Open/Closed: Extendable through properties but closed for modification.
   * - Liskov Substitution: Can be substituted with other similar components.
   * - Interface Segregation: Small focused interface.
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions.
   *
   * @param size - Size of the label.
   * @param required - Indicates if the field is required.
   * @param disabled - Disabled state of the label.
   * @param htmlFor - The `for` attribute to link with a form element.
   * @param text - Text content of the label.
   * @param children - Slot content for the label (alternative to `text`).
   * @param class - Additional CSS classes.
   * @returns An accessible, styled label element.
   */
  let {
    size = DEFAULT_LABEL_SIZE,
    required = DEFAULT_LABEL_REQUIRED,
    disabled = DEFAULT_LABEL_DISABLED,
    htmlFor,
    text,
    children,
    class: className = '',
    ...restProps
  }: LabelProps = $props();

  let classes = $derived(
    LabelStyleManager.getLabelClasses(size, disabled, className)
  );
</script>

<label for={htmlFor} class={classes} {...restProps}>
  {#if children}
    {@render children()}
  {:else if text}
    {text}
  {/if}
  {#if required}
    <span class={REQUIRED_INDICATOR_CLASSES} aria-hidden="true">*</span>
  {/if}
</label>