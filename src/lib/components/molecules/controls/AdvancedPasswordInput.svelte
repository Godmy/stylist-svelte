<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { Eye, EyeOff } from 'lucide-svelte';
  import { AdvancedPasswordInputStyleManager } from './AdvancedPasswordInput.styles';

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

  // Generate CSS classes using the style manager
  const containerClass = $derived(AdvancedPasswordInputStyleManager.getContainerClass(className));
  const inputWrapperClass = $derived(AdvancedPasswordInputStyleManager.getInputWrapperClass());
  const inputClassComputed = $derived(AdvancedPasswordInputStyleManager.getInputClass(disabled, inputClass));
  const buttonClassComputed = $derived(AdvancedPasswordInputStyleManager.getToggleButtonClass(disabled, buttonClass));
  const eyeIconClass = $derived(AdvancedPasswordInputStyleManager.getEyeIconClass());
  const strengthMeterContainerClass = $derived(AdvancedPasswordInputStyleManager.getStrengthMeterContainerClass());
  const strengthLabelsContainerClass = $derived(AdvancedPasswordInputStyleManager.getStrengthLabelsContainerClass());
  const strengthLabelClass = $derived(AdvancedPasswordInputStyleManager.getStrengthLabelClass());
  const strengthValueClass = $derived(AdvancedPasswordInputStyleManager.getStrengthValueClass(getPasswordStrength()));
  const strengthMeterBgClass = $derived(AdvancedPasswordInputStyleManager.getStrengthMeterBackgroundClass());
  const strengthMeterFillClass = $derived(AdvancedPasswordInputStyleManager.getStrengthMeterFillClass(getPasswordStrength()));
</script>

<div class={containerClass}>
  <div class={inputWrapperClass}>
    <input
      type={showPassword ? 'text' : 'password'}
      class={inputClassComputed}
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
      class={buttonClassComputed}
      onclick={() => showPassword = !showPassword}
      disabled={disabled}
    >
      {#if showPassword}
        <EyeOff class={eyeIconClass} />
      {:else}
        <Eye class={eyeIconClass} />
      {/if}
    </button>
  </div>

  {#if showStrengthMeter && inputValue}
    <div class={strengthMeterContainerClass}>
      <div class={strengthLabelsContainerClass}>
        <span class={strengthLabelClass}>Password strength:</span>
        <span class={strengthValueClass}>
          {getStrengthLabel()}
        </span>
      </div>
      <div class={strengthMeterBgClass}>
        <div
          class={strengthMeterFillClass}
          style={`width: ${getPasswordStrength() * 25}%`}
        ></div>
      </div>
    </div>
  {/if}
</div>