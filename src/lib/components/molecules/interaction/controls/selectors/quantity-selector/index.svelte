<script lang="ts">
  import type { IQuantitySelectorProps } from '$stylist/design-system/contracts/interaction/quantity-selector';
  import type { TokenSelectorKind } from '$stylist/design-system/tokens/interaction/selection-kind';
  import type { TokenSize } from '$stylist/design-system/tokens/architecture/size';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
  import { QuantitySelectorStyleManager } from '$stylist/design-system/styles/interaction/quantity-selector';

  const Plus = 'plus';
  const Minus = 'minus';


  /**
   * РљРѕРјРїРѕРЅРµРЅС‚ РґР»СЏ РІС‹Р±РѕСЂР° РєРѕР»РёС‡РµСЃС‚РІР°
   *
   * РЎР»РµРґСѓРµС‚ РїСЂРёРЅС†РёРїР°Рј SOLID:
   * - SRP: РљРѕРјРїРѕРЅРµРЅС‚ РѕС‚РІРµС‡Р°РµС‚ С‚РѕР»СЊРєРѕ Р·Р° РѕС‚РѕР±СЂР°Р¶РµРЅРёРµ Рё РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёРµ СЃ РїРѕР»СЊР·РѕРІР°С‚РµР»РµРј
   * - OCP: Р›РµРіРєРѕ СЂР°СЃС€РёСЂСЏРµРј Р·Р° СЃС‡РµС‚ РїСЂРѕРїСЃРѕРІ
   * - LSP: РџРѕРґС‡РёРЅСЏРµС‚СЃСЏ РєРѕРЅС‚СЂР°РєС‚Сѓ, РѕРїСЂРµРґРµР»РµРЅРЅРѕРјСѓ РІ РёРЅС‚РµСЂС„РµР№СЃРµ IQuantitySelectorProps
   * - ISP: РџСЂРµРґРѕСЃС‚Р°РІР»СЏРµС‚ РјРёРЅРёРјР°Р»СЊРЅРѕ РЅРµРѕР±С…РѕРґРёРјС‹Р№ РёРЅС‚РµСЂС„РµР№СЃ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёСЏ
   * - DIP: Р—Р°РІРёСЃРёС‚ РѕС‚ Р°Р±СЃС‚СЂР°РєС†РёР№ (РёРЅС‚РµСЂС„РµР№СЃРѕРІ РІ types.ts Рё СЃС‚РёР»РµР№ РІ styles.ts)
   *
   * РЎР»РµРґСѓРµС‚ Р°СЂС…РёС‚РµРєС‚СѓСЂРµ Atomic Design РєР°Рє РјРѕР»РµРєСѓР»Р°:
   * - РЎРѕСЃС‚РѕРёС‚ РёР· Р°С‚РѕРјРѕРІ (РєРЅРѕРїРєРё, РёРЅРїСѓС‚, РёРєРѕРЅРєРё) Рё РїСЂРµРґРѕСЃС‚Р°РІР»СЏРµС‚ Р±РѕР»РµРµ СЃР»РѕР¶РЅРѕРµ РїРѕРІРµРґРµРЅРёРµ
   * - РњРѕР¶РµС‚ РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊСЃСЏ РєР°Рє СЃС‚СЂРѕРёС‚РµР»СЊРЅС‹Р№ Р±Р»РѕРє РґР»СЏ Р±РѕР»РµРµ СЃР»РѕР¶РЅС‹С… РєРѕРјРїРѕРЅРµРЅС‚РѕРІ
   */
  let {
    value = 1,
    min = 1,
    max = 99,
    step = 1,
    disabled = false,
    variant = 'default',
    size = 'md',
    class: hostClass = '',
    inputClass = '',
    buttonClass = '',
    onValueChange,
    onIncrement,
    onDecrement,
    showInput = true,
    showButtons = true,
    label,
    ...restProps
  }: IQuantitySelectorProps = $props();

  let quantity = $state(value);
  const inputId = `quantity-${Math.random().toString(36).slice(2, 9)}`;

  $effect(() => {
    quantity = value;
  });

  function increment() {
    if (disabled || quantity >= max) return;

    const newValue = Math.min(quantity + step, max);
    quantity = newValue;
    onValueChange?.(newValue);
    onIncrement?.(newValue);
  }

  function decrement() {
    if (disabled || quantity <= min) return;

    const newValue = Math.max(quantity - step, min);
    quantity = newValue;
    onValueChange?.(newValue);
    onDecrement?.(newValue);
  }

  function handleInputChange(e: Event) {
    const target = e.target as HTMLInputElement;
    let newValue = parseInt(target.value) || min;

    // Ensure value is within bounds and aligned to step
    newValue = Math.max(min, Math.min(max, newValue));
    if (step > 1) {
      newValue = Math.round(newValue / step) * step;
      newValue = Math.max(min, Math.min(max, newValue));
    }

    quantity = newValue;
    onValueChange?.(newValue);
  }

  // Р’С‹С‡РёСЃР»СЏРµРјС‹Рµ СЃС‚РёР»Рё
  const rootClasses = $derived(QuantitySelectorStyleManager.getRootClasses(hostClass));
  const labelClasses = $derived(QuantitySelectorStyleManager.getLabelClasses());
  const containerClasses = $derived(QuantitySelectorStyleManager.getContainerClasses());
  const decrementButtonClasses = $derived(
    QuantitySelectorStyleManager.getButtonClasses(disabled, showButtons, true, size as TokenSize, buttonClass)
  );
  const incrementButtonClasses = $derived(
    QuantitySelectorStyleManager.getButtonClasses(disabled, showButtons, false, size as TokenSize, buttonClass)
  );
  const inputClasses = $derived(
    QuantitySelectorStyleManager.getInputClasses(showButtons, size as TokenSize, variant as TokenSelectorKind, inputClass)
  );
  const iconClasses = $derived(QuantitySelectorStyleManager.getIconClasses());
</script>

<div class={rootClasses} {...restProps}>
  {#if label}
    <label for={inputId} class={labelClasses}>{label}</label>
  {/if}

  <div class={containerClasses}>
    {#if showButtons}
      <button
        type="button"
        class={decrementButtonClasses}
        onclick={decrement}
        disabled={disabled || quantity <= min}
        aria-label="Decrease quantity"
      >
        <BaseIcon name={Minus} class={iconClasses} />
      </button>
    {/if}

    {#if showInput}
      <input
        id={inputId}
        type="number"
        class={inputClasses}
        value={quantity}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        oninput={handleInputChange}
        aria-label="Quantity selector"
      />
    {/if}

    {#if showButtons}
      <button
        type="button"
        class={incrementButtonClasses}
        onclick={increment}
        disabled={disabled || quantity >= max}
        aria-label="Increase quantity"
      >
        <BaseIcon name={Plus} class={iconClasses} />
      </button>
    {/if}
  </div>
</div>









