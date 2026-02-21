<script lang="ts">
	import type { AspectRatioProps } from '$stylist/design-system';
	import { createAspectRatioState } from '$stylist/design-system/models/architecture/aspect-ratio.svelte';

	let props: AspectRatioProps = $props();
	const state = createAspectRatioState(props);
	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, ratio: _ratio, ...rest } = props;
			return rest;
		})()
	);
</script>

<div style:--aspect-ratio={state.ratio} class={state.classes} {...restProps}>
	{@render props.children?.()}
</div>
