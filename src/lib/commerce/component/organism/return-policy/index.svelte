<script lang="ts">
	import type { RecipeReturnPolicy as ReturnPolicyContract } from '$stylist/commerce/interface/recipe/return-policy';
	import stateFn from './state.svelte';

	let props: ReturnPolicyContract = $props();
	const state = stateFn(props);
</script>

<div class="return-policy">
	<header class="return-policy__header">
		<h3 class="return-policy__title">Return Policy</h3>
		<p class="return-policy__policy-description">
			{props.policyDescription ??
				`Return eligible items within ${props.policyPeriod} days of delivery.`}
		</p>
		{#if props.policyEffectiveDate}
			<p class="return-policy__shipping-info-value">
				Effective {new Intl.DateTimeFormat(props.locale ?? 'en-US', { dateStyle: 'medium' }).format(
					props.policyEffectiveDate
				)}
			</p>
		{/if}
	</header>

	<div class="return-policy__content-container">
		{#if props.showConditions !== false && props.conditions?.length}
			<section class="return-policy__section">
				<h4 class="return-policy__section-title">Conditions</h4>
				<div class="return-policy__conditions-list">
					{#each props.conditions as condition}
						<article class="return-policy__condition-item">
							<h5 class="return-policy__condition-title">{condition.title}</h5>
							<p class="return-policy__condition-description">{condition.description}</p>
						</article>
					{/each}
				</div>
			</section>
		{/if}

		{#if props.showSteps !== false && props.returnSteps?.length}
			<section class="return-policy__section">
				<h4 class="return-policy__section-title">How Returns Work</h4>
				<div class="return-policy__steps-list">
					{#each props.returnSteps as step, index}
						<article class="return-policy__step-item">
							<div class="return-policy__step-number">{index + 1}</div>
							<div class="return-policy__step-content">
								<h5 class="return-policy__step-title">{step.title}</h5>
								<p class="return-policy__step-description">{step.description}</p>
							</div>
						</article>
					{/each}
				</div>
			</section>
		{/if}

		{#if props.showEligibility}
			<section class="return-policy__section">
				<h4 class="return-policy__section-title">Eligibility</h4>
				<div class="_c1">
					{#if props.eligibleProducts?.length}
						<div>
							<p class="return-policy__shipping-info-label">Eligible Products</p>
							<div class="_c2">
								{#each props.eligibleProducts as product}
									<span class="return-policy__badge">{product}</span>
								{/each}
							</div>
						</div>
					{/if}

					{#if props.ineligibleProducts?.length}
						<div>
							<p class="return-policy__shipping-info-label">Not Eligible</p>
							<div class="_c2">
								{#each props.ineligibleProducts as product}
									<span class="return-policy__badge">{product}</span>
								{/each}
							</div>
						</div>
					{/if}
				</div>
			</section>
		{/if}

		{#if props.showShippingInfo}
			<section class="return-policy__section">
				<h4 class="return-policy__section-title">Shipping & Fees</h4>
				<div class="return-policy__shipping-info">
					<div class="return-policy__shipping-info-item">
						<span class="return-policy__shipping-info-label">Return Window</span>
						<span class="return-policy__shipping-info-value">{props.policyPeriod} days</span>
					</div>
					<div class="return-policy__shipping-info-item">
						<span class="return-policy__shipping-info-label">Shipping Costs</span>
						<span class="return-policy__shipping-info-value">{props.shippingCosts ?? 'buyer'}</span>
					</div>
					<div class="return-policy__shipping-info-item">
						<span class="return-policy__shipping-info-label">Restocking Fee</span>
						<span class="return-policy__shipping-info-value">{props.restockingFee ?? 0}%</span>
					</div>
				</div>
			</section>
		{/if}

		{#if props.showFAQ !== false && props.faqs?.length}
			<section class="return-policy__section">
				<h4 class="return-policy__section-title">FAQ</h4>
				<div class="return-policy__faq-list">
					{#each props.faqs as faq}
						<article class="return-policy__faq-item">
							<h5 class="return-policy__faq-question">{faq.question}</h5>
							<p class="return-policy__faq-answer">{faq.answer}</p>
						</article>
					{/each}
				</div>
			</section>
		{/if}

		<div class="_c3">
			<button
				type="button"
				class="return-policy__button"
				data-TODO="was state.ButtonClasses(...) вЂ” add data-attr"
				onclick={props.onReturnInitiate}
			>
				Start Return
			</button>
			<button
				type="button"
				class="return-policy__button"
				data-TODO="was state.ButtonClasses(...) вЂ” add data-attr"
				onclick={props.onPolicyClick}
			>
				View Details
			</button>
		</div>
	</div>
</div>

<style>
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		margin-top: 0.5rem;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	._c3 {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.return-policy {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.return-policy__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.return-policy__title {
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.return-policy__content-container {
		padding: 1.5rem;
	}

	.return-policy__section {
		margin-bottom: 1.5rem;
	}

	.return-policy__section-title {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 0.75rem;
		display: flex;
		align-items: center;
	}

	.return-policy__policy-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
		margin-bottom: 1rem;
	}

	.return-policy__conditions-list > * + * {
		margin-top: 0.75rem;
	}

	.return-policy__condition-item {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.return-policy__condition-title {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 0.25rem;
	}

	.return-policy__condition-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.return-policy__steps-list > * + * {
		margin-top: 1rem;
	}

	.return-policy__step-item {
		display: flex;
		align-items: flex-start;
	}

	.return-policy__step-number {
		flex-shrink: 0;
		width: 2rem;
		height: 2rem;
		border-radius: 9999px;
		background-color: var(--color-primary-100);
		color: var(--color-primary-700);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 700;
		margin-right: 0.75rem;
	}

	.return-policy__step-content {
		flex: 1 1 0%;
	}

	.return-policy__step-title {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.return-policy__step-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.return-policy__faq-list > * + * {
		margin-top: 0.75rem;
	}

	.return-policy__faq-item {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.return-policy__faq-question {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 0.5rem;
	}

	.return-policy__faq-answer {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.return-policy__shipping-info {
		background-color: var(--color-background-secondary);
		border-radius: 0.5rem;
		padding: 1rem;
	}

	.return-policy__shipping-info-item {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.return-policy__shipping-info-label {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.return-policy__shipping-info-value {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.return-policy__button {
		display: inline-flex;
		align-items: center;
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
	.return-policy__button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	.return-policy__badge {
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
		background-color: var(--color-info-100);
		color: var(--color-info-800);
	}
</style>
