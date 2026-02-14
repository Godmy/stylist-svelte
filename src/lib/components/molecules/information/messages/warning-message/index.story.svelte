<script lang="ts">
  import WarningMessage from './index.svelte';

  type Position =
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';

  const positions: Position[] = [
    'top-right',
    'top-left',
    'top-center',
    'bottom-right',
    'bottom-left',
    'bottom-center'
  ];

  let show = false;
  let title = 'Сессия истекает';
  let message = 'Мы не обнаружили активности. Сохраните прогресс или продолжайте работу, чтобы избежать потери данных.';
  let closable = true;
  let duration = 5000;
  let position: Position = 'top-right';
  let useCustomContent = false;
  let lastAction = 'Сообщение ещё не отображалось.';

  function triggerWarning() {
    show = false;
    setTimeout(() => (show = true), 50);
    lastAction = 'Предупреждение запущено вручную';
  }

  function handleClose() {
    show = false;
    lastAction = `Закрыто пользователем в ${new Date().toLocaleTimeString()}`;
  }
</script>

<WarningMessage
  {show}
  {title}
  {message}
  {closable}
  {duration}
  {position}
  onClose={handleClose}
>
  {#if useCustomContent}
    <ul class="list-disc space-y-1 pl-4 text-xs text-yellow-800">
      <li>Найдите время сохранить черновик.</li>
      <li>Проверьте подключение к сети.</li>
      <li>При необходимости продлите сессию в настройках безопасности.</li>
    </ul>
  {/if}
</WarningMessage>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">WarningMessage</h1>
    <p class="text-gray-600">
      Демонстрация всплывающего предупреждения. Настройте длительность, позицию и дополнительные подсказки —
      компонент ведёт себя как современное toast-уведомление.
    </p>
  </div>

  <div class="grid gap-6 lg:grid-cols-[2fr_1fr]">
    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Превью</h2>
      <p class="text-sm text-gray-600">
        Нажмите кнопку, чтобы запустить предупреждение. Оно появится в выбранной области экрана.
      </p>
      <div class="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          class="rounded-md bg-yellow-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-yellow-600"
          onclick={triggerWarning}
        >
          Показать предупреждение
        </button>
        <button
          type="button"
          class="rounded-md border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-700 hover:border-gray-400"
          onclick={() => (show = false)}
        >
          Скрыть
        </button>
      </div>

      <div class="mt-6 rounded-lg border border-yellow-100 bg-yellow-50 p-4 text-sm text-yellow-800">
        <p class="font-semibold">Журнал действий</p>
        <p>{lastAction}</p>
      </div>
    </div>

    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Настройки</h2>

      <div>
        <label for="warning-title" class="block text-sm font-medium text-gray-700">Заголовок</label>
        <input
          id="warning-title"
          type="text"
          bind:value={title}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label for="warning-message" class="block text-sm font-medium text-gray-700">Сообщение</label>
        <textarea
          id="warning-message"
          rows="3"
          bind:value={message}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        ></textarea>
      </div>

      <div>
        <label for="warning-position" class="block text-sm font-medium text-gray-700">Позиция</label>
        <select
          id="warning-position"
          bind:value={position}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        >
          {#each positions as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <div>
        <div class="flex items-center justify-between text-sm font-medium text-gray-700">
          <span>Длительность (мс)</span>
          <span>{duration === 0 ? '∞' : duration}</span>
        </div>
        <input
          type="range"
          min="0"
          max="10000"
          step="500"
          bind:value={duration}
          class="mt-2 w-full"
        />
        <p class="mt-1 text-xs text-gray-500">0 — постоянное уведомление.</p>
      </div>

      <label class="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" bind:checked={closable} class="rounded border-gray-300" />
        Показывать кнопку закрытия
      </label>

      <label class="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" bind:checked={useCustomContent} class="rounded border-gray-300" />
        Вывести дополнительный список действий
      </label>
    </div>
  </div>
</div>
