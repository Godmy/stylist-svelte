<script lang="ts">
	import { createPopoverState } from '$stylist/layout/function/state/popover';
	import type { PopoverProps } from '$stylist/layout/function/state/popover';

	let props: PopoverProps = $props();
	const state = createPopoverState(props);

	const popoverId = `popover-${Math.random().toString(36).slice(2, 9)}`;

	function handleTriggerKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			state.toggleOpen();
		}
		if (event.key === 'Escape' && state.isVisible) {
			state.setOpen(false);
		}
	}

	function handlePopoverKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			state.setOpen(false);
		}
	}
</script>

<div class={state.rootClass}>
	<!-- Trigger: aria-expanded отражает состояние, aria-controls связывает с popover -->
	<div
		bind:this={state.triggerElement}
		role="button"
		tabindex="0"
		aria-expanded={state.isVisible}
		aria-haspopup="dialog"
		aria-controls={popoverId}
		onclick={() => state.toggleOpen()}
		onkeydown={handleTriggerKeydown}
	>
		{@render props.trigger()}
	</div>

	{#if state.isVisible}
		<div
			id={popoverId}
			bind:this={state.popoverElement}
			class={state.popoverClass}
			role="dialog"
			tabindex="-1"
			aria-modal="false"
			aria-label={props.title ?? 'Popover'}
			onkeydown={handlePopoverKeydown}
		>
			{#if props.title}
				<h3 class={state.titleClass}>{props.title}</h3>
			{/if}
			<div>
				{@render props.content()}
			</div>
		</div>
	{/if}
</div>
