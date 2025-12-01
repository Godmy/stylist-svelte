<script lang="ts">
  import { CheckCircle, DollarSign, FileText, Package, Truck } from 'lucide-svelte';
  import ReturnPolicy from './ReturnPolicy.svelte';

  type ShippingCosts = 'buyer' | 'seller' | 'partial';

  type ReturnCondition = {
    id: string;
    title: string;
    description: string;
    appliesTo: string[];
    exceptions?: string[];
  };

  type ReturnStep = {
    id: string;
    title: string;
    description: string;
    icon: any;
  };

  type FAQ = {
    question: string;
    answer: string;
  };

  const friendlyConditions: ReturnCondition[] = [
    {
      id: 'condition-1',
      title: '30 дней на возврат',
      description: 'Покупатели могут вернуть товар в течение указанного периода без объяснения причин.',
      appliesTo: ['all']
    },
    {
      id: 'condition-2',
      title: 'Сохранность комплекта',
      description: 'Упаковка, бирки и аксессуары должны быть в целости.',
      appliesTo: ['apparel', 'electronics']
    },
    {
      id: 'condition-3',
      title: 'Бережное использование',
      description: 'Мы принимаем товары без следов эксплуатации или повреждений.',
      appliesTo: ['all'],
      exceptions: ['персонализированные товары', 'цифровой контент']
    }
  ];

  const strictConditions: ReturnCondition[] = [
    {
      id: 'condition-1',
      title: '14 дней со дня доставки',
      description: 'Возврат возможен только в течение двух недель с даты получения заказа.',
      appliesTo: ['all']
    },
    {
      id: 'condition-2',
      title: 'Видео распаковки',
      description: 'Для техники требуется запись распаковки в качестве подтверждения.',
      appliesTo: ['electronics']
    },
    {
      id: 'condition-3',
      title: 'Исключения',
      description: 'Гигиенические товары, подарочные карты и распродажи не возвращаются.',
      appliesTo: ['limited'],
      exceptions: ['товары с браком']
    }
  ];

  const standardSteps: ReturnStep[] = [
    {
      id: 'step-1',
      title: 'Заявка',
      description: 'Покупатель инициирует возврат в личном кабинете и получает ярлык.',
      icon: FileText
    },
    {
      id: 'step-2',
      title: 'Упаковка',
      description: 'Товар упаковывается в исходную коробку. При необходимости приложите аксессуары.',
      icon: Package
    },
    {
      id: 'step-3',
      title: 'Доставка',
      description: 'Отправьте посылку выбранным перевозчиком и сохраните трек-номер.',
      icon: Truck
    },
    {
      id: 'step-4',
      title: 'Возврат средств',
      description: 'После проверки мы переводим деньги в течение 3–5 рабочих дней.',
      icon: DollarSign
    }
  ];

  const expressSteps: ReturnStep[] = [
    {
      id: 'step-1',
      title: 'Чек-лист',
      description: 'Сфотографируйте товар и отметьте основные параметры состояния.',
      icon: CheckCircle
    },
    {
      id: 'step-2',
      title: 'Курьер',
      description: 'Наш курьер заберёт заказ в удобное время.',
      icon: Truck
    },
    {
      id: 'step-3',
      title: 'Мгновенный возврат',
      description: 'Возврат средств запускается сразу после передачи курьеру.',
      icon: DollarSign
    }
  ];

  const baseFaqs: FAQ[] = [
    {
      question: 'Как поменять товар на другой размер?',
      answer: 'Укажите обмен при создании заявки и мы зарезервируем нужный размер заранее.'
    },
    {
      question: 'Что если товар пришёл повреждённым?',
      answer: 'Мы организуем бесплатный вывоз и вернём полную стоимость, включая доставку.'
    },
    {
      question: 'Кто оплачивает обратную пересылку?',
      answer: 'Это зависит от выбранного сценария доставки и указано в разделе Shipping.'
    }
  ];

  const eligibleProducts = ['Одежда', 'Электроника', 'Дом и сад', 'Аксессуары'];
  const ineligibleProducts = ['Продукты питания', 'Гигиенические товары', 'Цифровые лицензии'];

  const shippingSummary: Record<ShippingCosts, string> = {
    buyer: 'Покупатель организует и оплачивает доставку, а мы принимаем товар после проверки.',
    seller: 'Мы выдаём предоплаченный ярлык и берём расходы на себя.',
    partial: 'Мы компенсируем часть стоимости доставки или предлагаём бонусы на покупку.'
  };

  const locales = [
    { label: 'English (US)', value: 'en-US' },
    { label: 'Deutsch', value: 'de-DE' },
    { label: 'Français', value: 'fr-FR' },
    { label: '日本語', value: 'ja-JP' }
  ];

  let policyPeriod = 30;
  let restockingFee = 10;
  let policyDescription =
    'Our return policy allows you to return unused items within {days} days and receive a fast refund.';
  let shippingCosts: ShippingCosts = 'buyer';
  let showConditions = true;
  let showSteps = true;
  let showEligibility = true;
  let showShippingInfo = true;
  let showFAQ = true;
  let policyEffectiveDate = new Date();
  let locale = locales[0].value;
  let useStrictConditions = false;
  let expressWorkflow = false;
  let lastEvent = 'Пока нет действий.';

  $: activeConditions = useStrictConditions ? strictConditions : friendlyConditions;
  $: activeSteps = expressWorkflow ? expressSteps : standardSteps;
  $: effectiveDateInput = policyEffectiveDate.toISOString().split('T')[0];

  function updateEffectiveDate(value: string) {
    if (!value) return;
    policyEffectiveDate = new Date(`${value}T00:00:00`);
  }

  function logEvent(message: string) {
    const timestamp = new Date().toLocaleTimeString();
    lastEvent = `${timestamp}: ${message}`;
  }

  function applyPreset(preset: 'holiday' | 'strict' | 'lenient') {
    if (preset === 'holiday') {
      policyPeriod = 60;
      restockingFee = 0;
      shippingCosts = 'seller';
      useStrictConditions = false;
      expressWorkflow = true;
    } else if (preset === 'strict') {
      policyPeriod = 14;
      restockingFee = 15;
      shippingCosts = 'buyer';
      useStrictConditions = true;
      expressWorkflow = false;
    } else {
      policyPeriod = 45;
      restockingFee = 5;
      shippingCosts = 'partial';
      useStrictConditions = false;
      expressWorkflow = false;
    }
  }
</script>

<div class="space-y-6 p-6">
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">ReturnPolicy</h1>
    <p class="text-gray-600">
      Управляйте правилами возврата как продукт-менеджер: меняйте продолжительность окна, стоимость доставки,
      состав разделов и локаль описания.
    </p>
  </div>

  <div class="grid gap-6 lg:grid-cols-[2fr_1fr]">
    <div class="space-y-4">
      <ReturnPolicy
        policyPeriod={policyPeriod}
        policyDescription={policyDescription}
        policyEffectiveDate={policyEffectiveDate}
        conditions={activeConditions}
        returnSteps={activeSteps}
        faqs={baseFaqs}
        eligibleProducts={eligibleProducts}
        ineligibleProducts={ineligibleProducts}
        shippingCosts={shippingCosts}
        restockingFee={restockingFee}
        showConditions={showConditions}
        showSteps={showSteps}
        showEligibility={showEligibility}
        showShippingInfo={showShippingInfo}
        showFAQ={showFAQ}
        locale={locale}
        onPolicyClick={() => logEvent('Пользователь открыл полный текст полиса')}
        onReturnInitiate={() => logEvent('Покупатель инициировал возврат')}
      />

      <div class="rounded-lg border border-gray-200 bg-gray-50 p-4">
        <p class="text-sm text-gray-500">Последнее действие</p>
        <p class="font-medium text-gray-900">{lastEvent}</p>
      </div>
    </div>

    <div class="space-y-5 rounded-lg border border-gray-200 bg-white p-4">
      <div>
        <label for="return-policy-period" class="block text-sm font-medium text-gray-700">Период возврата (дней)</label>
        <input
          id="return-policy-period"
          type="number"
          min="7"
          max="90"
          bind:value={policyPeriod}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label for="return-policy-description" class="block text-sm font-medium text-gray-700">Описание для клиентов</label>
        <textarea
          id="return-policy-description"
          rows="3"
          bind:value={policyDescription}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        ></textarea>
        <p class="mt-1 text-xs text-gray-500">Используйте {`{days}`} чтобы подставить число дней автоматически.</p>
      </div>

      <div>
        <div class="flex items-center justify-between text-sm font-medium text-gray-700">
          <span>Рестокинговый сбор</span>
          <span>{restockingFee}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="25"
          step="5"
          bind:value={restockingFee}
          class="mt-2 w-full"
        />
      </div>

      <div>
        <label for="return-shipping-costs" class="block text-sm font-medium text-gray-700">Оплата обратной доставки</label>
        <select
          id="return-shipping-costs"
          bind:value={shippingCosts}
          class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
        >
          <option value="buyer">Покупатель</option>
          <option value="seller">Продавец</option>
          <option value="partial">Делим пополам</option>
        </select>
        <p class="mt-2 rounded-md bg-blue-50 p-2 text-xs text-blue-700">
          {shippingSummary[shippingCosts]}
        </p>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showConditions} class="rounded border-gray-300" />
          Условия
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showSteps} class="rounded border-gray-300" />
          Шаги возврата
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showEligibility} class="rounded border-gray-300" />
          Группы товаров
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showShippingInfo} class="rounded border-gray-300" />
          Доставка и сборы
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={showFAQ} class="rounded border-gray-300" />
          FAQ
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={expressWorkflow} class="rounded border-gray-300" />
          Экспресс-процесс
        </label>
        <label class="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" bind:checked={useStrictConditions} class="rounded border-gray-300" />
          Строгие условия
        </label>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <div>
          <label for="return-locale" class="block text-sm font-medium text-gray-700">Локализация</label>
          <select
            id="return-locale"
            bind:value={locale}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          >
            {#each locales as item}
              <option value={item.value}>{item.label}</option>
            {/each}
          </select>
        </div>
        <div>
          <label for="return-effective-date" class="block text-sm font-medium text-gray-700">Дата вступления</label>
          <input
            id="return-effective-date"
            type="date"
            value={effectiveDateInput}
            onchange={(event) => updateEffectiveDate((event.target as HTMLInputElement).value)}
            class="mt-1 w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold text-gray-800">Быстрые сценарии</h3>
        <div class="mt-2 flex flex-wrap gap-2">
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('holiday')}
          >
            Holiday sale
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('strict')}
          >
            Strict QA
          </button>
          <button
            type="button"
            class="rounded-md border border-gray-200 px-3 py-1 text-sm hover:border-blue-500"
            onclick={() => applyPreset('lenient')}
          >
            VIP program
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
