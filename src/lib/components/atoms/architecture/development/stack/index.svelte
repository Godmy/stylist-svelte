<script lang="ts">
	import type { StackProps } from '$stylist/design-system';
	import { createStackState } from '../state.svelte';

	let props: StackProps = $props();
	const state = createStackState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				direction: _direction,
				spacing: _spacing,
				align: _align,
				justify: _justify,
				children: _children,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div
	style:gap={state.gap}
	class={state.classes}
	role="group"
	aria-label="Stack layout container"
	{...restProps}
>
	{@render props.children?.()}
</div>
