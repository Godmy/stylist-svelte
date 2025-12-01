<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    checked?: boolean;
    disabled?: boolean;
    label: string;
    description: string;
    class?: string;
    toggleClass?: string;
    labelClass?: string;
    descriptionClass?: string;
    onInput?: (checked: boolean) => void;
    onChange?: (checked: boolean) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    checked = false,
    disabled = false,
    label,
    description,
    class: className = '',
    toggleClass = '',
    labelClass = '',
    descriptionClass = '',
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

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
</script>

<div class={`flex items-start p-4 border border-gray-200 rounded-lg ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`} 
     onclick={handleToggle}
     onkeydown={handleKeyDown}
     tabindex={disabled ? -1 : 0}
     role="switch"
     aria-checked={isChecked}
     {...restProps}>
  <!-- Toggle Switch -->
  <div class={`relative inline-flex flex-shrink-0 h-6 w-11 ${toggleClass}`}
       aria-hidden="true">
    <input
      id="toggle-input"
      type="checkbox"
      class="sr-only"
      bind:checked={isChecked}
      onchange={handleToggle}
      disabled={disabled}
    />
    <div class={`absolute h-full w-full rounded-full transition-colors ${
      isChecked ? 'bg-blue-600' : 'bg-gray-200'
    }`}></div>
    <div class={`absolute left-0 inline-block h-4 w-4 transform rounded-full border-2 bg-white transition-transform ${
      isChecked ? 'translate-x-6' : 'translate-x-1'
    } ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}></div>
  </div>
  
  <!-- Label and Description -->
  <div class="ml-3 flex-1">
    <label for="toggle-input" class={`text-sm font-medium text-gray-900 ${labelClass}`}>
      {label}
    </label>
    <p class={`text-sm text-gray-500 ${descriptionClass}`}>
      {description}
    </p>
  </div>
</div>