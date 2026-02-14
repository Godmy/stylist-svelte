<script lang="ts">
  import { createAccessibilityCheckboxState } from '$stylist/design-system/models/accessibility-checkbox.svelte';

  let {
    label = '',
    checked = false,
    disabled = false,
    onValueInput,
    onValueChange,
    onChange = (value: boolean) => {},
    class: className = ''
  } = $props<{
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onValueInput?: (value: boolean) => void;
    onValueChange?: (value: boolean) => void;
    onChange?: (value: boolean) => void;
    class?: string;
  }>();

  let localChecked = $state(checked);
  const viewState = $derived(
    createAccessibilityCheckboxState({ checked: localChecked, disabled, class: className })
  );

  $effect(() => {
    localChecked = checked;
  });

  const handleChange = () => {
    if (!disabled) {
      localChecked = !localChecked;
      onValueInput?.(localChecked);
      onValueChange?.(localChecked);
      onChange(localChecked);
    }
  };
</script>

<div class={viewState.containerClasses}>
  <label class="flex items-center cursor-pointer">
    <input
      type="checkbox"
      class="sr-only"
      bind:checked={localChecked}
      disabled={disabled}
      onchange={handleChange}
    />
    <div class={viewState.indicatorClasses}>
      {#if localChecked}
        <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path>
        </svg>
      {/if}
    </div>
    <span class={viewState.labelClasses}>{label}</span>
  </label>
</div>



