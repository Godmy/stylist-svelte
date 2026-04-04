<!--
/**
 * AdvancedPasswordInput Component - Следует принципам SOLID:
 *
 * 1. Single Responsibility Principle (SRP):
 *    Компонент отвечает только за отображение и управление паролем.
 *    Логика стилизации вынесена в AdvancedPasswordInputStyleManager.
 *
 * 2. Open/Closed Principle (OCP):
 *    Легко расширяется через пропсы и CSS-переменные темы.
 *
 * 3. Liskov Substitution Principle (LSP):
 *    Соблюдает контракт, определённый интерфейсом IAdvancedPasswordInputProps.
 *
 * 4. Interface Segregation Principle (ISP):
 *    Использует минимально необходимый интерфейс IAdvancedPasswordInputProps.
 *
 * 5. Dependency Inversion Principle (DIP):
 *    Зависит от абстракции (типов и стилей) а не от конкретных реализаций.
 */
-->
<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
  import { Icon as BaseIcon } from '$stylist';
const Eye = 'eye';
const EyeOff = 'eye-off';

  import { AdvancedPasswordInputStyleManager } from '$stylist/input/class/style-manager/advanced-password-input';
  import type { IAdvancedPasswordInputProps } from '$stylist/input/interface/component/advanced-password-input/other';

  let {
    value = '',
    placeholder = 'Enter password',
    disabled = false,
    readonly = false,
    class: className = '',
    inputClass = '',
    buttonClass = '',
    showStrengthMeter = false,
    onValueInput,
    onValueChange,
    onInput,
    onChange,
    ...restProps
  }: IAdvancedPasswordInputProps & InteractionHTMLAttributes<HTMLInputElement> = $props();

  let showPassword = $state(false);
  let inputValue = $state(value);

  function handleInput(e: Event) {
    const target = e.target as HTMLInputElement;
    inputValue = target.value;

    if (onInput) {
      onInput(inputValue);
    }
    onValueInput?.(inputValue);
  }

  function handleChange(e: Event) {
    const target = e.target as HTMLInputElement;
    inputValue = target.value;

    if (onChange) {
      onChange(inputValue);
    }
    onValueChange?.(inputValue);
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
        <BaseIcon name={EyeOff} class={eyeIconClass} />
      {:else}
        <BaseIcon name={Eye} class={eyeIconClass} />
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







