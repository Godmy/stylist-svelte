<script lang="ts">
  import QuantitySelector from './QuantitySelector.svelte';
  import type { IQuantitySelectorProps } from './types';

  let {
    variant = 'primary'
  } = $props();

  // Локальное состояние для демонстрации
  let value: number = $state(1);
  let size: 'sm' | 'md' | 'lg' = $state('md');
  let variantSel: 'default' | 'minimal' | 'filled' = $state('default');
  let min: number = $state(1);
  let max: number = $state(99);
  let step: number = $state(1);
  let disabled: boolean = $state(false);
  let showInput: boolean = $state(true);
  let showButtons: boolean = $state(true);
  let label: string = $state('');

  function handleValueChange(newValue: number) {
    console.log('Value changed:', newValue);
  }

  function handleIncrement() {
    console.log('Incremented');
  }

  function handleDecrement() {
    console.log('Decremented');
  }
</script>

<!-- Основной экспорт для Story -->
<div class="p-4">
  <h1 class="text-lg font-semibold mb-4">QuantitySelector Component</h1>
  <div class="border p-4 rounded">
    <QuantitySelector
      value={value}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      variant={variantSel}
      size={size}
      showInput={showInput}
      showButtons={showButtons}
      label={label}
      onValueChange={handleValueChange}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
    />
  </div>
</div>

<!-- Страница истории с примерами использования -->
<section>
  <h1>Компонент QuantitySelector</h1>
  <p>
    Компонент для выбора количества с возможностью увеличения/уменьшения через кнопки
    и прямого ввода в поле. Следует принципам SOLID и архитектуре Atomic Design.
  </p>

  <h2>Примеры использования</h2>

  <!-- Пример с разными размерами -->
  <h3>Размеры</h3>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <label for="size-sm">Маленький (sm): </label>
      <QuantitySelector id="size-sm" size="sm" value={3} />
    </div>
    <div class="flex items-center gap-2">
      <label for="size-md">Средний (md): </label>
      <QuantitySelector id="size-md" size="md" value={5} />
    </div>
    <div class="flex items-center gap-2">
      <label for="size-lg">Большой (lg): </label>
      <QuantitySelector id="size-lg" size="lg" value={7} />
    </div>
  </div>

  <!-- Пример с разными вариантами стиля -->
  <h3>Варианты стиля</h3>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <label for="variant-default">По умолчанию: </label>
      <QuantitySelector id="variant-default" variant="default" value={2} />
    </div>
    <div class="flex items-center gap-2">
      <label for="variant-minimal">Минималистичный: </label>
      <QuantitySelector id="variant-minimal" variant="minimal" value={4} />
    </div>
    <div class="flex items-center gap-2">
      <label for="variant-filled">Заполненный: </label>
      <QuantitySelector id="variant-filled" variant="filled" value={6} />
    </div>
  </div>

  <!-- Примеры для разных состояний -->
  <h3>Состояния компонента</h3>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <label for="normal-state">Нормальное состояние: </label>
      <QuantitySelector id="normal-state" value={3} min={1} max={10} />
    </div>
    <div class="flex items-center gap-2">
      <label for="disabled-state">Отключено: </label>
      <QuantitySelector id="disabled-state" value={5} disabled={true} />
    </div>
    <div class="flex items-center gap-2">
      <label for="with-label">С меткой: </label>
      <QuantitySelector id="with-label" value={2} label="Количество:" />
    </div>
  </div>

  <!-- Примеры с разными опциями отображения -->
  <h3>Опции отображения</h3>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-2">
      <label for="input-only">Только с полем ввода: </label>
      <QuantitySelector id="input-only" showButtons={false} showInput={true} value={3} />
    </div>
    <div class="flex items-center gap-2">
      <label for="buttons-only">Только с кнопками: </label>
      <QuantitySelector id="buttons-only" showButtons={true} showInput={false} value={3} />
    </div>
    <div class="flex items-center gap-2">
      <label for="input-and-buttons">С полем ввода и кнопками: </label>
      <QuantitySelector id="input-and-buttons" showButtons={true} showInput={true} value={3} />
    </div>
  </div>
</section>