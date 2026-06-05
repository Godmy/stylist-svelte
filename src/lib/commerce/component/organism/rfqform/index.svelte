<script lang="ts">
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
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

	import Button from '$stylist/control/component/atom/button/index.svelte';
	import TextArea from '$stylist/input/component/atom/text-area/index.svelte';
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

<div class={`c-rfqform ${hostClass}`} {...restProps}>
	<div class="mb-6">
		<h2 class="flex items-center text-xl font-bold text-[var(--color-text-primary)]">
			<BaseIcon name={FileText} class="mr-2 h-5 w-5 text-[var(--color-primary-500)]" />
			{title}
		</h2>
		{#if description}
			<p class="mt-1 text-[var(--color-text-secondary)]">{description}</p>
		{/if}
	</div>

	<form
		class={`space-y-6 ${formClass}`}
		onsubmit={(e) => {
			e.preventDefault();
			state.handleSubmit();
		}}
	>
		<!-- Customer Information -->
		<div class={`rounded-lg border border-[var(--color-border-primary)] p-6 ${sectionClass}`}>
			<h3 class="mb-4 flex items-center text-lg font-medium text-[var(--color-text-primary)]">
				<BaseIcon name={User} class="mr-2 h-5 w-5 text-[var(--color-primary-500)]" />
				Customer Information
			</h3>

			<div class="grid grid-cols-1 gap-4">
				<div>
					<label
						for="requesterName"
						class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
					>
						Full Name *
					</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<BaseIcon name={User} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
						</div>
						<input
							id="requesterName"
							type="text"
							required
							class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
							placeholder="John Doe"
							value={rfqData.requesterName}
							oninput={(e: Event) =>
								state.handleInputChange('requesterName', (e.target as HTMLInputElement).value)}
						/>
					</div>
				</div>

				<div>
					<label
						for="requesterEmail"
						class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
					>
						Email Address *
					</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<BaseIcon name={Mail} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
						</div>
						<input
							id="requesterEmail"
							type="email"
							required
							class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
							placeholder="john@example.com"
							value={rfqData.requesterEmail}
							oninput={(e: Event) =>
								state.handleInputChange('requesterEmail', (e.target as HTMLInputElement).value)}
						/>
					</div>
				</div>

				<div>
					<label
						for="requesterPhone"
						class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
					>
						Phone Number
					</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<BaseIcon name={Phone} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
						</div>
						<input
							id="requesterPhone"
							type="tel"
							class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
							placeholder="+1 (555) 123-4567"
							value={rfqData.requesterPhone || ''}
							oninput={(e: Event) =>
								state.handleInputChange('requesterPhone', (e.target as HTMLInputElement).value)}
						/>
					</div>
				</div>

				{#if showCompanyFields}
					<div>
						<label
							for="companyName"
							class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
						>
							Company Name
						</label>
						<div class="relative">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<BaseIcon name={Briefcase} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
							</div>
							<input
								id="companyName"
								type="text"
								class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
								placeholder="Company Ltd."
								value={rfqData.companyName || ''}
								oninput={(e: Event) =>
									state.handleInputChange('companyName', (e.target as HTMLInputElement).value)}
							/>
						</div>
					</div>

					<div>
						<label
							for="companyAddress"
							class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
						>
							Company Address
						</label>
						<div class="relative">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<BaseIcon name={MapPin} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
							</div>
							<TextArea
								label=""
								id="companyAddress"
								class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
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
		<div class={`rounded-lg border border-[var(--color-border-primary)] p-6 ${sectionClass}`}>
			<div class="mb-4 flex items-center justify-between">
				<h3 class="flex items-center text-lg font-medium text-[var(--color-text-primary)]">
					<BaseIcon name={Package} class="mr-2 h-5 w-5 text-[var(--color-primary-500)]" />
					Product Requirements
				</h3>
				<button
					type="button"
					class="inline-flex items-center rounded-md border border-transparent bg-[var(--color-primary-100)] px-3 py-2 text-sm leading-4 font-medium text-[var(--color-primary-700)] hover:bg-[var(--color-primary-200)]"
					onclick={() => state.addProduct()}
				>
					<BaseIcon name={Plus} class="mr-1 h-4 w-4" />
					Add Product
				</button>
			</div>

			<div class="space-y-6">
				{#each rfqData.products as product, index}
					{@const baseProductId = `rfq-product-${index}`}
					<div class="rounded-md border border-[var(--color-border-primary)] p-4">
						<div class="mb-3 flex items-center justify-between">
							<h4 class="font-medium text-[var(--color-text-primary)]">Product #{index + 1}</h4>
							{#if rfqData.products.length > 1}
								<button
									type="button"
									class="text-sm font-medium text-[var(--color-danger-600)] hover:text-[var(--color-danger-800)]"
									onclick={() => state.removeProduct(index)}
								>
									<BaseIcon name={Minus} class="h-4 w-4" />
								</button>
							{/if}
						</div>

						<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
							<div>
								<label
									for={`${baseProductId}-name`}
									class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
								>
									Product Name/Part Number *
								</label>
								<input
									id={`${baseProductId}-name`}
									type="text"
									required
									class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
									placeholder="Enter product name or part number"
									value={product.name}
									oninput={(e: Event) =>
										state.handleProductChange(index, 'name', (e.target as HTMLInputElement).value)}
								/>
							</div>

							<div>
								<label
									for={`${baseProductId}-description`}
									class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
								>
									Description
								</label>
								<input
									id={`${baseProductId}-description`}
									type="text"
									class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
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

							<div class="grid grid-cols-2 gap-4">
								<div>
									<label
										for={`${baseProductId}-quantity`}
										class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
									>
										Quantity *
									</label>
									<input
										id={`${baseProductId}-quantity`}
										type="number"
										required
										min="1"
										class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
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
									<label
										for={`${baseProductId}-unit`}
										class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
									>
										Unit
									</label>
									<select
										id={`${baseProductId}-unit`}
										class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
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
								<label
									for={`${baseProductId}-unit-price`}
									class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
								>
									Target Price per Unit
								</label>
								<div class="relative rounded-md shadow-sm">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
										<span class="text-[var(--color-text-secondary)] sm:text-sm">$</span>
									</div>
									<input
										id={`${baseProductId}-unit-price`}
										type="number"
										step="0.01"
										min="0"
										class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-12 pl-7 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
										placeholder="0.00"
										value={product.unitPrice || ''}
										oninput={(e: Event) =>
											state.handleProductChange(
												index,
												'unitPrice',
												parseFloat((e.target as HTMLInputElement).value) || 0
											)}
									/>
									<div
										class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"
									>
										<span class="text-[var(--color-text-secondary)] sm:text-sm"
											>{rfqData.currency || 'USD'}</span
										>
									</div>
								</div>
							</div>

							<div class="md:col-span-2">
								<label
									for={`${baseProductId}-specifications`}
									class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
								>
									Specifications & Requirements
								</label>
								<TextArea
									label=""
									id={`${baseProductId}-specifications`}
									rows={3}
									class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
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
								<label
									for={`${baseProductId}-delivery-date`}
									class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
								>
									Desired Delivery Date
								</label>
								<div class="relative">
									<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
										<BaseIcon name={Calendar} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
									</div>
									<input
										id={`${baseProductId}-delivery-date`}
										type="date"
										class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
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
								<label
									for={`${baseProductId}-notes`}
									class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
								>
									Notes
								</label>
								<input
									id={`${baseProductId}-notes`}
									type="text"
									class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
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
			<div class={`rounded-lg border border-[var(--color-border-primary)] p-6 ${sectionClass}`}>
				<h3 class="mb-4 flex items-center text-lg font-medium text-[var(--color-text-primary)]">
					<BaseIcon name={Truck} class="mr-2 h-5 w-5 text-[var(--color-primary-500)]" />
					Shipping Information
				</h3>

				<div class="grid grid-cols-1 gap-4">
					<div>
						<label
							for="shippingAddress"
							class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
						>
							Shipping Address (if different from company address)
						</label>
						<TextArea
							label=""
							id="shippingAddress"
							class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
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
			<div class={`rounded-lg border border-[var(--color-border-primary)] p-6 ${sectionClass}`}>
				<h3 class="mb-4 flex items-center text-lg font-medium text-[var(--color-text-primary)]">
					<BaseIcon name={Truck} class="mr-2 h-5 w-5 text-[var(--color-primary-500)]" />
					Delivery Terms
				</h3>

				<div>
					<label
						for="deliveryTerms"
						class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
					>
						Delivery Terms
					</label>
					<input
						id="deliveryTerms"
						type="text"
						class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
						placeholder="Incoterms, shipping method, packaging requirements, etc."
						value={rfqData.deliveryTerms || ''}
						oninput={(e: Event) =>
							state.handleInputChange('deliveryTerms', (e.target as HTMLInputElement).value)}
					/>
				</div>
			</div>
		{/if}

		{#if showPaymentTerms}
			<div class={`rounded-lg border border-[var(--color-border-primary)] p-6 ${sectionClass}`}>
				<h3 class="mb-4 flex items-center text-lg font-medium text-[var(--color-text-primary)]">
					<BaseIcon name={CreditCard} class="mr-2 h-5 w-5 text-[var(--color-primary-500)]" />
					Payment Terms
				</h3>

				<div>
					<label
						for="paymentTerms"
						class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
					>
						Payment Terms
					</label>
					<input
						id="paymentTerms"
						type="text"
						class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
						placeholder="Net 30, advance payment, letter of credit, etc."
						value={rfqData.paymentTerms || ''}
						oninput={(e: Event) =>
							state.handleInputChange('paymentTerms', (e.target as HTMLInputElement).value)}
					/>
				</div>
			</div>
		{/if}

		{#if showAttachments}
			<div class={`rounded-lg border border-[var(--color-border-primary)] p-6 ${sectionClass}`}>
				<h3 class="mb-4 flex items-center text-lg font-medium text-[var(--color-text-primary)]">
					<BaseIcon name={Paperclip} class="mr-2 h-5 w-5 text-[var(--color-primary-500)]" />
					Attachments
				</h3>

				<div class="flex flex-col">
					<label
						for="attachments"
						class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
					>
						Technical drawings, specifications, or other documents
					</label>
					<div class="flex">
						<input
							id="attachments"
							type="file"
							multiple
							class="hidden"
							onchange={(e: Event) => state.handleFileUpload((e.target as HTMLInputElement).files)}
						/>
						<Button
							variant="outline"
							onclick={() => document.getElementById('attachments')?.click()}
							class="mr-2"
						>
							<BaseIcon name={Paperclip} class="mr-1 h-4 w-4" />
							Browse Files
						</Button>
						<div class="text-sm text-[var(--color-text-secondary)]">
							Max {maxAttachments} files, 10MB each
						</div>
					</div>

					{#if rfqData.attachments && rfqData.attachments.length > 0}
						<div class="mt-4 space-y-2">
							{#each rfqData.attachments as attachment, index}
								<div
									class="flex items-center justify-between rounded border border-[var(--color-border-primary)] p-2"
								>
									<span class="truncate text-sm text-[var(--color-text-primary)]"
										>{attachment.name}</span
									>
									<button
										type="button"
										class="text-[var(--color-danger-600)] hover:text-[var(--color-danger-800)]"
										onclick={() => state.removeAttachment(index)}
									>
										<BaseIcon name={X} class="h-4 w-4" />
									</button>
								</div>
							{/each}
						</div>
					{/if}
				</div>
			</div>
		{/if}

		<div class={`rounded-lg border border-[var(--color-border-primary)] p-6 ${sectionClass}`}>
			<h3 class="mb-4 flex items-center text-lg font-medium text-[var(--color-text-primary)]">
				<BaseIcon name={FileText} class="mr-2 h-5 w-5 text-[var(--color-primary-500)]" />
				Additional Information
			</h3>

			<div>
				<label
					for="message"
					class="mb-1 block text-sm font-medium text-[var(--color-text-primary)]"
				>
					Additional Notes
				</label>
				<TextArea
					label=""
					id="message"
					class={`block w-full rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-3 py-2 leading-5 placeholder-gray-500 focus:border-[var(--color-primary-500)] focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:text-sm ${inputClass}`}
					rows={4}
					placeholder="Any additional information or special requirements..."
					value={rfqData.message}
					oninput={(e: Event) =>
						state.handleInputChange('message', (e.target as HTMLTextAreaElement).value)}
				></TextArea>
			</div>
		</div>

		<!-- Form Actions -->
		<div class="flex justify-end space-x-3 pt-4">
			<Button variant="outline" onclick={() => state.handleCancel()}>Cancel</Button>
			<Button variant="primary" type="submit" disabled={!state.isValid()} class={buttonClass}>
				<BaseIcon name={Send} class="mr-2 h-4 w-4" />
				Submit RFQ
			</Button>
		</div>
	</form>
</div>
