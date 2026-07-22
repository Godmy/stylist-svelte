<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const TestTube = 'test-tube';

	const GitBranch = 'git-branch';

	const Users = 'users';

	const Target = 'target';

	const Play = 'play';

	const Pause = 'pause';

	const Settings = 'settings';

	const BarChart3 = 'bar-chart-3';

	const Plus = 'plus';

	import type { SlotABTestConfigurator as IABTestConfiguratorProps } from '$stylist/marketing/interface/slot/ab-test-configurator';

	import createABTestConfiguratorState from '$stylist/marketing/function/state/abtest-configurator/index.svelte';

	let props: IABTestConfiguratorProps & {
		class?: string;

		headerClass?: string;

		formClass?: string;

		variantClass?: string;

		footerClass?: string;
	} = $props();

	const state = createABTestConfiguratorState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div class="abt-row">
			<BaseIcon
				name={TestTube}
				style="margin-right:0.5rem;width:1.5rem;height:1.5rem;color:var(--color-text-secondary)"
			/>

			<h3 class="abt-title">A/B Test Configurator</h3>
		</div>

		<p class="abt-subtitle">Configure and manage your A/B tests</p>
	</div>

	<div class={state.formClasses}>
		<div class="abt-form-grid">
			<div class="abt-col-4">
				<label for="test-name" class="abt-label">Test Name</label>

				<div class="abt-field">
					<input
						type="text"
						id="test-name"
						class={`abt-input ${state.errors.name ? 'abt-input--error' : ''}`}
						bind:value={state.test.name}
						placeholder="e.g., Button Color Impact"
					/>

					{#if state.errors.name}
						<p class="abt-error-msg">{state.errors.name}</p>
					{/if}
				</div>
			</div>

			<div class="abt-col-6">
				<label for="test-description" class="abt-label">Description</label>

				<div class="abt-field">
					<textarea
						id="test-description"
						rows={3}
						class="abt-input"
						bind:value={state.test.description}
						placeholder="Describe the purpose and expectations of this test..."
					></textarea>
				</div>
			</div>

			<div class="abt-col-3">
				<label for="start-date" class="abt-label">Start Date</label>

				<div class="abt-field">
					<input
						type="date"
						id="start-date"
						class="abt-input"
						bind:value={state.startDateString}
						onchange={(e) => {
							state.startDateString = (e.target as HTMLInputElement).value;
						}}
					/>
				</div>
			</div>

			<div class="abt-col-3">
				<label for="end-date" class="abt-label">End Date (optional)</label>

				<div class="abt-field">
					<input
						type="date"
						id="end-date"
						class="abt-input"
						bind:value={state.endDateString}
						onchange={(e) => {
							state.endDateString = (e.target as HTMLInputElement).value;
						}}
					/>
				</div>
			</div>

			<div class="abt-col-6">
				<div class="abt-variants-header">
					<h4 class="abt-variants-title">Variants</h4>

					<span class="abt-variants-weight">Total weight: {state.totalWeight}%</span>
				</div>

				{#if state.errors.weights}
					<p class="abt-error-msg">{state.errors.weights}</p>
				{/if}

				<div class="abt-variants-list">
					{#each state.test.variants as variant}
						<div class={`abt-variant-card ${state.variantClassName}`}>
							<div class="abt-variant-row">
								<div class="abt-row">
									<BaseIcon
										name={GitBranch}
										style="margin-right:0.5rem;width:1.25rem;height:1.25rem;color:var(--color-text-tertiary)"
									/>

									<div>
										<h5 class="abt-variant-name">{variant.name}</h5>

										<p class="abt-variant-desc">{variant.description}</p>
									</div>
								</div>

								<div class="abt-variant-controls">
									<div class="abt-weight-field">
										<label for="weight-{variant.id}" class="abt-weight-label">Traffic %</label>

										<input
											type="number"
											id="weight-{variant.id}"
											min="0"
											max="100"
											class="abt-weight-input"
											bind:value={variant.weight}
											oninput={(e) =>
												state.handleUpdateWeight(
													variant.id,

													parseInt((e.target as HTMLInputElement).value) || 0
												)}
										/>
									</div>

									<button
										type="button"
										class={`abt-status-btn ${variant.isActive ? 'abt-status-btn--active' : 'abt-status-btn--inactive'}`}
										onclick={() => state.handleToggleStatus(variant.id)}
									>
										{variant.isActive ? 'Active' : 'Inactive'}
									</button>

									<button
										type="button"
										class="abt-remove-btn"
										onclick={() => state.handleRemoveVariant(variant.id)}
										title="Remove variant"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											class="abt-remove-icon"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fill-rule="evenodd"
												d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
												clip-rule="evenodd"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					{/each}
				</div>

				<div class="abt-new-variant">
					<h5 class="abt-new-variant-title">Add New Variant</h5>

					<div class="abt-new-variant-grid">
						<div class="abt-new-col-5">
							<input
								type="text"
								class="abt-input"
								bind:value={state.newVariantName}
								placeholder="Variant name"
							/>
						</div>

						<div class="abt-new-col-4">
							<input
								type="number"
								min="0"
								max="100"
								class="abt-input"
								bind:value={state.newVariantWeight}
								placeholder="% traffic"
							/>
						</div>

						<div class="abt-new-col-3">
							<button type="button" class="abt-add-btn" onclick={state.addVariant}>
								<BaseIcon name={Plus} style="margin-right:0.25rem;width:1rem;height:1rem" />

								Add
							</button>
						</div>

						<div class="abt-new-col-12">
							<input
								type="text"
								class="abt-input"
								bind:value={state.newVariantDescription}
								placeholder="Variant description"
							/>
						</div>
					</div>

					{#if state.errors.newVariant}
						<p class="abt-error-msg">{state.errors.newVariant}</p>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<div class={state.footerClasses}>
		<div class="abt-footer-row">
			<div class="abt-row">
				<span class="abt-status-badge">
					{state.test.status.charAt(0).toUpperCase() + state.test.status.slice(1)}
				</span>

				<span class="abt-targeting">
					<BaseIcon
						name={Users}
						style="margin-right:0.25rem;width:1rem;height:1rem;display:inline;vertical-align:middle"
					/>

					Targeting: {state.test.targetAudience || 'All Users'}
				</span>
			</div>

			<div class="abt-footer-actions">
				<button type="button" class="abt-btn abt-btn--secondary" onclick={state.saveTest}>
					<BaseIcon name={Settings} style="margin-right:0.25rem;width:1rem;height:1rem" />

					Save Draft
				</button>

				{#if state.test.status === 'draft' || state.test.status === 'paused'}
					<button type="button" class="abt-btn abt-btn--success" onclick={state.startTest}>
						<BaseIcon name={Play} style="margin-right:0.25rem;width:1rem;height:1rem" />

						Start Test
					</button>
				{/if}

				{#if state.test.status === 'running'}
					<button type="button" class="abt-btn abt-btn--warning" onclick={state.pauseTest}>
						<BaseIcon name={Pause} style="margin-right:0.25rem;width:1rem;height:1rem" />

						Pause Test
					</button>

					<button type="button" class="abt-btn abt-btn--primary" onclick={state.completeTest}>
						<BaseIcon name={BarChart3} style="margin-right:0.25rem;width:1rem;height:1rem" />

						Complete Test
					</button>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	.abt-container {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.5rem;
		background-color: var(--color-background-primary);
	}
	.abt-header {
		padding: 1.5rem 1.5rem 0;
	}
	.abt-form {
		padding: 1.5rem;
	}
	.abt-footer {
		border-top: 1px solid var(--color-border-primary);
		padding: 1rem 1.5rem;
	}
	.abt-row {
		display: flex;

		align-items: center;
	}

	.abt-title {
		font-size: 1.125rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	.abt-subtitle {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		color: var(--color-text-secondary);
	}

	.abt-form-grid {
		display: grid;

		grid-template-columns: repeat(6, 1fr);

		column-gap: 1rem;

		row-gap: 1.5rem;
	}

	.abt-col-4 {
		grid-column: span 4;
	}

	.abt-col-6 {
		grid-column: span 6;
	}

	.abt-col-3 {
		grid-column: span 3;
	}

	.abt-label {
		display: block;

		font-size: 0.875rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	.abt-field {
		margin-top: 0.25rem;
	}

	.abt-variants-header {
		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	.abt-variants-title {
		font-size: 0.875rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	.abt-variants-weight {
		font-size: 0.75rem;

		color: var(--color-text-secondary);
	}

	.abt-variants-list {
		margin-top: 0.5rem;

		display: flex;

		flex-direction: column;

		gap: 1rem;
	}

	.abt-variant-card {
		border-radius: 0.5rem;

		border: 1px solid;

		padding: 1rem;
	}

	.abt-variant-row {
		display: flex;

		align-items: flex-start;

		justify-content: space-between;
	}

	.abt-variant-name {
		font-weight: 500;

		color: var(--color-text-primary);
	}

	.abt-variant-desc {
		font-size: 0.875rem;

		color: var(--color-text-secondary);
	}

	.abt-variant-controls {
		display: flex;

		align-items: center;

		gap: 0.75rem;
	}

	.abt-weight-field {
		text-align: right;
	}

	.abt-weight-label {
		display: block;

		margin-bottom: 0.25rem;

		font-size: 0.75rem;

		color: var(--color-text-secondary);
	}

	.abt-status-btn {
		display: inline-flex;

		align-items: center;

		border-radius: 0.25rem;

		border: 1px solid transparent;

		padding: 0.375rem 0.625rem;

		font-size: 0.75rem;

		font-weight: 500;
	}

	.abt-status-btn--active {
		background-color: var(--color-success-100);

		color: var(--color-success-800);
	}

	.abt-status-btn--active:hover {
		background-color: var(--color-success-200);
	}

	.abt-status-btn--inactive {
		background-color: var(--color-danger-100);

		color: var(--color-danger-800);
	}

	.abt-status-btn--inactive:hover {
		background-color: var(--color-danger-200);
	}

	.abt-remove-btn {
		color: var(--color-danger-600);
	}

	.abt-remove-btn:hover {
		color: var(--color-danger-900);
	}

	.abt-remove-icon {
		width: 1.25rem;

		height: 1.25rem;
	}

	.abt-new-variant {
		margin-top: 1rem;

		border-radius: 0.5rem;

		background-color: var(--color-background-secondary);

		padding: 1rem;
	}

	.abt-new-variant-title {
		margin-bottom: 0.75rem;

		font-size: 0.875rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	.abt-new-variant-grid {
		display: grid;

		grid-template-columns: repeat(12, 1fr);

		gap: 0.75rem;
	}

	.abt-new-col-5 {
		grid-column: span 5;
	}

	.abt-new-col-4 {
		grid-column: span 4;
	}

	.abt-new-col-3 {
		grid-column: span 3;
	}

	.abt-new-col-12 {
		grid-column: span 12;

		margin-top: 0.5rem;
	}

	.abt-add-btn {
		display: inline-flex;

		width: 100%;

		align-items: center;

		justify-content: center;

		border-radius: 0.375rem;

		border: 1px solid transparent;

		background-color: var(--color-primary-600);

		padding: 0.5rem 1rem;

		font-size: 0.875rem;

		font-weight: 500;

		color: var(--color-text-inverse);
	}

	.abt-add-btn:hover {
		background-color: var(--color-primary-700);
	}

	.abt-footer-row {
		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	.abt-status-badge {
		display: inline-flex;

		align-items: center;

		border-radius: 9999px;

		background-color: var(--color-primary-100);

		padding: 0.125rem 0.75rem;

		font-size: 0.875rem;

		font-weight: 500;

		color: var(--color-primary-800);
	}

	.abt-targeting {
		margin-left: 0.75rem;

		font-size: 0.875rem;

		color: var(--color-text-secondary);
	}

	.abt-footer-actions {
		display: flex;

		gap: 0.75rem;
	}

	.abt-btn {
		display: inline-flex;

		align-items: center;

		border-radius: 0.375rem;

		border: 1px solid transparent;

		padding: 0.5rem 1rem;

		font-size: 0.875rem;

		font-weight: 500;

		color: var(--color-text-inverse);
	}

	.abt-btn--secondary {
		border-color: var(--color-border-primary);

		background-color: var(--color-background-primary);

		color: var(--color-text-primary);
	}

	.abt-btn--secondary:hover {
		background-color: var(--color-background-secondary);
	}

	.abt-btn--success {
		background-color: var(--color-success-600);
	}

	.abt-btn--success:hover {
		background-color: var(--color-success-700);
	}

	.abt-btn--warning {
		background-color: #ca8a04;
	}

	.abt-btn--warning:hover {
		background-color: #a16207;
	}

	.abt-btn--primary {
		background-color: var(--color-primary-600);
	}

	.abt-btn--primary:hover {
		background-color: var(--color-primary-700);
	}

	.abt-input {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border: 1px solid var(--color-border-primary);

		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

		font-size: 0.875rem;
	}

	.abt-input:focus {
		border-color: var(--color-primary-500);

		outline: none;
	}

	.abt-input--error {
		border-color: var(--color-danger-300);
	}

	.abt-error-msg {
		margin-top: 0.5rem;

		font-size: 0.875rem;

		color: var(--color-danger-600);
	}

	.abt-weight-input {
		width: 5rem;

		border-radius: 0.25rem;

		border: 1px solid var(--color-border-primary);

		padding: 0.25rem 0.5rem;

		font-size: 0.75rem;
	}

	.a-b-test-configurator {
		background-color: var(--color-background-primary);

		border-radius: 0.5rem;

		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);

		border-width: 1px;

		border-style: solid;

		border-color: var(--color-border-primary);

		overflow: hidden;
	}

	.a-b-test-configurator__header {
		border-bottom-width: 1px;

		border-style: solid;

		padding: var(--spacing-lg);
	}

	.a-b-test-configurator__title {
		font-size: 1.125rem;

		line-height: 1.75rem;

		font-weight: 500;

		color: var(--color-text-primary);

		display: flex;

		align-items: center;
	}

	.a-b-test-configurator__header-description {
		margin-top: 0.25rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	.a-b-test-configurator__form {
		padding: var(--spacing-lg);
	}

	.a-b-test-configurator__variants-section {
		margin-top: var(--spacing-md);
	}

	.a-b-test-configurator__variants-header {
		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	.a-b-test-configurator__variant {
		border-width: 1px;

		border-style: solid;

		border-radius: 0.5rem;

		padding: var(--spacing-md);
	}

	.a-b-test-configurator__variant-heading {
		font-weight: 500;

		color: var(--color-text-primary);

		display: flex;

		align-items: center;
	}

	.a-b-test-configurator__variant-description {
		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);
	}

	.a-b-test-configurator__variant-controls {
		display: flex;

		align-items: center;
	}

	.a-b-test-configurator__variant-controls > * + * {
		margin-left: var(--spacing-md);
	}

	.a-b-test-configurator__add-variant-section {
		margin-top: var(--spacing-md);

		padding: var(--spacing-md);

		background-color: var(--color-background-tertiary);

		border-radius: 0.5rem;
	}

	.a-b-test-configurator__add-variant-heading {
		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);

		margin-bottom: var(--spacing-sm);
	}

	.a-b-test-configurator__input {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-color: var(--color-danger-300);

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.a-b-test-configurator__input:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);

		border-color: var(--color-primary-500);
	}

	@media (min-width: 640px) {
		.a-b-test-configurator__input {
			font-size: 0.875rem;

			line-height: 1.25rem;
		}
	}

	.a-b-test-configurator__textarea {
		display: block;

		width: 100%;

		border-radius: 0.375rem;

		border-color: var(--color-border-primary);

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.a-b-test-configurator__textarea:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;

		box-shadow: 0 0 0 3px var(--color-primary-500);

		border-color: var(--color-primary-500);
	}

	@media (min-width: 640px) {
		.a-b-test-configurator__textarea {
			font-size: 0.875rem;

			line-height: 1.25rem;
		}
	}

	.a-b-test-configurator__label {
		display: block;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		color: var(--color-text-primary);
	}

	.a-b-test-configurator__error-message {
		margin-top: 0.5rem;

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-danger-600);
	}

	.a-b-test-configurator__footer {
		border-top-width: 1px;

		border-style: solid;

		padding: var(--spacing-lg);

		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	.a-b-test-configurator__status-badge {
		display: inline-flex;

		align-items: center;

		padding-left: 0.75rem;

		padding-right: 0.75rem;

		padding-top: 0.125rem;

		padding-bottom: 0.125rem;

		border-radius: 9999px;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;
	}

	.a-b-test-configurator__target-audience {
		margin-left: var(--spacing-md);

		font-size: 0.875rem;

		line-height: 1.25rem;

		color: var(--color-text-secondary);

		display: flex;

		align-items: center;
	}

	.a-b-test-configurator__button {
		display: inline-flex;

		align-items: center;

		padding-left: 1rem;

		padding-right: 1rem;

		padding-top: 0.5rem;

		padding-bottom: 0.5rem;

		border-width: 1px;

		border-style: solid;

		font-size: 0.875rem;

		line-height: 1.25rem;

		font-weight: 500;

		border-radius: 0.375rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

		color: var(--color-text-inverse);

		cursor: not-allowed;

		background-color: var(--color-info-600);
	}

	.a-b-test-configurator__button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;
	}

	.a-b-test-configurator__button:hover {
		background-color: var(--color-info-700);
	}

	.a-b-test-configurator__inactive-button {
		display: inline-flex;

		align-items: center;

		padding-left: 0.625rem;

		padding-right: 0.625rem;

		padding-top: 0.375rem;

		padding-bottom: 0.375rem;

		border-width: 1px;

		border-style: solid;

		font-size: 0.75rem;

		line-height: 1rem;

		font-weight: 500;

		border-radius: 0.25rem;

		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

		color: var(--color-success-800);
	}

	.a-b-test-configurator__inactive-button:focus {
		outline: 2px solid transparent;

		outline-offset: 2px;
	}

	.a-b-test-configurator__inactive-button:hover {
		background-color: var(--color-success-200);
	}

	.a-b-test-configurator__delete-button {
		color: var(--color-danger-600);
	}

	.a-b-test-configurator__delete-button:hover {
		color: var(--color-danger-900);
	}

	.a-b-test-configurator__grid-layout {
		display: grid;

		grid-template-columns: repeat(1, minmax(0, 1fr));

		row-gap: 1.5rem;

		column-gap: 1rem;
	}

	@media (min-width: 640px) {
		.a-b-test-configurator__grid-layout {
			grid-template-columns: repeat(6, minmax(0, 1fr));
		}
	}

	.a-b-test-configurator__space-between {
		display: flex;

		align-items: center;

		justify-content: space-between;
	}

	.a-b-test-configurator__margin-top {
		margin-top: var(--spacing-lg);
	}

	.a-b-test-configurator__icon {
		color: var(--color-text-secondary);

		margin-right: var(--spacing-xs);
	}
</style>
