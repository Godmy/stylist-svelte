<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import { PresetQuoteRequest } from '$stylist/commerce/const/preset/quote-request';
	import type { RecipeQuoteRequest } from '$stylist/commerce/interface/recipe/quote-request';
	import { createQuoteRequestState } from '$stylist/commerce/function/state/quote-request/index.svelte';

	let props: RecipeQuoteRequest = $props();
	const state = createQuoteRequestState(props);
</script>

<div class={state.containerClass}>
	<form
		class={state.formClass}
		onsubmit={(event) => {
			event.preventDefault();
			state.submit();
		}}
	>
		<div class={state.headerClass}>
			<h2 class={state.titleClass}>{props.title ?? 'Request a Quote'}</h2>
			{#if props.description}
				<p class={state.descriptionClass}>{props.description}</p>
			{/if}
		</div>

		<div class={state.sectionClass}>
			<input
				class={state.inputClass}
				placeholder="Name"
				bind:value={state.request.requesterName}
				required
			/>
			<input
				class={state.inputClass}
				placeholder="Email"
				type="email"
				bind:value={state.request.requesterEmail}
				required
			/>
			<input
				class={state.inputClass}
				placeholder="Phone"
				bind:value={state.request.requesterPhone}
			/>
		</div>

		{#if props.showCompanyFields !== false}
			<div class={state.sectionClass}>
				<input
					class={state.inputClass}
					placeholder="Company name"
					bind:value={state.request.companyName}
				/>
				<input
					class={state.inputClass}
					placeholder="Company address"
					bind:value={state.request.companyAddress}
				/>
			</div>
		{/if}

		{#if props.showShippingFields !== false}
			<div class={state.sectionClass}>
				<input
					class={state.inputClass}
					placeholder="Shipping address"
					bind:value={state.request.shippingAddress}
				/>
			</div>
		{/if}

		<div class={state.sectionClass}>
			<div class={state.sectionHeaderClass}>
				<h3 class={state.sectionTitleClass}>Products</h3>
				<button type="button" class={state.addButtonClass} onclick={() => state.addProduct()}>
					<Icon name={PresetQuoteRequest.Plus} class={state.addIconClass} />
					Add product
				</button>
			</div>

			<div class={state.productListClass}>
				{#each state.request.products as product, index}
					<div class={state.productRowClass}>
						<input
							class={state.inputClass}
							placeholder="Product"
							bind:value={product.name}
							required
						/>
						<input
							class={state.quantityClass}
							type="number"
							min="1"
							bind:value={product.quantity}
							required
						/>
						<button
							type="button"
							class={state.removeButtonClass}
							onclick={() => state.removeProduct(index)}
							aria-label="Remove product"
						>
							<Icon name={PresetQuoteRequest.Trash2} class={state.removeIconClass} />
						</button>
					</div>
				{/each}
			</div>
		</div>

		{#if props.showUrgentOption !== false}
			<label class={state.checkboxRowClass}>
				<input type="checkbox" bind:checked={state.request.urgent} />
				Urgent request
			</label>
		{/if}

		{#if props.showValidUntil !== false}
			<input
				class={state.inputClass}
				type="date"
				value={state.request.validUntil ? state.request.validUntil.toISOString().split('T')[0] : ''}
				oninput={(event) => state.setValidUntil((event.target as HTMLInputElement).value)}
			/>
		{/if}

		<textarea class={state.inputClass} placeholder="Message" bind:value={state.request.message}
		></textarea>

		<div class={state.actionsClass}>
			<button type="button" class={state.cancelButtonClass} onclick={() => state.cancel()}>
				Cancel
			</button>
			<button type="submit" class={state.submitButtonClass}> Send request </button>
		</div>
	</form>
</div>

<style>
	.quote-request {
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
		padding: 1rem;
	}

	.quote-request__form > * + * {
		margin-top: 1rem;
	}

	.quote-request__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}

	.quote-request__description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.quote-request__section > * + * {
		margin-top: 0.5rem;
	}

	.quote-request__section-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}

	.quote-request__section-title {
		font-weight: 500;
	}

	.quote-request__products > * + * {
		margin-top: 0.5rem;
	}

	.quote-request__product-row {
		display: grid;
		grid-template-columns: 1fr 100px 40px;
		gap: 0.5rem;
	}

	.quote-request__input {
		width: 100%;
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
		padding: 0.5rem;
	}

	.quote-request__input--quantity {
		text-align: right;
	}

	.quote-request__button {
		border-radius: 0.25rem;
		padding: 0.5rem 0.75rem;
	}

	.quote-request__button--add {
		border: 1px solid var(--color-border-primary);
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.quote-request__button-icon {
		display: inline;
		width: 1rem;
		height: 1rem;
		margin-right: 0.25rem;
	}

	.quote-request__remove {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.25rem;
	}

	.quote-request__remove-icon {
		width: 1rem;
		height: 1rem;
		margin-right: auto;
		margin-left: auto;
	}

	.quote-request__checkbox-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.quote-request__actions {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
	}

	.quote-request__button--cancel {
		border: 1px solid var(--color-border-primary);
	}

	.quote-request__button--submit {
		background-color: var(--color-primary-600);
		color: var(--color-text-inverse);
	}
</style>
