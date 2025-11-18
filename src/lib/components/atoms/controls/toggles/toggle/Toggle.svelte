<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';

  import type { IToggleProps, ToggleSize } from './types';
  import { ToggleStyleManager } from './styles';

  /**
   * Toggle component - A toggle switch for enabling/disabling a state
   *
   * Following SOLID principles:
   * - Single Responsibility: Only handles toggle rendering and state
   * - Open/Closed: Extendable through properties but closed for modification
   * - Liskov Substitution: Can be substituted with other toggle components
   * - Interface Segregation: Small focused interface
   * - Dependency Inversion: Depends on abstractions (interfaces) rather than concretions
   *
   * @param checked - Current state of the toggle
   * @param disabled - Disabled state
   * @param size - Size of the toggle ('sm' | 'md' | 'lg')
   * @param class - Additional CSS classes
   * @returns A toggle switch for enabling/disabling a state
   */
  type Props = IToggleProps;

  let {
    checked = $bindable(false),
    disabled = false,
    size = 'md',
    class: className = '',
    ...restProps
  }: Props = $props();

  let sizeClasses = $derived(ToggleStyleManager.getSizeClasses(size));
  let containerClasses = $derived(ToggleStyleManager.getContainerClasses(className));
  let inputClasses = $derived(ToggleStyleManager.getInputClasses());
  let trackClasses = $derived(ToggleStyleManager.getTrackClasses(checked, disabled, sizeClasses.width, sizeClasses.height));
  let thumbClasses = $derived(ToggleStyleManager.getThumbClasses(checked, size, sizeClasses.thumb));
  let disabledClass = $derived(ToggleStyleManager.getDisabledClass(disabled));

  // Handler for state changes
  const handleChange = (e: Event) => {
    // Generate event if it's defined in restProps
  };
</script>

<div class={containerClasses}>
  <input
    type="checkbox"
    bind:checked={checked}
    disabled={disabled}
    class={inputClasses}
    onchange={handleChange}
    {...restProps}
  />

  <div
    class={trackClasses}
    class:opacity-50={disabledClass}
  >
    <div
      class={thumbClasses}
    ></div>
  </div>
</div>