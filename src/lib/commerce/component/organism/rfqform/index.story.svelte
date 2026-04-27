<script lang="ts">
  import { Story } from '$stylist/playground/component';
  import type { InterfaceControllerSettings } from '$stylist/playground/type/struct/interface-controller-settings';

  import RFQForm from './index.svelte';

  type RFQSummary = {
    requesterName: string;
    items: number;
    urgency: boolean;
    currency?: string;
  };

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CNY'];

  let title = 'Request for quotation';
  let description = 'Опишите необходимые позиции, приложите спецификации и получите индивидуальное предложение.';
  let showCompanyFields = true;
  let showShippingFields = true;
  let showUrgentOption = true;
  let showValidUntil = true;
  let showDeliveryTerms = true;
  let showPaymentTerms = true;
  let showAttachments = true;
  let defaultCurrency = 'USD';
  let maxAttachments = 5;

  let lastSubmission: RFQSummary | null = null;
  let submissionLog: string[] = [];

  function logEvent(message: string) {
    submissionLog = [`${new Date().toLocaleTimeString()} — ${message}`, ...submissionLog].slice(0, 5);
  }

  function handleSubmit(rfq: any) {
    lastSubmission = {
      requesterName: rfq.requesterName || 'Не указан',
      items: rfq.products.length,
      urgency: !!rfq.urgent,
      currency: rfq.currency
    };
    logEvent(`Отправлена заявка на ${rfq.products.length} позиций`);
  }

  function handleCancel() {
    logEvent('Пользователь отменил заполнение формы');
  }

  function applyPreset(preset: 'minimal' | 'detailed' | 'attachments') {
    if (preset === 'minimal') {
      showCompanyFields = false;
      showShippingFields = false;
      showDeliveryTerms = false;
      showPaymentTerms = false;
      showAttachments = false;
      showValidUntil = true;
      showUrgentOption = true;
    } else if (preset === 'attachments') {
      showCompanyFields = true;
      showShippingFields = true;
      showAttachments = true;
      maxAttachments = 10;
      defaultCurrency = 'EUR';
    } else {
      showCompanyFields = true;
      showShippingFields = true;
      showUrgentOption = true;
      showValidUntil = true;
      showDeliveryTerms = true;
      showPaymentTerms = true;
      showAttachments = true;
      maxAttachments = 5;
      defaultCurrency = 'USD';
    }
  }

  type Props = {
    title: string;
    description: string;
    showCompanyFields: boolean;
    showShippingFields: boolean;
    showUrgentOption: boolean;
    showValidUntil: boolean;
    showDeliveryTerms: boolean;
    showPaymentTerms: boolean;
    showAttachments: boolean;
    defaultCurrency: string;
    maxAttachments: number;
  };

  const controls: InterfaceControllerSettings[] = [
    { name: 'title', type: 'text', defaultValue: 'Request for quotation' },
    { name: 'description', type: 'text', defaultValue: 'Опишите необходимые позиции, приложите спецификации и получите индивидуальное предложение.' },
    { name: 'showCompanyFields', type: 'boolean', defaultValue: true },
    { name: 'showShippingFields', type: 'boolean', defaultValue: true },
    { name: 'showUrgentOption', type: 'boolean', defaultValue: true },
    { name: 'showValidUntil', type: 'boolean', defaultValue: true },
    { name: 'showDeliveryTerms', type: 'boolean', defaultValue: true },
    { name: 'showPaymentTerms', type: 'boolean', defaultValue: true },
    { name: 'showAttachments', type: 'boolean', defaultValue: true },
    { name: 'defaultCurrency', type: 'text', defaultValue: 'USD' },
    { name: 'maxAttachments', type: 'number', defaultValue: 5 }
  ];
</script>

<Story
  id="organisms-rfqform"
  title="Organisms / Interaction / Commerce / RFQForm"
  component={RFQForm}
  category="Organisms/Interaction/Commerce"
  description="Form for requesting quotations with multiple sections for product requirements, shipping, and payment terms."
  controls={controls}
>
  {#snippet children(values: any)}
    <div class="sb-organisms-rfqform space-y-6 p-6">
      <div>
        <h1 class="text-2xl font-semibold text-[var(--color-text-primary)]">RFQForm</h1>
        <p class="text-[var(--color-text-secondary)]">
          Полноценная форма запроса коммерческого предложения со множеством секций. Управляйте их отображением и
          проверяйте сценарии с вложениями, срочностью и дополнительными условиями.
        </p>
      </div>

      <div class="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
          <RFQForm
            {title}
            {description}
            showCompanyFields={values.showCompanyFields}
            showShippingFields={values.showShippingFields}
            showUrgentOption={values.showUrgentOption}
            showValidUntil={values.showValidUntil}
            showDeliveryTerms={values.showDeliveryTerms}
            showPaymentTerms={values.showPaymentTerms}
            showAttachments={values.showAttachments}
            defaultCurrency={values.defaultCurrency}
            maxAttachments={values.maxAttachments}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </div>

        <div class="space-y-5 rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
          <h2 class="text-lg font-semibold text-[var(--color-text-primary)]">Панель управления</h2>

          <div>
            <label for="rfq-title" class="block text-sm font-medium text-[var(--color-text-primary)]">Заголовок формы</label>
            <input
              id="rfq-title"
              type="text"
              bind:value={title}
              class="mt-1 w-full rounded border border-[var(--color-border-primary)] p-2 focus:border-[var(--color-primary-500)] focus:outline-none"
            />
          </div>

          <div>
            <label for="rfq-description" class="block text-sm font-medium text-[var(--color-text-primary)]">Подзаголовок</label>
            <textarea
              id="rfq-description"
              rows="3"
              bind:value={description}
              class="mt-1 w-full rounded border border-[var(--color-border-primary)] p-2 focus:border-[var(--color-primary-500)] focus:outline-none"
            ></textarea>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showCompanyFields} class="rounded border-[var(--color-border-primary)]" />
              Реквизиты компании
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showShippingFields} class="rounded border-[var(--color-border-primary)]" />
              Адрес доставки
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showUrgentOption} class="rounded border-[var(--color-border-primary)]" />
              Флаг срочности
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showValidUntil} class="rounded border-[var(--color-border-primary)]" />
              Дата истечения
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showDeliveryTerms} class="rounded border-[var(--color-border-primary)]" />
              Условия поставки
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showPaymentTerms} class="rounded border-[var(--color-border-primary)]" />
              Условия оплаты
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showAttachments} class="rounded border-[var(--color-border-primary)]" />
              Вложения
            </label>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div>
              <label for="rfq-currency" class="block text-sm font-medium text-[var(--color-text-primary)]">Валюта по умолчанию</label>
              <select
                id="rfq-currency"
                bind:value={defaultCurrency}
                class="mt-1 w-full rounded border border-[var(--color-border-primary)] p-2 focus:border-[var(--color-primary-500)] focus:outline-none"
              >
                {#each currencies as currency}
                  <option value={currency}>{currency}</option>
                {/each}
              </select>
            </div>
            <div>
              <label for="rfq-attachments" class="block text-sm font-medium text-[var(--color-text-primary)]">Макс. вложений</label>
              <input
                id="rfq-attachments"
                type="number"
                min="1"
                max="15"
                bind:value={maxAttachments}
                class="mt-1 w-full rounded border border-[var(--color-border-primary)] p-2 focus:border-[var(--color-primary-500)] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <h3 class="text-sm font-semibold text-[var(--color-text-primary)]">Предустановки</h3>
            <div class="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                class="rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm hover:border-[var(--color-primary-500)]"
                onclick={() => applyPreset('minimal')}
              >
                Минимальный бриф
              </button>
              <button
                type="button"
                class="rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm hover:border-[var(--color-primary-500)]"
                onclick={() => applyPreset('detailed')}
              >
                Подробный
              </button>
              <button
                type="button"
                class="rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm hover:border-[var(--color-primary-500)]"
                onclick={() => applyPreset('attachments')}
              >
                С документацией
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
          <h3 class="text-lg font-semibold text-[var(--color-text-primary)]">Сводка последней отправки</h3>
          {#if lastSubmission}
            <dl class="mt-3 space-y-2 text-sm">
              <div class="flex justify-between">
                <dt class="text-[var(--color-text-secondary)]">Контактное лицо</dt>
                <dd class="font-medium text-[var(--color-text-primary)]">{lastSubmission.requesterName}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-[var(--color-text-secondary)]">Количество позиций</dt>
                <dd class="font-medium text-[var(--color-text-primary)]">{lastSubmission.items}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-[var(--color-text-secondary)]">Срочно?</dt>
                <dd class="font-medium text-[var(--color-text-primary)]">
                  {lastSubmission.urgency ? 'Да' : 'Нет'}
                </dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-[var(--color-text-secondary)]">Валюта</dt>
                <dd class="font-medium text-[var(--color-text-primary)]">{lastSubmission.currency || 'не указана'}</dd>
              </div>
            </dl>
          {:else}
            <p class="mt-2 text-sm text-[var(--color-text-secondary)]">Отправьте форму, чтобы увидеть живую статистику.</p>
          {/if}
        </div>

        <div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
          <h3 class="text-lg font-semibold text-[var(--color-text-primary)]">Лента событий</h3>
          {#if submissionLog.length > 0}
            <ul class="mt-3 space-y-2 text-sm text-[var(--color-text-primary)]">
              {#each submissionLog as entry}
                <li class="rounded bg-[var(--color-background-secondary)] px-3 py-2">{entry}</li>
              {/each}
            </ul>
          {:else}
            <p class="mt-2 text-sm text-[var(--color-text-secondary)]">События появятся после взаимодействия с формой.</p>
          {/if}
        </div>
      </div>
    </div>
  {/snippet}
</Story>






