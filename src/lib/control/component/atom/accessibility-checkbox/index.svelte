<script lang="ts">
	import createInputAccessibilityCheckboxState from '$stylist/control/function/state/accessibility-checkbox/index.svelte';

	let props = $props<{
		label?: string;
		checked?: boolean;
		disabled?: boolean;
		onValueInput?: (value: boolean) => void;
		onValueChange?: (value: boolean) => void;
		onChange?: (value: boolean) => void;
		class?: string;
	}>();
	const state = createInputAccessibilityCheckboxState(props);

	let { label = '', disabled = false } = props;
</script>

<div class={state.containerClasses}>
	<label class="a-checkbox__label">
		<input
			type="checkbox"
			class="a-checkbox__input"
			checked={state.checked}
			{disabled}
			onchange={state.handleChange}
		/>
		<div class={state.indicatorClasses}>
			{#if state.checked}
				<svg
					class="a-checkbox__check"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"
					></path>
				</svg>
			{/if}
		</div>
		<span class={state.labelClasses}>{label}</span>
	</label>
</div>

<style>
	.a-checkbox {
		display: inline-flex;
	}
	.a-checkbox__label {
		display: flex;
		cursor: pointer;
		align-items: center;
	}
	.a-checkbox__indicator {
		display: flex;
		width: 1.5rem;
		height: 1.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 0.25rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
	}
	.a-checkbox__indicator--checked {
		background-color: var(--color-primary-500);
		border-color: var(--color-primary-500);
	}
	.a-checkbox__indicator--disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
	.a-checkbox__text {
		margin-left: 0.5rem;
		color: var(--color-text-primary);
	}
	.a-checkbox__text--disabled {
		color: var(--color-text-tertiary);
	}

	.a-checkbox__input {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	.a-checkbox__check {
		width: 1rem;
		height: 1rem;
		color: var(--color-text-inverse);
	}
</style>
