<script lang="ts">
	import type { RecipeInputName } from '$stylist/input/interface/recipe/input-name';
	import createInputNameState from '$stylist/input/function/state/input-name/index.svelte';
	import InputText from '$stylist/input/component/molecule/input-text/index.svelte';

	let { value = $bindable<string>(''), ...props }: RecipeInputName = $props();
	const state = createInputNameState(props);
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
	type="text"
	placeholder={state.placeholder ?? 'Full name'}
	autocomplete={state.autocomplete ?? 'name'}
	name={state.name}
	required={state.required ?? false}
	readonly={state.readonly ?? false}
	autofocus={state.autofocus ?? false}
	pattern={state.pattern}
	minlength={state.minlength}
	maxlength={state.maxlength}
	{...props}
/>

<style>
</style>
