<script lang="ts">
  /**
   * PropsEditor - компонент для динамического редактирования props компонентов
   *
   * Следует принципам SOLID:
   *
   * Single Responsibility: Отвечает только за редактирование props
   * Open/Closed: Легко расширяется через пропсы, не требует изменений в коде
   * Liskov Substitution: Может быть заменен другим редактором props при необходимости
   * Interface Segregation: Имеет минимальный, конкретный интерфейс для редактирования props
   * Dependency Inversion: Зависит от абстракции стилей через PropsEditorStyleManager
   *
   * Использует подход Atomic Design (Molecule) - комбинирует базовые элементы
   * (поля ввода, чекбоксы, селекты) в составной компонент редактора props
   */

  import type { IPropsEditorProps, IPropDefinition, PropType } from './types';
  import { PropsEditorStyleManager } from './styles';

  let {
    propDefinitions = [],
    propValues = {},
    onPropChange,
    class: className = ''
  } = $props();

  // Вычисляемые стили через derived для изоляции логики стилизации
  const containerClasses = $derived(PropsEditorStyleManager.getContainerClasses(className));
  const headerClasses = $derived(PropsEditorStyleManager.getHeaderClasses());
  const propsContainerClasses = $derived(PropsEditorStyleManager.getPropsContainerClasses());
  const propItemClasses = $derived(PropsEditorStyleManager.getPropItemClasses());
  const propLabelClasses = $derived(PropsEditorStyleManager.getPropLabelClasses());
  const propDescriptionClasses = $derived(PropsEditorStyleManager.getPropDescriptionClasses());
  const inputClasses = $derived(PropsEditorStyleManager.getInputClasses());
  const checkboxClasses = $derived(PropsEditorStyleManager.getCheckboxClasses());
  const selectClasses = $derived(PropsEditorStyleManager.getSelectClasses());

  // Внутреннее состояние значений пропсов
  let internalPropValues = $state<Record<string, any>>({ ...propValues });

  // Обновляем внутреннее состояние при изменении пропса
  $effect(() => {
    internalPropValues = { ...propValues };
  });

  // Обработчик изменения пропса
  function handlePropChange(name: string, value: any) {
    internalPropValues = { ...internalPropValues, [name]: value };

    if (onPropChange) {
      onPropChange(name, value);
    }
  }
</script>

<div class={containerClasses} role="region" aria-label="Props editor">
  <!-- Заголовок -->
  <div class={headerClasses} aria-label="Component props editor">Props Editor</div>

  <!-- Контейнер пропсов -->
  <div class={propsContainerClasses}>
    {#each propDefinitions as def}
      <div class={propItemClasses}>
        <label class={propLabelClasses} for={`prop-${def.name}`}>
          <span>{def.name}</span>
          {#if def.required}
            <span class="ml-1 text-red-500" aria-label="Required">*</span>
          {/if}
          <span class="ml-2 text-xs text-gray-500">({def.type})</span>
        </label>

        <div>
          {#if def.type === 'boolean'}
            <input
              type="checkbox"
              class={checkboxClasses}
              checked={internalPropValues[def.name] ?? def.defaultValue ?? false}
              onchange={(e) => handlePropChange(def.name, (e.target as HTMLInputElement).checked)}
              aria-label={`Toggle ${def.name}`}
            />
          {:else if def.type === 'number'}
            <input
              type="number"
              class={inputClasses}
              value={internalPropValues[def.name] ?? def.defaultValue ?? ''}
              min={def.min}
              max={def.max}
              step={def.step}
              oninput={(e) => handlePropChange(def.name, Number((e.target as HTMLInputElement).value))}
              aria-label={`Set ${def.name}`}
            />
          {:else if def.type === 'enum'}
            <select
              class={selectClasses}
              value={internalPropValues[def.name] ?? def.defaultValue ?? ''}
              onchange={(e) => handlePropChange(def.name, (e.target as HTMLSelectElement).value)}
              aria-label={`Select ${def.name}`}
            >
              {#if def.options}
                {#each def.options as option}
                  <option value={option}>{option}</option>
                {/each}
              {/if}
            </select>
          {:else}
            <input
              type="text"
              class={inputClasses}
              value={internalPropValues[def.name] ?? def.defaultValue ?? ''}
              oninput={(e) => handlePropChange(def.name, (e.target as HTMLInputElement).value)}
              aria-label={`Set ${def.name}`}
            />
          {/if}
        </div>

        {#if def.description}
          <div class={propDescriptionClasses} aria-label={`Description: ${def.description}`}>
            {def.description}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>