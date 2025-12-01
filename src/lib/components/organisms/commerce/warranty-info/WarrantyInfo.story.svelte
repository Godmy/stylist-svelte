<script lang="ts">
  import WarrantyInfo from './WarrantyInfo.svelte';

  type WarrantyPeriod = {
    type: 'limited' | 'full' | 'extended';
    duration: number;
    description?: string;
    coverage?: string[];
    exclusions?: string[];
  };

  type WarrantyClaim = {
    id: string;
    date: Date;
    status: 'pending' | 'approved' | 'rejected' | 'resolved';
    issue: string;
    description?: string;
    resolution?: string;
    claimNumber: string;
  };

  const coverageDetails = [
    'Электронные компоненты и аккумуляторы',
    'Материалы корпуса и оголовья',
    'Кабели и переходники, идущие в комплекте',
    'Поддержка обновлений прошивки'
  ];

  const exclusions = [
    'Износ, вызванный неправильным хранением',
    'Повреждения в результате попадания влаги',
    'Модификации устройства или разбор без авторизованного сервиса'
  ];

  const claims: WarrantyClaim[] = [
    {
      id: 'claim-1',
      date: new Date('2024-06-12'),
      status: 'resolved',
      issue: 'Battery drain',
      description: 'Устройство быстро разряжается, требуется замена батареи.',
      resolution: 'Заменён аккумулятор и обновлена прошивка.',
      claimNumber: 'WC-10452'
    },
    {
      id: 'claim-2',
      date: new Date('2024-08-03'),
      status: 'approved',
      issue: 'Audio imbalance',
      description: 'Правый канал звучит тише.',
      claimNumber: 'WC-10988'
    }
  ];

  let productName = 'Aurora Pro Headphones';
  let purchaseDateInput = '2023-03-18';
  $: purchaseDate = new Date(`${purchaseDateInput}T00:00:00`);
  let warrantyType: WarrantyPeriod['type'] = 'extended';
  let warrantyDuration = 24;
  $: warrantyPeriod = {
    type: warrantyType,
    duration: warrantyDuration,
    description: 'Расширенная защита для премиальной электроники.',
    coverage: coverageDetails,
    exclusions
  };
  let serialNumber = 'AP-4482-NEBULA';
  let showCoverageDetails = true;
  let showExclusions = true;
  let showClaimsHistory = true;
  let showFileDownload = true;
  let showClaimForm = true;
  let locale = 'ru-RU';
  let actionLog: string[] = [];

  function log(message: string) {
    actionLog = [`${new Date().toLocaleTimeString()} — ${message}`, ...actionLog].slice(0, 5);
  }

  function handleClaimSubmit(claim: Omit<WarrantyClaim, 'id' | 'date' | 'status'>) {
    log(`Получена новая заявка: ${claim.issue}`);
  }

  function handleTermsClick() {
    log('Пользователь открыл условия гарантии');
  }

  function handleFileDownload() {
    log('Загружен гарантийный сертификат');
  }

  function applyPreset(preset: 'lite' | 'enterprise') {
    if (preset === 'lite') {
      warrantyType = 'limited';
      warrantyDuration = 12;
      showClaimForm = false;
      showCoverageDetails = true;
      showExclusions = true;
    } else {
      warrantyType = 'extended';
      warrantyDuration = 36;
      showClaimForm = true;
      showCoverageDetails = true;
      showExclusions = true;
    }
  }
</script>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">WarrantyInfo</h1>
    <p class="text-gray-600">
      Демонстрируем информационный модуль гарантии: регулируйте срок действия, вид покрытия и отображаемые блоки, чтобы
      повторить оформление нового эталонного стори.
    </p>
  </div>

  <div class="grid gap-6 2xl:grid-cols-[2fr_1fr]">
    <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <WarrantyInfo
        {productName}
        {purchaseDate}
        {warrantyPeriod}
        {claims}
        {serialNumber}
        productId="SKY-2048"
        termsUrl="https://example.com/warranty"
        {showCoverageDetails}
        {showExclusions}
        {showClaimsHistory}
        {showFileDownload}
        {showClaimForm}
        {locale}
        onClaimSubmit={handleClaimSubmit}
        onTermsClick={handleTermsClick}
        onFileDownload={handleFileDownload}
      />
    </div>

    <div class="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <h2 class="text-lg font-semibold text-gray-900">Настройки</h2>

      <div>
        <label for="warranty-product" class="block text-sm font-medium text-gray-700">Название продукта</label>
        <input
          id="warranty-product"
          type="text"
          bind:value={productName}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label for="warranty-purchase-date" class="block text-sm font-medium text-gray-700">Дата покупки</label>
        <input
          id="warranty-purchase-date"
          type="date"
          bind:value={purchaseDateInput}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <div>
          <label for="warranty-type" class="block text-sm font-medium text-gray-700">Тип гарантии</label>
          <select
            id="warranty-type"
            bind:value={warrantyType}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          >
            <option value="limited">Limited</option>
            <option value="full">Full</option>
            <option value="extended">Extended</option>
          </select>
        </div>
        <div>
          <label for="warranty-duration" class="block text-sm font-medium text-gray-700">Длительность (мес.)</label>
          <input
            id="warranty-duration"
            type="number"
            min="6"
            max="48"
            bind:value={warrantyDuration}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showCoverageDetails} class="rounded border-gray-300" />
          Покрытие
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showExclusions} class="rounded border-gray-300" />
          Исключения
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showClaimsHistory} class="rounded border-gray-300" />
          История заявок
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showFileDownload} class="rounded border-gray-300" />
          Кнопка загрузки
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showClaimForm} class="rounded border-gray-300" />
          Форма обращения
        </label>
      </div>

      <div>
        <label for="warranty-serial" class="block text-sm font-medium text-gray-700">Серийный номер</label>
        <input
          id="warranty-serial"
          type="text"
          bind:value={serialNumber}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <h3 class="text-sm font-semibold text-gray-800">Предустановки</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('lite')}
          >
            Consumer Lite
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('enterprise')}
          >
            Enterprise
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
    <h2 class="text-lg font-semibold text-gray-900">Лента событий</h2>
    {#if actionLog.length > 0}
      <ul class="mt-3 space-y-2 text-sm text-gray-700">
        {#each actionLog as entry}
          <li class="rounded-md bg-gray-50 px-3 py-2">{entry}</li>
        {/each}
      </ul>
    {:else}
      <p class="mt-2 text-sm text-gray-500">Выполните действия в блоке, чтобы увидеть историю.</p>
    {/if}
  </div>
</div>
