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
  import { createAdvancedPasswordInputState } from '$stylist/input/function/state/advanced-password-input';
  import type { SlotAdvancedPasswordInput as IAdvancedPasswordInputProps } from '$stylist/input/interface/slot/advanced-password-input';

  const Eye = 'eye';
  const EyeOff = 'eye-off';

  let props: IAdvancedPasswordInputProps & InteractionHTMLAttributes<HTMLInputElement> = $props();
  const state = createAdvancedPasswordInputState(props);
</script>

<div class={state.containerClass}>
  <div class={state.inputWrapperClass}>
    <input
      type={state.type}
      class={state.inputClass}
      bind:value={state.value}
      placeholder={state.placeholder}
      disabled={state.disabled}
      readonly={state.readonly}
      oninput={state.handleInput}
      onchange={state.handleChange}
      {...props}
    />
    <button
      type="button"
      class={state.buttonClass}
      onclick={state.togglePasswordVisibility}
      disabled={state.disabled}
    >
      {#if state.showPassword}
        <BaseIcon name={EyeOff} class={state.eyeIconClass} />
      {:else}
        <BaseIcon name={Eye} class={state.eyeIconClass} />
      {/if}
    </button>
  </div>

  {#if state.showStrengthMeter && state.value}
    <div class={state.strengthMeterContainerClass}>
      <div class={state.strengthLabelsContainerClass}>
        <span class={state.strengthLabelClass}>Password strength:</span>
        <span class={state.strengthValueClass}>
          {state.strengthLabel}
        </span>
      </div>
      <div class={state.strengthMeterBgClass}>
        <div
          class={state.strengthMeterFillClass}
          style={`width: ${state.strength * 25}%`}
        ></div>
      </div>
    </div>
  {/if}
</div>







