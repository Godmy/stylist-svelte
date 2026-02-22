<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import { createInputTextState } from '$stylist/design-system/models/interaction/input-text.svelte';
	import { InputStyleManager } from '$stylist/design-system/styles/interaction/input';
	import type { IInputPasswordProps } from '$stylist/design-system/contracts';
	import type { InputVariant } from '$stylist/design-system/tokens/architecture/variants';
	import type { CompactSize } from '$stylist/design-system/tokens/architecture/sizes';
	import { Eye, EyeOff } from 'lucide-svelte';

	/**
	 * InputPassword component - Input для пароля с переключателем видимости
	 *
	 * @example
	 * ```svelte
	 * <InputPassword
	 *   label="Пароль"
	 *   bind:value={password}
	 *   allowTogglePassword={true}
	 *   showPasswordStrength={true}
	 * />
	 * ```
	 */

	type Props = IInputPasswordProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;

	let {
		// Core props
		variant = 'default',
		size = 'md',
		disabled = false,
		error = false,
		block = false,
		class: className = '',

		// Label props
		label,
		id,
		showRequiredIndicator = true,

		// Validation props
		errors = [],
		showErrors = true,

		// Helper props
		helperText,
		showHelperWhenError = false,

		// Password-specific props
		value = $bindable<string>(''),
		placeholder = '••••••••',
		autocomplete = 'current-password',
		name,
		required = false,
		readonly = false,
		autofocus = false,
		minlength = 8,
		maxlength,
		pattern,

		// Toggle password visibility
		allowTogglePassword = true,
		showPassword = $bindable<boolean>(false),
		showPasswordStrength = false,

		// Rest props
		...restProps
	}: Props = $props();

	// Derived values
	const hasError = $derived(error || errors.length > 0);
	const errorId = $derived(id ? `${id}-error` : undefined);
	const labelId = $derived(id ? `${id}-label` : undefined);
	const currentType = $derived(showPassword ? 'text' : 'password');

	// Input state
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

	// Container classes
	const containerClasses = $derived(InputStyleManager.getContainerClass(''));
	const labelClasses = $derived(InputStyleManager.getLabelClass(''));
	const helperTextClasses = $derived(InputStyleManager.getHelperTextClass(''));
	const errorTextClasses = $derived(InputStyleManager.getErrorTextClass(''));
	const requiredIndicatorClasses = $derived(InputStyleManager.getRequiredIndicatorClass(''));
	const passwordToggleClasses = $derived(InputStyleManager.getPasswordToggleClass(''));

	// Show helper text logic
	const showHelper = $derived(
		helperText && (showHelperWhenError || !hasError)
	);

	// Password strength calculation
	const passwordStrength = $derived.by(() => {
		if (!value || !showPasswordStrength) return null;

		let strength = 0;
		if (value.length >= 8) strength++;
		if (value.length >= 12) strength++;
		if (/[a-z]/.test(value) && /[A-Z]/.test(value)) strength++;
		if (/\d/.test(value)) strength++;
		if (/[^a-zA-Z0-9]/.test(value)) strength++;

		const labels = ['Очень слабый', 'Слабый', 'Средний', 'Хороший', 'Надёжный'];
		const colors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-lime-500', 'bg-green-500'];

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
				aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
			>
				{#if showPassword}
					<EyeOff class="w-5 h-5" />
				{:else}
					<Eye class="w-5 h-5" />
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
				<div class="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
					<div
						class="h-full transition-all duration-300 {passwordStrength.color}"
						style="width: {passwordStrength.percentage}%"
					></div>
				</div>
				<span class="text-xs text-gray-600">{passwordStrength.label}</span>
			</div>
		</div>
	{/if}
</div>
