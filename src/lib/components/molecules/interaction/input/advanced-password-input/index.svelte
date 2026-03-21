<!--
/**
 * AdvancedPasswordInput Component - РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
 *
 * 1. Single Responsibility Principle (SRP):
 *    РљРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ Рё СѓРїСЂР°РІР»РµРЅРёРµ РїР°СЂРѕР»РµРј.
 *    Р›РѕРіРёРєР° СЃС‚РёР»РёР·Р°С†РёРё РІС‹РЅРµСЃРµРЅР° РІ AdvancedPasswordInputStyleManager.
 *
 * 2. Open/Closed Principle (OCP):
 *    Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµС‚СЃСЏ С‡РµСЂРµР· РїСЂРѕРїСЃС‹ Рё CSS-РїРµСЂРµРјРµРЅРЅС‹Рµ С‚РµРјС‹.
 *
 * 3. Liskov Substitution Principle (LSP):
 *    РЎРѕР±Р»СЋРґР°РµС‚ РєРѕРЅС‚СЂР°РєС‚, РѕРїСЂРµРґРµР»С‘РЅРЅС‹Р№ РёРЅС‚РµСЂС„РµР№СЃРѕРј IAdvancedPasswordInputProps.
 *
 * 4. Interface Segregation Principle (ISP):
 *    РСЃРїРѕР»СЊР·СѓРµС‚ РјРёРЅРёРјР°Р»СЊРЅРѕ РЅРµРѕР±С…РѕРґРёРјС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ IAdvancedPasswordInputProps.
 *
 * 5. Dependency Inversion Principle (DIP):
 *    Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёРё (С‚РёРїРѕРІ Рё СЃС‚РёР»РµР№) Р° РЅРµ РѕС‚ РєРѕРЅРєСЂРµС‚РЅС‹С… СЂРµР°Р»РёР·Р°С†РёР№.
 */
-->
<script lang="ts">
  import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
const Eye = 'eye';
const EyeOff = 'eye-off';

  import { AdvancedPasswordInputStyleManager } from '$stylist/design-system/styles/interaction/advanced-password-input';
  import type { IAdvancedPasswordInputProps } from '$stylist/design-system/contracts/interaction/advanced-password-input';

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




