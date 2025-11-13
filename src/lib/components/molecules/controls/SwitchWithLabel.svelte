<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';

  type Props = {
    checked?: boolean;
    disabled?: boolean;
    label: string;
    labelPosition?: 'start' | 'end';
    class?: string;
    switchClass?: string;
    labelClass?: string;
    onInput?: (checked: boolean) => void;
    onChange?: (checked: boolean) => void;
  } & HTMLAttributes<HTMLDivElement>;

  let {
    checked = false,
    disabled = false,
    label,
    labelPosition = 'end',
    class: className = '',
    switchClass = '',
    labelClass = '',
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

<div class={`flex items-center ${labelPosition === 'start' ? 'flex-row-reverse' : 'flex-row'} ${className}`}
     role="switch"
     aria-checked={isChecked}
     {...restProps}>
  {#if labelPosition === 'end'}
    <label for="switch-input" class={`mr-3 text-sm font-medium text-gray-700 ${labelClass} ${disabled ? 'opacity-50' : ''}`}>
      {label}
    </label>
  {/if}
  
  <div class={`relative inline-flex items-center h-6 rounded-full transition-colors ${
    isChecked ? 'bg-blue-600' : 'bg-gray-200'
  } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} w-11 ${switchClass}`}
       role="switch"
       aria-checked={isChecked}
       onclick={handleToggle}
       onkeydown={handleKeyDown}
       tabindex={disabled ? -1 : 0}>
    <input
      id="switch-input"
      type="checkbox"
      class="sr-only"
      bind:checked={isChecked}
      onchange={handleToggle}
      disabled={disabled}
    />
    <span class={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
      isChecked ? 'translate-x-6' : 'translate-x-1'
    }`}></span>
  </div>
  
  {#if labelPosition === 'start'}
    <label for="switch-input" class={`ml-3 text-sm font-medium text-gray-700 ${labelClass} ${disabled ? 'opacity-50' : ''}`}>
      {label}
    </label>
  {/if}
</div>