<script lang="ts">
	import type { DiscountApplierContract } from '$stylist/commerce/interface/component/discount-applier';
	import { createDiscountApplierState } from '$stylist/commerce/function/state/discount-applier';

	let props: DiscountApplierContract = $props();
	const state = createDiscountApplierState(props);
</script>

<div class={state.containerClasses}>
	<div class={state.headerClasses}>
		<h2 class={state.titleClasses}>Discounts &amp; Promo Codes</h2>
	</div>

	{#if props.showCodeInput !== false}
		<div class={state.promoCodeContainerClasses}>
			<input
				type="text"
				placeholder="Enter promo code"
				value={state.codeInput}
				oninput={(e) => { state.codeInput = (e.target as HTMLInputElement).value; }}
				class={state.promoCodeInputClasses}
			/>
			<button onclick={state.handleApplyCode} class={state.applyButtonClasses}>Apply</button>
		</div>
	{/if}

	{#if state.message}
		<div class={state.message.type === 'success' ? state.successMessageClasses : state.errorMessageClasses}>
			{state.message.text}
		</div>
	{/if}

	{#if props.showAppliedRules !== false && state.appliedCodes.length > 0}
		<div class={state.appliedRulesContainerClasses}>
			<h3 class="text-sm font-medium mb-2">Applied Codes</h3>
			{#each state.appliedCodes as code}
				<div class="flex items-center justify-between py-1">
					<span class={state.appliedBadgeClasses}>{code}</span>
					<button
						onclick={() => state.handleRemoveRule(code)}
						class="text-sm text-[--color-error-600]"
					>&times; Remove</button>
				</div>
			{/each}
		</div>
	{/if}

	{#if props.showRuleList !== false && (props.rules ?? []).length > 0}
		<div class={state.rulesListClasses}>
			{#each props.rules ?? [] as rule}
				<div class={state.ruleItemClasses}>
					<div class="flex-1">
						<p class={state.ruleNameClasses}>{rule.name}</p>
						{#if rule.description}
							<p class={state.ruleDescriptionClasses}>{rule.description}</p>
						{/if}
						<p class={state.discountValueClasses}>{state.formatDiscount(rule)}</p>
					</div>
					{#if state.isApplied(rule.code)}
						<span class={state.appliedBadgeClasses}>Applied</span>
					{:else}
						<button
							onclick={() => state.handleApplyRule(rule)}
							class="text-sm text-[--color-primary-600] font-medium"
						>Apply</button>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>
