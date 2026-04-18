<script lang="ts">
	import { createAdvancedToggleState } from '$stylist/control/function/state/advanced-toggle';
	import type { RecipeAdvancedToggleProps } from '$stylist/control/type/struct/advanced-toggle-props';

	let props: RecipeAdvancedToggleProps = $props();
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

	const state = createAdvancedToggleState(props);
</script>

<div class={state.containerClasses} {...restProps}>
	<label class={state.labelWrapperClasses}>
		<div class={state.toggleContainerClasses}>
			<input
				type="checkbox"
				class={state.hiddenInputClasses}
				checked={state.checked}
				disabled={state.disabled}
				onchange={state.handleChange}
			/>
			<div class={state.toggleBackgroundClasses}></div>
			<div class={state.toggleHandleClasses}></div>
		</div>
		<span class={state.labelTextClasses}>{state.label}</span>
	</label>
</div>





