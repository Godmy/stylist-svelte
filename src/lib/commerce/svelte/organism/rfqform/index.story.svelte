<script lang="ts">
  import { Story } from '$stylist/development/svelte/playground';
  import type { InterfaceControllerSettings } from '$stylist/development/type/struct/interface-controller-settings/interface-controller-settings';

  import RFQForm from './index.svelte';

  type RFQSummary = {
    requesterName: string;
    items: number;
    urgency: boolean;
    currency?: string;
  };

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CNY'];

  let title = 'Request for quotation';
  let description = 'РћРїРёС€РёС‚Рµ РЅРµРѕР±С…РѕРґРёРјС‹Рµ РїРѕР·РёС†РёРё, РїСЂРёР»РѕР¶РёС‚Рµ СЃРїРµС†РёС„РёРєР°С†РёРё Рё РїРѕР»СѓС‡РёС‚Рµ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ.';
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
    submissionLog = [`${new Date().toLocaleTimeString()} вЂ” ${message}`, ...submissionLog].slice(0, 5);
  }

  function handleSubmit(rfq: any) {
    lastSubmission = {
      requesterName: rfq.requesterName || 'РќРµ СѓРєР°Р·Р°РЅ',
      items: rfq.products.length,
      urgency: !!rfq.urgent,
      currency: rfq.currency
    };
    logEvent(`РћС‚РїСЂР°РІР»РµРЅР° Р·Р°СЏРІРєР° РЅР° ${rfq.products.length} РїРѕР·РёС†РёР№`);
  }

  function handleCancel() {
    logEvent('РџРѕР»СЊР·РѕРІР°С‚РµР»СЊ РѕС‚РјРµРЅРёР» Р·Р°РїРѕР»РЅРµРЅРёРµ С„РѕСЂРјС‹');
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
    { name: 'description', type: 'text', defaultValue: 'РћРїРёС€РёС‚Рµ РЅРµРѕР±С…РѕРґРёРјС‹Рµ РїРѕР·РёС†РёРё, РїСЂРёР»РѕР¶РёС‚Рµ СЃРїРµС†РёС„РёРєР°С†РёРё Рё РїРѕР»СѓС‡РёС‚Рµ РёРЅРґРёРІРёРґСѓР°Р»СЊРЅРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ.' },
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
          РџРѕР»РЅРѕС†РµРЅРЅР°СЏ С„РѕСЂРјР° Р·Р°РїСЂРѕСЃР° РєРѕРјРјРµСЂС‡РµСЃРєРѕРіРѕ РїСЂРµРґР»РѕР¶РµРЅРёСЏ СЃРѕ РјРЅРѕР¶РµСЃС‚РІРѕРј СЃРµРєС†РёР№. РЈРїСЂР°РІР»СЏР№С‚Рµ РёС… РѕС‚РѕР±СЂР°Р¶РµРЅРёРµРј Рё
          РїСЂРѕРІРµСЂСЏР№С‚Рµ СЃС†РµРЅР°СЂРёРё СЃ РІР»РѕР¶РµРЅРёСЏРјРё, СЃСЂРѕС‡РЅРѕСЃС‚СЊСЋ Рё РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅС‹РјРё СѓСЃР»РѕРІРёСЏРјРё.
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
          <h2 class="text-lg font-semibold text-[var(--color-text-primary)]">РџР°РЅРµР»СЊ СѓРїСЂР°РІР»РµРЅРёСЏ</h2>

          <div>
            <label for="rfq-title" class="block text-sm font-medium text-[var(--color-text-primary)]">Р—Р°РіРѕР»РѕРІРѕРє С„РѕСЂРјС‹</label>
            <input
              id="rfq-title"
              type="text"
              bind:value={title}
              class="mt-1 w-full rounded border border-[var(--color-border-primary)] p-2 focus:border-[var(--color-primary-500)] focus:outline-none"
            />
          </div>

          <div>
            <label for="rfq-description" class="block text-sm font-medium text-[var(--color-text-primary)]">РџРѕРґР·Р°РіРѕР»РѕРІРѕРє</label>
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
              Р РµРєРІРёР·РёС‚С‹ РєРѕРјРїР°РЅРёРё
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showShippingFields} class="rounded border-[var(--color-border-primary)]" />
              РђРґСЂРµСЃ РґРѕСЃС‚Р°РІРєРё
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showUrgentOption} class="rounded border-[var(--color-border-primary)]" />
              Р¤Р»Р°Рі СЃСЂРѕС‡РЅРѕСЃС‚Рё
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showValidUntil} class="rounded border-[var(--color-border-primary)]" />
              Р”Р°С‚Р° РёСЃС‚РµС‡РµРЅРёСЏ
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showDeliveryTerms} class="rounded border-[var(--color-border-primary)]" />
              РЈСЃР»РѕРІРёСЏ РїРѕСЃС‚Р°РІРєРё
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showPaymentTerms} class="rounded border-[var(--color-border-primary)]" />
              РЈСЃР»РѕРІРёСЏ РѕРїР»Р°С‚С‹
            </label>
            <label class="flex items-center gap-2 text-sm text-[var(--color-text-primary)]">
              <input type="checkbox" bind:checked={showAttachments} class="rounded border-[var(--color-border-primary)]" />
              Р’Р»РѕР¶РµРЅРёСЏ
            </label>
          </div>

          <div class="grid gap-3 sm:grid-cols-2">
            <div>
              <label for="rfq-currency" class="block text-sm font-medium text-[var(--color-text-primary)]">Р’Р°Р»СЋС‚Р° РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ</label>
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
              <label for="rfq-attachments" class="block text-sm font-medium text-[var(--color-text-primary)]">РњР°РєСЃ. РІР»РѕР¶РµРЅРёР№</label>
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
            <h3 class="text-sm font-semibold text-[var(--color-text-primary)]">РџСЂРµРґСѓСЃС‚Р°РЅРѕРІРєРё</h3>
            <div class="mt-2 flex flex-wrap gap-2">
              <button
                type="button"
                class="rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm hover:border-[var(--color-primary-500)]"
                onclick={() => applyPreset('minimal')}
              >
                РњРёРЅРёРјР°Р»СЊРЅС‹Р№ Р±СЂРёС„
              </button>
              <button
                type="button"
                class="rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm hover:border-[var(--color-primary-500)]"
                onclick={() => applyPreset('detailed')}
              >
                РџРѕРґСЂРѕР±РЅС‹Р№
              </button>
              <button
                type="button"
                class="rounded-md border border-[var(--color-border-primary)] px-3 py-1 text-sm hover:border-[var(--color-primary-500)]"
                onclick={() => applyPreset('attachments')}
              >
                РЎ РґРѕРєСѓРјРµРЅС‚Р°С†РёРµР№
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
          <h3 class="text-lg font-semibold text-[var(--color-text-primary)]">РЎРІРѕРґРєР° РїРѕСЃР»РµРґРЅРµР№ РѕС‚РїСЂР°РІРєРё</h3>
          {#if lastSubmission}
            <dl class="mt-3 space-y-2 text-sm">
              <div class="flex justify-between">
                <dt class="text-[var(--color-text-secondary)]">РљРѕРЅС‚Р°РєС‚РЅРѕРµ Р»РёС†Рѕ</dt>
                <dd class="font-medium text-[var(--color-text-primary)]">{lastSubmission.requesterName}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-[var(--color-text-secondary)]">РљРѕР»РёС‡РµСЃС‚РІРѕ РїРѕР·РёС†РёР№</dt>
                <dd class="font-medium text-[var(--color-text-primary)]">{lastSubmission.items}</dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-[var(--color-text-secondary)]">РЎСЂРѕС‡РЅРѕ?</dt>
                <dd class="font-medium text-[var(--color-text-primary)]">
                  {lastSubmission.urgency ? 'Р”Р°' : 'РќРµС‚'}
                </dd>
              </div>
              <div class="flex justify-between">
                <dt class="text-[var(--color-text-secondary)]">Р’Р°Р»СЋС‚Р°</dt>
                <dd class="font-medium text-[var(--color-text-primary)]">{lastSubmission.currency || 'РЅРµ СѓРєР°Р·Р°РЅР°'}</dd>
              </div>
            </dl>
          {:else}
            <p class="mt-2 text-sm text-[var(--color-text-secondary)]">РћС‚РїСЂР°РІСЊС‚Рµ С„РѕСЂРјСѓ, С‡С‚РѕР±С‹ СѓРІРёРґРµС‚СЊ Р¶РёРІСѓСЋ СЃС‚Р°С‚РёСЃС‚РёРєСѓ.</p>
          {/if}
        </div>

        <div class="rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] p-4 shadow-sm">
          <h3 class="text-lg font-semibold text-[var(--color-text-primary)]">Р›РµРЅС‚Р° СЃРѕР±С‹С‚РёР№</h3>
          {#if submissionLog.length > 0}
            <ul class="mt-3 space-y-2 text-sm text-[var(--color-text-primary)]">
              {#each submissionLog as entry}
                <li class="rounded bg-[var(--color-background-secondary)] px-3 py-2">{entry}</li>
              {/each}
            </ul>
          {:else}
            <p class="mt-2 text-sm text-[var(--color-text-secondary)]">РЎРѕР±С‹С‚РёСЏ РїРѕСЏРІСЏС‚СЃСЏ РїРѕСЃР»Рµ РІР·Р°РёРјРѕРґРµР№СЃС‚РІРёСЏ СЃ С„РѕСЂРјРѕР№.</p>
          {/if}
        </div>
      </div>
    </div>
  {/snippet}
</Story>






