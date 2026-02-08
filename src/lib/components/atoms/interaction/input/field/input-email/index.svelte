<script lang="ts">
	import { INPUT_FIELD_PRESET } from '$stylist/design-system/presets';
	import { createInputFieldState } from '../state.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { IInputProps } from '$stylist/design-system/attributes';

	/**
	 * EmailInput component - displays an email input field
	 *
	 * @param size - Size of the input ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the input is disabled
	 * @param error - Whether the input has an error state
	 * @returns An accessible, styled email input
	 */

	type InputVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
	type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

	type InputAttributes = Omit<HTMLInputAttributes, 'size'>;

	let {
		id,
		label,
		errors,
		class: className = '',
		placeholder = 'Enter email',
		required = false,
		helpText,
		value = $bindable<string>(),
		variant = INPUT_FIELD_PRESET.defaults.variant,
		size = INPUT_FIELD_PRESET.defaults.size,
		disabled = false,
		error = false,
		...restProps
	}: IInputProps & {
		variant?: InputVariant;
		size?: InputSize;
		error?: boolean;
		helpText?: string;
		value?: string;
	} & InputAttributes = $props();

	const state = $derived(
		createInputFieldState({ variant, size, disabled, error, class: className })
	);
	let classes = $derived(state.classes);

	function handleInput(_: Event) {
		// The $bindable() will handle setting the value prop automatically
	}
</script>

<div>
	<input
		type="email"
		bind:value
		oninput={handleInput}
		{placeholder}
		{disabled}
		{required}
		class={classes}
		{...restProps}
	/>
	{#if helpText}
		<p class="mt-1 text-sm text-gray-500">
			{helpText}
		</p>
	{/if}
</div>
