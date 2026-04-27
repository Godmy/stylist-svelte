<script lang="ts">
	import type { SlotTabIndicator as TabIndicatorProps } from '$stylist/control/interface/slot/tab-indicator';
	import { createTabIndicatorState } from '$stylist/control/function/state/tab-indicator';

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






