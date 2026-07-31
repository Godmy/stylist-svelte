<script lang="ts">
	import type { RecipeWarrantyInfo as WarrantyInfoContract } from '$stylist/commerce/interface/recipe/warranty-info';
	import stateFn from '$stylist/commerce/function/state/warranty-info/index.svelte';

	let props: WarrantyInfoContract = $props();
	const state = stateFn(props);
</script>

<div class="warranty-info">
	<header class="warranty-info__header">
		<div>
			<h3 class="warranty-info__title">Warranty Information</h3>
			<p class="warranty-info__claim-title">{props.productName}</p>
		</div>
		<span class="warranty-info__warranty-period-badge">{props.warrantyPeriod.type}</span>
	</header>

	<div class="warranty-info__content-container">
		<section class="warranty-info__section">
			<h4 class="warranty-info__section-title">Coverage Summary</h4>
			<div class="_c1">
				<p>Purchased: {state.formatDate(props.purchaseDate)}</p>
				{#if props.serialNumber}
					<p>Serial: {props.serialNumber}</p>
				{/if}
				<p>Duration: {props.warrantyPeriod.duration} year(s)</p>
				{#if state.getWarrantyEndDate()}
					<p>Ends: {state.formatDate(state.getWarrantyEndDate() ?? undefined)}</p>
				{/if}
			</div>
		</section>

		{#if props.showCoverageDetails !== false && state.coverage.length}
			<section class="warranty-info__section">
				<h4 class="warranty-info__section-title">Covered</h4>
				<div class="warranty-info__coverage-list">
					{#each state.coverage as item}
						<div class="warranty-info__coverage-item">
							<span class="warranty-info__coverage-text">{item}</span>
						</div>
					{/each}
				</div>
			</section>
		{/if}

		{#if props.showExclusions && state.exclusions.length}
			<section class="warranty-info__section">
				<h4 class="warranty-info__section-title">Exclusions</h4>
				<div class="warranty-info__exclusions-list">
					{#each state.exclusions as item}
						<div class="warranty-info__exclusion-item">
							<span class="warranty-info__exclusion-text">{item}</span>
						</div>
					{/each}
				</div>
			</section>
		{/if}

		{#if props.showClaimsHistory && state.claims.length}
			<section class="warranty-info__section">
				<h4 class="warranty-info__section-title">Claims History</h4>
				<div class="warranty-info__claims-container">
					{#each state.claims as claim}
						<article class="warranty-info__claim-item">
							<div class="_c2">
								<h5 class="warranty-info__claim-title">{claim.issue}</h5>
								<span
									class="warranty-info__claim-status-badge"
									data-TODO="was state.ClaimStatusBadgeClasses(...) — add data-attr"
									>{claim.status}</span
								>
							</div>
							<p class="_c3">{claim.claimNumber}</p>
							{#if claim.description}
								<p>{claim.description}</p>
							{/if}
						</article>
					{/each}
				</div>
			</section>
		{/if}

		{#if props.showClaimForm !== false}
			<section class="warranty-info__section">
				<h4 class="warranty-info__section-title">Submit a Claim</h4>
				<div class="warranty-info__form-container">
					<input
						class="warranty-info__input"
						type="text"
						placeholder="Issue"
						bind:value={state.claimIssue}
					/>
					<textarea
						class="warranty-info__text-area"
						rows={4}
						placeholder="Describe the issue"
						bind:value={state.claimDescription}
					></textarea>
					<div class="_c4">
						<button
							type="button"
							class="warranty-info__button"
							data-TODO="was state.ButtonClasses(...) — add data-attr"
							onclick={state.handleSubmitClaim}
						>
							Submit Claim
						</button>
						{#if props.termsUrl}
							<button
								type="button"
								class="warranty-info__button"
								data-TODO="was state.ButtonClasses(...) — add data-attr"
								onclick={props.onTermsClick}
							>
								Warranty Terms
							</button>
						{/if}
						{#if props.showFileDownload}
							<button
								type="button"
								class="warranty-info__button"
								data-TODO="was state.ButtonClasses(...) — add data-attr"
								onclick={props.onFileDownload}
							>
								Download PDF
							</button>
						{/if}
					</div>
				</div>
			</section>
		{/if}
	</div>
</div>

<style>
	._c1 > * + * {
		margin-top: 0.5rem;
	}
	._c2 {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.75rem;
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c4 {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.warranty-info {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-secondary);
	}

	.warranty-info__header {
		border-bottom-width: 1px;
		border-style: solid;
		padding-left: 1.5rem;
		padding-right: 1.5rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.warranty-info__title {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.warranty-info__content-container {
		padding: 1.5rem;
	}

	.warranty-info__section {
		margin-bottom: 1.5rem;
	}

	.warranty-info__section-title {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin-bottom: 0.75rem;
	}

	.warranty-info__coverage-list > * + * {
		margin-top: 0.5rem;
	}

	.warranty-info__coverage-item {
		display: flex;
		align-items: flex-start;
	}

	.warranty-info__coverage-text {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}

	.warranty-info__exclusions-list > * + * {
		margin-top: 0.5rem;
	}

	.warranty-info__exclusion-item {
		display: flex;
		align-items: flex-start;
	}

	.warranty-info__exclusion-text {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-primary);
	}

	.warranty-info__claims-container {
		margin-top: 1.5rem;
		border-top-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding-top: 1.5rem;
	}

	.warranty-info__claim-item {
		border-width: 1px;
		border-style: solid;
		border-radius: 0.5rem;
		padding: 1rem;
		margin-bottom: 0.75rem;
	}

	.warranty-info__claim-title {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.warranty-info__claim-status-badge {
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
		margin-top: 0.5rem;
		background-color: var(--color-success-100);
		color: var(--color-success-800);
	}

	.warranty-info__form-container {
		margin-top: 1.5rem;
	}
	.warranty-info__form-container > * + * {
		margin-top: 1rem;
	}

	.warranty-info__input {
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
	.warranty-info__input:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.warranty-info__text-area {
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
	.warranty-info__text-area:focus {
		border-color: var(--color-primary-500);
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 3px var(--color-primary-500);
	}

	.warranty-info__button {
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
	.warranty-info__button:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px rgb(59 130 246 / 0.5);
	}

	.warranty-info__warranty-period-badge {
		display: inline-flex;
		align-items: center;
		padding-left: 0.75rem;
		padding-right: 0.75rem;
		padding-top: 0.25rem;
		padding-bottom: 0.25rem;
		border-radius: 9999px;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		background-color: var(--color-primary-100);
		color: var(--color-primary-800);
	}
</style>
