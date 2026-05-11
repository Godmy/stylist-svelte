<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import type { DialogConfirmProps } from '$stylist/navigation/type/struct/dialog-confirm-props';
	import { createDialogConfirmState } from '$stylist/navigation/function/state/dialog-confirm';

	let props: DialogConfirmProps = $props();
	const state = createDialogConfirmState(props);
</script>

{#snippet dialogContent()}
	<div class="sm:flex sm:items-start">
		<div
			class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--color-neutral-100)] sm:mx-0 sm:h-10 sm:w-10"
		>
			<BaseIcon name={state.iconName} class={`h-6 w-6 ${state.iconColor}`} />
		</div>
		<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
			<p class="text-sm text-[var(--color-text-secondary)]">
				{props.message}
			</p>
		</div>
	</div>
{/snippet}

{#snippet dialogFooter()}
	<button
		type="button"
		disabled={state.isLoading}
		class={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 shadow-sm ${state.confirmButtonClasses} text-base font-medium text-[var(--color-text-inverse)] focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-[var(--opacity-50)] sm:ml-3 sm:w-auto sm:text-sm`}
		onclick={state.handleConfirm}
	>
		{#if state.isLoading}
			<BaseIcon
				name="loader-2"
				class="mr-2 -ml-1 h-4 w-4 animate-spin text-[var(--color-text-inverse)]"
			/>
		{/if}
		{props.confirmText ?? 'Confirm'}
	</button>
	<button
		type="button"
		disabled={state.isLoading}
		class="mt-3 inline-flex w-full justify-center rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] px-4 py-2 text-base font-medium text-[var(--color-text-primary)] shadow-sm hover:bg-[var(--color-background-secondary)] focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-[var(--opacity-50)] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
		onclick={props.onClose}
	>
		{props.cancelText ?? 'Cancel'}
	</button>
{/snippet}

{#if props.isOpen}
	<div
		class="fixed inset-0 z-[var(--z-index-overlay)] flex items-center justify-center bg-[var(--color-neutral-900)]/40 p-4"
	>
		<div class="w-full max-w-md rounded-lg bg-[var(--color-background-primary)] p-6 shadow-lg">
			<h3 class="mb-4 text-lg font-semibold text-[var(--color-text-primary)]">{props.title}</h3>
			{@render dialogContent()}
			<div class="mt-6 flex justify-end gap-3">
				{@render dialogFooter()}
			</div>
		</div>
	</div>
{/if}
