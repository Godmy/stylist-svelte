<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { Button, InputText } from '$stylist/components/atoms';
	import type { IInputGroupProps } from '$stylist/design-system/props';
	import { createInputGroupState } from '$stylist/design-system/models/interaction/input-group.svelte';

	type Props = IInputGroupProps & HTMLAttributes<HTMLDivElement>;
	let props: Props = $props();
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				id: _id,
				label: _label,
				placeholder: _placeholder,
				value: _value,
				disabled: _disabled,
				buttonLabel: _buttonLabel,
				buttonDisabled: _buttonDisabled,
				buttonVariant: _buttonVariant,
				onButtonClick: _onButtonClick,
				...rest
			} = props;
			return rest;
		})()
	);
	let value = $state(props.value ?? '');

	// Track value changes and invoke typed callbacks
	let previousValue = $state(props.value ?? '');

	$effect(() => {
		if (previousValue !== value) {
			props.onValueInput?.(value);
			props.onValueChange?.(value);
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

<div class={containerClasses} {...restProps}>
	{#if props.label != null && props.label !== ''}
		{#if props.placeholder != null && props.placeholder !== ''}
			<InputText
				label={props.label}
				placeholder={props.placeholder}
				id={props.id ?? ''}
				bind:value
				disabled={props.disabled}
				class={inputClasses}
			/>
		{:else}
			<InputText
				label={props.label}
				id={props.id ?? ''}
				bind:value
				disabled={props.disabled}
				class={inputClasses}
			/>
		{/if}
	{:else}
		{#if props.placeholder != null && props.placeholder !== ''}
			<InputText
				placeholder={props.placeholder}
				id={props.id ?? ''}
				bind:value
				disabled={props.disabled}
				class={inputClasses}
			/>
		{:else}
			<InputText
				id={props.id ?? ''}
				bind:value
				disabled={props.disabled}
				class={inputClasses}
			/>
		{/if}
	{/if}
	<Button
		variant={props.buttonVariant ?? 'primary'}
		disabled={props.buttonDisabled}
		class={buttonClasses}
		onclick={handleClick}
	>
		{props.buttonLabel}
	</Button>
</div>



