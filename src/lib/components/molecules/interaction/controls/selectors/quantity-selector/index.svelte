<script lang="ts">
  import type { IQuantitySelectorProps } from '$stylist/design-system/contracts/interaction/quantity-selector';
  import type { QuantitySelectorVariant } from '$stylist/design-system/tokens/interaction/variants';
  import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
  import { Icon as BaseIcon } from '$stylist/components/atoms';
  import { QuantitySelectorStyleManager } from '$stylist/design-system/styles/interaction/quantity-selector';

  const Plus = 'plus';
  const Minus = 'minus';


  /**
   * Р С™Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљ Р Т‘Р В»РЎРЏ Р Р†РЎвЂ№Р В±Р С•РЎР‚Р В° Р С”Р С•Р В»Р С‘РЎвЂЎР ВµРЎРѓРЎвЂљР Р†Р В°
   *
   * Р РЋР В»Р ВµР Т‘РЎС“Р ВµРЎвЂљ Р С—РЎР‚Р С‘Р Р…РЎвЂ Р С‘Р С—Р В°Р С SOLID:
   * - SRP: Р С™Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљ Р С•РЎвЂљР Р†Р ВµРЎвЂЎР В°Р ВµРЎвЂљ РЎвЂљР С•Р В»РЎРЉР С”Р С• Р В·Р В° Р С•РЎвЂљР С•Р В±РЎР‚Р В°Р В¶Р ВµР Р…Р С‘Р Вµ Р С‘ Р Р†Р В·Р В°Р С‘Р СР С•Р Т‘Р ВµР в„–РЎРѓРЎвЂљР Р†Р С‘Р Вµ РЎРѓ Р С—Р С•Р В»РЎРЉР В·Р С•Р Р†Р В°РЎвЂљР ВµР В»Р ВµР С
   * - OCP: Р вЂєР ВµР С–Р С”Р С• РЎР‚Р В°РЎРѓРЎв‚¬Р С‘РЎР‚РЎРЏР ВµР С Р В·Р В° РЎРѓРЎвЂЎР ВµРЎвЂљ Р С—РЎР‚Р С•Р С—РЎРѓР С•Р Р†
   * - LSP: Р СџР С•Р Т‘РЎвЂЎР С‘Р Р…РЎРЏР ВµРЎвЂљРЎРѓРЎРЏ Р С”Р С•Р Р…РЎвЂљРЎР‚Р В°Р С”РЎвЂљРЎС“, Р С•Р С—РЎР‚Р ВµР Т‘Р ВµР В»Р ВµР Р…Р Р…Р С•Р СРЎС“ Р Р† Р С‘Р Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓР Вµ IQuantitySelectorProps
   * - ISP: Р СџРЎР‚Р ВµР Т‘Р С•РЎРѓРЎвЂљР В°Р Р†Р В»РЎРЏР ВµРЎвЂљ Р СР С‘Р Р…Р С‘Р СР В°Р В»РЎРЉР Р…Р С• Р Р…Р ВµР С•Р В±РЎвЂ¦Р С•Р Т‘Р С‘Р СРЎвЂ№Р в„– Р С‘Р Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓ Р Р†Р В·Р В°Р С‘Р СР С•Р Т‘Р ВµР в„–РЎРѓРЎвЂљР Р†Р С‘РЎРЏ
   * - DIP: Р вЂ”Р В°Р Р†Р С‘РЎРѓР С‘РЎвЂљ Р С•РЎвЂљ Р В°Р В±РЎРѓРЎвЂљРЎР‚Р В°Р С”РЎвЂ Р С‘Р в„– (Р С‘Р Р…РЎвЂљР ВµРЎР‚РЎвЂћР ВµР в„–РЎРѓР С•Р Р† Р Р† types.ts Р С‘ РЎРѓРЎвЂљР С‘Р В»Р ВµР в„– Р Р† styles.ts)
   *
   * Р РЋР В»Р ВµР Т‘РЎС“Р ВµРЎвЂљ Р В°РЎР‚РЎвЂ¦Р С‘РЎвЂљР ВµР С”РЎвЂљРЎС“РЎР‚Р Вµ Atomic Design Р С”Р В°Р С” Р СР С•Р В»Р ВµР С”РЎС“Р В»Р В°:
   * - Р РЋР С•РЎРѓРЎвЂљР С•Р С‘РЎвЂљ Р С‘Р В· Р В°РЎвЂљР С•Р СР С•Р Р† (Р С”Р Р…Р С•Р С—Р С”Р С‘, Р С‘Р Р…Р С—РЎС“РЎвЂљ, Р С‘Р С”Р С•Р Р…Р С”Р С‘) Р С‘ Р С—РЎР‚Р ВµР Т‘Р С•РЎРѓРЎвЂљР В°Р Р†Р В»РЎРЏР ВµРЎвЂљ Р В±Р С•Р В»Р ВµР Вµ РЎРѓР В»Р С•Р В¶Р Р…Р С•Р Вµ Р С—Р С•Р Р†Р ВµР Т‘Р ВµР Р…Р С‘Р Вµ
   * - Р СљР С•Р В¶Р ВµРЎвЂљ Р С‘РЎРѓР С—Р С•Р В»РЎРЉР В·Р С•Р Р†Р В°РЎвЂљРЎРЉРЎРѓРЎРЏ Р С”Р В°Р С” РЎРѓРЎвЂљРЎР‚Р С•Р С‘РЎвЂљР ВµР В»РЎРЉР Р…РЎвЂ№Р в„– Р В±Р В»Р С•Р С” Р Т‘Р В»РЎРЏ Р В±Р С•Р В»Р ВµР Вµ РЎРѓР В»Р С•Р В¶Р Р…РЎвЂ№РЎвЂ¦ Р С”Р С•Р СР С—Р С•Р Р…Р ВµР Р…РЎвЂљР С•Р Р†
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

  // Р вЂ™РЎвЂ№РЎвЂЎР С‘РЎРѓР В»РЎРЏР ВµР СРЎвЂ№Р Вµ РЎРѓРЎвЂљР С‘Р В»Р С‘
  const rootClasses = $derived(QuantitySelectorStyleManager.getRootClasses(hostClass));
  const labelClasses = $derived(QuantitySelectorStyleManager.getLabelClasses());
  const containerClasses = $derived(QuantitySelectorStyleManager.getContainerClasses());
  const decrementButtonClasses = $derived(
    QuantitySelectorStyleManager.getButtonClasses(disabled, showButtons, true, size as ComponentSize, buttonClass)
  );
  const incrementButtonClasses = $derived(
    QuantitySelectorStyleManager.getButtonClasses(disabled, showButtons, false, size as ComponentSize, buttonClass)
  );
  const inputClasses = $derived(
    QuantitySelectorStyleManager.getInputClasses(showButtons, size as ComponentSize, variant as QuantitySelectorVariant, inputClass)
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








