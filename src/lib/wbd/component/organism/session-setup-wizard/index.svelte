<script lang="ts">
	import createWbdSessionSetupWizardState from '$stylist/wbd/function/state/session-setup-wizard/index.svelte';
	import type { RecipeWbdSessionSetupWizard } from '$stylist/wbd/interface/recipe/session-setup-wizard';

	let props: RecipeWbdSessionSetupWizard = $props();
	const state = createWbdSessionSetupWizardState(props);
</script>

<section class="wbd-session-setup {state.className}">
	<nav class="wbd-session-setup__steps" aria-label="Session setup">
		{#each state.steps as step}
			<button
				type="button"
				aria-current={step === state.step ? 'step' : undefined}
				class:wbd-session-setup__step--active={step === state.step}
				onclick={() => state.changeStep(step)}
			>
				{step}
			</button>
		{/each}
	</nav>

	<div class="wbd-session-setup__body">
		{#if state.step === 'basics'}
			<label>
				<span>Title</span>
				<input
					value={state.session.title ?? ''}
					oninput={(event) => state.updateSession({ ...state.session, title: event.currentTarget.value })}
				/>
			</label>
			<label>
				<span>Description</span>
				<textarea
					rows="3"
					value={state.session.description ?? ''}
					oninput={(event) => state.updateSession({ ...state.session, description: event.currentTarget.value })}
				></textarea>
			</label>
			<label>
				<span>Assumptions</span>
				<textarea
					rows="4"
					value={state.session.assumptions ?? ''}
					oninput={(event) => state.updateSession({ ...state.session, assumptions: event.currentTarget.value })}
				></textarea>
			</label>
			<label>
				<span>Max rounds</span>
				<input
					type="number"
					min="1"
					value={state.session.maxRounds ?? 3}
					oninput={(event) => state.updateSession({ ...state.session, maxRounds: event.currentTarget.valueAsNumber })}
				/>
			</label>
		{:else if state.step === 'questions'}
			<section class="wbd-session-setup__panel" aria-label="Questions">
				<h2>Questions</h2>
				<p>Add estimation questions after the session draft is created.</p>
			</section>
		{:else if state.step === 'experts'}
			<section class="wbd-session-setup__panel" aria-label="Experts">
				<h2>Experts</h2>
				<p>Invite experts after the session draft is created.</p>
			</section>
		{:else}
			<section class="wbd-session-setup__panel" aria-label="Review">
				<h2>Review</h2>
				<dl>
					<div>
						<dt>Title</dt>
						<dd>{state.session.title || 'Untitled session'}</dd>
					</div>
					<div>
						<dt>Max rounds</dt>
						<dd>{state.session.maxRounds ?? 3}</dd>
					</div>
				</dl>
			</section>
		{/if}
	</div>

	<div class="wbd-session-setup__actions">
		<button type="button" disabled={!state.canCreate} onclick={state.createSession}>Create session</button>
	</div>
</section>

<style>
	.wbd-session-setup {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.wbd-session-setup__steps {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.wbd-session-setup__steps button,
	.wbd-session-setup__actions button {
		padding: 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font-size: 0.8125rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
		cursor: pointer;
	}
	.wbd-session-setup__step--active {
		border-color: var(--color-primary-500, #3b82f6) !important;
		background: var(--color-primary-50, #eff6ff) !important;
		color: var(--color-primary-700, #1d4ed8) !important;
	}
	.wbd-session-setup__body {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
	}
	.wbd-session-setup__body label {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-size: 0.75rem;
		font-weight: 600;
		color: var(--color-text-secondary, #475569);
	}
	.wbd-session-setup__body label:nth-child(2),
	.wbd-session-setup__body label:nth-child(3) {
		grid-column: 1 / -1;
	}
	.wbd-session-setup__body input,
	.wbd-session-setup__body textarea {
		box-sizing: border-box;
		width: 100%;
		padding: 0.5rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.375rem;
		background: var(--color-background-primary, #fff);
		font: inherit;
		font-weight: 400;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-session-setup__panel {
		grid-column: 1 / -1;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		min-height: 8rem;
		padding: 1rem;
		border: 1px solid var(--color-border-primary, #cbd5e1);
		border-radius: 0.5rem;
		background: var(--color-background-secondary, #f8fafc);
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-session-setup__panel h2,
	.wbd-session-setup__panel p,
	.wbd-session-setup__panel dl {
		margin: 0;
	}
	.wbd-session-setup__panel h2 {
		font-size: 1rem;
	}
	.wbd-session-setup__panel p {
		color: var(--color-text-secondary, #475569);
		font-size: 0.875rem;
	}
	.wbd-session-setup__panel dl {
		display: grid;
		gap: 0.5rem;
		font-size: 0.875rem;
	}
	.wbd-session-setup__panel div {
		display: grid;
		grid-template-columns: minmax(6rem, max-content) 1fr;
		gap: 0.75rem;
	}
	.wbd-session-setup__panel dt {
		color: var(--color-text-secondary, #475569);
		font-weight: 600;
	}
	.wbd-session-setup__panel dd {
		margin: 0;
	}
	.wbd-session-setup__actions {
		display: flex;
		justify-content: flex-end;
	}
	.wbd-session-setup__actions button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	@media (max-width: 640px) {
		.wbd-session-setup__body {
			grid-template-columns: 1fr;
		}
	}
</style>
