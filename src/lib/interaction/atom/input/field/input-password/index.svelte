<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
import { onMount } from 'svelte';
import { Icon as BaseIcon } from '$stylist';
import { createInputTextState } from '$stylist/interaction/state/input-text';
import { InputStyleManager } from '$stylist/interaction/class/style-manager/input';
import type { IInputPasswordProps } from '$stylist';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';

	const Eye = 'eye';
	const EyeOff = 'eye-off';

	type Props = IInputPasswordProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;

	let {
		variant = 'default',
		size = 'md',
		disabled = false,
		error = false,
		block = false,
		class: className = '',
		label,
		id,
		showRequiredIndicator = true,
		errors = [],
		showErrors = true,
		helperText,
		showHelperWhenError = false,
		value = $bindable<string>(''),
		placeholder = '��������',
		autocomplete = 'current-password',
		name,
		required = false,
		readonly = false,
		autofocus = false,
		minlength = 8,
		maxlength,
		pattern,
		allowTogglePassword = true,
		showPassword = $bindable<boolean>(false),
		showPasswordStrength = false,
		...restProps
	}: Props = $props();

	const hasError = $derived(error || errors.length > 0);
	const errorId = $derived(id ? `${id}-error` : undefined);
	const labelId = $derived(id ? `${id}-label` : undefined);
	const currentType = $derived(showPassword ? 'text' : 'password');

	const inputState = $derived(
		createInputTextState({
			variant,
			size,
			disabled,
			error: hasError,
			block,
			class: className
		})
	);

	const containerClasses = $derived(InputStyleManager.getContainerClass(''));
	const labelClasses = $derived(InputStyleManager.getLabelClass(''));
	const helperTextClasses = $derived(InputStyleManager.getHelperTextClass(''));
	const errorTextClasses = $derived(InputStyleManager.getErrorTextClass(''));
	const requiredIndicatorClasses = $derived(InputStyleManager.getRequiredIndicatorClass(''));
	const passwordToggleClasses = $derived(InputStyleManager.getPasswordToggleClass(''));
	const showHelper = $derived(helperText && (showHelperWhenError || !hasError));

	const passwordStrength = $derived.by(() => {
		if (!value || !showPasswordStrength) return null;

		let strength = 0;
		if (value.length >= 8) strength++;
		if (value.length >= 12) strength++;
		if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
		if (/\d/.test(value)) strength++;
		if (/[^a-zA-Z0-9]/.test(value)) strength++;

		const labels = ['����� ������', '������', '�������', '�������', '�������'];
		const colors = ['bg-[var(--color-danger-500)]', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-[var(--color-success-500)]'];

		return {
			value: strength,
			label: labels[Math.min(strength, 4)],
			color: colors[Math.min(strength, 4)],
			percentage: (strength / 5) * 100
		};
	});

	function togglePasswordVisibility() {
		showPassword = !showPassword;
	}

	let inputElement: HTMLInputElement | null = null;
	onMount(() => {
		if (autofocus) inputElement?.focus();
	});
</script>

<div class={containerClasses}>
	{#if label}
		<label for={id} class={labelClasses} id={labelId}>
			{label}
			{#if required && showRequiredIndicator}
				<span class={requiredIndicatorClasses} aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	<div class="relative flex items-stretch">
		<input
			{id}
			type={currentType}
			{name}
			bind:value
			{placeholder}
			{required}
			{readonly}
			{disabled}
			bind:this={inputElement}
			{autocomplete}
			{pattern}
			{minlength}
			{maxlength}
			class={inputState.classes}
			aria-describedby={hasError && showErrors ? errorId : helperText ? undefined : undefined}
			aria-invalid={hasError ? 'true' : 'false'}
			aria-required={required ? 'true' : 'false'}
			{...restProps}
		/>

		{#if allowTogglePassword && !disabled}
			<button
				type="button"
				class={passwordToggleClasses}
				onclick={togglePasswordVisibility}
				tabindex="-1"
				aria-label={showPassword ? '������ ������' : '�������� ������'}
			>
				{#if showPassword}
					<BaseIcon name={EyeOff} class="h-5 w-5" />
				{:else}
					<BaseIcon name={Eye} class="h-5 w-5" />
				{/if}
			</button>
		{/if}
	</div>

	{#if hasError && showErrors && errors.length > 0}
		<p id={errorId} class={errorTextClasses} role="alert">
			{#each errors as error_msg, i}
				{error_msg}{i < errors.length - 1 ? ' ' : ''}
			{/each}
		</p>
	{:else if showHelper}
		<p class={helperTextClasses}>{helperText}</p>
	{/if}

	{#if showPasswordStrength && passwordStrength}
		<div class="mt-2">
			<div class="flex items-center gap-2">
				<div class="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-background-tertiary)]">
					<div class="h-full transition-all duration-[var(--duration-300)] {passwordStrength.color}" style="width: {passwordStrength.percentage}%"></div>
				</div>
				<span class="text-xs text-[var(--color-text-secondary)]">{passwordStrength.label}</span>
			</div>
		</div>
	{/if}
</div>









