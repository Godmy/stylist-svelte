<script lang="ts">
	import type { RecipeTaxCalculator as TaxCalculatorContract } from '$stylist/commerce/interface/recipe/tax-calculator';
	import stateFn from '$stylist/commerce/function/state/tax-calculator/index.svelte';

	let props: TaxCalculatorContract = $props();
	const state = stateFn(props);
</script>

<div class="tax-calculator">
	<header class="tax-calculator__header">
		<h3 class="tax-calculator__title">Tax Calculator</h3>
	</header>

	<div class="tax-calculator__form-container">
		<div class="tax-calculator__field-group">
			<label class="tax-calculator__label" for="tax-calculator-amount">Amount</label>
			<input
				id="tax-calculator-amount"
				class="tax-calculator__input"
				type="number"
				min="0"
				step="0.01"
				bind:value={state.amount}
			/>
		</div>

		{#if props.showLocationSelector !== false}
			<div class="tax-calculator__field-group">
				<label class="tax-calculator__label" for="tax-calculator-location">SlotLocation</label>
				<select
					id="tax-calculator-location"
					class="tax-calculator__select"
					bind:value={state.selectedLocationId}
				>
					{#each props.locations as location}
						<option value={location.id}>{location.name}</option>
					{/each}
				</select>
			</div>
		{/if}

		{#if props.showIncludeTaxToggle}
			<label class="_c1">
				<input type="checkbox" bind:checked={state.includeTax} />
				<span class="tax-calculator__label">Amount already includes tax</span>
			</label>
		{/if}

		<button type="button" class="tax-calculator__calculate-button" onclick={state.handleCalculate}>
			Calculate Tax
		</button>
	</div>

	<div class="tax-calculator__results-container">
		<div class="tax-calculator__result-card">
			<div class="tax-calculator__result-row">
				<span class="tax-calculator__result-label">Subtotal</span>
				<span class="tax-calculator__result-value">{state.formatPrice(state.amount)}</span>
			</div>

			<div class="tax-calculator__tax-list">
				{#each state.taxRates as taxRate}
					<div class="tax-calculator__tax-item">
						<span class="tax-calculator__tax-name">{taxRate.name} ({taxRate.rate}%)</span>
						<span class="tax-calculator__tax-value"
							>{state.formatPrice((state.amount * taxRate.rate) / 100)}</span
						>
					</div>
				{/each}
			</div>

			<div class="tax-calculator__result-row">
				<span class="tax-calculator__result-label">Tax Total</span>
				<span class="tax-calculator__result-value">{state.formatPrice(state.totalTaxAmount)}</span>
			</div>

			<div class="tax-calculator__total">
				<span class="tax-calculator__total-label">Total</span>
				<span class="tax-calculator__total-value">{state.formatPrice(state.totalAmount)}</span>
			</div>
		</div>
	</div>
</div>

<style>
	._c1 {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.tax-calculator {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.tax-calculator__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.tax-calculator__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.tax-calculator__form-container {
		padding: 1.5rem;
	}
	.tax-calculator__form-container > * + * {
		margin-top: 1rem;
	}

	.tax-calculator__field-group {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 640px) {
		.tax-calculator__field-group {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.tax-calculator__label {
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 0.25rem;
	}

	.tax-calculator__input {
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
	.tax-calculator__input:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.tax-calculator__select {
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
	.tax-calculator__select:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.tax-calculator__results-container {
		margin-top: 1.5rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-top: 1.5rem;
	}

	.tax-calculator__result-card {
		background-color: var(--color-background-secondary);
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.tax-calculator__result-row {
		display: flex;
		justify-content: space-between;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.tax-calculator__result-label {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.tax-calculator__result-value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.tax-calculator__total {
		display: flex;
		justify-content: space-between;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		margin-top: 0.75rem;
	}

	.tax-calculator__total-label {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.tax-calculator__total-value {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.tax-calculator__calculate-button {
		width: 100%;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 0.75rem;
		padding-bottom: 0.75rem;
		background-color: var(--color-primary-600);
		color: var(--color-text-inverse);
		font-weight: 500;
		border-radius: 0.375rem;
	}
	.tax-calculator__calculate-button:hover {
		background-color: var(--color-primary-700);
	}
	.tax-calculator__calculate-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.tax-calculator__tax-list {
		margin-top: 1rem;
	}
	.tax-calculator__tax-list > * + * {
		margin-top: 0.5rem;
	}

	.tax-calculator__tax-item {
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	.tax-calculator__tax-name {
		color: var(--color-text-secondary);
	}

	.tax-calculator__tax-value {
		font-weight: 500;
		color: var(--color-text-primary);
	}

</style>
