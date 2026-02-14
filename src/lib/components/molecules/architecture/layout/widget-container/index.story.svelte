<script lang="ts">
  import { createRawSnippet } from 'svelte';
  import WidgetContainer from './index.svelte';

  type Dataset = 'support' | 'growth' | 'ops';

  let title = $state('Operations overview');
  let subtitle = $state('Живые метрики отдела сопровождения');
  let collapsible = $state(true);
  let initiallyCollapsed = $state(false);
  let resizable = $state(true);
  let draggable = $state(true);
  let maximizable = $state(true);
  let size = $state<'sm' | 'md' | 'lg'>('md');
  let showActions = $state(true);
  let selectedDataset = $state<Dataset>('support');
  let ticketVolume = $state(128);
  let sla = $state(92);
  let trend = $state(12);

  let contentSnippet = $derived.by(() => createRawSnippet(() => {
    const dataset = selectedDataset.toUpperCase();
    const tickets = ticketVolume;
    const slaValue = sla;
    const trendValue = trend;
    const trendSign = trend > 0 ? '+' : '';

    return {
      render: () => `<div class="space-y-4">
      <p class="text-sm text-gray-500">Dataset: ${dataset}</p>
      <div class="grid grid-cols-2 gap-3">
        <div class="rounded-lg border border-gray-100 bg-gray-50 p-3">
          <p class="text-xs text-gray-500">Tickets</p>
          <p class="text-2xl font-semibold text-gray-900">${tickets}</p>
        </div>
        <div class="rounded-lg border border-gray-100 bg-gray-50 p-3">
          <p class="text-xs text-gray-500">SLA</p>
          <p class="text-2xl font-semibold text-gray-900">${slaValue}%</p>
        </div>
      </div>
      <div class="rounded-lg border border-dashed border-gray-200 p-3 text-sm text-gray-600">
        Δ за неделю: ${trendSign}${trendValue}%
      </div>
    </div>`
    };
  }));

  let actionsSnippet = $derived(showActions
    ? createRawSnippet(() => {
        return {
          render: () => `<div class="flex items-center gap-2 text-gray-500">
          <button class="rounded-md border border-gray-200 px-2 py-1 text-xs font-medium hover:border-blue-500">Refresh</button>
          <button class="rounded-md border border-gray-200 px-2 py-1 text-xs font-medium hover:border-blue-500">Export</button>
        </div>`
        };
      })
    : undefined);
</script>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">WidgetContainer</h1>
    <p class="text-gray-600">
      Обёртка для мини-приложений с перетаскиванием, сворачиванием и кастомными экшенами. Настройте состояние и визуальный
      контент через панель справа.
    </p>
  </div>

  <div class="grid gap-6 lg:grid-cols-[2fr_1fr]">
    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <WidgetContainer
        {title}
        {subtitle}
        content={contentSnippet}
        actions={actionsSnippet}
        {collapsible}
        {initiallyCollapsed}
        {resizable}
        {draggable}
        {maximizable}
        {size}
        class="max-w-2xl mx-auto"
      />
    </div>

    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Настройки</h2>

      <div>
        <label for="widget-title" class="block text-sm font-medium text-gray-700">Заголовок</label>
        <input
          id="widget-title"
          type="text"
          bind:value={title}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label for="widget-subtitle" class="block text-sm font-medium text-gray-700">Подзаголовок</label>
        <input
          id="widget-subtitle"
          type="text"
          bind:value={subtitle}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={collapsible} class="rounded border-gray-300" />
          Сворачиваемый
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={initiallyCollapsed} class="rounded border-gray-300" />
          Стартует свернутым
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={resizable} class="rounded border-gray-300" />
          Позволяет ресайз
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={draggable} class="rounded border-gray-300" />
          Перетаскивание
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={maximizable} class="rounded border-gray-300" />
          Максимизация
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showActions} class="rounded border-gray-300" />
          Кнопки действий
        </label>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <div>
          <label for="widget-size" class="block text-sm font-medium text-gray-700">Размер</label>
          <select
            id="widget-size"
            bind:value={size}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="sm">Small</option>
            <option value="md">Medium</option>
            <option value="lg">Large</option>
          </select>
        </div>
        <div>
          <label for="widget-dataset" class="block text-sm font-medium text-gray-700">Датасет</label>
          <select
            id="widget-dataset"
            bind:value={selectedDataset}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="support">Support</option>
            <option value="growth">Growth</option>
            <option value="ops">Operations</option>
          </select>
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-3">
        <div>
          <label for="widget-tickets" class="block text-sm font-medium text-gray-700">Tickets</label>
          <input
            id="widget-tickets"
            type="number"
            min="0"
            bind:value={ticketVolume}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label for="widget-sla" class="block text-sm font-medium text-gray-700">SLA %</label>
          <input
            id="widget-sla"
            type="number"
            min="0"
            max="100"
            bind:value={sla}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label for="widget-trend" class="block text-sm font-medium text-gray-700">Δ %</label>
          <input
            id="widget-trend"
            type="number"
            min="-100"
            max="100"
            bind:value={trend}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </div>
  </div>
</div>

