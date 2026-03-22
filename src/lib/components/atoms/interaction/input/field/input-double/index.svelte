<script lang="ts">
	import { createInputTextState } from '../../../../../../design-system/models/interaction/input-text.svelte';
	import { InputStyleManager } from '$stylist/design-system/styles/interaction/input';
	import type { IInputDoubleProps } from '$stylist/design-system/contracts';

	/**
	 * InputDouble component - Два input в одном ряду
	 *
	 * @example
	 * ```svelte
	 * <InputDouble
	 *   label1="Имя"
	 *   label2="Фамилия"
	 *   bind:value1={firstName}
	 *   bind:value2={lastName}
	 *   placeholder1="Иван"
	 *   placeholder2="Иванов"
	 * />
	 * ```
	 */

	type Props = IInputDoubleProps;

	let {
		// Label props
		label1 = 'Поле 1',
		label2 = 'Поле 2',
		id1,
		id2,

		// Value props
		value1 = $bindable<string>(''),
		value2 = $bindable<string>(''),

		// Placeholder props
		placeholder1,
		placeholder2,

		// Type props
		type1 = 'text',
		type2 = 'text',

		// Disabled props
		disabled1 = false,
		disabled2 = false,

		// Error props
		errors1 = [],
		errors2 = [],

		// Required props
		required1 = false,
		required2 = false,

		// Common props
		variant = 'default',
		size = 'md',
		class: className = '',

		// Rest props
		...restProps
	}: Props = $props();

	// Derived values
	const hasError1 = $derived(errors1.length > 0);
	const hasError2 = $derived(errors2.length > 0);
	const errorId1 = $derived(id1 ? `${id1}-error` : undefined);
	const errorId2 = $derived(id2 ? `${id2}-error` : undefined);

	// Input states
	const inputState1 = $derived(
		createInputTextState({
			variant,
			size,
			disabled: disabled1,
			error: hasError1,
			block: false,
			class: className
		})
	);

	const inputState2 = $derived(
		createInputTextState({
			variant,
			size,
			disabled: disabled2,
			error: hasError2,
			block: false,
			class: className
		})
	);

	// Container classes
	const containerClasses = $derived(InputStyleManager.getInputDoubleContainerClass(className));
	const labelClasses = $derived(InputStyleManager.getLabelClass(''));
	const errorTextClasses = $derived(InputStyleManager.getErrorTextClass(''));
	const requiredIndicatorClasses = $derived(InputStyleManager.getRequiredIndicatorClass(''));
</script>

<div class={containerClasses} {...restProps}>
	<div class="flex flex-col gap-1 flex-1">
		{#if label1}
			<label for={id1} class={labelClasses}>
				{label1}
				{#if required1}
					<span class={requiredIndicatorClasses} aria-hidden="true">*</span>
				{/if}
			</label>
		{/if}

		<input
			id={id1}
			type={type1}
			bind:value={value1}
			placeholder={placeholder1}
			disabled={disabled1}
			required={required1}
			class={`${inputState1.classes} w-full`}
			aria-describedby={hasError1 ? errorId1 : undefined}
			aria-invalid={hasError1 ? 'true' : 'false'}
			aria-required={required1 ? 'true' : 'false'}
		/>

		{#if hasError1 && errors1.length > 0}
			<p id={errorId1} class={errorTextClasses} role="alert">
				{#each errors1 as error_msg, i}
					{error_msg}{i < errors1.length - 1 ? ' ' : ''}
				{/each}
			</p>
		{/if}
	</div>

	<div class="flex flex-col gap-1 flex-1">
		{#if label2}
			<label for={id2} class={labelClasses}>
				{label2}
				{#if required2}
					<span class={requiredIndicatorClasses} aria-hidden="true">*</span>
				{/if}
			</label>
		{/if}

		<input
			id={id2}
			type={type2}
			bind:value={value2}
			placeholder={placeholder2}
			disabled={disabled2}
			required={required2}
			class={`${inputState2.classes} w-full`}
			aria-describedby={hasError2 ? errorId2 : undefined}
			aria-invalid={hasError2 ? 'true' : 'false'}
			aria-required={required2 ? 'true' : 'false'}
		/>

		{#if hasError2 && errors2.length > 0}
			<p id={errorId2} class={errorTextClasses} role="alert">
				{#each errors2 as error_msg, i}
					{error_msg}{i < errors2.length - 1 ? ' ' : ''}
				{/each}
			</p>
		{/if}
	</div>
</div>









