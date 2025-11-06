<script lang="ts">
  /**
   * Компонент переключателя (Toggle)
   *
   * Предназначен для включения/выключения определенного состояния
   *
   * @param {boolean} [checked=false] - Текущее состояние переключателя
   * @param {boolean} [disabled=false] - Отключенное состояние
   * @param {'sm' | 'md' | 'lg'} [size='md'] - Размер переключателя
   * @param {string} [class=''] - Дополнительные CSS классы
   */

  import type { HTMLInputAttributes } from 'svelte/elements';

  type ToggleSize = 'sm' | 'md' | 'lg';

  type ToggleProps = {
    checked?: boolean;
    disabled?: boolean;
    size?: ToggleSize;
    class?: string;
  } & Omit<HTMLInputAttributes, 'size' | 'type'>;

  let {
    checked = $bindable(false),
    disabled = false,
    size = 'md',
    class: className = '',
    ...restProps
  }: ToggleProps = $props();

  // Define the specific type for indexing
  type SizeClasses = {
    width: string;
    height: string;
    thumb: string;
  };

  let sizeClasses = $derived<SizeClasses>({
    sm: { width: 'w-8', height: 'h-4', thumb: 'w-3 h-3 ml-0.5' },
    md: { width: 'w-11', height: 'h-6', thumb: 'w-5 h-5 ml-0.5' },
    lg: { width: 'w-14', height: 'h-7', thumb: 'w-6 h-6 ml-0.5' }
  }[size satisfies keyof Record<ToggleSize, { width: string; height: string; thumb: string; }>]);

  // Обработчик изменения состояния
  const handleChange = (e: Event) => {
    // Генерируем событие, если оно определено в restProps
  };
</script>

<div class={`relative inline-flex items-center ${className}`}>
  <input
    type="checkbox"
    bind:checked={checked}
    disabled={disabled}
    class="sr-only"
    onchange={handleChange}
    {...restProps}
  />
  
  <div
    class={`relative rounded-full cursor-pointer transition-colors ease-in-out duration-200 ${sizeClasses.width} ${sizeClasses.height} ${
      checked 
        ? (disabled ? 'bg-indigo-300' : 'bg-indigo-600') 
        : (disabled ? 'bg-gray-300' : 'bg-gray-300')
    }`}
    class:opacity-50={disabled}
  >
    <div
      class={`absolute rounded-full bg-white shadow-md transform transition-transform ease-in-out duration-200 top-0.5 ${sizeClasses.thumb} ${
        checked 
          ? (size === 'sm' ? 'translate-x-4' : size === 'md' ? 'translate-x-5' : 'translate-x-7') 
          : 'translate-x-0.5'
      }`}
    ></div>
  </div>
</div>