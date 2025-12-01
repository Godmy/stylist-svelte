<script lang="ts">
  import type { IQuantitySelectorProps, QuantitySelectorSize, QuantitySelectorVariant } from './types';
  import { QuantitySelectorStyleManager } from './styles';
  import { Plus, Minus } from 'lucide-svelte';

  /**
   * Компонент для выбора количества
   *
   * Следует принципам SOLID:
   * - SRP: Компонент отвечает только за отображение и взаимодействие с пользователем
   * - OCP: Легко расширяем за счет пропсов
   * - LSP: Подчиняется контракту, определенному в интерфейсе IQuantitySelectorProps
   * - ISP: Предоставляет минимально необходимый интерфейс взаимодействия
   * - DIP: Зависит от абстракций (интерфейсов в types.ts и стилей в styles.ts)
   *
   * Следует архитектуре Atomic Design как молекула:
   * - Состоит из атомов (кнопки, инпут, иконки) и предоставляет более сложное поведение
   * - Может использоваться как строительный блок для более сложных компонентов
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

  // Вычисляемые стили
  const rootClasses = $derived(QuantitySelectorStyleManager.getRootClasses(hostClass));
  const labelClasses = $derived(QuantitySelectorStyleManager.getLabelClasses());
  const containerClasses = $derived(QuantitySelectorStyleManager.getContainerClasses());
  const decrementButtonClasses = $derived(
    QuantitySelectorStyleManager.getButtonClasses(disabled, showButtons, true, size as QuantitySelectorSize, buttonClass)
  );
  const incrementButtonClasses = $derived(
    QuantitySelectorStyleManager.getButtonClasses(disabled, showButtons, false, size as QuantitySelectorSize, buttonClass)
  );
  const inputClasses = $derived(
    QuantitySelectorStyleManager.getInputClasses(showButtons, size as QuantitySelectorSize, variant as QuantitySelectorVariant, inputClass)
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
        <Minus class={iconClasses} />
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
        <Plus class={iconClasses} />
      </button>
    {/if}
  </div>
</div>
