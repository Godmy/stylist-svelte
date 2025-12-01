<script lang="ts">
  import ZoomControls from './ZoomControls.svelte';

  let initialValue = 100;
  let minZoom = 50;
  let maxZoom = 200;
  let step = 10;
  let showPercentage = true;
  let indicatorClass = 'bg-gray-900 text-white border-gray-900';
  let controlsClass = 'bg-gray-900 text-white border-gray-900';
  let zoomHistory: number[] = [];

  function handleZoomChange(value: number) {
    zoomHistory = [value, ...zoomHistory].slice(0, 4);
  }

  function applyPreset(preset: 'design' | 'ops' | 'presentation') {
    if (preset === 'design') {
      initialValue = 80;
      minZoom = 50;
      maxZoom = 160;
      step = 5;
      indicatorClass = 'bg-slate-900 text-slate-100 border-slate-900';
      controlsClass = 'bg-white text-gray-800 border-gray-300';
    } else if (preset === 'presentation') {
      initialValue = 120;
      minZoom = 80;
      maxZoom = 240;
      step = 20;
      indicatorClass = 'bg-indigo-600 text-white border-indigo-600';
      controlsClass = 'bg-white text-gray-800 border-gray-200';
    } else {
      initialValue = 100;
      minZoom = 75;
      maxZoom = 150;
      step = 10;
      indicatorClass = 'bg-gray-900 text-white border-gray-900';
      controlsClass = 'bg-gray-900 text-white border-gray-900';
    }
    zoomHistory = [];
  }
</script>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">ZoomControls</h1>
    <p class="text-gray-600">
      Плавающие контролы масштаба, приведённые к новому формату сториз. Компонент закреплён внутри демонстрационного окна и
      сообщает историю изменений.
    </p>
  </div>

  <div class="grid gap-6 lg:grid-cols-[2fr_1fr]">
    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm space-y-4">
      <div class="relative min-h-[260px] rounded-lg border border-dashed border-gray-300 p-6">
        <p class="text-sm text-gray-500">
          Эта область имитирует дизайн-холст. Кнопки масштабирования размещены в правом нижнем углу контейнера, а не экрана.
        </p>
        <ZoomControls
          {initialValue}
          {minZoom}
          {maxZoom}
          {step}
          {showPercentage}
          {controlsClass}
          {indicatorClass}
          class="static mt-6"
          onChange={handleZoomChange}
        />
      </div>

      <div class="rounded-lg border border-gray-100 bg-gray-50 p-4">
        <h3 class="text-sm font-semibold text-gray-800">История масштабирования</h3>
        {#if zoomHistory.length > 0}
          <ul class="mt-2 flex gap-2 text-sm text-gray-700">
            {#each zoomHistory as value}
              <li class="rounded-md bg-white px-3 py-1 shadow-sm">{showPercentage ? `${value}%` : value}</li>
            {/each}
          </ul>
        {:else}
          <p class="mt-2 text-sm text-gray-500">Нажмите на кнопки, чтобы увидеть последние значения.</p>
        {/if}
      </div>
    </div>

    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Настройки</h2>

      <div>
        <label for="zoom-initial" class="block text-sm font-medium text-gray-700">Стартовое значение</label>
        <input
          id="zoom-initial"
          name="zoom-initial"
          type="number"
          min="10"
          max="300"
          bind:value={initialValue}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <div>
          <label for="zoom-min" class="block text-sm font-medium text-gray-700">Минимум</label>
          <input
            id="zoom-min"
            name="zoom-min"
            type="number"
            min="10"
            max={initialValue}
            bind:value={minZoom}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label for="zoom-max" class="block text-sm font-medium text-gray-700">Максимум</label>
          <input
            id="zoom-max"
            name="zoom-max"
            type="number"
            min={initialValue}
            max="400"
            bind:value={maxZoom}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label for="zoom-step" class="block text-sm font-medium text-gray-700">Шаг</label>
        <input
          id="zoom-step"
          name="zoom-step"
          type="number"
          min="1"
          max="50"
          bind:value={step}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <label class="flex items-center gap-2 text-sm text-gray-700">
        <input type="checkbox" bind:checked={showPercentage} class="rounded border-gray-300" />
        Показывать процент
      </label>

      <div>
        <h3 class="text-sm font-semibold text-gray-800">Сценарии</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('design')}
          >
            Design review
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('ops')}
          >
            Ops dashboard
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('presentation')}
          >
            Presentation
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
