<script lang="ts">
	import type { ArchitectureContractOfT } from '$stylist/architecture/type/contract';
	import { createContainerState } from '$stylist/architecture/state/container';

	let props: ArchitectureContractOfT<'Container'> = $props();
	const state = createContainerState(props);
	const restProps = $derived(
		(() => {
			const { class: _class, ...rest } = props;
			return rest;
		})()
	);
</script>

<div class={state.classes} {...restProps}>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>



