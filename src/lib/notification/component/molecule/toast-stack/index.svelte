<script lang="ts">
	import { createToastStackState } from '$stylist/notification/function/state/toast-stack';
	import Icon from '$stylist/media/component/atom/icon/index.svelte';

	const props = $props();
	const state = createToastStackState(props);
</script>

{#if state.toasts.length > 0}
	<div class={state.containerClasses} {...props}>
		{#each state.toasts.slice(0, state.maxToasts) as toast}
			<div class={`border rounded-lg p-4 shadow-lg max-w-xs w-full ${state.getToastColor(toast.type)} ${props.toastClass ?? ''}`}>
				<div class="flex">
					<div class="flex-shrink-0">
						<Icon name={state.getToastIcon(toast.type)} class={`h-5 w-5 ${state.getToastIconColor(toast.type)}`} />
					</div>

					<div class="ml-3 flex-1">
						{#if toast.title}
							<h3 class="text-sm font-medium">{toast.title}</h3>
						{/if}
						<p class="text-sm mt-1">{toast.message}</p>

						{#if toast.actions && toast.actions.length > 0}
							<div class="mt-3 flex space-x-2">
								{#each toast.actions as action}
									<button
										type="button"
										class="inline-flex items-center px-2.5 py-1 border border-transparent text-xs font-medium rounded shadow-sm focus:outline-none bg-[var(--color-primary-100)] text-[var(--color-primary-700)] hover:bg-[var(--color-primary-200)]"
										onclick={action.onClick}
									>
										{action.label}
									</button>
								{/each}
							</div>
						{/if}
					</div>

					<div class="ml-4 flex-shrink-0">
						<button
							type="button"
							class="text-[var(--color-text-tertiary)] hover:text-[var(--color-text-secondary)]"
							onclick={() => toast.onDismiss && toast.onDismiss()}
							aria-label="Dismiss toast"
						>
							<Icon name={state.X} class="h-5 w-5" />
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>
{/if}
