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
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import { createSwitchWithLabelState } from '$stylist/control/function/state/switch-with-label';
  import type { SlotSwitchWithLabel as ISwitchWithLabelProps } from '$stylist/control/interface/slot/switch-with-label';

  let props: ISwitchWithLabelProps & InteractionHTMLAttributes<HTMLDivElement> = $props();

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
  }: ISwitchWithLabelProps & InteractionHTMLAttributes<HTMLDivElement> = props;

  const state = createSwitchWithLabelState({
    checked,
    disabled,
    label,
    labelPosition,
    class: className,
    switchClass,
    labelClass,
    onValueInput,
    onValueChange,
    onInput,
    onChange
  });
</script>

<div
  class={state.containerClasses}
  role="switch"
  aria-checked={state.checked}
  {...restProps}
>
  {#if labelPosition === 'left'}
    <label
      for="switch-input"
      class={`${state.labelPositionClass} ${state.labelClasses}`}
    >
      {label}
    </label>
  {/if}

  <div
    class={state.switchClasses}
    role="switch"
    aria-checked={state.checked}
    onclick={state.handleToggle}
    onkeydown={state.handleKeyDown}
    tabindex={disabled ? -1 : 0}
  >
    <input
      id="switch-input"
      type="checkbox"
      class="sr-only"
      checked={state.checked}
      onchange={state.handleToggle}
      disabled={disabled}
    />
    <span class={state.handleClasses}></span>
  </div>

  {#if labelPosition === 'right'}
    <label
      for="switch-input"
      class={`${state.labelPositionClass} ${state.labelClasses}`}
    >
      {label}
    </label>
  {/if}
</div>








