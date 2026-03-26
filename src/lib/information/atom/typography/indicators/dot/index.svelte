<script lang="ts">
	import type { DotProps } from '$stylist/information/interface/indicators';
	import { createDotState } from '$stylist/information/state/dot';

	let props: DotProps = $props();

	const state = createDotState(props);

	const restProps = $derived(
		(() => {
			const { class: _class, color: _color, size: _size, ...rest } = props;
			return rest;
		})()
	);
</script>

<span class={state.classes} {...restProps}></span>


