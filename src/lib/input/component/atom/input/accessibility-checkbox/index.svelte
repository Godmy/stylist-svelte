<script lang="ts">
  import { createInputAccessibilityCheckboxState } from '$stylist/input/function/state/accessibility-checkbox';

  let props = $props<{
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onValueInput?: (value: boolean) => void;
    onValueChange?: (value: boolean) => void;
    onChange?: (value: boolean) => void;
    class?: string;
  }>();
  const state = createInputAccessibilityCheckboxState(props);

  let {
    label = '',
    disabled = false
  } = props;
</script>

<div class={state.containerClasses}>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only"
      checked={state.checked}
      disabled={disabled}
      onchange={state.handleChange}
    />
    <div class={state.indicatorClasses}>
      {#if state.checked}
        <svg class="w-4 h-4 text-[var(--color-text-inverse)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
        </svg>
      {/if}
    </div>
    <span class={state.labelClasses}>{label}</span>
  </label>
</div>






