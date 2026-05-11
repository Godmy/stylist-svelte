<script lang="ts">
	import type { SlotSimpleModal as SimpleModalProps } from '$stylist/notification/interface/slot/simple-modal';
	import { createSimpleModalState } from '$stylist/navigation/function/state/simple-modal';

	let props: SimpleModalProps = $props();
	const state = createSimpleModalState(props);
</script>

{#if props.open}
	<div
		class="fixed inset-0 z-[var(--z-index-modal)] flex items-center justify-center bg-[var(--color-neutral-900)]/40 p-4"
	>
		<div class={state.dialogClasses} {...props}>
			<div class="flex items-center justify-between">
				<h3 class="font-semibold">{props.title}</h3>
				<button type="button" onclick={props.onClose}>x</button>
			</div>
			<p class="mt-2 text-sm text-[var(--color-text-secondary)]">Simple modal content</p>
		</div>
	</div>
{/if}
