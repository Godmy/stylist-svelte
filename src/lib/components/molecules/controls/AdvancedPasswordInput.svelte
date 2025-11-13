<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Eye, EyeOff } from 'lucide-svelte';

  type Props = {
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    class?: string;
    inputClass?: string;
    buttonClass?: string;
    showStrengthMeter?: boolean;
    onInput?: (value: string) => void;
    onChange?: (value: string) => void;
  } & HTMLAttributes<HTMLInputElement>;

  let {
    value = '',
    placeholder = 'Enter password',
    disabled = false,
    readonly = false,
    class: className = '',
    inputClass = '',
    buttonClass = '',
    showStrengthMeter = false,
    onInput,
    onChange,
    ...restProps
  }: Props = $props();

  let showPassword = $state(false);
  let inputValue = $state(value);

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    inputValue = target.value;

    if (onInput) {
      onInput(inputValue);
    }
  }

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    inputValue = target.value;

    if (onChange) {
      onChange(inputValue);
    }
  }

  // Calculate password strength (0-4 scale)
  function getPasswordStrength(): number {
    if (!inputValue) return 0;

    let strength = 0;
    if (inputValue.length >= 8) strength += 1;
    if (/[A-Z]/.test(inputValue)) strength += 1;
    if (/[0-9]/.test(inputValue)) strength += 1;
    if (/[^A-Za-z0-9]/.test(inputValue)) strength += 1;

    // Very strong if it has all criteria
    if (strength === 4 && inputValue.length >= 12) strength = 4;

    return Math.min(strength, 4);
  }

  function getStrengthLabel(): string {
    const strength = getPasswordStrength();
    switch (strength) {
      case 0: return 'Empty';
      case 1: return 'Very Weak';
      case 2: return 'Weak';
      case 3: return 'Medium';
      case 4: return 'Strong';
      default: return 'Unknown';
    }
  }

  function getStrengthColor(): string {
    const strength = getPasswordStrength();
    switch (strength) {
      case 0: return 'bg-gray-200';
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-yellow-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-200';
    }
  }
</script>

<div class={`relative ${className}`}>
  <div class="relative">
    <input
      type={showPassword ? 'text' : 'password'}
      class={`w-full px-3 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
        disabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : ''
      } ${inputClass}`}
      bind:value={inputValue}
      placeholder={placeholder}
      disabled={disabled}
      readonly={readonly}
      oninput={handleInput}
      onchange={handleChange}
      {...restProps}
    />
    <button
      type="button"
      class={`absolute inset-y-0 right-0 pr-3 flex items-center ${buttonClass} ${
        disabled ? 'hidden' : 'block'
      }`}
      onclick={() => showPassword = !showPassword}
      disabled={disabled}
    >
      {#if showPassword}
        <EyeOff class="h-5 w-5 text-gray-500" />
      {:else}
        <Eye class="h-5 w-5 text-gray-500" />
      {/if}
    </button>
  </div>

  {#if showStrengthMeter && inputValue}
    <div class="mt-2">
      <div class="flex items-center justify-between mb-1">
        <span class="text-xs font-medium">Password strength:</span>
        <span class={`text-xs font-medium ${
          getPasswordStrength() < 2 ? 'text-red-600' :
          getPasswordStrength() < 3 ? 'text-orange-600' :
          getPasswordStrength() < 4 ? 'text-yellow-600' : 'text-green-600'
        }`}>
          {getStrengthLabel()}
        </span>
      </div>
      <div class="w-full bg-gray-200 rounded-full h-1.5">
        <div
          class={`h-1.5 rounded-full ${getStrengthColor()}`}
          style={`width: ${getPasswordStrength() * 25}%`}
        ></div>
      </div>
    </div>
  {/if}
</div>