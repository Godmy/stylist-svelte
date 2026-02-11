<script lang="ts">
	import type { SwitchProps } from '$stylist/design-system/props';
	import { createSwitchState } from './state.svelte';

	let props: SwitchProps = $props();

	let checked = $state(props.checked ?? false);

	$effect(() => {
		// Update local state when props change
		if (props.checked !== undefined) {
			checked = props.checked;
		}
	});

	const switchComponentState = createSwitchState(props);

	// Extract only HTML-compatible props for the input element
	let htmlProps = $state({});
	$effect(() => {
		const {
			id: _id,
			label: _label,
			description: _description,
			checked: _checked,
			disabled: _disabled,
			switchSize: _switchSize,
			required: _required,
			class: _class,
			size: _size, // Exclude custom size prop to avoid conflict with HTML size attribute
			...filteredProps
		} = props;
		htmlProps = filteredProps;
	});
</script>

<label class={switchComponentState.labelClasses}>
	<span class={switchComponentState.trackClasses}>
		<input
			id={props.id}
			type="checkbox"
			class={switchComponentState.inputClasses}
			bind:checked
			disabled={switchComponentState.disabled}
			required={switchComponentState.required}
			aria-describedby={props.description ? `${props.id}-description` : undefined}
			{...htmlProps}
		/>
		<span aria-hidden="true" class={switchComponentState.knobClasses}></span>
	</span>

	{#if props.label || props.description}
		<span class={switchComponentState.labelTextClasses}>
			{#if props.label}
				<span class={switchComponentState.labelTitleClasses}>
					{props.label}
					{#if switchComponentState.required}
						<span class={switchComponentState.requiredMarkerClasses} aria-hidden="true">*</span>
					{/if}
				</span>
			{/if}
			{#if props.description}
				<span id={`${props.id}-description`} class={switchComponentState.labelDescriptionClasses}>
					{props.description}
				</span>
			{/if}
		</span>
	{/if}
</label>

