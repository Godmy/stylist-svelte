<script lang="ts">
	import type { NotificationStateProps } from '$stylist/management/interface/recipe/notification';
	import { Icon as BaseIcon } from '$stylist';
	import { createNotificationState } from '$stylist/management/function/state/notification';

	let props: NotificationStateProps = $props();
	const state = createNotificationState(props);
</script>

{#if state.isVisible}
	<div
		class={state.containerClasses}
		role="alert"
		{...state.restProps}
	>
		<div class="flex items-start">
			<div class="flex-shrink-0">
				<BaseIcon name={state.iconComponent} class="h-5 w-5"></BaseIcon>
			</div>
			<div class={state.contentClasses}>
				{#if state.title}
					<p class={state.headerClasses}>
						{state.title}
					</p>
				{/if}
				{#if state.message}
					<p class={state.bodyClasses}>
						{state.message}
					</p>
				{/if}
				{#if props.children}
					<div class={state.bodyClasses}>
						{@render props.children?.()}
					</div>
				{/if}
			</div>
			{#if state.closable}
				<div class="ml-4 flex-shrink-0 flex">
					<button
						type="button"
						class={state.closeButtonClasses}
						onclick={state.handleClose}
						aria-label="Close"
					>
						<BaseIcon name="x" class="h-5 w-5" />
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
