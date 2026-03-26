<script lang="ts">
	import type { ArchitectureContractOfT } from '$stylist/architecture/type/contract';
	import { createAspectRatioState } from '$stylist/architecture/state/aspect-ratio';

	let props: ArchitectureContractOfT<'AspectRatio'> = $props();
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



