<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { onMount } from 'svelte';
	import { Icon as BaseIcon } from '$stylist';
	import type { IInputPasswordProps } from '$stylist/input/interface/component/input/other';
	import { createInputPasswordState } from '$stylist/input/function/state/input-password';

	const Eye = 'eye';
	const EyeOff = 'eye-off';

	let props: IInputPasswordProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'> = $props();
	const state = createInputPasswordState(props);

	let inputElement: HTMLInputElement | null = null;
	onMount(() => {
		if (props.autofocus) inputElement?.focus();
	});
</script>

<div class={state.containerClasses}>
	{#if props.label}
		<label for={props.id} class={state.labelClasses} id={state.labelId}>
			{props.label}
			{#if props.required && (props.showRequiredIndicator ?? true)}
				<span class={state.requiredIndicatorClasses} aria-hidden="true">*</span>
			{/if}
		</label>
	{/if}

	<div class="relative flex items-stretch">
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
			aria-describedby={state.hasError && (props.showErrors ?? true) ? state.errorId : props.helperText ? undefined : undefined}
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
					<BaseIcon name={EyeOff} class="h-5 w-5" />
				{:else}
					<BaseIcon name={Eye} class="h-5 w-5" />
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
		<div class="mt-2">
			<div class="flex items-center gap-2">
				<div class="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-background-tertiary)]">
					<div class={`h-full transition-all duration-[var(--duration-300)] ${state.passwordStrength.color}`} style={`width: ${state.passwordStrength.percentage}%`}></div>
				</div>
				<span class="text-xs text-[var(--color-text-secondary)]">{state.passwordStrength.label}</span>
			</div>
		</div>
	{/if}
</div>
