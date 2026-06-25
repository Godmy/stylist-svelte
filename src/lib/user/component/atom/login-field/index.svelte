<script lang="ts">
	import type { RecipeLoginField } from '$stylist/user/interface/recipe/login-field';
	import createLoginFieldState from '$stylist/user/function/state/login-field/index.svelte';

	let props: RecipeLoginField = $props();
	const state = createLoginFieldState(props);
</script>

<div class={state.wrapperClass}>
	<label for={props.id} class={state.labelClass}>{props.label}</label>
	<input
		id={props.id}
		class={state.inputClass}
		type={props.fieldType ?? 'text'}
		value={props.value ?? ''}
		autocomplete={props.autocomplete}
		placeholder={props.placeholder}
		disabled={props.disabled}
		required={props.required}
		oninput={props.oninput}
	/>
	{#if state.hasError}
		<span class={state.errorClass}>{props.fieldError}</span>
	{/if}
</div>

<style>
	.c-login-field {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.c-login-field__label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-secondary, #374151);
	}

	.c-login-field__input {
		width: 100%;
		padding: 0.625rem 0.75rem;
		border: 1px solid var(--color-border-primary, #d1d5db);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
		color: var(--color-text-primary, #111827);
		font-size: 1rem;
		outline: none;
		transition: border-color 0.15s, box-shadow 0.15s;
		box-sizing: border-box;
	}

	.c-login-field__input:focus {
		border-color: var(--color-primary-500, #6366f1);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary-500, #6366f1) 20%, transparent);
	}

	.c-login-field__input--error {
		border-color: #ef4444;
	}

	.c-login-field__input--error:focus {
		box-shadow: 0 0 0 3px color-mix(in srgb, #ef4444 20%, transparent);
	}

	.c-login-field__input:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		background: #f9fafb;
	}

	.c-login-field__error {
		font-size: 0.75rem;
		color: #ef4444;
	}
</style>
