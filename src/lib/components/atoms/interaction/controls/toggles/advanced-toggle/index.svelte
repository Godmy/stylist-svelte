<script lang="ts">
	import type { AdvancedToggleProps } from '$stylist/design-system/attributes';
	import { createAdvancedToggleState } from '../../state.svelte';

	let props: AdvancedToggleProps = $props();

	const toggleState = createAdvancedToggleState(props);

	let localChecked = $state(toggleState.checked);

	$effect(() => {
		localChecked = toggleState.checked;
	});

	const handleChange = () => {
		if (!toggleState.disabled) {
			localChecked = !localChecked;
			props.onChange?.(localChecked);
		}
	};
</script>

<div class={toggleState.containerClasses}>
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
