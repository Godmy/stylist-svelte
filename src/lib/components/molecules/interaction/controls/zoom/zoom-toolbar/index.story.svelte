<script lang="ts">
  import ZoomToolbar from './index.svelte';

  let zoomLevel = 100;
  let minZoom = 50;
  let maxZoom = 200;
  let step = 10;
  let showReset = true;
  let showPercentage = true;
  let log: string[] = [];

  function handleZoomChange(value: number) {
    zoomLevel = value;
    log = [`${new Date().toLocaleTimeString()} — масштаб ${value}%`, ...log].slice(0, 5);
  }

  function applyPreset(preset: 'dense' | 'wide' | 'focus') {
    if (preset === 'dense') {
      minZoom = 80;
      maxZoom = 140;
      step = 5;
      showPercentage = true;
    } else if (preset === 'wide') {
      minZoom = 50;
      maxZoom = 250;
      step = 25;
      showPercentage = true;
    } else {
      minZoom = 90;
      maxZoom = 130;
      step = 2;
      showPercentage = false;
    }
    zoomLevel = Math.min(Math.max(zoomLevel, minZoom), maxZoom);
    log = [];
  }
</script>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">ZoomToolbar</h1>
    <p class="text-gray-600">
      Лёгкая панель управления масштабом. Новый стори повторяет структуру эталона: интерактивный пример и контроллеры
      справа.
    </p>
  </div>

  <div class="grid gap-6 lg:grid-cols-[2fr_1fr]">
    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between gap-4">
        <div class="flex-1 rounded-lg border border-dashed border-gray-300 p-4">
          <p class="text-sm text-gray-500">Панель расположена в строке инструментов макета.</p>
          <div class="mt-3 flex items-center gap-4">
            <ZoomToolbar
              {zoomLevel}
              {minZoom}
              {maxZoom}
              {step}
              {showReset}
              {showPercentage}
              onZoomChange={handleZoomChange}
            />
            <div class="text-right text-sm text-gray-500">
              <label for="zoom-external-slider">Внешнее управление:</label>
              <input
                id="zoom-external-slider"
                name="zoom-external-slider"
                type="range"
                min={minZoom}
                max={maxZoom}
                bind:value={zoomLevel}
                class="mt-2 w-full"
              />
              <p class="mt-1 text-xs">Слайдер имитирует изменение масштаба из другого компонента.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="rounded-lg border border-gray-100 bg-gray-50 p-4">
        <h3 class="text-sm font-semibold text-gray-800">История</h3>
        {#if log.length > 0}
          <ul class="mt-2 space-y-1 text-sm text-gray-700">
            {#each log as entry}
              <li class="rounded-md bg-white px-3 py-1 shadow-sm">{entry}</li>
            {/each}
          </ul>
        {:else}
          <p class="mt-2 text-sm text-gray-500">История появится после взаимодействия с панелью.</p>
        {/if}
      </div>
    </div>

    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Настройки</h2>

      <div>
        <label for="zoom-toolbar-level" class="block text-sm font-medium text-gray-700">Текущий масштаб</label>
        <input
          id="zoom-toolbar-level"
          name="zoom-toolbar-level"
          type="number"
          min={minZoom}
          max={maxZoom}
          bind:value={zoomLevel}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <div>
          <label for="zoom-toolbar-min" class="block text-sm font-medium text-gray-700">Минимум</label>
          <input
            id="zoom-toolbar-min"
            name="zoom-toolbar-min"
            type="number"
            min="10"
            max={maxZoom - 5}
            bind:value={minZoom}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label for="zoom-toolbar-max" class="block text-sm font-medium text-gray-700">Максимум</label>
          <input
            id="zoom-toolbar-max"
            name="zoom-toolbar-max"
            type="number"
            min={minZoom + 5}
            max="400"
            bind:value={maxZoom}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label for="zoom-toolbar-step" class="block text-sm font-medium text-gray-700">Шаг изменения</label>
        <input
          id="zoom-toolbar-step"
          name="zoom-toolbar-step"
          type="number"
          min="1"
          max="50"
          bind:value={step}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <label class="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" bind:checked={showPercentage} class="rounded border-gray-300" />
        Показывать %
      </label>

      <label class="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" bind:checked={showReset} class="rounded border-gray-300" />
        Кнопка сброса
      </label>

      <div>
        <h3 class="text-sm font-semibold text-gray-800">Сценарии</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('dense')}
          >
            Dense layout
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('wide')}
          >
            Wide canvas
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('focus')}
          >
            Focus map
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
