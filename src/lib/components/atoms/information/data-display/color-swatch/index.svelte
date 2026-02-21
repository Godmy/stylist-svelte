<script lang="ts">
	import type { ColorSwatchProps } from '$stylist/design-system';
	import { createColorSwatchState } from '$stylist/design-system/models/information/color-swatch.svelte';

	let props: ColorSwatchProps = $props();
	const state = createColorSwatchState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				content: _content,
				color: _color,
				size: _size,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div class={state.classes} style="background-color: {props.color}" {...restProps}>
	{#if props.content}
		<div class="flex h-full w-full items-center justify-center">
			{@render props.content()}
		</div>
	{/if}
</div>
