<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  import type { IRadioProps } from './types';
  import { RadioStyleManager } from './styles';

  /**
   * Radio component - A single radio button (radio switch)
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles radio button rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other form components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param id - Unique identifier for the radio button (required)
   * @param name - Name attribute for grouping radio buttons (required)
   * @param value - Value of the radio button (required)
   * @param checked - Whether the radio button is currently checked
   * @param disabled - Whether the radio button is disabled
   * @param label - Label text to display next to the radio button
   * @param required - Whether the radio button is required in a form
   * @param class - Additional CSS classes
   * @returns A styled radio button with optional label
   */
  type Props = IRadioProps;

  let {
    id,
    name,
    value,
    checked = false,
    disabled = false,
    label,
    required = false,
    class: className = '',
    ...restProps
  }: Props = $props();

  // We'll use a callback to notify parent about changes
  // rather than direct binding since bind:group is required for radio inputs
  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    if (target.checked && restProps.onchange) {
      (restProps.onchange as (e: Event) => void)(e);
    }
  }

  let containerClasses = $derived(RadioStyleManager.getContainerClasses());
  let radioClasses = $derived(RadioStyleManager.getRadioClasses(disabled));
  let labelClasses = $derived(RadioStyleManager.getLabelClasses(disabled));
</script>

<div class={containerClasses}>
  <input
    id={id}
    type="radio"
    name={name}
    value={value}
    checked={checked}
    onchange={handleChange}
    disabled={disabled}
    required={required}
    class={radioClasses}
    {...restProps}
  />
  {#if label}
    <label
      for={id}
      class={labelClasses}
    >
      {label}
    </label>
  {/if}
</div>