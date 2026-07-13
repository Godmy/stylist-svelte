<script lang="ts">
	import { getContext } from 'svelte';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import {
		ACCORDION_CONTEXT_DEFAULT,
		type AccordionContext
	} from '$stylist/control/const/record/accordion-context';
	import type { SlotAccordionLayout } from '$stylist/control/interface/slot/accordion-layout';

	let props: SlotAccordionLayout = $props();

	const ctx = getContext<AccordionContext>('accordion-context') ?? ACCORDION_CONTEXT_DEFAULT;
	const open = $derived(ctx.isPanelOpen(props.value));

	const restProps = $derived.by(() => {
		const { value: _v, title: _t, children: _c, disabled: _d, class: _cl, ...rest } = props;
		return rest;
	});
</script>

<div
	{...restProps}
	class={['c-accordion-layout', props.class].filter(Boolean).join(' ')}
	data-expanded={open || undefined}
	data-disabled={props.disabled || undefined}
>
	<button
		type="button"
		class="c-accordion-layout__header"
		onclick={() => !props.disabled && ctx.handleValueChange(props.value)}
		aria-expanded={open}
		aria-disabled={props.disabled}
		disabled={props.disabled}
	>
		<span class="c-accordion-layout__title">{props.title}</span>
		<span class="c-accordion-layout__chevron">
			<BaseIcon name="chevron-down" style="width: 1.25rem; height: 1.25rem;" />
		</span>
	</button>
	<div class="c-accordion-layout__panel" aria-hidden={!open} data-expanded={open || undefined}>
		<div class="c-accordion-layout__content">
			{#if props.children}{@render props.children()}{/if}
		</div>
	</div>
</div>

<style>
	.c-accordion-layout {
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-accordion-layout:last-child {
		border-bottom: none;
	}

	.c-accordion-layout__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		text-align: left;
		padding: var(--spacing-md, 1rem);
		font-weight: 500;
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		border: none;
		cursor: pointer;
		transition: background-color var(--duration-120, 120ms);
	}

	.c-accordion-layout__header:hover {
		background: var(--color-background-secondary);
	}

	.c-accordion-layout__header:focus-visible {
		outline: none;
		box-shadow: 0 0 0 2px var(--color-primary-500) inset;
	}

	.c-accordion-layout[data-disabled] .c-accordion-layout__header {
		opacity: var(--opacity-50, 0.5);
		cursor: not-allowed;
		pointer-events: none;
	}

	.c-accordion-layout[data-expanded] .c-accordion-layout__header {
		background: var(--color-primary-50);
		color: var(--color-primary-700);
	}

	.c-accordion-layout__chevron {
		display: inline-flex;
		align-items: center;
		flex-shrink: 0;
		transition: transform var(--duration-200, 200ms)
			var(--animation-ease, cubic-bezier(0.4, 0, 0.2, 1));
	}

	.c-accordion-layout[data-expanded] .c-accordion-layout__chevron {
		transform: rotate(180deg);
	}

	.c-accordion-layout__panel {
		max-height: 0;
		overflow: hidden;
		transition: max-height var(--duration-200, 200ms) ease;
	}

	.c-accordion-layout__panel[data-expanded] {
		max-height: 2000px;
	}

	.c-accordion-layout__content {
		padding: var(--spacing-md, 1rem);
		border-top: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
	}
</style>
