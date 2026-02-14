<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import type { AdvancedToggleProps } from '$stylist/design-system/props';
	import { createAdvancedToggleState } from '$stylist/design-system/models/advanced-toggle.svelte';

	type Props = AdvancedToggleProps & HTMLAttributes<HTMLDivElement>;
	let props: Props = $props();
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				disabled: _disabled,
				size: _size,
				label: _label,
				checked: _checked,
				onValueInput: _onValueInput,
				onValueChange: _onValueChange,
				onChange: _onChange,
				...rest
			} = props;
			return rest;
		})()
	);

	const toggleState = createAdvancedToggleState(props);

	let localChecked = $state(toggleState.checked);

	$effect(() => {
		localChecked = toggleState.checked;
	});

	const handleChange = () => {
		if (!toggleState.disabled) {
			localChecked = !localChecked;
			props.onValueInput?.(localChecked);
			props.onValueChange?.(localChecked);
			props.onChange?.(localChecked);
		}
	};
</script>

<div class={toggleState.containerClasses} {...restProps}>
	<label class={toggleState.labelWrapperClasses}>
		<div class={toggleState.toggleContainerClasses}>
			<input
				type="checkbox"
				class={toggleState.hiddenInputClasses}
				bind:checked={localChecked}
				disabled={toggleState.disabled}
				onchange={handleChange}
			/>
			<div class={toggleState.toggleBackgroundClasses}></div>
			<div class={toggleState.toggleHandleClasses}></div>
		</div>
		<span class={toggleState.labelTextClasses}>{toggleState.label}</span>
	</label>
</div>



