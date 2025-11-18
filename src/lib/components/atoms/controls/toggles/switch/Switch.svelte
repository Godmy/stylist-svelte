<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  import type { ISwitchProps, SwitchSize } from './types';
  import { SwitchStyleManager } from './styles';

  /**
   * Switch component - A toggle switch with different sizes
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles switch rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other toggle components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param id - Unique identifier for the switch
   * @param label - Label text for the switch
   * @param description - Description text for the switch
   * @param checked - Whether the switch is checked
   * @param disabled - Whether the switch is disabled
   * @param size - Size of the switch ('sm' | 'md' | 'lg')
   * @param required - Whether the switch is required in a form
   * @param class - Additional CSS classes
   * @returns A toggle switch with optional label and description
   */
  type Props = ISwitchProps;

  let {
    id,
    label,
    description,
    checked = $bindable(false),
    disabled = false,
    size = 'md',
    required = false,
    class: className = '',
    ...restProps
  }: Props = $props();

  let labelClasses = $derived(SwitchStyleManager.getLabelClasses(disabled, className));
  let trackClasses = $derived(SwitchStyleManager.getTrackClasses(size, checked));
  let inputClasses = $derived(SwitchStyleManager.getInputClasses());
  let knobClasses = $derived(SwitchStyleManager.getKnobClasses(size, checked));
  let labelTextClasses = $derived(SwitchStyleManager.getLabelTextClasses());
  let labelTitleClasses = $derived(SwitchStyleManager.getLabelTitleClasses());
  let labelDescriptionClasses = $derived(SwitchStyleManager.getLabelDescriptionClasses());
  let requiredMarkerClasses = $derived(SwitchStyleManager.getRequiredMarkerClasses());
</script>

<label class={labelClasses}>
  <span class={trackClasses}>
    <input
      id={id}
      type="checkbox"
      class={inputClasses}
      bind:checked
      disabled={disabled}
      required={required}
      aria-describedby={description ? `${id}-description` : undefined}
      {...restProps}
    />
    <span
      aria-hidden="true"
      class={knobClasses}
    ></span>
  </span>

  {#if label || description}
    <span class={labelTextClasses}>
      {#if label}
        <span class={labelTitleClasses}>
          {label}
          {#if required}
            <span class={requiredMarkerClasses} aria-hidden="true">*</span>
          {/if}
        </span>
      {/if}
      {#if description}
        <span id={`${id}-description`} class={labelDescriptionClasses}>
          {description}
        </span>
      {/if}
    </span>
  {/if}
</label>