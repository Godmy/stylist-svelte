<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { SlotInputPassword as IInputPasswordProps } from '$stylist/input/interface/slot/input-password';
	import createInputPasswordState from '$stylist/input/function/state/input-password/index.svelte';

	const Eye = 'eye';
	const EyeOff = 'eye-off';

	let props: IInputPasswordProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'> =
		$props();
	const state = createInputPasswordState(props);

	let inputElement: HTMLInputElement | null = null;
	onMount(() => {
		if (props.autofocus) inputElement?.focus();
	});
</script>

<div class={state.containerClasses}>
	{#if props.label}
		<label
			for={props.id}
			class={state.labelClasses}
			id={state.labelId}
			data-size={props.size ?? 'md'}
			data-disabled={props.disabled ? 'true' : 'false'}
		>
			{props.label}
			{#if props.required && (props.showRequiredIndicator ?? true)}
				<span class={state.requiredIndicatorClasses} aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	<div class="input-password__wrapper">
		<input
			id={props.id}
			type={state.currentType}
			name={props.name}
			bind:value={props.value}
			placeholder={props.placeholder ?? 'Password'}
			required={props.required ?? false}
			readonly={props.readonly ?? false}
			disabled={props.disabled ?? false}
			bind:this={inputElement}
			autocomplete={props.autocomplete ?? 'current-password'}
			pattern={props.pattern}
			minlength={props.minlength ?? 8}
			maxlength={props.maxlength}
			class={state.inputClasses}
			aria-describedby={state.hasError && (props.showErrors ?? true)
				? state.errorId
				: props.helperText
					? undefined
					: undefined}
			aria-invalid={state.hasError ? 'true' : 'false'}
			aria-required={props.required ? 'true' : 'false'}
		/>

		{#if (props.allowTogglePassword ?? true) && !props.disabled}
			<button
				type="button"
				class={state.passwordToggleClasses}
				onclick={() => (props.showPassword = !props.showPassword)}
				tabindex="-1"
				aria-label={props.showPassword ? 'Hide password' : 'Show password'}
			>
				{#if props.showPassword}
					<BaseIcon name={EyeOff} class="_c1" />
				{:else}
					<BaseIcon name={Eye} class="_c1" />
				{/if}
			</button>
		{/if}
	</div>

	{#if state.hasError && (props.showErrors ?? true) && (props.errors?.length ?? 0) > 0}
		<p id={state.errorId} class={state.errorTextClasses} role="alert">
			{#each props.errors ?? [] as error_msg, i}
				{error_msg}{i < (props.errors?.length ?? 0) - 1 ? ' ' : ''}
			{/each}
		</p>
	{:else if state.showHelper}
		<p class={state.helperTextClasses}>{props.helperText}</p>
	{/if}

	{#if props.showPasswordStrength && state.passwordStrength}
		<div class="input-password__strength">
			<div class="input-password__strength-row">
				<div class="input-password__strength-track">
					<div
						class={`input-password__strength-fill ${state.passwordStrength.color}`}
						style={`width: ${state.passwordStrength.percentage}%`}
					></div>
				</div>
				<span class="input-password__strength-label">{state.passwordStrength.label}</span>
			</div>
		</div>
	{/if}
</div>

<style>
	.input-field-container {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.input-password__wrapper {
		position: relative;
		display: flex;
		align-items: stretch;
	}

	.input-password-toggle {
		position: absolute;
		inset-block: 0;
		inset-inline-end: 0;
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
		border-start-end-radius: inherit;
		border-end-end-radius: inherit;
		background: none;
		border: none;
		cursor: pointer;
	}

	.input-password__strength {
		margin-block-start: 0.5rem;
	}

	.input-password__strength-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.input-password__strength-track {
		flex: 1;
		height: 0.5rem;
		overflow: hidden;
		border-radius: 9999px;
		background-color: var(--color-background-tertiary);
	}

	.input-password__strength-fill {
		height: 100%;
		border-radius: 9999px;
		transition: width 0.3s ease;
	}

	.input-password__strength-fill.ps-danger {
		background-color: var(--color-danger-500);
	}
	.input-password__strength-fill.ps-orange {
		background-color: #f97316;
	}
	.input-password__strength-fill.ps-yellow {
		background-color: #eab308;
	}
	.input-password__strength-fill.ps-lime {
		background-color: #84cc16;
	}
	.input-password__strength-fill.ps-success {
		background-color: var(--color-success-500);
	}

	.input-password__strength-label {
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-text-secondary);
		white-space: nowrap;
	}

	.input-field-label {
		display: block;
		margin-block-end: 0.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.input-field-label[data-size='xs'] {
		font-size: var(--text-size-xs, 0.75rem);
	}

	.input-field-label[data-size='sm'],
	.input-field-label[data-size='1/3'],
	.input-field-label[data-size='2/5'] {
		font-size: var(--text-size-sm, 0.875rem);
	}

	.input-field-label[data-size='md'],
	.input-field-label[data-size='1/2'],
	.input-field-label[data-size='3/5'] {
		font-size: var(--text-size-md, 1rem);
	}

	.input-field-label[data-size='lg'],
	.input-field-label[data-size='2/3'] {
		font-size: var(--text-size-lg, 1.125rem);
	}

	.input-field-label[data-size='xl'],
	.input-field-label[data-size='3/4'] {
		font-size: var(--text-size-xl, 1.25rem);
	}

	.input-field-label[data-size='2xl'],
	.input-field-label[data-size='full'] {
		font-size: var(--text-size-2xl, 1.5rem);
	}

	.input-field-label[data-disabled='true'] {
		color: var(--color-text-tertiary);
		cursor: not-allowed;
	}

	.input-field-required {
		margin-inline-start: 0.25rem;
		color: var(--color-danger-500);
	}

	.input-field-helper-text {
		margin-block-start: 0.25rem;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-text-secondary);
	}

	.input-field-error-text {
		margin-block-start: 0.25rem;
		font-size: var(--text-size-xs, 0.75rem);
		color: var(--color-danger-600);
	}

	._c1 {
		height: 1.25rem;
		width: 1.25rem;
	}
</style>
