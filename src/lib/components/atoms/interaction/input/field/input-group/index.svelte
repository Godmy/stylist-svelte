<script lang="ts">
	import { Button, InputText } from '$stylist/components/atoms';
	import type { IInputGroupProps } from '$stylist/design-system/props';
	import { createInputGroupState } from '../state.svelte';
	import { createEventDispatcher } from 'svelte';

	let props: IInputGroupProps = $props();
	let value = $state(props.value ?? '');

	const dispatch = createEventDispatcher();

	// Track value changes to dispatch events
	let previousValue = $state(props.value ?? '');

	$effect(() => {
		if (previousValue !== value) {
			dispatch('input', { value });
			dispatch('change', { value });
		}
		previousValue = value;
	});

	function handleClick() {
		if (!(props.buttonDisabled ?? false)) {
			props.onButtonClick?.();
		}
	}

	const inputGroupState = $derived(createInputGroupState(props.class ?? ''));
	let containerClasses = $derived(inputGroupState.containerClasses);
	let inputClasses = $derived(inputGroupState.inputClasses);
	let buttonClasses = $derived(inputGroupState.buttonClasses);
</script>

<div class={containerClasses}>
	<InputText
		id={props.id}
		{...(props.label != null && props.label !== '' ? { label: props.label as string } : {})}
		value={value}
		on:input={(e: Event) => value = (e.target as HTMLInputElement).value}
		{...(props.placeholder != null && props.placeholder !== '' ? { placeholder: props.placeholder as string } : {})}
		disabled={props.disabled}
		class={inputClasses}
	/>
	<Button
		variant={props.buttonVariant ?? 'primary'}
		disabled={props.buttonDisabled}
		class={buttonClasses}
		onclick={handleClick}
	>
		{props.buttonLabel}
	</Button>
</div>

