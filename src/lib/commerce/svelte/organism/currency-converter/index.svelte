<script lang="ts">
	import type { CurrencyConverterContract } from '$stylist/commerce/interface/component/currency-converter';
	import { createCurrencyConverterState } from '$stylist/commerce/function/state/currency-converter';

	let props: CurrencyConverterContract = $props();
	const state = createCurrencyConverterState(props);
</script>

<div class={state.containerClasses}>
	<div class={state.headerClasses}>
		<h2 class={state.titleClasses}>Currency Converter</h2>
	</div>

	<div class={state.formContainerClasses}>
		{#if props.showInput !== false}
			<div class={state.fieldGroupClasses}>
				{#if props.showLabels !== false}
					<label for="amount-input" class={state.labelClasses}>Amount</label>
				{/if}
				<input
					id="amount-input"
					type="number"
					value={state.inputAmount}
					oninput={(e) => { state.inputAmount = parseFloat((e.target as HTMLInputElement).value) || 0; }}
					class={state.inputClasses}
				/>
			</div>
		{/if}

		<div class={state.fieldGroupClasses}>
			{#if props.showLabels !== false}
				<label for="from-currency" class={state.labelClasses}>From</label>
			{/if}
			<select
				id="from-currency"
				value={props.fromCurrency}
				onchange={(e) => props.onCurrencyChange?.(
					(e.target as HTMLSelectElement).value,
					props.toCurrency
				)}
				class={state.selectClasses}
			>
				{#each props.currencies ?? [] as currency}
					<option value={currency.code}>{currency.symbol} {currency.name} ({currency.code})</option>
				{/each}
			</select>
		</div>

		<div class={state.switchContainerClasses}>
			<button
				class={state.switchButtonClasses}
				onclick={() => props.onCurrencyChange?.(props.toCurrency, props.fromCurrency)}
			>⇄</button>
		</div>

		<div class={state.fieldGroupClasses}>
			{#if props.showLabels !== false}
				<label for="to-currency" class={state.labelClasses}>To</label>
			{/if}
			<select
				id="to-currency"
				value={props.toCurrency}
				onchange={(e) => props.onCurrencyChange?.(
					props.fromCurrency,
					(e.target as HTMLSelectElement).value
				)}
				class={state.selectClasses}
			>
				{#each props.currencies ?? [] as currency}
					<option value={currency.code}>{currency.symbol} {currency.name} ({currency.code})</option>
				{/each}
			</select>
		</div>
	</div>

	<div class={state.resultContainerClasses}>
		<div class={state.resultClasses}>
			{state.inputAmount} {props.fromCurrency} = <strong>{state.convertedAmount.toFixed(2)} {props.toCurrency}</strong>
		</div>

		{#if props.showConversionRate !== false}
			<div class={state.exchangeRateClasses}>
				Rate: 1 {props.fromCurrency} = {state.rate.toFixed(4)} {props.toCurrency}
			</div>
		{/if}

		{#if props.showFeeEstimate && state.feeAmount > 0}
			<div class={state.feeClasses}>
				Fee ({props.feePercentage}%): {state.feeAmount.toFixed(2)} {props.fromCurrency}
			</div>
		{/if}
	</div>

	<button onclick={state.handleConvert} class={state.buttonClasses}>Convert</button>
</div>
