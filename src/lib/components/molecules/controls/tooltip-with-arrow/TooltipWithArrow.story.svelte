<script lang="ts">
  import TooltipWithArrow from './TooltipWithArrow.svelte';

  type Placement =
    | 'top'
    | 'top-start'
    | 'top-end'
    | 'bottom'
    | 'bottom-start'
    | 'bottom-end'
    | 'left'
    | 'left-start'
    | 'left-end'
    | 'right'
    | 'right-start'
    | 'right-end'
    | 'auto'
    | 'auto-start'
    | 'auto-end';

  type Trigger = 'hover' | 'click' | 'focus';

  const placementOptions: Placement[] = [
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'left',
    'left-start',
    'left-end',
    'right',
    'right-start',
    'right-end',
    'auto',
    'auto-start',
    'auto-end'
  ];

  const galleryPlacements: Placement[] = ['top', 'right', 'bottom', 'left', 'top-start', 'top-end', 'bottom-start', 'bottom-end'];

  let tooltipText = 'Наведите курсор, чтобы увидеть подсказку';
  let placement: Placement = 'top';
  let trigger: Trigger = 'hover';
  let delay = 200;
  let disabled = false;
  let accentClass = 'bg-blue-600 text-white';

  function applyScenario(scenario: 'info' | 'warning' | 'success') {
    if (scenario === 'info') {
      tooltipText = 'Показываем контекстную подсказку в верхней части кнопки.';
      placement = 'top';
      trigger = 'hover';
      accentClass = 'bg-blue-600 text-white';
    } else if (scenario === 'warning') {
      tooltipText = 'Сделка требует подтверждения — нажмите ещё раз.';
      placement = 'right';
      trigger = 'click';
      accentClass = 'bg-yellow-500 text-gray-900';
    } else {
      tooltipText = 'Документ синхронизирован и доступен команде.';
      placement = 'bottom';
      trigger = 'focus';
      accentClass = 'bg-green-600 text-white';
    }
  }
</script>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">TooltipWithArrow</h1>
    <p class="text-gray-600">
      Протестируйте разные позиции, механики триггера и задержку появления. Новая демо-зона повторяет интерактивный стиль
      эталонной кнопки.
    </p>
  </div>

  <div class="grid gap-6 lg:grid-cols-[2fr_1fr]">
    <div class="space-y-4">
      <div class="flex h-72 items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white">
        <TooltipWithArrow
          content={tooltipText}
          {placement}
          {trigger}
          {delay}
          {disabled}
        >
          <button
            type="button"
            class={`rounded-full px-6 py-3 text-sm font-medium shadow transition hover:scale-105 ${accentClass}`}
          >
            Наведите или кликните
          </button>
        </TooltipWithArrow>
      </div>

      <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <h2 class="text-lg font-semibold text-gray-900">Галерея позиций</h2>
        <p class="text-sm text-gray-500">
          Быстрый просмотр основных положений стрелки. Каждая метка использует собственный экземпляр компонента.
        </p>
        <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {#each galleryPlacements as option}
            <div class="flex justify-center">
              <TooltipWithArrow content={`Placement: ${option}`} placement={option}>
                <span class="rounded-md border border-gray-200 px-2 py-1 text-xs capitalize text-gray-700">
                  {option}
                </span>
              </TooltipWithArrow>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <div class="space-y-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Настройки</h2>

      <div>
        <label for="tooltip-text" class="block text-sm font-medium text-gray-700">Текст подсказки</label>
        <textarea
          id="tooltip-text"
          rows="3"
          bind:value={tooltipText}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        ></textarea>
      </div>

      <div>
        <label for="tooltip-placement" class="block text-sm font-medium text-gray-700">Позиция</label>
        <select
          id="tooltip-placement"
          bind:value={placement}
          class="mt-1 w-full rounded border border-gray-300 p-2 text-sm focus:border-blue-500 focus:outline-none"
        >
          {#each placementOptions as option}
            <option value={option}>{option}</option>
          {/each}
        </select>
      </div>

      <div>
        <label for="tooltip-trigger" class="block text-sm font-medium text-gray-700">Триггер</label>
        <select
          id="tooltip-trigger"
          bind:value={trigger}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="hover">Hover</option>
          <option value="click">Click</option>
          <option value="focus">Focus</option>
        </select>
      </div>

      <div>
        <div class="flex items-center justify-between text-sm font-medium text-gray-700">
          <span>Задержка (мс)</span>
          <span>{delay}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          step="50"
          bind:value={delay}
          class="mt-2 w-full"
        />
      </div>

      <label class="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" bind:checked={disabled} class="rounded border-gray-300" />
        Выключить подсказку
      </label>

      <div>
        <h3 class="text-sm font-semibold text-gray-800">Готовые сценарии</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyScenario('info')}
          >
            Info
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyScenario('warning')}
          >
            Warning
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyScenario('success')}
          >
            Success
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
