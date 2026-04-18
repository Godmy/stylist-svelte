<script lang="ts">
  import { createToggleWithDescriptionState } from '$stylist/control/function/state/toggle-with-description';
  import type { ToggleWithDescriptionProps } from '$stylist/control/type/struct/toggle-with-description-props';

  let {
    checked = false,
    disabled = false,
    label,
    description,
    class: className = '',
    toggleClass = '',
    labelClass = '',
    descriptionClass = '',
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    ...restProps
  }: ToggleWithDescriptionProps = $props();
  const state = createToggleWithDescriptionState({
    checked,
    disabled,
    label,
    description,
    class: className,
    toggleClass,
    labelClass,
    descriptionClass,
    onValueInput,
    onValueChange,
    onInput,
    onChange
  });
</script>

<div class={state.containerClass} 
     onclick={state.handleToggle}
     onkeydown={state.handleKeyDown}
     tabindex={disabled ? -1 : 0}
     role="switch"
     aria-checked={state.isChecked}
     {...restProps}>
  <!-- SlotToggle Switch -->
  <div class={`relative inline-flex flex-shrink-0 h-6 w-11 ${state.toggleClass}`}
       aria-hidden="true">
    <input
      id="toggle-input"
      type="checkbox"
      class="sr-only"
      checked={state.isChecked}
      onchange={state.handleToggle}
      disabled={disabled}
    />
    <div class={state.trackClass}></div>
    <div class={state.thumbClass}></div>
  </div>
  
  <!-- Label and Description -->
  <div class="ml-3 flex-1">
    <label for="toggle-input" class={`text-sm font-medium text-[var(--color-text-primary)] ${state.labelClass}`}>
      {label}
    </label>
    <p class={`text-sm text-[var(--color-text-secondary)] ${state.descriptionClass}`}>
      {description}
    </p>
  </div>
</div>





