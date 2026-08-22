<script lang="ts">
	import type { RecipeShippingCalculator as ShippingCalculatorContract } from '$stylist/commerce/interface/recipe/shipping-calculator';
	import stateFn from './state.svelte';

	let props: ShippingCalculatorContract = $props();
	const state = stateFn(props);
</script>

<div class="shipping-calculator">
	<header class="shipping-calculator__header">
		<h3 class="shipping-calculator__title">Shipping Calculator</h3>
	</header>

	<div class="shipping-calculator__form-container">
		{#if props.showCountrySelector}
			<div class="shipping-calculator__field-group">
				<label class="shipping-calculator__label" for="shipping-calculator-country"
					>Destination SlotCountry</label
				>
				<select id="shipping-calculator-country" class="shipping-calculator__select">
					{#each props.countries as country}
						<option value={country.code} selected={country.code === props.defaultDestinationCountry}
							>{country.name}</option
						>
					{/each}
				</select>
			</div>
		{/if}

		{#if props.showStateSelector && props.states?.length}
			<div class="shipping-calculator__field-group">
				<label class="shipping-calculator__label" for="shipping-calculator-state"
					>Destination SlotState</label
				>
				<select id="shipping-calculator-state" class="shipping-calculator__select">
					{#each props.states as region}
						<option value={region.code}>{region.name}</option>
					{/each}
				</select>
			</div>
		{/if}

		{#if props.showWeightInput}
			<div class="shipping-calculator__field-group">
				<label class="shipping-calculator__label" for="shipping-calculator-weight"
					>Package Weight</label
				>
				<input
					id="shipping-calculator-weight"
					class="shipping-calculator__input"
					type="number"
					min="0"
					step="0.1"
					bind:value={state.weight}
				/>
			</div>
		{/if}

		{#if props.showDimensionsInput}
			<div class="shipping-calculator__field-group">
				<label class="shipping-calculator__label" for="shipping-calculator-dimension-length"
					>Package SlotDimensions</label
				>
				<div class="_c1">
					<input
						id="shipping-calculator-dimension-length"
						class="shipping-calculator__input"
						type="number"
						min="0"
						value={state.dimensions.length}
						oninput={(event) =>
							state.updateDimension(
								'length',
								Number((event.currentTarget as HTMLInputElement).value)
							)}
					/>
					<input
						id="shipping-calculator-dimension-width"
						class="shipping-calculator__input"
						type="number"
						min="0"
						value={state.dimensions.width}
						oninput={(event) =>
							state.updateDimension(
								'width',
								Number((event.currentTarget as HTMLInputElement).value)
							)}
					/>
					<input
						id="shipping-calculator-dimension-height"
						class="shipping-calculator__input"
						type="number"
						min="0"
						value={state.dimensions.height}
						oninput={(event) =>
							state.updateDimension(
								'height',
								Number((event.currentTarget as HTMLInputElement).value)
							)}
					/>
				</div>
			</div>
		{/if}

		<button
			type="button"
			class="shipping-calculator__calculate-button"
			onclick={state.handleCalculate}
		>
			Calculate Shipping
		</button>
	</div>

	<div class="shipping-calculator__results-container">
		{#each props.shippingOptions as option}
			<button
				type="button"
				class="shipping-calculator__shipping-option"
				data-TODO="was state.ShippingOptionClasses(...) вЂ” add data-attr"
				onclick={() => state.handleSelectOption(option)}
			>
				<div class="_c2">
					<div>
						<p class="shipping-calculator__option-name">{option.name}</p>
						<p class="shipping-calculator__option-description">{option.description}</p>
					</div>
					<div class="_c3">
						<p class="shipping-calculator__option-price">
							{new Intl.NumberFormat(props.locale ?? 'en-US', {
								style: 'currency',
								currency: props.currency ?? 'USD'
							}).format(option.price)}
						</p>
						<p class="shipping-calculator__delivery-time">{option.estimatedDays} days</p>
					</div>
				</div>
			</button>
		{/each}
	</div>
</div>

<style>
	._c1 {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.75rem;
	}
	._c2 {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}
	._c3 {
		text-align: right;
	}

	.shipping-calculator {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.shipping-calculator__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.shipping-calculator__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-calculator__form-container {
		padding: 1.5rem;
	}
	.shipping-calculator__form-container > * + * {
		margin-top: 1rem;
	}

	.shipping-calculator__field-group {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
	}
	@media (min-width: 640px) {
		.shipping-calculator__field-group {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.shipping-calculator__label {
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 0.25rem;
	}

	.shipping-calculator__input {
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
	.shipping-calculator__input:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.shipping-calculator__select {
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
	.shipping-calculator__select:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.shipping-calculator__results-container {
		margin-top: 1.5rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-top: 1.5rem;
	}

	.shipping-calculator__shipping-option {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 0.75rem;
	}

	.shipping-calculator__option-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.shipping-calculator__option-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-calculator__option-price {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}

	.shipping-calculator__delivery-time {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.shipping-calculator__calculate-button {
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
	.shipping-calculator__calculate-button:hover {
		background-color: var(--color-primary-700);
	}
	.shipping-calculator__calculate-button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}
</style>
