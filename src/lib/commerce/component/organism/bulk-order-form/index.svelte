<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const Package = 'package';
	const Plus = 'plus';
	const Minus = 'minus';
	const Trash2 = 'trash-2';
	const Upload = 'upload';
	const Download = 'download';
	const ImageIcon = 'image';

	import Button from '$stylist/control/component/atom/button/index.svelte';
	import BulkOrderFormModel from '$stylist/commerce/function/state/bulk-order-form/index.svelte';
	import type { BulkOrderFormProps } from '$stylist/commerce/type/struct/bulk-order-form/bulk-order-form-props';

	let {
		products = [],
		initialItems = [],
		title = 'Bulk SlotOrder',
		description = 'Add multiple products to your order',
		showTotal = true,
		showNotes = true,
		allowFileUpload = true,
		class: hostClass = '',
		headerClass = '',
		formClass = '',
		itemClass = '',
		actionsClass = '',
		onOrderSubmit,
		onItemsChange,
		currency = 'USD',
		locale = 'en-US',
		...restProps
	}: BulkOrderFormProps & Omit<HTMLAttributes<HTMLElement>, 'class'> & SlotInteraction = $props();

	const state = BulkOrderFormModel({
		products,
		initialItems,
		title,
		description,
		showTotal,
		showNotes,
		allowFileUpload,
		class: hostClass,
		headerClass,
		formClass,
		itemClass,
		actionsClass,
		onOrderSubmit,
		onItemsChange,
		currency,
		locale
	});

	$effect(() => {
		state.updateFromProps({
			products,
			initialItems,
			title,
			description,
			showTotal,
			showNotes,
			allowFileUpload,
			class: hostClass,
			headerClass,
			formClass,
			itemClass,
			actionsClass,
			onOrderSubmit,
			onItemsChange,
			currency,
			locale
		});
	});

	let total = $derived(state.calculateTotal(products));
</script>

<div class={'bulk-order-form' + (hostClass ? ' ' + hostClass : '')} {...restProps}>
	<div class="bulk-order-form__header">
		<div class="_c1">
			<BaseIcon name={Package} class="_c2" />
			<h2 class="bulk-order-form__title">{title}</h2>
		</div>

		{#if description}
			<p class="bulk-order-form__description">{description}</p>
		{/if}
	</div>

	<div class="bulk-order-form__form">
		<div class="bulk-order-form__product-selection-form">
			<div class="_c3">
				<div>
					<label for="product-select" class="bulk-order-form__label"> Select Product </label>
					<select
						id="product-select"
						class="bulk-order-form__select"
						value={state.selectedProduct || ''}
						onchange={(e) =>
							(state.selectedProduct = (e.target as HTMLSelectElement).value || null)}
					>
						<option value="" disabled>Select a product</option>
						{#each products as product}
							<option value={product.id}>{product.name}</option>
						{/each}
					</select>
				</div>

				<div>
					<label for="quantity" class="bulk-order-form__label"> Quantity </label>
					<div class="_c4">
						<input
							type="number"
							id="quantity"
							min="1"
							class="bulk-order-form__input"
							placeholder="1"
							value={state.quantity}
							oninput={(e) =>
								(state.quantity = parseInt((e.target as HTMLInputElement).value) || 1)}
						/>
					</div>
				</div>

				<div class="_c5">
					<Button
						variant="primary"
						class="_c6"
						onclick={() => state.addProduct(products, onItemsChange)}
						disabled={!state.selectedProduct}
					>
						<BaseIcon name={Plus} class="_c7" />
						Add to SlotOrder
					</Button>
				</div>
			</div>
		</div>

		{#if showNotes}
			<div class="_c8">
				<label for="note" class="bulk-order-form__label"> Note (optional) </label>
				<input
					type="text"
					id="note"
					class="bulk-order-form__input"
					placeholder="Special instructions for this item"
					value={state.note}
					oninput={(e) => (state.note = (e.target as HTMLInputElement).value)}
				/>
			</div>
		{/if}

		{#if allowFileUpload}
			<div class="bulk-order-form__file-area">
				<Button variant="outline" class="_c9">
					<BaseIcon name={Upload} class="_c7" />
					Upload CSV
				</Button>
				<Button variant="outline">
					<BaseIcon name={Download} class="_c7" />
					Download Template
				</Button>
			</div>
		{/if}

		<div class="bulk-order-form__items-list">
			<h3 class="bulk-order-form__items-list-title">SlotOrder Items</h3>

			{#if state.items.length === 0}
				<div class="bulk-order-form__empty-state">
					<BaseIcon name={Package} class="_c10" />
					<h3 class="_c11">No items added</h3>
					<p class="_c12">Add some products to your bulk order.</p>
				</div>
			{:else}
				<div class="_c13">
					{#each state.items as item}
						{@const product = products.find((p: any) => p.id === item.productId)}
						{#if product}
							<div class={'bulk-order-form__item-container' + (itemClass ? ' ' + itemClass : '')}>
								<div class="bulk-order-form__item-image-area">
									{#if product.thumbnail}
										<img
											src={product.thumbnail}
											alt={product.name}
											class="bulk-order-form__item-image"
										/>
									{:else}
										<div class="bulk-order-form__default-image-icon">
											<BaseIcon name={ImageIcon} class="_c14" />
										</div>
									{/if}
								</div>

								<div class="_c15">
									<div class="_c16">
										<h4 class="bulk-order-form__item-name">{product.name}</h4>
										<p class="bulk-order-form__item-price">
											{state.formatPrice(product.price * item.quantity, currency, locale)}
										</p>
									</div>

									<div class="bulk-order-form__item-text-price">
										<span>Price: {state.formatPrice(product.price, currency, locale)}</span>
										{#if product.originalPrice && product.originalPrice > product.price}
											<span class="bulk-order-form__strikethrough-price">
												{state.formatPrice(product.originalPrice, currency, locale)}
											</span>
										{/if}
									</div>

									{#if showNotes && item.note}
										<div class="bulk-order-form__item-note">
											<span class="_c17">Note:</span>
											{item.note}
										</div>
									{/if}

									<div class="bulk-order-form__quantity-area">
										<div class="bulk-order-form__quantity-change-container">
											<button
												type="button"
												class="bulk-order-form__quantity-change-button"
												onclick={() =>
													state.updateQuantity(item.id, item.quantity - 1, onItemsChange)}
												disabled={item.quantity <= 1}
											>
												<BaseIcon name={Minus} class="_c18" />
											</button>

											<input
												type="number"
												class="bulk-order-form__quantity-input"
												value={item.quantity}
												min="1"
												oninput={(e) =>
													state.updateQuantity(
														item.id,
														parseInt((e.target as HTMLInputElement).value) || 1,
														onItemsChange
													)}
											/>

											<button
												type="button"
												class="bulk-order-form__quantity-change-button"
												onclick={() =>
													state.updateQuantity(item.id, item.quantity + 1, onItemsChange)}
											>
												<BaseIcon name={Plus} class="_c18" />
											</button>
										</div>

										<button
											type="button"
											class="bulk-order-form__remove-button"
											onclick={() => state.removeItem(item.id, onItemsChange)}
										>
											<BaseIcon name={Trash2} class="_c19" />
											Remove
										</button>
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			{/if}
		</div>

		{#if showTotal && state.items.length > 0}
			<div class="bulk-order-form__divider">
				<div class="bulk-order-form__total">
					<p>Subtotal</p>
					<p>{state.formatPrice(total, currency, locale)}</p>
				</div>

				<div class="bulk-order-form__total">
					<p>Total</p>
					<p>{state.formatPrice(total, currency, locale)}</p>
				</div>
			</div>
		{/if}

		<div class={'bulk-order-form__actions-area' + (actionsClass ? ' ' + actionsClass : '')}>
			<Button variant="outline">Save Draft</Button>
			<Button
				variant="primary"
				onclick={() => state.handleSubmit(state.items, onOrderSubmit)}
				disabled={state.items.length === 0}
			>
				Place Bulk SlotOrder
			</Button>
		</div>
	</div>
</div>

<style>
	._c1 {
		display: flex;
		align-items: center;
	}
	._c10 {
		margin-left: auto;
		margin-right: auto;
		height: 3rem;
		width: 3rem;
		color: var(--color-text-tertiary);
	}
	._c11 {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c12 {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c13 > * + * {
		margin-top: 1rem;
	}
	._c14 {
		height: 2rem;
		width: 2rem;
	}
	._c15 {
		margin-left: 1rem;
		min-width: 0;
		flex: 1 1 0%;
	}
	._c16 {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
	}
	._c17 {
		font-weight: 500;
	}
	._c18 {
		height: 1rem;
		width: 1rem;
	}
	._c19 {
		margin-right: 0.25rem;
		height: 1rem;
		width: 1rem;
	}
	._c2 {
		margin-right: 0.5rem;
		height: 1.5rem;
		width: 1.5rem;
		color: var(--color-primary-600);
	}
	._c3 {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 768px) {
		._c3 {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	._c4 {
		position: relative;
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c5 {
		display: flex;
		align-items: flex-end;
	}
	._c6 {
		width: 100%;
	}
	._c7 {
		margin-right: 0.5rem;
		height: 1rem;
		width: 1rem;
	}
	._c8 {
		margin-bottom: 1.5rem;
	}
	._c9 {
		margin-right: 0.75rem;
	}

	.bulk-order-form__header {
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
	}

	.bulk-order-form__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.bulk-order-form__description {
		margin-top: 0.25rem;
		color: var(--color-text-secondary);
	}

	.bulk-order-form__form {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1.5rem;
	}

	.bulk-order-form__product-selection-form {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
		margin-bottom: 1.5rem;
	}
	@media (min-width: 768px) {
		.bulk-order-form__product-selection-form {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (min-width: 768px) {
		.bulk-order-form__product-selection-cell {
			grid-column: span 2 / span 2;
		}
	}

	.bulk-order-form__label {
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-secondary);
		margin-bottom: 0.25rem;
	}

	.bulk-order-form__select {
		display: block;
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 2.5rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 1rem;
		line-height: 1.5rem;
		border-color: var(--color-border-secondary);
		border-radius: 0.375rem;
	}
	.bulk-order-form__select:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
		border-color: var(--color-primary-500);
	}
	@media (min-width: 640px) {
		.bulk-order-form__select {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}

	.bulk-order-form__input {
		display: block;
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 3rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-color: var(--color-border-secondary);
		border-radius: 0.375rem;
	}
	@media (min-width: 640px) {
		.bulk-order-form__input {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}
	.bulk-order-form__input:focus {
		box-shadow: 0 0 0 3px var(--color-primary-500);
		border-color: var(--color-primary-500);
	}

	.bulk-order-form__file-area {
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
	}

	.bulk-order-form__items-list {
		margin-bottom: 1.5rem;
	}

	.bulk-order-form__items-list-title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 1rem;
	}

	.bulk-order-form__empty-state {
		text-align: center;
		padding-top: 2rem;
		padding-bottom: 2rem;
		border-width: 2px;
		border-style: dashed;
		border-radius: 0.5rem;
	}

	.bulk-order-form__item-container {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
		display: flex;
		align-items: center;
	}

	.bulk-order-form__item-image-area {
		flex-shrink: 0;
		width: 4rem;
		height: 4rem;
		border-radius: 0.375rem;
		overflow: hidden;
		background-color: var(--color-background-secondary);
	}

	.bulk-order-form__item-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.bulk-order-form__default-image-icon {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text-tertiary);
	}

	.bulk-order-form__item-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.bulk-order-form__item-price {
		margin-left: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.bulk-order-form__item-text-price {
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}

	.bulk-order-form__strikethrough-price {
		margin-left: 0.5rem;
		text-decoration-line: line-through;
		color: var(--color-text-tertiary);
	}

	.bulk-order-form__item-note {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.bulk-order-form__quantity-area {
		margin-top: 0.5rem;
		display: flex;
		align-items: center;
	}

	.bulk-order-form__quantity-change-container {
		display: flex;
		align-items: center;
		border-width: 1px;
		border-style: solid;
		border-radius: 0.375rem;
	}

	.bulk-order-form__quantity-change-button {
		padding: 0.25rem;
		color: var(--color-text-secondary);
	}
	.bulk-order-form__quantity-change-button:hover {
		color: var(--color-text-primary);
	}
	.bulk-order-form__quantity-change-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.bulk-order-form__quantity-input {
		width: 3rem;
		text-align: center;
		border-color: var(--color-border-secondary);
	}
	.bulk-order-form__quantity-input:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.bulk-order-form__remove-button {
		margin-left: 1rem;
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-error-600);
	}
	.bulk-order-form__remove-button:hover {
		color: var(--color-error-500);
	}

	.bulk-order-form__divider {
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-divider);
		padding-top: 1.5rem;
	}

	.bulk-order-form__total {
		display: flex;
		justify-content: space-between;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.bulk-order-form__actions-area {
		margin-top: 1.5rem;
		display: flex;
		justify-content: flex-end;
	}
	.bulk-order-form__actions-area > * + * {
		margin-left: 0.75rem;
	}

	/* --- migrated from StyleManager --- */

	.bulk-order-form__header {
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
	}

	.bulk-order-form__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.bulk-order-form__description {
		margin-top: 0.25rem;
		color: var(--color-text-secondary);
	}

	.bulk-order-form__form {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1.5rem;
	}

	.bulk-order-form__product-selection-form {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
		margin-bottom: 1.5rem;
	}
	@media (min-width: 768px) {
		.bulk-order-form__product-selection-form {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	@media (min-width: 768px) {
		.bulk-order-form__product-selection-cell {
			grid-column: span 2 / span 2;
		}
	}

	.bulk-order-form__label {
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-secondary);
		margin-bottom: 0.25rem;
	}

	.bulk-order-form__select {
		display: block;
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 2.5rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		font-size: 1rem;
		line-height: 1.5rem;
		border-color: var(--color-border-secondary);
		border-radius: 0.375rem;
	}
	.bulk-order-form__select:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
		border-color: var(--color-primary-500);
	}
	@media (min-width: 640px) {
		.bulk-order-form__select {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}

	.bulk-order-form__input {
		display: block;
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 3rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-color: var(--color-border-secondary);
		border-radius: 0.375rem;
	}
	@media (min-width: 640px) {
		.bulk-order-form__input {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}
	.bulk-order-form__input:focus {
		box-shadow: 0 0 0 3px var(--color-primary-500);
		border-color: var(--color-primary-500);
	}

	.bulk-order-form__file-area {
		margin-bottom: 1.5rem;
		display: flex;
		align-items: center;
	}

	.bulk-order-form__items-list {
		margin-bottom: 1.5rem;
	}

	.bulk-order-form__items-list-title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 1rem;
	}

	.bulk-order-form__empty-state {
		text-align: center;
		padding-top: 2rem;
		padding-bottom: 2rem;
		border-width: 2px;
		border-style: dashed;
		border-radius: 0.5rem;
	}

	.bulk-order-form__item-container {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
		display: flex;
		align-items: center;
	}

	.bulk-order-form__item-image-area {
		flex-shrink: 0;
		width: 4rem;
		height: 4rem;
		border-radius: 0.375rem;
		overflow: hidden;
		background-color: var(--color-background-secondary);
	}

	.bulk-order-form__item-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.bulk-order-form__default-image-icon {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-text-tertiary);
	}

	.bulk-order-form__item-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.bulk-order-form__item-price {
		margin-left: 1rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.bulk-order-form__item-text-price {
		margin-top: 0.25rem;
		display: flex;
		align-items: center;
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}

	.bulk-order-form__strikethrough-price {
		margin-left: 0.5rem;
		text-decoration-line: line-through;
		color: var(--color-text-tertiary);
	}

	.bulk-order-form__item-note {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.bulk-order-form__quantity-area {
		margin-top: 0.5rem;
		display: flex;
		align-items: center;
	}

	.bulk-order-form__quantity-change-container {
		display: flex;
		align-items: center;
		border-width: 1px;
		border-style: solid;
		border-radius: 0.375rem;
	}

	.bulk-order-form__quantity-change-button {
		padding: 0.25rem;
		color: var(--color-text-secondary);
	}
	.bulk-order-form__quantity-change-button:hover {
		color: var(--color-text-primary);
	}
	.bulk-order-form__quantity-change-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.bulk-order-form__quantity-input {
		width: 3rem;
		text-align: center;
		border-color: var(--color-border-secondary);
	}
	.bulk-order-form__quantity-input:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
	}

	.bulk-order-form__remove-button {
		margin-left: 1rem;
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-error-600);
	}
	.bulk-order-form__remove-button:hover {
		color: var(--color-error-500);
	}

	.bulk-order-form__divider {
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-divider);
		padding-top: 1.5rem;
	}

	.bulk-order-form__total {
		display: flex;
		justify-content: space-between;
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.bulk-order-form__actions-area {
		margin-top: 1.5rem;
		display: flex;
		justify-content: flex-end;
	}
	.bulk-order-form__actions-area > * + * {
		margin-left: 0.75rem;
	}
</style>
