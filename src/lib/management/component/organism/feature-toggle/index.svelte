<script lang="ts">
	import type { RecipeFeatureToggle } from '$stylist/management/interface/recipe/feature-toggle';

	import { createFeatureToggleState } from '$stylist/management/function/state/feature-toggle/index.svelte';

	let props: RecipeFeatureToggle = $props();

	const state = createFeatureToggleState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="ft-row">
		<div>
			<div class="ft-label">{state.label}</div>

			<div class="ft-description">{state.description}</div>
		</div>

		<button
			type="button"
			aria-label={state.label}
			class={`ft-track ${state.isChecked ? 'ft-track--on' : 'ft-track--off'} ${state.disabled ? 'ft-track--disabled' : ''}`}
			disabled={state.disabled}
			onclick={state.handleChange}
		>
			<span class={`ft-thumb ${state.isChecked ? 'ft-thumb--on' : 'ft-thumb--off'}`}></span>
		</button>
	</div>
</div>

<style>
	.ft-row {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
	}

	.ft-label {
		font-weight: 500;
	}

	.ft-description {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.ft-track {
		position: relative;
		height: 1.75rem;
		width: 3rem;
		border-radius: 9999px;
		border: none;
		cursor: pointer;
		padding: 0;
	}

	.ft-track--disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.ft-thumb {
		position: absolute;
		top: 0.25rem;
		height: 1.25rem;
		width: 1.25rem;
		border-radius: 9999px;
		background-color: var(--color-background-primary);
		transition: left 150ms cubic-bezier(0.4, 0, 0.2, 1);
	}

	.ft-thumb--on {
		left: 1.5rem;
	}
	.ft-thumb--off {
		left: 0.25rem;
	}

	.ft-track--on {
		background-color: var(--color-primary-600);
	}
	.ft-track--off {
		background-color: var(--color-background-tertiary);
	}
</style>
