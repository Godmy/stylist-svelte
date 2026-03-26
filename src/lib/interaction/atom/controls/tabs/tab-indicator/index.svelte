<script lang="ts">
	import type { TabIndicatorProps } from '$stylist';
	import { createTabIndicatorState } from '$stylist/interaction/state/tab-indicator';

	let props: TabIndicatorProps = $props();

	const state = createTabIndicatorState(props);

	const restProps = $derived(
		(() => {
			const {
				left: _left,
				width: _width,
				color: _color,
				size: _size,
				class: _class,
				disabled: _disabled,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<div
	class={state.classes}
	style={state.style}
	role="presentation"
	aria-hidden="true"
	{...restProps}
></div>






