<script lang="ts">
  import WishlistButton from './WishlistButton.svelte';

  type Variant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'ghost' | 'link';
  type Size = 'sm' | 'md' | 'lg';

  const variants: Variant[] = ['primary', 'secondary', 'success', 'warning', 'danger', 'ghost', 'link'];
  const sizes: Size[] = ['sm', 'md', 'lg'];
  const tooltipPositions: Array<'top' | 'bottom' | 'left' | 'right'> = ['top', 'bottom', 'left', 'right'];

  let variant: Variant = 'ghost';
  let size: Size = 'md';
  let showLabel = true;
  let tooltip = 'Добавить товар в список желаемого';
  let tooltipPosition: 'top' | 'bottom' | 'left' | 'right' = 'top';
  let disabled = false;
  let initialWishlist = false;
  let componentSeed = 0;
  let currentState = initialWishlist;
  let eventLog: string[] = [];

  function resetButton() {
    componentSeed += 1;
    currentState = initialWishlist;
    logEvent('Компонент перерисован с новыми начальными параметрами');
  }

  function logEvent(message: string) {
    eventLog = [`${new Date().toLocaleTimeString()} — ${message}`, ...eventLog].slice(0, 5);
  }

  function handleToggle(next: boolean) {
    currentState = next;
    logEvent(`Статус изменился: ${next ? 'в избранном' : 'не в списке'}`);
  }

  function handleSuccess() {
    logEvent('API симуляция завершилась успешно');
  }

  function handleError(error: string) {
    logEvent(`Ошибка: ${error}`);
  }

  function applyPreset(preset: 'hero' | 'inline') {
    if (preset === 'hero') {
      variant = 'primary';
      size = 'lg';
      showLabel = true;
      tooltip = 'Эксклюзивный цвет — сохраните на будущее!';
    } else {
      variant = 'ghost';
      size = 'sm';
      showLabel = false;
      tooltip = 'Быстрый доступ';
    }
    resetButton();
  }
</script>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">WishlistButton</h1>
    <p class="text-gray-600">
      Кнопка добавления в избранное с подсказкой и тостом. Запускаем разные варианты отображения и отслеживаем события.
    </p>
  </div>

  <div class="grid gap-6 lg:grid-cols-[2fr_1fr]">
    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Превью</h2>
      <p class="text-sm text-gray-600">Наведите или кликните, чтобы увидеть всплывающее сообщение и уведомление.</p>
      <div class="flex flex-col items-start gap-4">
        {#key componentSeed}
        <WishlistButton
          inWishlist={initialWishlist}
          {variant}
          {size}
          {showLabel}
          {tooltip}
          {tooltipPosition}
          {disabled}
          onToggle={handleToggle}
          onSuccess={handleSuccess}
          onError={handleError}
        />
      {/key}
        <p class="text-sm text-gray-500">
          Текущее состояние: <span class="font-semibold text-gray-900">{currentState ? 'в списке' : 'не добавлен'}</span>
        </p>
      </div>

      <div class="rounded-lg border border-gray-100 bg-gray-50 p-4">
        <h3 class="text-sm font-semibold text-gray-800">Лента событий</h3>
        {#if eventLog.length > 0}
          <ul class="mt-2 space-y-2 text-sm text-gray-700">
            {#each eventLog as entry}
              <li class="rounded-md bg-white px-3 py-2 shadow-sm">{entry}</li>
            {/each}
          </ul>
        {:else}
          <p class="mt-2 text-sm text-gray-500">Триггеры появятся после взаимодействия.</p>
        {/if}
      </div>
    </div>

    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Настройки</h2>

      <div>
        <label for="wishlist-variant" class="block text-sm font-medium text-gray-700">Вариант</label>
        <select
          id="wishlist-variant"
          bind:value={variant}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        >
          {#each variants as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="wishlist-size" class="block text-sm font-medium text-gray-700">Размер</label>
        <select
          id="wishlist-size"
          bind:value={size}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        >
          {#each sizes as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <label class="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" bind:checked={showLabel} class="rounded border-gray-300" />
        Показывать подпись
      </label>

      <label class="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" bind:checked={disabled} class="rounded border-gray-300" />
        Заблокировать кнопку
      </label>

      <div>
        <label for="wishlist-tooltip" class="block text-sm font-medium text-gray-700">Tooltip</label>
        <textarea
          id="wishlist-tooltip"
          rows="2"
          bind:value={tooltip}
          class="mt-1 w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
        ></textarea>
      </div>

      <div>
        <label for="wishlist-tooltip-position" class="block text-sm font-medium text-gray-700">Позиция tooltip</label>
        <select
          id="wishlist-tooltip-position"
          bind:value={tooltipPosition}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        >
          {#each tooltipPositions as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <div>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input
            type="checkbox"
            checked={initialWishlist}
            onchange={(event) => {
              initialWishlist = (event.target as HTMLInputElement).checked;
              resetButton();
            }}
            class="rounded border-gray-300"
          />
          Стартовать в избранном
        </label>
      </div>

      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
          onclick={() => applyPreset('hero')}
        >
          Hero стиль
        </button>
        <button
          type="button"
          class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
          onclick={() => applyPreset('inline')}
        >
          Inline иконка
        </button>
        <button
          type="button"
          class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
          onclick={resetButton}
        >
          Перерисовать
        </button>
      </div>
    </div>
  </div>
</div>
