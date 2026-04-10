<script lang="ts">
	import { createTooltipState } from '$stylist/control/function/state/tooltip';
	import type { TooltipProps } from '$stylist/control/type/struct/tooltip-props';

	let props: TooltipProps = $props();

	const viewModel = createTooltipState(props);

	let referenceRef: HTMLElement | null = $state(null);
	let tooltipRef: HTMLElement | null = $state(null);

	// Handle click outside for click trigger
	$effect(() => {
		if (viewModel.trigger === 'click' && viewModel.isVisible) {
			return viewModel.setupClickOutsideListener(referenceRef, tooltipRef);
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

<span class={viewModel.containerClasses} {...restProps}>
	<span
		bind:this={referenceRef}
		class={viewModel.triggerClasses}
		onmouseenter={() => viewModel.trigger === 'hover' && viewModel.showTooltip()}
		onmouseleave={() => viewModel.trigger === 'hover' && viewModel.hideTooltip()}
		onfocus={() => viewModel.trigger === 'focus' && viewModel.showTooltip()}
		onblur={() => viewModel.trigger === 'focus' && viewModel.hideTooltip()}
		onclick={(e) => {
			if (viewModel.trigger === 'click') {
				e.stopPropagation();
				viewModel.toggleTooltip();
			}
		}}
		onkeydown={(e) => {
			if (viewModel.trigger === 'click' && (e.key === 'Enter' || e.key === ' ')) {
				e.preventDefault();
				viewModel.toggleTooltip();
			}
		}}
		role="button"
		tabindex="0"
		aria-haspopup="true"
		aria-expanded={viewModel.trigger === 'click' ? viewModel.isVisible : undefined}
		aria-disabled={viewModel.disabled ? true : undefined}
	>
		{#if props.children}
			{@render props.children?.()}
		{/if}
	</span>

	{#if viewModel.isVisible}
		<span
			bind:this={tooltipRef}
			role="tooltip"
			class={viewModel.tooltipClasses}
		>
			{#if typeof viewModel.content === 'string'}
				{viewModel.content}
			{:else}
				{@render viewModel.content()}
			{/if}
			{#if viewModel.variant === 'arrow'}
				<span class={viewModel.arrowClasses}></span>
			{/if}
		</span>
	{/if}
</span>

