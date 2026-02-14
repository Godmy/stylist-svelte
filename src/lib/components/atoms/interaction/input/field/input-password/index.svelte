<script lang="ts">
	import { createInputPasswordState as createInputFieldState, INPUT_FIELD_PRESET } from '$stylist/design-system/models/input-password.svelte';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { IInputProps } from '$stylist/design-system/props';

	/**
	 * PasswordInput component - displays a password input field with visibility toggle
	 *
	 * @param size - Size of the input ('sm' | 'md' | 'lg')
	 * @param disabled - Whether the input is disabled
	 * @param error - Whether the input has an error state
	 * @param showPassword - Whether to show the password in plain text
	 * @param onTogglePassword - Callback function when password visibility is toggled
	 * @returns An accessible, styled password input with visibility toggle
	 */

	type InputVariant = (typeof INPUT_FIELD_PRESET.variants)[number];
	type InputSize = (typeof INPUT_FIELD_PRESET.sizes)[number];

	type InputAttributes = Omit<HTMLInputAttributes, 'size'>;

	let {
		showPassword = false,
		onTogglePassword,
		class: className = '',
		placeholder = 'Enter password',
		required = false,
		helpText,
		value = $bindable<string>(),
		variant = INPUT_FIELD_PRESET.defaults.variant,
		size = INPUT_FIELD_PRESET.defaults.size,
		disabled = false,
		error = false,
		...restProps
	}: IInputProps & {
		showPassword?: boolean;
		onTogglePassword?: () => void;
		helpText?: string;
		value?: string;
		variant?: InputVariant;
		size?: InputSize;
		error?: boolean;
	} & InputAttributes = $props();

	const state = $derived(
		createInputFieldState({ variant, size, disabled, error, class: className })
	);
	let classes = $derived(state.classes);

	function togglePasswordVisibility() {
		if (onTogglePassword) {
			onTogglePassword();
		}
	}
</script>

<div class="relative">
	<input
		type={showPassword ? 'text' : 'password'}
		bind:value
		{placeholder}
		{disabled}
		{required}
		class={classes}
		{...restProps}
	/>
	<button
		type="button"
		class="absolute top-1/2 right-3 -translate-y-1/2 transform"
		onclick={togglePasswordVisibility}
		aria-label={showPassword ? 'Hide password' : 'Show password'}
		{disabled}
	>
		{#if showPassword}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
				<path
					fill-rule="evenodd"
					d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
					clip-rule="evenodd"
				/>
			</svg>
		{:else}
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.267-1.112a1 1 0 00-1.414 1.414c1.473 1.473 3.556 2.111 5.638 2.111a7.489 7.489 0 013.62 1.074l-1.78 1.781A3 3 0 007.974 5.385z"
					clip-rule="evenodd"
				/>
				<path d="M6 10a2 2 0 11-4 0 2 2 0 014 0z" />
			</svg>
		{/if}
	</button>
	{#if helpText}
		<p class="mt-1 text-sm text-gray-500">
			{helpText}
		</p>
	{/if}
</div>





