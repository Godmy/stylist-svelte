<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import { createAdvancedPasswordInputState } from '$stylist/input/function/state/advanced-password-input/index.svelte';
	import type { SlotAdvancedPasswordInput as IAdvancedPasswordInputProps } from '$stylist/input/interface/slot/advanced-password-input';

	const Eye = 'eye';
	const EyeOff = 'eye-off';

	let props: IAdvancedPasswordInputProps & HTMLAttributes<HTMLInputElement> & SlotInteraction = $props();
	const state = createAdvancedPasswordInputState(props);
</script>

<div class={state.containerClass}>
	<div class={state.inputWrapperClass}>
		<input
			type={state.type}
			class={state.inputClass}
			bind:value={state.value}
			placeholder={state.placeholder}
			disabled={state.disabled}
			readonly={state.readonly}
			oninput={state.handleInput}
			onchange={state.handleChange}
			{...props}
		/>
		<button
			type="button"
			class={state.buttonClass}
			onclick={state.togglePasswordVisibility}
			disabled={state.disabled}
		>
			{#if state.showPassword}
				<BaseIcon
					name={EyeOff}
					style="width: 1.25rem; height: 1.25rem; color: var(--color-text-secondary)"
				/>
			{:else}
				<BaseIcon
					name={Eye}
					style="width: 1.25rem; height: 1.25rem; color: var(--color-text-secondary)"
				/>
			{/if}
		</button>
	</div>

	{#if state.showStrengthMeter && state.value}
		<div class={state.strengthMeterContainerClass}>
			<div class={state.strengthLabelsContainerClass}>
				<span class={state.strengthLabelClass}>Password strength:</span>
				<span class={state.strengthValueClass}>
					{state.strengthLabel}
				</span>
			</div>
			<div class={state.strengthMeterBgClass}>
				<div class={state.strengthMeterFillClass} style={`width: ${state.strength * 25}%`}></div>
			</div>
		</div>
	{/if}
</div>

<style>
	.adv-password-input {
		position: relative;
	}

	.adv-password-input__wrapper {
		position: relative;
	}

	.adv-password-input__input {
		width: 100%;
		padding: 0.5rem 2.5rem 0.5rem 0.75rem;
		border: 1px solid var(--color-border-primary);
		border-radius: var(--border-radius-base, 0.375rem);
		background-color: var(--color-background-primary);
		color: var(--color-text-primary);
	}

	.adv-password-input__input:focus {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500);
		border-color: var(--color-primary-500);
	}

	.adv-password-input__input--disabled {
		background-color: var(--color-background-secondary);
		color: var(--color-text-secondary);
		cursor: not-allowed;
	}

	.adv-password-input__toggle {
		position: absolute;
		inset-block: 0;
		inset-inline-end: 0;
		padding-inline-end: var(--spacing-sm, 0.5rem);
		display: flex;
		align-items: center;
		background: none;
		border: none;
		cursor: pointer;
	}

	.adv-password-input__toggle--hidden {
		display: none;
	}

	.adv-password-input__strength {
		margin-block-start: var(--spacing-sm, 0.5rem);
	}

	.adv-password-input__strength-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-block-end: var(--spacing-xs, 0.25rem);
	}

	.adv-password-input__strength-label {
		font-size: var(--text-size-xs, 0.75rem);
		font-weight: 500;
	}

	.adv-password-input__strength-value {
		font-size: var(--text-size-xs, 0.75rem);
	}

	.adv-password-input__strength-value--0,
	.adv-password-input__strength-value--1 {
		color: var(--color-danger-600);
	}
	.adv-password-input__strength-value--2,
	.adv-password-input__strength-value--3 {
		color: var(--color-warning-600);
	}
	.adv-password-input__strength-value--4 {
		color: var(--color-success-600);
	}

	.adv-password-input__strength-track {
		width: 100%;
		height: 0.375rem;
		border-radius: 9999px;
		background-color: var(--color-background-tertiary);
	}

	.adv-password-input__strength-fill {
		height: 0.375rem;
		border-radius: 9999px;
	}

	.adv-password-input__strength-fill--0,
	.adv-password-input__strength-fill--1 {
		background-color: var(--color-danger-500);
	}
	.adv-password-input__strength-fill--2,
	.adv-password-input__strength-fill--3 {
		background-color: var(--color-warning-500);
	}
	.adv-password-input__strength-fill--4 {
		background-color: var(--color-success-500);
	}
</style>
