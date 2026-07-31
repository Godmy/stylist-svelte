<script lang="ts">
	import type { RecipeCurrencyConverter as CurrencyConverterContract } from '$stylist/commerce/interface/recipe/currency-converter';
	import createCurrencyConverterState from '$stylist/commerce/function/state/currency-converter/index.svelte';

	let props: CurrencyConverterContract = $props();
	const state = createCurrencyConverterState(props);
</script>

<div class="currency-converter">
	<div class="currency-converter__header">
		<h2 class="currency-converter__title">SlotCurrency Converter</h2>
	</div>

	<div class="currency-converter__form-container">
		{#if props.showInput !== false}
			<div class="currency-converter__field-group">
				{#if props.showLabels !== false}
					<label for="amount-input" class="currency-converter__label">Amount</label>
				{/if}
				<input
					id="amount-input"
					type="number"
					value={state.inputAmount}
					oninput={(e) => {
						state.inputAmount = parseFloat((e.target as HTMLInputElement).value) || 0;
					}}
					class="currency-converter__input"
				/>
			</div>
		{/if}

		<div class="currency-converter__field-group">
			{#if props.showLabels !== false}
				<label for="from-currency" class="currency-converter__label">From</label>
			{/if}
			<select
				id="from-currency"
				value={props.fromCurrency}
				onchange={(e) =>
					props.onCurrencyChange?.((e.target as HTMLSelectElement).value, props.toCurrency)}
				class="currency-converter__select"
			>
				{#each props.currencies ?? [] as currency}
					<option value={currency.code}>{currency.symbol} {currency.name} ({currency.code})</option>
				{/each}
			</select>
		</div>

		<div class="currency-converter__switch-container">
			<button
				class="currency-converter__switch-button"
				onclick={() => props.onCurrencyChange?.(props.toCurrency, props.fromCurrency)}>⇄</button
			>
		</div>

		<div class="currency-converter__field-group">
			{#if props.showLabels !== false}
				<label for="to-currency" class="currency-converter__label">To</label>
			{/if}
			<select
				id="to-currency"
				value={props.toCurrency}
				onchange={(e) =>
					props.onCurrencyChange?.(props.fromCurrency, (e.target as HTMLSelectElement).value)}
				class="currency-converter__select"
			>
				{#each props.currencies ?? [] as currency}
					<option value={currency.code}>{currency.symbol} {currency.name} ({currency.code})</option>
				{/each}
			</select>
		</div>
	</div>

	<div class="currency-converter__result-container">
		<div class="currency-converter__result">
			{state.inputAmount}
			{props.fromCurrency} = <strong>{state.convertedAmount.toFixed(2)} {props.toCurrency}</strong>
		</div>

		{#if props.showConversionRate !== false}
			<div class="currency-converter__exchange-rate">
				Rate: 1 {props.fromCurrency} = {state.rate.toFixed(4)}
				{props.toCurrency}
			</div>
		{/if}

		{#if props.showFeeEstimate && state.feeAmount > 0}
			<div class="currency-converter__fee">
				Fee ({props.feePercentage}%): {state.feeAmount.toFixed(2)}
				{props.fromCurrency}
			</div>
		{/if}
	</div>

	<button onclick={state.handleConvert} class="currency-converter__button">Convert</button>
</div>

<style>
	.currency-converter {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.currency-converter__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.currency-converter__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.currency-converter__form-container {
		padding: 1.5rem;
	}
	.currency-converter__form-container > * + * {
		margin-top: 1rem;
	}

	.currency-converter__field-group {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 640px) {
		.currency-converter__field-group {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	.currency-converter__label {
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 0.25rem;
	}

	.currency-converter__input {
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
	.currency-converter__input:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.currency-converter__select {
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
	.currency-converter__select:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.currency-converter__result-container {
		border-top-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
		background-color: var(--color-background-secondary);
	}

	.currency-converter__result {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.currency-converter__exchange-rate {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.currency-converter__fee {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-warning-600);
	}

	.currency-converter__button {
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
	.currency-converter__button:hover {
		background-color: var(--color-primary-700);
	}
	.currency-converter__button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.currency-converter__switch-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.currency-converter__switch-button {
		padding: 0.5rem;
		border-radius: 9999px;
		background-color: var(--color-background-secondary);
	}
	.currency-converter__switch-button:hover {
		background-color: var(--color-background-tertiary);
	}
	.currency-converter__switch-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}
</style>
