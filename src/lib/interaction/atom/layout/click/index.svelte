<script lang="ts">
	import type { ClickProps } from '$stylist/interaction/interface/click';
	import { createClickState } from '$stylist/interaction/state/click';

	let props: ClickProps = $props();
	const state = createClickState(props);

	const restProps = $derived(
		(() => {
			const {
				class: _class,
				onClick,
				onDblClick,
				onContextMenu,
				onMouseDown,
				onMouseUp,
				onMouseEnter,
				onMouseLeave,
				disabled,
				variant,
				pressEffect,
				hoverEffect,
				cursor,
				...rest
			} = props;
			return rest;
		})()
	);

	function handleClick(event: MouseEvent) {
		if (!state.disabled && props.onClick) {
			props.onClick(event);
		}
	}

	function handleDblClick(event: MouseEvent) {
		if (!state.disabled && props.onDblClick) {
			props.onDblClick(event);
		}
	}

	function handleContextMenu(event: MouseEvent) {
		if (!state.disabled && props.onContextMenu) {
			props.onContextMenu(event);
		}
	}

	function handleMouseDown(event: MouseEvent) {
		if (!state.disabled && props.onMouseDown) {
			props.onMouseDown(event);
		}
	}

	function handleMouseUp(event: MouseEvent) {
		if (!state.disabled && props.onMouseUp) {
			props.onMouseUp(event);
		}
	}

	function handleMouseEnter(event: MouseEvent) {
		if (!state.disabled && props.onMouseEnter) {
			props.onMouseEnter(event);
		}
	}

	function handleMouseLeave(event: MouseEvent) {
		if (!state.disabled && props.onMouseLeave) {
			props.onMouseLeave(event);
		}
	}
</script>

<div
	class={state.classes}
	{...restProps}
	onclick={handleClick}
	ondblclick={handleDblClick}
	oncontextmenu={handleContextMenu}
	onmousedown={handleMouseDown}
	onmouseup={handleMouseUp}
	onmouseenter={handleMouseEnter}
	onmouseleave={handleMouseLeave}
>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>
