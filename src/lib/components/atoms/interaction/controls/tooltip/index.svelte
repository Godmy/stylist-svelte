<script lang="ts">
	import { createTooltipState } from '$stylist/design-system/models/tooltip.svelte';
	import type { TooltipProps } from '$stylist/design-system/props/tooltip';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = TooltipProps & HTMLAttributes<HTMLElement>;
	let props: Props = $props();

	const tooltipState = createTooltipState(props);

	let referenceRef = $state<HTMLElement | null>(null);
	let tooltipRef = $state<HTMLElement | null>(null);

	// Handle click outside for click trigger
	$effect(() => {
		if (tooltipState.trigger === 'click' && tooltipState.isVisible) {
			return tooltipState.setupClickOutsideListener(referenceRef, tooltipRef);
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

<span class={tooltipState.containerClasses} {...restProps}>
	<span
		bind:this={referenceRef}
		class={tooltipState.triggerClasses}
		onmouseenter={() => tooltipState.trigger === 'hover' && tooltipState.showTooltip()}
		onmouseleave={() => tooltipState.trigger === 'hover' && tooltipState.hideTooltip()}
		onfocus={() => tooltipState.trigger === 'focus' && tooltipState.showTooltip()}
		onblur={() => tooltipState.trigger === 'focus' && tooltipState.hideTooltip()}
		onclick={(e) => {
			if (tooltipState.trigger === 'click') {
				e.stopPropagation();
				tooltipState.toggleTooltip();
			}
		}}
		onkeydown={(e) => {
			if (tooltipState.trigger === 'click' && (e.key === 'Enter' || e.key === ' ')) {
				e.preventDefault();
				tooltipState.toggleTooltip();
			}
		}}
		role="button"
		tabindex="0"
		aria-haspopup="true"
		aria-expanded={tooltipState.trigger === 'click' ? tooltipState.isVisible : undefined}
		aria-disabled={tooltipState.disabled ? true : undefined}
	>
		{#if props.children}
			{@render props.children()}
		{/if}
	</span>

	{#if tooltipState.isVisible}
		<span
			bind:this={tooltipRef}
			role="tooltip"
			class={tooltipState.tooltipClasses}
		>
			{#if typeof tooltipState.content === 'string'}
				{tooltipState.content}
			{:else}
				{@render tooltipState.content()}
			{/if}
			{#if tooltipState.variant === 'with-arrow'}
				<span class={tooltipState.arrowClasses}></span>
			{/if}
		</span>
	{/if}
</span>
