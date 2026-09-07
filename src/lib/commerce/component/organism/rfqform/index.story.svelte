<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';

	import RFQForm from './index.svelte';

	type RFQSummary = {
		requesterName: string;
		items: number;
		urgency: boolean;
		currency?: string;
	};

	const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CNY'];

	let title = 'Request for quotation';
	let description =
		'Опишите необходимые позиции, приложите спецификации и получите индивидуальное предложение.';
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
		submissionLog = [`${new Date().toLocaleTimeString()} — ${message}`, ...submissionLog].slice(
			0,
			5
		);
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

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Request for quotation' },
		{
			name: 'description',
			type: 'text',
			defaultValue:
				'Опишите необходимые позиции, приложите спецификации и получите индивидуальное предложение.'
		},
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
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-rfqform _c1">
			<div>
				<h1 class="_c2">RFQForm</h1>
				<p class="_c3">
					Полноценная форма запроса коммерческого предложения со множеством секций. Управляйте их
					отображением и проверяйте сценарии с вложениями, срочностью и дополнительными условиями.
				</p>
			</div>

			<div class="_c4">
				<div class="_c5">
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

				<div class="_c6">
					<h2 class="_c7">Панель управления</h2>

					<div>
						<label for="rfq-title" class="_c8">Заголовок формы</label>
						<input id="rfq-title" type="text" bind:value={title} class="_c9 _c1" />
					</div>

					<div>
						<label for="rfq-description" class="_c8">Подзаголовок</label>
						<textarea id="rfq-description" rows="3" bind:value={description} class="_c9 _c1"
						></textarea>
					</div>

					<div class="_c10">
						<label class="_c11">
							<input type="checkbox" bind:checked={showCompanyFields} class="_c12" />
							Реквизиты компании
						</label>
						<label class="_c11">
							<input type="checkbox" bind:checked={showShippingFields} class="_c12" />
							Адрес доставки
						</label>
						<label class="_c11">
							<input type="checkbox" bind:checked={showUrgentOption} class="_c12" />
							Флаг срочности
						</label>
						<label class="_c11">
							<input type="checkbox" bind:checked={showValidUntil} class="_c12" />
							Дата истечения
						</label>
						<label class="_c11">
							<input type="checkbox" bind:checked={showDeliveryTerms} class="_c12" />
							Условия поставки
						</label>
						<label class="_c11">
							<input type="checkbox" bind:checked={showPaymentTerms} class="_c12" />
							Условия оплаты
						</label>
						<label class="_c11">
							<input type="checkbox" bind:checked={showAttachments} class="_c12" />
							Вложения
						</label>
					</div>

					<div class="_c10">
						<div>
							<label for="rfq-currency" class="_c8">Валюта по умолчанию</label>
							<select id="rfq-currency" bind:value={defaultCurrency} class="_c9 _c1">
								{#each currencies as currency}
									<option value={currency}>{currency}</option>
								{/each}
							</select>
						</div>
						<div>
							<label for="rfq-attachments" class="_c8">Макс. вложений</label>
							<input
								id="rfq-attachments"
								type="number"
								min="1"
								max="15"
								bind:value={maxAttachments}
								class="_c9 _c1"
							/>
						</div>
					</div>

					<div>
						<h3 class="_c13">Предустановки</h3>
						<div class="_c14">
							<button type="button" class="_c15 _c2" onclick={() => applyPreset('minimal')}>
								Минимальный бриф
							</button>
							<button type="button" class="_c15 _c2" onclick={() => applyPreset('detailed')}>
								Подробный
							</button>
							<button type="button" class="_c15 _c2" onclick={() => applyPreset('attachments')}>
								С документацией
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="_c16">
				<div class="_c5">
					<h3 class="_c7">Сводка последней отправки</h3>
					{#if lastSubmission}
						<dl class="_c17">
							<div class="_c18">
								<dt class="_c3">Контактное лицо</dt>
								<dd class="_c19">
									{lastSubmission.requesterName}
								</dd>
							</div>
							<div class="_c18">
								<dt class="_c3">Количество позиций</dt>
								<dd class="_c19">{lastSubmission.items}</dd>
							</div>
							<div class="_c18">
								<dt class="_c3">Срочно?</dt>
								<dd class="_c19">
									{lastSubmission.urgency ? 'Да' : 'Нет'}
								</dd>
							</div>
							<div class="_c18">
								<dt class="_c3">Валюта</dt>
								<dd class="_c19">
									{lastSubmission.currency || 'не указана'}
								</dd>
							</div>
						</dl>
					{:else}
						<p class="_c20">Отправьте форму, чтобы увидеть живую статистику.</p>
					{/if}
				</div>

				<div class="_c5">
					<h3 class="_c7">Лента событий</h3>
					{#if submissionLog.length > 0}
						<ul class="_c21">
							{#each submissionLog as entry}
								<li class="_c22">{entry}</li>
							{/each}
						</ul>
					{:else}
						<p class="_c20">События появятся после взаимодействия с формой.</p>
					{/if}
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 1.5rem;
	}
	._c10 {
		display: grid;
		gap: 0.75rem;
	}
	@media (min-width: 640px) {
		._c10 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c11 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}
	._c12 {
		border-radius: 0.25rem;
		border-color: var(--color-border-primary);
	}
	._c13 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c14 {
		margin-top: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	._c15 {
		border-radius: 0.375rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c16 {
		display: grid;
		gap: 1rem;
	}
	@media (min-width: 768px) {
		._c16 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	._c17 {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c17 > * + * {
		margin-top: 0.5rem;
	}
	._c18 {
		display: flex;
		justify-content: space-between;
	}
	._c19 {
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c2 {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c20 {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c21 {
		margin-top: 0.75rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}
	._c21 > * + * {
		margin-top: 0.5rem;
	}
	._c22 {
		border-radius: 0.25rem;
		background-color: var(--color-background-secondary);
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	._c3 {
		color: var(--color-text-secondary);
	}
	._c4 {
		display: grid;
		gap: 1.5rem;
	}
	@media (min-width: 1280px) {
		._c4 {
			grid-template-columns: 2fr 1fr;
		}
	}
	._c5 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c6 {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c6 > * + * {
		margin-top: 1.25rem;
	}
	._c7 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c9 {
		margin-top: 0.25rem;
		width: 100%;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 0.5rem;
	}

	._c1:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
	}
	._c2:hover {
		border-color: var(--color-primary-500);
	}
</style>
