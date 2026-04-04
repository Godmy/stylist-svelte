<script lang="ts">
  import RoutePlanner from './index.svelte';

  type Location = {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
  };

  type RouteOption = {
    id: string;
    name: string;
    duration: number;
    distance: number;
    tolls?: boolean;
    highways?: boolean;
    ecoFriendly?: boolean;
    cost?: number;
  };

  const start: Location = {
    id: 'start',
    name: 'Склад Санкт-Петербург',
    address: 'Лиговский проспект, 30',
    latitude: 59.9311,
    longitude: 30.3609
  };

  const end: Location = {
    id: 'end',
    name: 'Технопарк Москва',
    address: 'Нагатинская набережная, 34',
    latitude: 55.7089,
    longitude: 37.6543
  };

  const waypointOptions: Location[] = [
    {
      id: 'wp-1',
      name: 'Великий Новгород хаб',
      address: 'ул. Большая Санкт-Петербургская, 25',
      latitude: 58.5215,
      longitude: 31.2755
    },
    {
      id: 'wp-2',
      name: 'Тула распределительный центр',
      address: 'Октябрьская ул., 92',
      latitude: 54.1961,
      longitude: 37.6182
    }
  ];

  const plannerRoutes: RouteOption[] = [
    { id: 'fastest', name: 'Быстрый маршрут', duration: 420, distance: 705, highways: true, tolls: true, cost: 120 },
    { id: 'eco', name: 'Экономичный', duration: 470, distance: 690, ecoFriendly: true, highways: false, cost: 80 },
    { id: 'scenic', name: 'Без платных дорог', duration: 520, distance: 730, tolls: false, highways: false }
  ];

  let showSearch = true;
  let showRouteOptions = true;
  let showDirections = true;
  let showMap = true;
  let showTravelMode = true;
  let travelModes: ('driving' | 'walking' | 'cycling' | 'transit')[] = ['driving', 'walking', 'cycling'];
  let selectedRoute = plannerRoutes[0].id;
  let plannerHeight = '520px';
  let plannerWidth = '100%';
  let activityLog: string[] = [];

  function logEvent(message: string) {
    activityLog = [`${new Date().toLocaleTimeString()} — ${message}`, ...activityLog].slice(0, 5);
  }

  function handleRouteCalculated(route: RouteOption) {
    logEvent(`Пересчёт: ${route.name}, ${route.distance} км`);
  }

  function handleRouteSelect(routeId: string) {
    selectedRoute = routeId;
    const route = plannerRoutes.find((item) => item.id === routeId);
    logEvent(`Выбран маршрут: ${route?.name || routeId}`);
  }

  function handleLocationChange(type: 'start' | 'end' | 'waypoint', location: Location) {
    logEvent(`${type === 'start' ? 'Старт' : type === 'end' ? 'Финиш' : 'Промежуточная точка'} → ${location.name}`);
  }

  function applyPreset(preset: 'eco' | 'delivery' | 'walking') {
    if (preset === 'eco') {
      selectedRoute = 'eco';
      travelModes = ['driving', 'cycling'];
      showTravelMode = true;
      showRouteOptions = true;
    } else if (preset === 'delivery') {
      selectedRoute = 'fastest';
      showDirections = true;
      showMap = true;
      travelModes = ['driving', 'transit'];
    } else {
      selectedRoute = 'scenic';
      travelModes = ['walking', 'cycling'];
      showMap = false;
      showDirections = true;
    }
  }
</script>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-[var(--color-text-primary)]">RoutePlanner</h1>
    <p class="text-[var(--color-text-secondary)]">
      Интерактивный планировщик маршрутов: переключайте набор режимов передвижения, сценарии отображения и просматривайте лог
      событий.
    </p>
  </div>

  <div class="grid gap-6 2xl:grid-cols-[2fr_1fr]">
    <div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
      <RoutePlanner
        startLocation={start}
        endLocation={end}
        waypoints={waypointOptions}
        routeOptions={plannerRoutes}
        {selectedRoute}
        {showSearch}
        {showRouteOptions}
        {showDirections}
        {showMap}
        {showTravelMode}
        {travelModes}
        height={plannerHeight}
        width={plannerWidth}
        onRouteCalculated={handleRouteCalculated}
        onRouteSelect={handleRouteSelect}
        onLocationChange={handleLocationChange}
      />
    </div>

    <div class="space-y-4 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-[var(--color-text-primary)]">Настройки</h2>

      <div class="grid gap-3">
        <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
          <input type="checkbox" bind:checked={showSearch} class="rounded border-[var(--color-border-primary)]" />
          Панель поиска локаций
        </label>
        <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
          <input type="checkbox" bind:checked={showRouteOptions} class="rounded border-[var(--color-border-primary)]" />
          Список маршрутов
        </label>
        <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
          <input type="checkbox" bind:checked={showDirections} class="rounded border-[var(--color-border-primary)]" />
          Пошаговые направления
        </label>
        <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
          <input type="checkbox" bind:checked={showMap} class="rounded border-[var(--color-border-primary)]" />
          Карта
        </label>
        <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
          <input type="checkbox" bind:checked={showTravelMode} class="rounded border-[var(--color-border-primary)]" />
          Переключатель режима поездки
        </label>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <div>
          <label for="route-height" class="block text-sm font-medium text-[var(--color-text-primary)]">Высота контейнера</label>
          <input
            id="route-height"
            type="text"
            bind:value={plannerHeight}
            class="mt-1 w-full rounded border border-[var(--color-border-primary)] p-2 focus:border-[var(--color-primary-500)] focus:outline-none"
          />
        </div>
        <div>
          <label for="route-width" class="block text-sm font-medium text-[var(--color-text-primary)]">Ширина</label>
          <input
            id="route-width"
            type="text"
            bind:value={plannerWidth}
            class="mt-1 w-full rounded border border-[var(--color-border-primary)] p-2 focus:border-[var(--color-primary-500)] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label for="route-modes" class="block text-sm font-medium text-[var(--color-text-primary)]">Разрешённые режимы</label>
        <select
          id="route-modes"
          multiple
          size="4"
          bind:value={travelModes}
          class="mt-1 w-full rounded border border-[var(--color-border-primary)] p-2 focus:border-[var(--color-primary-500)] focus:outline-none"
        >
          <option value="driving">Авто</option>
          <option value="walking">Пешком</option>
          <option value="cycling">Велосипед</option>
          <option value="transit">Общественный транспорт</option>
        </select>
        <p class="mt-1 text-xs text-[var(--color-text-secondary)]">
          Удерживайте Ctrl / Cmd чтобы выбрать несколько вариантов.
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-[var(--color-text-primary)]">Сценарии</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm hover:border-[var(--color-primary-500)]"
            onclick={() => applyPreset('delivery')}
          >
            Доставка
          </button>
          <button
            type="button"
            class="rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm hover:border-[var(--color-primary-500)]"
            onclick={() => applyPreset('eco')}
          >
            Eco mode
          </button>
          <button
            type="button"
            class="rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm hover:border-[var(--color-primary-500)]"
            onclick={() => applyPreset('walking')}
          >
            Пеший маршрут
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
    <h2 class="text-lg font-semibold text-[var(--color-text-primary)]">Лента событий</h2>
    {#if activityLog.length > 0}
      <ul class="mt-3 space-y-2 text-sm text-[var(--color-text-primary)]">
        {#each activityLog as entry}
          <li class="rounded-md bg-[var(--color-background-secondary)] px-3 py-2">{entry}</li>
        {/each}
      </ul>
    {:else}
      <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Выполните действия в планировщике, чтобы увидеть историю.</p>
    {/if}
  </div>
</div>



