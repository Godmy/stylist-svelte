<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { IInputEmailProps } from '$stylist/design-system/contracts';
	import type { InputVariant } from '$stylist/design-system/tokens';
	import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
	import InputText from '../input-text/index.svelte';

	/**
	 * InputEmail component - РЎРїРµС†РёР°Р»РёР·РёСЂРѕРІР°РЅРЅС‹Р№ input РґР»СЏ email СЃ РІР°Р»РёРґР°С†РёРµР№
	 *
	 * @example
	 * ```svelte
	 * <InputEmail
	 *   label="Email"
	 *   bind:value={email}
	 *   variant="default"
	 *   size="md"
	 *   error={hasError}
	 *   errors={['РќРµРєРѕСЂСЂРµРєС‚РЅС‹Р№ email']}
	 *   helperText="Р’РІРµРґРёС‚Рµ РІР°С€ email"
	 * />
	 * ```
	 */

	type Props = IInputEmailProps &
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

		// Email-specific props
		value = $bindable<string>(''),
		placeholder = 'example@email.com',
		autocomplete = 'email',
		name,
		required = false,
		readonly = false,
		autofocus = false,
		pattern = '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$',
		minlength,
		maxlength,

		// Rest props
		...restProps
	}: Props = $props();
</script>

<InputText
	{label}
	{id}
	{showRequiredIndicator}
	{errors}
	{showErrors}
	{helperText}
	{showHelperWhenError}
	{variant}
	{size}
	{disabled}
	{error}
	{block}
	class={className}
	{value}
	type="email"
	{placeholder}
	{autocomplete}
	{name}
	{required}
	{readonly}
	{autofocus}
	{pattern}
	{minlength}
	{maxlength}
	{...restProps}
/>




