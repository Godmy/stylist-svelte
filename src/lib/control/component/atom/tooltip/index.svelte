<script lang="ts">
	import { createTooltipState as stateFn } from '$stylist/control/function/state/tooltip';
	import type { TooltipProps } from '$stylist/control/type/struct/tooltip-props';

	let props: TooltipProps = $props();

	const state = stateFn(props);

	// Handle click outside for click trigger
	$effect(() => {
		if (state.trigger === 'click' && state.isVisible) {
			return state.setupClickOutsideListener();
		}
	});

	// Extract rest props (exclude component-specific props)
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				content: _content,
				placement: _placement,
				trigger: _trigger,
				variant: _variant,
				show: _show,
				tooltipClass: _tooltipClass,
				arrowClass: _arrowClass,
				disabled: _disabled,
				delay: _delay,
				hideDelay: _hideDelay,
				children: _children,
				onShow: _onShow,
				onHide: _onHide,
				...rest
			} = props;
			return rest;
		})()
	);
</script>

<span class={state.containerClasses} {...restProps}>
	<span
		bind:this={state.referenceRef}
		class={state.triggerClasses}
		onmouseenter={() => state.trigger === 'hover' && state.showTooltip()}
		onmouseleave={() => state.trigger === 'hover' && state.hideTooltip()}
		onfocus={() => state.trigger === 'focus' && state.showTooltip()}
		onblur={() => state.trigger === 'focus' && state.hideTooltip()}
		onclick={(e) => {
			if (state.trigger === 'click') {
				e.stopPropagation();
				state.toggleTooltip();
			}
		}}
		onkeydown={(e) => {
			if (state.trigger === 'click' && (e.key === 'Enter' || e.key === ' ')) {
				e.preventDefault();
				state.toggleTooltip();
			}
		}}
		role="button"
		tabindex="0"
		aria-haspopup="true"
		aria-expanded={state.trigger === 'click' ? state.isVisible : undefined}
		aria-disabled={state.disabled ? true : undefined}
	>
		{#if props.children}
			{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
		{/if}
	</span>

	{#if state.isVisible}
		<span
			bind:this={state.tooltipRef}
			role="tooltip"
			class={state.tooltipClasses}
		>
			{#if typeof state.content === 'string'}
				{state.content}
			{:else}
				{@render state.content()}
			{/if}
			{#if state.variant === 'arrow'}
				<span class={state.arrowClasses}></span>
			{/if}
		</span>
	{/if}
</span>

