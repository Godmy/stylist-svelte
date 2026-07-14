<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import type { SlotInputEmail } from '$stylist/input/interface/slot/input-email';
	import createInputEmailState from '$stylist/input/function/state/input-email/index.svelte';
	import InputText from '$stylist/input/component/molecule/input-text/index.svelte';

	let {
		value = $bindable<string>(''),
		...props
	}: SlotInputEmail &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'> =
		$props();
	const state = createInputEmailState(props);
</script>

<InputText
	label={state.label}
	id={state.id}
	showRequiredIndicator={state.showRequiredIndicator ?? true}
	errors={state.errors ?? []}
	showErrors={state.showErrors ?? true}
	helperText={state.helperText}
	showHelperWhenError={state.showHelperWhenError ?? false}
	variant={state.variant ?? 'default'}
	size={state.size ?? 'md'}
	disabled={state.disabled ?? false}
	error={state.error ?? false}
	block={state.block ?? false}
	class={state.className ?? ''}
	bind:value
	type="email"
	placeholder={state.placeholder ?? 'example@email.com'}
	autocomplete={state.autocomplete ?? 'email'}
	name={state.name}
	required={state.required ?? false}
	readonly={state.readonly ?? false}
	autofocus={state.autofocus ?? false}
	pattern={state.pattern ?? '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$'}
	minlength={state.minlength}
	maxlength={state.maxlength}
	{...props}
/>

<style>
</style>
