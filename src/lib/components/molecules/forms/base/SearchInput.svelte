<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { Search, X } from 'lucide-svelte';

  /**
   * Компонент поискового ввода
   *
   * Поле ввода с иконкой поиска и возможностью очистки
   *
   * @param {string} [placeholder='Поиск...'] - Текст-подсказка в поле ввода
   * @param {string} [value=''] - Значение поля ввода
   * @param {boolean} [loading=false] - Состояние загрузки
   * @param {boolean} [disabled=false] - Отключенное состояние
   * @param {'sm' | 'md' | 'lg'} [size='md'] - Размер компонента
   * @param {string} [class=''] - Дополнительные CSS классы
   */
  type Props = {
    placeholder?: string;
    value?: string;
    loading?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
  } & Omit<HTMLInputAttributes, 'size'>;

  let {
    placeholder = 'Поиск...',
    value = $bindable(''),
    loading = false,
    disabled = false,
    size = 'md',
    class: className = '',
    ...restProps
  }: Props = $props();

  let valueState = $state(value || '');
  let focused = $state(false);

  type SearchInputSize = 'sm' | 'md' | 'lg';

  // Размеры
  let sizeClasses = $derived({
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg'
  }[size as SearchInputSize]);

  // Обработчик ввода
  const handleInput = (e: Event) => {
    const target = e.target as HTMLInputElement;
    valueState = target.value;
  };

  // Обработчик очистки
  const handleClear = () => {
    valueState = '';
  };
</script>

<div class={`relative flex items-center ${className}`}>
  <div class={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ${
    disabled ? 'text-gray-400' : 'text-gray-400'
  }`}>
    <Search class={`${
      size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-5 h-5'
    }`} />
  </div>

  <input
    type="text"
    bind:value={valueState}
    placeholder={placeholder}
    class={`w-full ${sizeClasses} pl-10 rounded-lg border ${
      focused ? 'border-indigo-500 ring-1 ring-indigo-500' : 'border-gray-300'
    } ${
      disabled 
        ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
        : 'bg-white text-gray-900'
    } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`}
    disabled={disabled}
    oninput={handleInput}
    onfocus={() => focused = true}
    onblur={() => focused = false}
    {...restProps}
  />

  {#if valueState && !disabled}
    <button
      class="absolute inset-y-0 right-0 pr-3 flex items-center"
      onclick={handleClear}
      aria-label="Очистить"
    >
      <X class={`${
        size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-4 h-4' : 'w-5 h-5'
      } text-gray-400 hover:text-gray-600`} />
    </button>
  {/if}

  {#if loading}
    <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
      <div class="animate-spin rounded-full h-4 w-4 border-b-2 border-indigo-600"></div>
    </div>
  {/if}
</div>