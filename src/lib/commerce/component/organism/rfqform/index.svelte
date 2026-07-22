<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const FileText = 'file-text';

	const User = 'user';

	const Mail = 'mail';

	const Phone = 'phone';

	const MapPin = 'map-pin';

	const Briefcase = 'briefcase';

	const Send = 'send';

	const Calendar = 'calendar';

	const Package = 'package';

	const Plus = 'plus';

	const Minus = 'minus';

	const Truck = 'truck';

	const CreditCard = 'credit-card';

	const Paperclip = 'paperclip';

	const X = 'x';

	import Button from '$stylist/button/component/atom/button/index.svelte';

	import TextArea from '$stylist/input/component/molecule/text-area/index.svelte';

	import type { RFQFormProps } from '$stylist/commerce/type/struct/rfqform-props';

	import createRFQFormState from '$stylist/commerce/function/state/rfqform/index.svelte';

	let {
		title = 'Request for Quotation',

		description = 'Submit your request for quotation and we will provide you with the best pricing options',

		onSubmit,

		onCancel,

		class: hostClass = '',

		formClass = '',

		sectionClass = '',

		inputClass = '',

		buttonClass = '',

		showCompanyFields = true,

		showShippingFields = true,

		showUrgentOption = true,

		showValidUntil = true,

		showDeliveryTerms = true,

		showPaymentTerms = true,

		showAttachments = true,

		defaultCurrency = 'USD',

		maxAttachments = 5,

		...restProps
	}: RFQFormProps = $props();

	const state = createRFQFormState({
		title,

		description,

		onSubmit,

		onCancel,

		class: hostClass,

		formClass,

		sectionClass,

		inputClass,

		buttonClass,

		showCompanyFields,

		showShippingFields,

		showUrgentOption,

		showValidUntil,

		showDeliveryTerms,

		showPaymentTerms,

		showAttachments,

		defaultCurrency,

		maxAttachments,

		...restProps
	});

	const rfqData = $derived(state.rfqData);
</script>

ï»¿
<div class={`c-rfqform ${hostClass}`} {...restProps}>
	<div class="_c1">
		<h2 class="_c2">
			<BaseIcon name={FileText} class="_c3" />

			{title}
		</h2>

		{#if description}
			<p class="_c4">{description}</p>
		{/if}
	</div>

	<form
		class={`${formClass} _c1`}
		onsubmit={(e) => {
			e.preventDefault();

			state.handleSubmit();
		}}
	>
		<!-- Customer Information -->

		<div class={`${sectionClass} _c2`}>
			<h3 class="_c5">
				<BaseIcon name={User} class="_c3" />

				Customer Information
			</h3>

			<div class="_c6">
				<div>
					<label for="requesterName" class="_c7"> Full Name * </label>

					<div class="_c8">
						<div class="_c9">
							<BaseIcon name={User} class="_c10" />
						</div>

						<input
							id="requesterName"
							type="text"
							required
							class={`${inputClass} _c3`}
							placeholder="John Doe"
							value={rfqData.requesterName}
							oninput={(e: Event) =>
								state.handleInputChange('requesterName', (e.target as HTMLInputElement).value)}
						/>
					</div>
				</div>

				<div>
					<label for="requesterEmail" class="_c7"> Email Address * </label>

					<div class="_c8">
						<div class="_c9">
							<BaseIcon name={Mail} class="_c10" />
						</div>

						<input
							id="requesterEmail"
							type="email"
							required
							class={`${inputClass} _c3`}
							placeholder="john@example.com"
							value={rfqData.requesterEmail}
							oninput={(e: Event) =>
								state.handleInputChange('requesterEmail', (e.target as HTMLInputElement).value)}
						/>
					</div>
				</div>

				<div>
					<label for="requesterPhone" class="_c7"> Phone Number </label>

					<div class="_c8">
						<div class="_c9">
							<BaseIcon name={Phone} class="_c10" />
						</div>

						<input
							id="requesterPhone"
							type="tel"
							class={`${inputClass} _c3`}
							placeholder="+1 (555) 123-4567"
							value={rfqData.requesterPhone || ''}
							oninput={(e: Event) =>
								state.handleInputChange('requesterPhone', (e.target as HTMLInputElement).value)}
						/>
					</div>
				</div>

				{#if showCompanyFields}
					<div>
						<label for="companyName" class="_c7"> Company Name </label>

						<div class="_c8">
							<div class="_c9">
								<BaseIcon name={Briefcase} class="_c10" />
							</div>

							<input
								id="companyName"
								type="text"
								class={`${inputClass} _c3`}
								placeholder="Company Ltd."
								value={rfqData.companyName || ''}
								oninput={(e: Event) =>
									state.handleInputChange('companyName', (e.target as HTMLInputElement).value)}
							/>
						</div>
					</div>

					<div>
						<label for="companyAddress" class="_c7"> Company Address </label>

						<div class="_c8">
							<div class="_c9">
								<BaseIcon name={MapPin} class="_c10" />
							</div>

							<TextArea
								label=""
								id="companyAddress"
								class={`${inputClass} _c3`}
								rows={2}
								placeholder="Street, city, state, postal code"
								value={rfqData.companyAddress || ''}
								oninput={(e: Event) =>
									state.handleInputChange(
										'companyAddress',

										(e.target as HTMLTextAreaElement).value
									)}
							></TextArea>
						</div>
					</div>
				{/if}
			</div>
		</div>

		<!-- Product Requirements -->

		<div class={`${sectionClass} _c2`}>
			<div class="_c11">
				<h3 class="_c12">
					<BaseIcon name={Package} class="_c3" />

					Product Requirements
				</h3>

				<button type="button" class="_c13 _c1" onclick={() => state.addProduct()}>
					<BaseIcon name={Plus} class="_c14" />

					Add Product
				</button>
			</div>

			<div class="_c15">
				{#each rfqData.products as product, index}
					{@const baseProductId = `rfq-product-${index}`}

					<div class="_c16">
						<div class="_c17">
							<h4 class="_c18">Product #{index + 1}</h4>

							{#if rfqData.products.length > 1}
								<button type="button" class="_c19 _c2" onclick={() => state.removeProduct(index)}>
									<BaseIcon name={Minus} class="_c20" />
								</button>
							{/if}
						</div>

						<div class="_c21">
							<div>
								<label for={`${baseProductId}-name`} class="_c7">
									Product Name/Part Number *
								</label>

								<input
									id={`${baseProductId}-name`}
									type="text"
									required
									class={`${inputClass} _c4`}
									placeholder="Enter product name or part number"
									value={product.name}
									oninput={(e: Event) =>
										state.handleProductChange(index, 'name', (e.target as HTMLInputElement).value)}
								/>
							</div>

							<div>
								<label for={`${baseProductId}-description`} class="_c7"> Description </label>

								<input
									id={`${baseProductId}-description`}
									type="text"
									class={`${inputClass} _c4`}
									placeholder="Product description"
									value={product.description || ''}
									oninput={(e: Event) =>
										state.handleProductChange(
											index,

											'description',

											(e.target as HTMLInputElement).value
										)}
								/>
							</div>

							<div class="_c22">
								<div>
									<label for={`${baseProductId}-quantity`} class="_c7"> Quantity * </label>

									<input
										id={`${baseProductId}-quantity`}
										type="number"
										required
										min="1"
										class={`${inputClass} _c4`}
										placeholder="1"
										value={product.quantity}
										oninput={(e: Event) =>
											state.handleProductChange(
												index,

												'quantity',

												parseInt((e.target as HTMLInputElement).value) || 1
											)}
									/>
								</div>

								<div>
									<label for={`${baseProductId}-unit`} class="_c7"> Unit </label>

									<select
										id={`${baseProductId}-unit`}
										class={`${inputClass} _c5`}
										value={product.unit || 'pcs'}
										onchange={(e) =>
											state.handleProductChange(
												index,

												'unit',

												(e.target as HTMLSelectElement).value
											)}
									>
										<option value="pcs">Pieces</option>

										<option value="kg">Kilograms</option>

										<option value="m">Meters</option>

										<option value="cm">Centimeters</option>

										<option value="liter">Liters</option>

										<option value="set">Sets</option>

										<option value="box">Boxes</option>

										<option value="ton">Tons</option>
									</select>
								</div>
							</div>

							<div>
								<label for={`${baseProductId}-unit-price`} class="_c7">
									Target Price per Unit
								</label>

								<div class="_c23">
									<div class="_c9">
										<span class="_c24">$</span>
									</div>

									<input
										id={`${baseProductId}-unit-price`}
										type="number"
										step="0.01"
										min="0"
										class={`${inputClass} _c6`}
										placeholder="0.00"
										value={product.unitPrice || ''}
										oninput={(e: Event) =>
											state.handleProductChange(
												index,

												'unitPrice',

												parseFloat((e.target as HTMLInputElement).value) || 0
											)}
									/>

									<div class="_c25">
										<span class="_c24">{rfqData.currency || 'USD'}</span>
									</div>
								</div>
							</div>

							<div class="_c26">
								<label for={`${baseProductId}-specifications`} class="_c7">
									Specifications & Requirements
								</label>

								<TextArea
									label=""
									id={`${baseProductId}-specifications`}
									rows={3}
									class={`${inputClass} _c4`}
									placeholder="Material, dimensions, color, certifications, or other technical requirements"
									value={product.specifications || ''}
									oninput={(e: Event) =>
										state.handleProductChange(
											index,

											'specifications',

											(e.target as HTMLTextAreaElement).value
										)}
								></TextArea>
							</div>

							<div>
								<label for={`${baseProductId}-delivery-date`} class="_c7">
									Desired Delivery Date
								</label>

								<div class="_c8">
									<div class="_c9">
										<BaseIcon name={Calendar} class="_c10" />
									</div>

									<input
										id={`${baseProductId}-delivery-date`}
										type="date"
										class={`${inputClass} _c3`}
										value={product.deliveryDate || ''}
										oninput={(e: Event) =>
											state.handleProductChange(
												index,

												'deliveryDate',

												(e.target as HTMLInputElement).value
											)}
									/>
								</div>
							</div>

							<div>
								<label for={`${baseProductId}-notes`} class="_c7"> Notes </label>

								<input
									id={`${baseProductId}-notes`}
									type="text"
									class={`${inputClass} _c4`}
									placeholder="Any special notes"
									value={product.notes || ''}
									oninput={(e: Event) =>
										state.handleProductChange(index, 'notes', (e.target as HTMLInputElement).value)}
								/>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>

		{#if showShippingFields}
			<div class={`${sectionClass} _c2`}>
				<h3 class="_c5">
					<BaseIcon name={Truck} class="_c3" />

					Shipping Information
				</h3>

				<div class="_c6">
					<div>
						<label for="shippingAddress" class="_c7">
							Shipping Address (if different from company address)
						</label>

						<TextArea
							label=""
							id="shippingAddress"
							class={`${inputClass} _c4`}
							rows={2}
							placeholder="Shipping address (if different from company address)"
							value={rfqData.shippingAddress || ''}
							oninput={(e: Event) =>
								state.handleInputChange('shippingAddress', (e.target as HTMLTextAreaElement).value)}
						></TextArea>
					</div>
				</div>
			</div>
		{/if}

		{#if showDeliveryTerms}
			<div class={`${sectionClass} _c2`}>
				<h3 class="_c5">
					<BaseIcon name={Truck} class="_c3" />

					Delivery Terms
				</h3>

				<div>
					<label for="deliveryTerms" class="_c7"> Delivery Terms </label>

					<input
						id="deliveryTerms"
						type="text"
						class={`${inputClass} _c4`}
						placeholder="Incoterms, shipping method, packaging requirements, etc."
						value={rfqData.deliveryTerms || ''}
						oninput={(e: Event) =>
							state.handleInputChange('deliveryTerms', (e.target as HTMLInputElement).value)}
					/>
				</div>
			</div>
		{/if}

		{#if showPaymentTerms}
			<div class={`${sectionClass} _c2`}>
				<h3 class="_c5">
					<BaseIcon name={CreditCard} class="_c3" />

					Payment Terms
				</h3>

				<div>
					<label for="paymentTerms" class="_c7"> Payment Terms </label>

					<input
						id="paymentTerms"
						type="text"
						class={`${inputClass} _c4`}
						placeholder="Net 30, advance payment, letter of credit, etc."
						value={rfqData.paymentTerms || ''}
						oninput={(e: Event) =>
							state.handleInputChange('paymentTerms', (e.target as HTMLInputElement).value)}
					/>
				</div>
			</div>
		{/if}

		{#if showAttachments}
			<div class={`${sectionClass} _c2`}>
				<h3 class="_c5">
					<BaseIcon name={Paperclip} class="_c3" />

					Attachments
				</h3>

				<div class="_c27">
					<label for="attachments" class="_c7">
						Technical drawings, specifications, or other documents
					</label>

					<div class="_c28">
						<input
							id="attachments"
							type="file"
							multiple
							class="_c29"
							onchange={(e: Event) => state.handleFileUpload((e.target as HTMLInputElement).files)}
						/>

						<Button
							variant="outline"
							onclick={() => document.getElementById('attachments')?.click()}
							class="_c30"
						>
							<BaseIcon name={Paperclip} class="_c14" />

							Browse Files
						</Button>

						<div class="_c31">
							Max {maxAttachments} files, 10MB each
						</div>
					</div>

					{#if rfqData.attachments && rfqData.attachments.length > 0}
						<div class="_c32">
							{#each rfqData.attachments as attachment, index}
								<div class="_c33">
									<span class="_c34">{attachment.name}</span>

									<button
										type="button"
										class="_c35 _c2"
										onclick={() => state.removeAttachment(index)}
									>
										<BaseIcon name={X} class="_c20" />
									</button>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/if}

		<div class={`${sectionClass} _c2`}>
			<h3 class="_c5">
				<BaseIcon name={FileText} class="_c3" />

				Additional Information
			</h3>

			<div>
				<label for="message" class="_c7"> Additional Notes </label>

				<TextArea
					label=""
					id="message"
					class={`${inputClass} _c4`}
					rows={4}
					placeholder="Any additional information or special requirements..."
					value={rfqData.message}
					oninput={(e: Event) =>
						state.handleInputChange('message', (e.target as HTMLTextAreaElement).value)}
				></TextArea>
			</div>
		</div>

		<!-- Form Actions -->

		<div class="_c36">
			<Button variant="outline" onclick={() => state.handleCancel()}>Cancel</Button>

			<Button variant="primary" type="submit" disabled={!state.isValid()} class={buttonClass}>
				<BaseIcon name={Send} class="_c37" />

				Submit RFQ
			</Button>
		</div>
	</form>
</div>

<style>
	._c1 {
		margin-bottom: 1.5rem;
	}

	._c10 {
		height: 1.25rem;

		width: 1.25rem;

		color: var(--color-text-tertiary);
	}

	._c11 {
		margin-bottom: 1rem;

		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	._c12 {
		display: flex;

		align-items: center;

		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c13 {
		border-color: transparent;

		display: inline-flex;

		align-items: center;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		background-color: var(--color-primary-100);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		font-size: 0.875rem;

		line-height: 1rem;

		font-weight: 500;

		color: var(--color-primary-700);
	}

	._c14 {
		margin-right: 0.25rem;

		height: 1rem;

		width: 1rem;
	}

	._c15 > * + * {
		margin-top: 1.5rem;
	}

	._c16 {
		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding: 1rem;
	}

	._c17 {
		margin-bottom: 0.75rem;

		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	._c18 {
		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c19 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-danger-600);
	}

	._c2 {
		display: flex;

		align-items: center;

		font-size: 1.25rem;

		line-height: 1.75rem;

		font-weight: 700;

		color: var(--color-text-primary);
	}

	._c20 {
		height: 1rem;

		width: 1rem;
	}

	._c21 {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1rem;
	}

	@media (min-width: 768px) {
		._c21 {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	._c22 {
		display: grid;

		grid-template-columns: repeat(2, minmax(0, 1fr));

		gap: 1rem;
	}

	._c23 {
		position: relative;

		border-radius: 0.375rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	._c24 {
		color: var(--color-text-secondary);
	}

	@media (min-width: 640px) {
		._c24 {
			font-size: 0.875rem;

			line-height: 1.25rem;
		}
	}

	._c25 {
		pointer-events: none;

		position: absolute;

		right: 0;

		display: flex;

		align-items: center;

		padding-right: 0.75rem;
	}

	@media (min-width: 768px) {
		._c26 {
			grid-column: span 2 / span 2;
		}
	}

	._c27 {
		display: flex;

		flex-direction: column;
	}

	._c28 {
		display: flex;
	}

	._c29 {
		display: none;
	}

	._c3 {
		margin-right: 0.5rem;

		height: 1.25rem;

		width: 1.25rem;

		color: var(--color-primary-500);
	}

	._c30 {
		margin-right: 0.5rem;
	}

	._c31 {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	._c32 {
		margin-top: 1rem;
	}

	._c32 > * + * {
		margin-top: 0.5rem;
	}

	._c33 {
		display: flex;

		align-items: center;

		justify-content: space-between;

		border-radius: 0.25rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding: 0.5rem;
	}

	._c34 {
		overflow: hidden;

		text-overflow: ellipsis;

		white-space: nowrap;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-primary);
	}

	._c35 {
		color: var(--color-danger-600);
	}

	._c36 {
		display: flex;

		justify-content: flex-end;

		padding-top: 1rem;
	}

	._c36 > * + * {
		margin-left: 0.75rem;
	}

	._c37 {
		margin-right: 0.5rem;

		height: 1rem;

		width: 1rem;
	}

	._c4 {
		margin-top: 0.25rem;

		color: var(--color-text-secondary);
	}

	._c5 {
		margin-bottom: 1rem;

		display: flex;

		align-items: center;

		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c6 {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1rem;
	}

	._c7 {
		margin-bottom: 0.25rem;

		display: block;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	._c8 {
		position: relative;
	}

	._c9 {
		pointer-events: none;

		position: absolute;

		left: 0;

		display: flex;

		align-items: center;

		padding-left: 0.75rem;
	}

	._c1:hover {
		background-color: var(--color-primary-200);
	}

	._c2:hover {
		color: var(--color-danger-800);
	}

	.r-f-q-form {
		background-color: var(--color-background-primary);

		border-radius: 0.5rem;

		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-secondary);
	}

	.r-f-q-form__header {
		border-bottom-width: 1px;

		border-style: solid;

		padding-left: 1.5rem;

		padding-right: 1.5rem;

		padding-top: 1rem;

		padding-bottom: 1rem;
	}

	.r-f-q-form__title {
		font-size: 1.25rem;

		line-height: 1.75rem;

		font-weight: 700;

		color: var(--color-text-primary);
	}

	.r-f-q-form__description {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	.r-f-q-form__form-container {
		padding: 1.5rem;
	}

	.r-f-q-form__form-container > * + * {
		margin-top: 1.5rem;
	}

	.r-f-q-form__form-section > * + * {
		margin-top: 1rem;
	}

	.r-f-q-form__section-title {
		font-size: 1rem;

		line-height: 1.5rem;

		font-weight: 500;

		color: var(--color-text-primary);

		margin-bottom: 0.75rem;

		display: flex;

		align-items: center;
	}

	.r-f-q-form__field-group {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1rem;
	}

	@media (min-width: 640px) {
		.r-f-q-form__field-group {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.r-f-q-form__label {
		display: block;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);

		margin-bottom: 0.25rem;
	}

	.r-f-q-form__input {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.r-f-q-form__input:focus {
		border-color: var(--color-primary-500);

		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__text-area {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.r-f-q-form__text-area:focus {
		border-color: var(--color-primary-500);

		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__select {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.r-f-q-form__select:focus {
		border-color: var(--color-primary-500);

		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__products-container > * + * {
		margin-top: 1rem;
	}

	.r-f-q-form__product-item {
		border-width: 1px;

		border-style: solid;

		border-radius: 0.5rem;

		padding: 1rem;
	}

	.r-f-q-form__product-name {
		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	.r-f-q-form__product-actions {
		margin-top: 0.75rem;

		display: flex;

		justify-content: flex-end;
	}

	.r-f-q-form__add-product-button {
		display: inline-flex;

		align-items: center;

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		border-radius: 0.375rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);

		background-color: var(--color-background-secondary);
	}

	.r-f-q-form__add-product-button:hover {
		background-color: var(--color-background-tertiary);
	}

	.r-f-q-form__add-product-button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__attachments-container {
		margin-top: 0.5rem;
	}

	.r-f-q-form__attachment-item {
		display: flex;

		align-items: center;

		justify-content: space-between;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		background-color: var(--color-background-secondary);

		border-radius: 0.375rem;
	}

	.r-f-q-form__attachment-name {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-primary);
	}

	.r-f-q-form__remove-attachment-button {
		color: var(--color-text-secondary);
	}

	.r-f-q-form__remove-attachment-button:hover {
		color: var(--color-danger-600);
	}

	.r-f-q-form__form-actions {
		margin-top: 1.5rem;

		display: flex;

		flex-wrap: wrap;

		gap: 0.75rem;

		justify-content: flex-end;

		border-top-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding-top: 1.5rem;
	}

	.r-f-q-form__submit-button {
		display: inline-flex;

		align-items: center;

		padding-left: 1.5rem;

		padding-right: 1.5rem;

		padding-top: 0.75rem;

		padding-bottom: 0.75rem;

		background-color: var(--color-primary-600);

		color: var(--color-text-inverse);

		font-weight: 500;

		border-radius: 0.375rem;
	}

	.r-f-q-form__submit-button:hover {
		background-color: var(--color-primary-700);
	}

	.r-f-q-form__submit-button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__cancel-button {
		display: inline-flex;

		align-items: center;

		padding-left: 1.5rem;

		padding-right: 1.5rem;

		padding-top: 0.75rem;

		padding-bottom: 0.75rem;

		background-color: var(--color-background-secondary);

		color: var(--color-text-primary);

		font-weight: 500;

		border-radius: 0.375rem;
	}

	.r-f-q-form__cancel-button:hover {
		background-color: var(--color-background-tertiary);
	}

	.r-f-q-form__cancel-button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-border-primary);
	}

	.r-f-q-form__required-mark {
		color: var(--color-danger-600);

		margin-left: 0.25rem;
	}

	.r-f-q-form__icon {
		height: 1.25rem;

		width: 1.25rem;

		margin-right: 0.5rem;
	}

	.r-f-q-form__error {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-danger-600);
	}

	.r-f-q-form__checkbox {
		height: 1rem;

		width: 1rem;

		border-radius: 0.25rem;

		border-color: var(--color-border-primary);

		color: var(--color-primary-600);
	}

	.r-f-q-form__checkbox:focus {
		box-shadow: 0 0 0 3px var(--color-blue-500);
	}

	/* --- migrated from StyleManager --- */

	.r-f-q-form {
		background-color: var(--color-background-primary);

		border-radius: 0.5rem;

		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-secondary);
	}

	.r-f-q-form__header {
		border-bottom-width: 1px;

		border-style: solid;

		padding-left: 1.5rem;

		padding-right: 1.5rem;

		padding-top: 1rem;

		padding-bottom: 1rem;
	}

	.r-f-q-form__title {
		font-size: 1.25rem;

		line-height: 1.75rem;

		font-weight: 700;

		color: var(--color-text-primary);
	}

	.r-f-q-form__description {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	.r-f-q-form__form-container {
		padding: 1.5rem;
	}

	.r-f-q-form__form-container > * + * {
		margin-top: 1.5rem;
	}

	.r-f-q-form__form-section > * + * {
		margin-top: 1rem;
	}

	.r-f-q-form__section-title {
		font-size: 1rem;

		line-height: 1.5rem;

		font-weight: 500;

		color: var(--color-text-primary);

		margin-bottom: 0.75rem;

		display: flex;

		align-items: center;
	}

	.r-f-q-form__field-group {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		gap: 1rem;
	}

	@media (min-width: 640px) {
		.r-f-q-form__field-group {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.r-f-q-form__label {
		display: block;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);

		margin-bottom: 0.25rem;
	}

	.r-f-q-form__input {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.r-f-q-form__input:focus {
		border-color: var(--color-primary-500);

		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__text-area {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.r-f-q-form__text-area:focus {
		border-color: var(--color-primary-500);

		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__select {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.r-f-q-form__select:focus {
		border-color: var(--color-primary-500);

		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__products-container > * + * {
		margin-top: 1rem;
	}

	.r-f-q-form__product-item {
		border-width: 1px;

		border-style: solid;

		border-radius: 0.5rem;

		padding: 1rem;
	}

	.r-f-q-form__product-name {
		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	.r-f-q-form__product-actions {
		margin-top: 0.75rem;

		display: flex;

		justify-content: flex-end;
	}

	.r-f-q-form__add-product-button {
		display: inline-flex;

		align-items: center;

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		border-radius: 0.375rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);

		background-color: var(--color-background-secondary);
	}

	.r-f-q-form__add-product-button:hover {
		background-color: var(--color-background-tertiary);
	}

	.r-f-q-form__add-product-button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__attachments-container {
		margin-top: 0.5rem;
	}

	.r-f-q-form__attachment-item {
		display: flex;

		align-items: center;

		justify-content: space-between;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		background-color: var(--color-background-secondary);

		border-radius: 0.375rem;
	}

	.r-f-q-form__attachment-name {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-primary);
	}

	.r-f-q-form__remove-attachment-button {
		color: var(--color-text-secondary);
	}

	.r-f-q-form__remove-attachment-button:hover {
		color: var(--color-danger-600);
	}

	.r-f-q-form__form-actions {
		margin-top: 1.5rem;

		display: flex;

		flex-wrap: wrap;

		gap: 0.75rem;

		justify-content: flex-end;

		border-top-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding-top: 1.5rem;
	}

	.r-f-q-form__submit-button {
		display: inline-flex;

		align-items: center;

		padding-left: 1.5rem;

		padding-right: 1.5rem;

		padding-top: 0.75rem;

		padding-bottom: 0.75rem;

		background-color: var(--color-primary-600);

		color: var(--color-text-inverse);

		font-weight: 500;

		border-radius: 0.375rem;
	}

	.r-f-q-form__submit-button:hover {
		background-color: var(--color-primary-700);
	}

	.r-f-q-form__submit-button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.r-f-q-form__cancel-button {
		display: inline-flex;

		align-items: center;

		padding-left: 1.5rem;

		padding-right: 1.5rem;

		padding-top: 0.75rem;

		padding-bottom: 0.75rem;

		background-color: var(--color-background-secondary);

		color: var(--color-text-primary);

		font-weight: 500;

		border-radius: 0.375rem;
	}

	.r-f-q-form__cancel-button:hover {
		background-color: var(--color-background-tertiary);
	}

	.r-f-q-form__cancel-button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-border-primary);
	}

	.r-f-q-form__required-mark {
		color: var(--color-danger-600);

		margin-left: 0.25rem;
	}

	.r-f-q-form__icon {
		height: 1.25rem;

		width: 1.25rem;

		margin-right: 0.5rem;
	}

	.r-f-q-form__error {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-danger-600);
	}

	.r-f-q-form__checkbox {
		height: 1rem;

		width: 1rem;

		border-radius: 0.25rem;

		border-color: var(--color-border-primary);

		color: var(--color-primary-600);
	}

	.r-f-q-form__checkbox:focus {
		box-shadow: 0 0 0 3px var(--color-blue-500);
	}

	._c1 > * + * {
		margin-top: 1.5rem;
	}

	._c2 {
		border-radius: 0.5rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		padding: 1.5rem;
	}

	._c3 {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		padding-right: 0.75rem;

		padding-left: 2.5rem;

		line-height: 1.25rem;
	}

	._c3:focus {
		border-color: var(--color-primary-500);

		box-shadow: 0 0 0 3px var(--color-blue-500);

		outline: 2px solid transparent;

		outline-offset: 2px;
	}

	@media (min-width: 640px) {
		._c3 {
			font-size: 0.875rem;

			line-height: 1.25rem;
		}
	}

	._c4 {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		line-height: 1.25rem;
	}

	._c4:focus {
		border-color: var(--color-primary-500);

		box-shadow: 0 0 0 3px var(--color-blue-500);

		outline: 2px solid transparent;

		outline-offset: 2px;
	}

	@media (min-width: 640px) {
		._c4 {
			font-size: 0.875rem;

			line-height: 1.25rem;
		}
	}

	._c5 {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;
	}

	._c5:focus {
		border-color: var(--color-primary-500);

		box-shadow: 0 0 0 3px var(--color-blue-500);

		outline: 2px solid transparent;

		outline-offset: 2px;
	}

	@media (min-width: 640px) {
		._c5 {
			font-size: 0.875rem;

			line-height: 1.25rem;
		}
	}

	._c6 {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		padding-right: 3rem;

		padding-left: 1.75rem;

		line-height: 1.25rem;
	}

	._c6:focus {
		border-color: var(--color-primary-500);

		box-shadow: 0 0 0 3px var(--color-blue-500);

		outline: 2px solid transparent;

		outline-offset: 2px;
	}

	@media (min-width: 640px) {
		._c6 {
			font-size: 0.875rem;

			line-height: 1.25rem;
		}
	}

	._c9 {
		top: 0;
		bottom: 0;
	}

	._c9 {
		top: 0;
		bottom: 0;
	}

	._c9 {
		top: 0;
		bottom: 0;
	}

	._c9 {
		top: 0;
		bottom: 0;
	}

	._c9 {
		top: 0;
		bottom: 0;
	}

	._c9 {
		top: 0;
		bottom: 0;
	}

	._c25 {
		top: 0;
		bottom: 0;
	}

	._c9 {
		top: 0;
		bottom: 0;
	}
</style>
