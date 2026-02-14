<script lang="ts">
	import type { ContainerProps } from '$stylist/design-system';
	import { createContainerState } from '$stylist/design-system/models/container.svelte';

	let props: ContainerProps = $props();
	const state = createContainerState(props);
	const restProps = $derived(
		(() => {
			const { class: _class, children: _children, maxWidth: _maxWidth, ...rest } = props;
			return rest;
		})()
	);
</script>

<div class={state.classes} {...restProps}>
	{@render props.children()}
</div>
