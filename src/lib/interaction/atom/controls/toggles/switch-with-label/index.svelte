<script lang="ts">
  /**
   * SwitchWithLabel component following SOLID principles
   *
   * Single Responsibility: Provides a toggle switch with an associated label
   * Open/Closed: Extensible through props without modifying the component
   * Liskov Substitution: Can be used as a toggle switch with label anywhere
   * Interface Segregation: Provides clear interface through well-defined props
   * Dependency Inversion: Depends on abstractions (types and style manager) not concretions
   */
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
  import { SwitchWithLabelStyleManager } from '$stylist/interaction/class/style-manager/switch-with-label';
  import type { ISwitchWithLabelProps } from '$stylist/interaction/interface/switch-with-label';

  const {
    checked = false,
    disabled = false,
    label,
    labelPosition = 'right',
    class: className = '',
    switchClass = '',
    labelClass = '',
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    ...restProps
  }: ISwitchWithLabelProps & InteractionHTMLAttributes<HTMLDivElement> = $props();

  let isChecked = $state(checked);

  // Update local state when checked prop changes
  $effect(() => {
    if (isChecked !== checked) {
      isChecked = checked;
    }
  });

  function handleToggle() {
    if (disabled) return;

    isChecked = !isChecked;

    onValueInput?.(isChecked);
    onValueChange?.(isChecked);
    if (onInput) {
      onInput(isChecked);
    }
    if (onChange) {
      onChange(isChecked);
    }
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle();
    }
  }

  // Using Svelte 5 runes for derived values
  const containerClasses = $derived(
    SwitchWithLabelStyleManager.getContainerClasses(labelPosition, className)
  );
  const labelClasses = $derived(
    SwitchWithLabelStyleManager.getLabelClasses(disabled, labelClass)
  );
  const switchClasses = $derived(
    SwitchWithLabelStyleManager.getSwitchClasses(checked, disabled, switchClass)
  );
  const handleClasses = $derived(
    SwitchWithLabelStyleManager.getHandleClasses(checked)
  );
  const labelPositionClass = $derived(
    SwitchWithLabelStyleManager.getLabelPositionClasses(labelPosition)
  );
</script>

<div
  class={containerClasses}
  role="switch"
  aria-checked={isChecked}
  {...restProps}
>
  {#if labelPosition === 'left'}
    <label
      for="switch-input"
      class={`${labelPositionClass} ${labelClasses}`}
    >
      {label}
    </label>
  {/if}

  <div
    class={switchClasses}
    role="switch"
    aria-checked={isChecked}
    onclick={handleToggle}
    onkeydown={handleKeyDown}
    tabindex={disabled ? -1 : 0}
  >
    <input
      id="switch-input"
      type="checkbox"
      class="sr-only"
      bind:checked={isChecked}
      onchange={handleToggle}
      disabled={disabled}
    />
    <span class={handleClasses}></span>
  </div>

  {#if labelPosition === 'right'}
    <label
      for="switch-input"
      class={`${labelPositionClass} ${labelClasses}`}
    >
      {label}
    </label>
  {/if}
</div>








