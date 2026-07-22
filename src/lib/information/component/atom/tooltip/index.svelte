<script lang="ts">
	import type { RecipeTooltip } from '$stylist/information/interface/recipe/tooltip';
	import { createTooltipState } from '$stylist/information/function/state/tooltip/index.svelte';

	let props: RecipeTooltip = $props();

	const state = createTooltipState(props);

	$effect(() => {
		if (state.trigger === 'click' && state.isVisible) {
			return state.setupClickOutsideListener();
		}
	});

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

<span class={state.containerClass} data-disabled={state.disabled || undefined} {...restProps}>
	<span
		bind:this={state.referenceRef}
		class="c-tooltip__trigger"
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
			{@render props.children()}
		{/if}
	</span>

	{#if state.isVisible}
		<span
			bind:this={state.tooltipRef}
			role="tooltip"
			class="c-tooltip__popup"
			data-placement={state.normalizedPlacement}
			data-variant={state.variant}
		>
			{#if typeof state.content === 'string'}
				{state.content}
			{:else}
				{@render state.content()}
			{/if}
			{#if state.variant === 'arrow'}
				<span class="c-tooltip__arrow" data-placement={state.normalizedPlacement}></span>
			{/if}
		</span>
	{/if}
</span>

<style>
	.c-tooltip {
		position: relative;
		display: inline-block;
	}

	.c-tooltip__trigger {
		cursor: pointer;
	}
	.c-tooltip__trigger:focus-visible {
		outline: 2px solid var(--color-primary-500);
		outline-offset: 2px;
		border-radius: 0.25rem;
	}

	.c-tooltip__popup {
		position: absolute;
		z-index: var(--z-index-modal, 1000);
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
		border-radius: 0.25rem;
		white-space: nowrap;
		pointer-events: none;
		background: var(--color-neutral-900, #111827);
		color: var(--color-text-inverse, #fff);
	}

	.c-tooltip__popup[data-variant='invisible'] {
		padding: 0.5rem 0.75rem;
		font-size: 0.875rem;
		border-radius: 0.5rem;
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
		background: var(--color-tooltip-bg, var(--color-neutral-900, #111827));
	}

	/* Placement: top (default) */
	.c-tooltip__popup[data-placement='top'] {
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 0.5rem;
	}
	.c-tooltip__popup[data-placement='top-start'] {
		bottom: 100%;
		left: 0;
		margin-bottom: 0.5rem;
	}
	.c-tooltip__popup[data-placement='top-end'] {
		bottom: 100%;
		right: 0;
		margin-bottom: 0.5rem;
	}
	.c-tooltip__popup[data-placement='bottom'] {
		top: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 0.5rem;
	}
	.c-tooltip__popup[data-placement='bottom-start'] {
		top: 100%;
		left: 0;
		margin-top: 0.5rem;
	}
	.c-tooltip__popup[data-placement='bottom-end'] {
		top: 100%;
		right: 0;
		margin-top: 0.5rem;
	}
	.c-tooltip__popup[data-placement='left'] {
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-right: 0.5rem;
	}
	.c-tooltip__popup[data-placement='left-start'] {
		right: 100%;
		top: 0;
		margin-right: 0.5rem;
	}
	.c-tooltip__popup[data-placement='left-end'] {
		right: 100%;
		bottom: 0;
		margin-right: 0.5rem;
	}
	.c-tooltip__popup[data-placement='right'] {
		left: 100%;
		top: 50%;
		transform: translateY(-50%);
		margin-left: 0.5rem;
	}
	.c-tooltip__popup[data-placement='right-start'] {
		left: 100%;
		top: 0;
		margin-left: 0.5rem;
	}
	.c-tooltip__popup[data-placement='right-end'] {
		left: 100%;
		bottom: 0;
		margin-left: 0.5rem;
	}

	/* Arrow */
	.c-tooltip__arrow {
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		background: var(--color-neutral-900, #111827);
		transform: rotate(45deg);
	}
	.c-tooltip__arrow[data-placement='top'],
	.c-tooltip__arrow[data-placement='top-start'],
	.c-tooltip__arrow[data-placement='top-end'] {
		top: 100%;
		left: 50%;
		transform: translateX(-50%) rotate(45deg);
		margin-top: -0.25rem;
	}
	.c-tooltip__arrow[data-placement='bottom'],
	.c-tooltip__arrow[data-placement='bottom-start'],
	.c-tooltip__arrow[data-placement='bottom-end'] {
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%) rotate(45deg);
		margin-bottom: -0.25rem;
	}
	.c-tooltip__arrow[data-placement='left'],
	.c-tooltip__arrow[data-placement='left-start'],
	.c-tooltip__arrow[data-placement='left-end'] {
		left: 100%;
		top: 50%;
		transform: translateY(-50%) rotate(45deg);
		margin-left: -0.25rem;
	}
	.c-tooltip__arrow[data-placement='right'],
	.c-tooltip__arrow[data-placement='right-start'],
	.c-tooltip__arrow[data-placement='right-end'] {
		right: 100%;
		top: 50%;
		transform: translateY(-50%) rotate(45deg);
		margin-right: -0.25rem;
	}
</style>
