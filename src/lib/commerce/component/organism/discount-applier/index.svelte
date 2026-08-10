<script lang="ts">
	import type { RecipeDiscountApplier as DiscountApplierContract } from '$stylist/commerce/interface/recipe/discount-applier';
	import createDiscountApplierState from './state.svelte';

	let props: DiscountApplierContract = $props();
	const state = createDiscountApplierState(props);
</script>

<div class="discount-applier">
	<div class="discount-applier__header">
		<h2 class="discount-applier__title">Discounts &amp; Promo Codes</h2>
	</div>

	{#if props.showCodeInput !== false}
		<div class="discount-applier__promo-code-container">
			<input
				type="text"
				placeholder="Enter promo code"
				value={state.codeInput}
				oninput={(e) => {
					state.codeInput = (e.target as HTMLInputElement).value;
				}}
				class="discount-applier__promo-code-input"
			/>
			<button onclick={state.handleApplyCode} class="discount-applier__apply-button">Apply</button>
		</div>
	{/if}

	{#if state.message}
		<div
			class={state.message.type === 'success'
				? state.successMessageClasses
				: state.errorMessageClasses}
		>
			{state.message.text}
		</div>
	{/if}

	{#if props.showAppliedRules !== false && state.appliedCodes.length > 0}
		<div class="discount-applier__applied-rules-container">
			<h3 class="_c1">Applied Codes</h3>
			{#each state.appliedCodes as code}
				<div class="_c2">
					<span class="discount-applier__applied-badge">{code}</span>
					<button onclick={() => state.handleRemoveRule(code)} class="_c3">&times; Remove</button>
				</div>
			{/each}
		</div>
	{/if}

	{#if props.showRuleList !== false && (props.rules ?? []).length > 0}
		<div class="discount-applier__rules-list">
			{#each props.rules ?? [] as rule}
				<div class="discount-applier__rule-item">
					<div class="_c4">
						<p class="discount-applier__rule-name">{rule.name}</p>
						{#if rule.description}
							<p class="discount-applier__rule-description">{rule.description}</p>
						{/if}
						<p class="discount-applier__discount-value">{state.formatDiscount(rule)}</p>
					</div>
					{#if state.isApplied(rule.code)}
						<span class="discount-applier__applied-badge">Applied</span>
					{:else}
						<button onclick={() => state.handleApplyRule(rule)} class="_c5">Apply</button>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	._c1 {
		margin-bottom: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
	._c2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-error-600);
	}
	._c4 {
		flex: 1 1 0%;
	}
	._c5 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-primary-600);
	}

	.discount-applier {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.discount-applier__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.discount-applier__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.discount-applier__promo-code-container {
		display: flex;
	}

	.discount-applier__promo-code-input {
		flex: 1 1 0%;
		min-width: 0;
		display: block;
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	.discount-applier__promo-code-input:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}
	@media (min-width: 640px) {
		.discount-applier__promo-code-input {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}

	.discount-applier__apply-button {
		display: inline-flex;
		align-items: center;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-primary-600);
		color: var(--color-text-inverse);
		font-weight: 500;
	}
	.discount-applier__apply-button:hover {
		background-color: var(--color-primary-700);
	}
	@media (min-width: 640px) {
		.discount-applier__apply-button {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}

	.discount-applier__rules-list {
		margin-top: 1rem;
	}
	.discount-applier__rules-list > * + * {
		margin-top: 0.75rem;
	}

	.discount-applier__rule-item {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	.discount-applier__rule-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.discount-applier__rule-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.discount-applier__discount-value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-success-600);
	}

	.discount-applier__applied-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.discount-applier__applied-rules-container {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.discount-applier__success-message {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-success-600);
	}

	.discount-applier__error-message {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-danger-600);
	}

	.discount-applier__icon {
		height: 1rem;
		width: 1rem;
		margin-right: 0.25rem;
	}

	/* --- migrated from StyleManager --- */

	.discount-applier {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.discount-applier__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.discount-applier__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.discount-applier__promo-code-container {
		display: flex;
	}

	.discount-applier__promo-code-input {
		flex: 1 1 0%;
		min-width: 0;
		display: block;
		width: 100%;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	.discount-applier__promo-code-input:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}
	@media (min-width: 640px) {
		.discount-applier__promo-code-input {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}

	.discount-applier__apply-button {
		display: inline-flex;
		align-items: center;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-primary-600);
		color: var(--color-text-inverse);
		font-weight: 500;
	}
	.discount-applier__apply-button:hover {
		background-color: var(--color-primary-700);
	}
	@media (min-width: 640px) {
		.discount-applier__apply-button {
			font-size: 0.875rem;
			line-height: 1.25rem;
		}
	}

	.discount-applier__rules-list {
		margin-top: 1rem;
	}
	.discount-applier__rules-list > * + * {
		margin-top: 0.75rem;
	}

	.discount-applier__rule-item {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}

	.discount-applier__rule-name {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.discount-applier__rule-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.discount-applier__discount-value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		color: var(--color-success-600);
	}

	.discount-applier__applied-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.625rem;
		padding-right: 0.625rem;
		padding-top: 0.125rem;
		padding-bottom: 0.125rem;
		border-radius: 9999px;
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.discount-applier__applied-rules-container {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.discount-applier__success-message {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-success-600);
	}

	.discount-applier__error-message {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-danger-600);
	}

	.discount-applier__icon {
		height: 1rem;
		width: 1rem;
		margin-right: 0.25rem;
	}
</style>
