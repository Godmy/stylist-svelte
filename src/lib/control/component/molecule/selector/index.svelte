<script lang="ts">
	import { PresetSelector } from '$stylist/control/const/preset/selector';
	import type { RecipeSelector } from '$stylist/control/interface/recipe/selector';
	import { createSelectorState } from '$stylist/control/function/state/selector/index.svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	let props: RecipeSelector = $props();
	const state = createSelectorState(props);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			id: _id,
			label: _label,
			value: _value,
			options: _options,
			errors: _errors,
			required: _required,
			disabled: _disabled,
			placeholder: _placeholder,
			open: _open,
			onToggle: _onToggle,
			...rest
		} = props;
		return rest;
	});
</script>

<div class={state.containerClass}>
	{#if state.label}
		<label id={state.labelId} for={state.nativeId} class={state.labelClass}>
			{state.label}
			{#if state.required}
				<span style="color:var(--color-danger-500)">*</span>
			{/if}
		</label>
	{/if}

	<div class={state.fieldWrapperClass}>
		<button
			id={state.triggerId}
			type="button"
			class={state.selectButtonClass}
			aria-haspopup="listbox"
			aria-expanded={state.open}
			aria-labelledby={state.labelId}
			onclick={state.handleClick}
			disabled={state.disabled}
		>
			<span class={state.valueClass}>
				{#if state.selectedOption}
					{state.selectedOption.label}
				{:else}
					{state.placeholder ?? 'Select an option'}
				{/if}
			</span>
			<span class={state.chevronClass} aria-hidden="true">
				<BaseIcon
					name={PresetSelector.ChevronDown}
					style="width:1rem;height:1rem;"
					aria-hidden="true"
				/>
			</span>
		</button>

		<!-- Native select for form integration -->
		<select
			id={state.nativeId}
			bind:value={props.value}
			class="c-selector__native"
			disabled={state.disabled}
			required={state.required}
			aria-hidden="true"
			aria-invalid={state.hasError}
			aria-describedby={state.hasError ? state.errorId : undefined}
			{...restProps}
		>
			{#if state.placeholder}
				<option value="">{state.placeholder}</option>
			{/if}
			{#each state.options as option}
				<option value={option.value}>
					{option.label}
				</option>
			{/each}
		</select>
	</div>

	{#if state.hasError}
		<p id={state.errorId} class={state.errorClass}>
			{#each state.errors as error, i}
				{error}{i < state.errors.length - 1 ? ' ' : ''}
			{/each}
		</p>
	{/if}
</div>

<style>
	:root {
		--select-option-bg: var(--color-background-primary);
		--select-option-color: var(--color-text-primary);
		--select-option-hover: color-mix(
			in srgb,
			var(--color-primary-500) 12%,
			var(--color-background-primary)
		);
		--select-option-selected-bg: var(--color-primary-600);
		--select-option-selected-color: var(--color-text-inverse);
		--select-option-border: color-mix(in srgb, var(--color-text-primary) 8%, transparent);
	}

	[theme-mode='dark'],
	.dark {
		--select-option-bg: color-mix(in srgb, var(--color-background-secondary) 96%, transparent);
		--select-option-color: var(--color-text-primary);
		--select-option-hover: color-mix(
			in srgb,
			var(--color-primary-300) 25%,
			var(--color-background-secondary)
		);
		--select-option-selected-bg: color-mix(in srgb, var(--color-primary-400) 80%, transparent);
		--select-option-selected-color: var(--color-text-inverse);
		--select-option-border: color-mix(in srgb, var(--color-text-primary) 35%, transparent);
	}

	.c-selector {
		margin-bottom: 1rem;
	}

	.c-selector__label {
		display: block;
		font-size: 0.875rem;
		font-weight: 500;
		margin-bottom: 0.25rem;
		color: var(--color-text-primary);
	}

	.c-selector__field {
		position: relative;
	}

	.c-selector__trigger {
		width: 100%;
		padding: 0.5rem 0.75rem;
		text-align: left;
		background: var(--color-background-surface, var(--color-background-primary));
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
		cursor: default;
		display: flex;
		align-items: center;
		justify-content: space-between;
		min-height: var(--size-2_875rem);
		letter-spacing: var(--letter-spacing-narrow);
		background-image: var(--gradient-custom12);
		color-scheme: var(--theme, light);
	}

	.c-selector__trigger:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
		border-color: var(--color-primary-500);
	}

	.c-selector__trigger--error {
		border-color: var(--color-danger-500);
	}

	.c-selector__trigger--disabled {
		background: var(--color-background-disabled, var(--color-background-secondary));
		cursor: not-allowed;
	}

	.c-selector__chevron {
		margin-left: 0.75rem;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		align-items: center;
		padding-right: 0.5rem;
		pointer-events: none;
	}

	.c-selector__error {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-danger-500);
	}

	.c-selector__value {
		color: var(--color-text-primary);
	}

	.c-selector__placeholder {
		color: var(--color-text-secondary);
	}

	.c-selector__native {
		position: absolute;
		width: 1px;
		height: 1px;
		opacity: 0;
		pointer-events: none;
	}

	.c-selector__dropdown {
		background: color-mix(in srgb, var(--color-background-primary) 98%, transparent);
		backdrop-filter: blur(18px);
		-webkit-backdrop-filter: blur(18px);
		animation: select-dropdown-appear var(--duration-180) var(--easing-ease-entrance);
	}

	.c-selector__option,
	.c-selector__native option {
		background-color: var(--select-option-bg);
		color: var(--select-option-color);
		font-weight: var(--font-weight-medium);
	}

	.c-selector__option {
		transition:
			background var(--duration-150) var(--animation-ease),
			color var(--duration-150) var(--animation-ease),
			transform var(--duration-150) var(--animation-ease);
		border: 1px solid transparent;
	}

	.c-selector__option:hover:not(.is-selected) {
		background-color: var(--select-option-hover);
		border-color: var(--select-option-border);
		color: var(--color-text-primary);
	}

	.c-selector__option.is-highlighted:not(.is-selected) {
		background-color: var(--select-option-hover);
		border-color: var(--select-option-border);
		color: var(--color-text-primary);
	}

	.c-selector__option.is-selected {
		background-color: var(--select-option-selected-bg);
		color: var(--select-option-selected-color);
		box-shadow: var(--shadow-custom23);
	}

	/* Native select fallback */
	.c-selector__native option:checked,
	.c-selector__native option:focus,
	.c-selector__native option:hover {
		background-color: var(--select-option-hover);
		color: var(--select-option-color);
	}

	.c-selector__native option:checked {
		background-color: var(--select-option-selected-bg);
		color: var(--select-option-selected-color);
	}

	@keyframes select-dropdown-appear {
		0% {
			opacity: var(--opacity-0);
			transform: translateY(-6px) scale(0.98);
		}
		100% {
			opacity: var(--opacity-100);
			transform: translateY(0) scale(1);
		}
	}
</style>
