<script lang="ts">
	import type { SlotPhoneNumberInput as IPhoneNumberInputProps } from '$stylist/input/interface/slot/phone-number-input';
	import { createPhoneNumberInputState } from '$stylist/input/function/state/phone-number-input';

	let props: IPhoneNumberInputProps = $props();
	const state = createPhoneNumberInputState(props);
</script>

<div class={state.containerClass}>
	<input
		type="tel"
		value={state.formattedValue}
		oninput={state.handleInput}
		placeholder={props.placeholder ?? '+7 (___) ___-__-__'}
		disabled={props.disabled ?? false}
		required={props.required ?? false}
		class={state.inputClass}
	/>
	{#if props.helpText}
		<p class={state.helpTextClass}>{props.helpText}</p>
	{/if}
</div>
