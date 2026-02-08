<script lang="ts">
	import type { SliderTickProps } from '$stylist/design-system/attributes';
	import { createSliderTickState } from '../state.svelte';

	let props: SliderTickProps = $props();

	const state = createSliderTickState(props);

	const content = $derived(props.content);

	const restProps = $derived(
		(() => {
			const {
				value: _value,
				position: _position,
				active: _active,
				label: _label,
				class: _class,
				content: _content,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.classes} style={state.style} {...restProps}>
	{#if state.label || content}
		<div class={state.labelContainerClasses}>
			{#if content}
				{@render content()}
			{:else}
				{state.label || state.value}
			{/if}
		</div>
	{/if}
</div>
