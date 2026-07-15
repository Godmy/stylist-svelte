<script lang="ts">
	import type { SlotTabIndicator as TabIndicatorProps } from '$stylist/navigation/interface/slot/tab-indicator';
	import createTabIndicatorState from '$stylist/navigation/function/state/tab-indicator/index.svelte';

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
	class="c-tab-indicator"
	data-color={state.color}
	data-disabled={state.disabled ? '' : undefined}
	style={state.style}
	role="presentation"
	aria-hidden="true"
	{...restProps}
></div>

<style>
	.c-tab-indicator {
		position: absolute;
		bottom: 0;
		height: 2px;
		transition: all var(--duration-200, 200ms) var(--animation-ease, cubic-bezier(0.4, 0, 0.2, 1));
		background-color: var(--color-primary-500);
	}

	.c-tab-indicator[data-color='secondary'] {
		background-color: var(--color-secondary-500);
	}

	.c-tab-indicator[data-color='success'] {
		background-color: var(--color-success-500);
	}

	.c-tab-indicator[data-color='warning'] {
		background-color: var(--color-warning-500);
	}

	.c-tab-indicator[data-color='danger'] {
		background-color: var(--color-danger-500);
	}

	.c-tab-indicator[data-disabled] {
		opacity: var(--opacity-50, 0.5);
	}
</style>
