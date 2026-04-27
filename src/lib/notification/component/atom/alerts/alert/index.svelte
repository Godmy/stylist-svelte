<script lang="ts">
	import { createAlertState } from '$stylist/notification/function/state/alert';
	import { Icon } from '$stylist';

	const props = $props();
	const state = createAlertState(props);
</script>

{#if state.open}
	<div role="alert" class={state.alertClasses} aria-live="polite" aria-atomic="true">
		<div class={state.mainContainerClasses}>
			{#if props.icon}
				<div class={state.iconContainerClasses}>
					<Icon name={state.IconComponent} class={state.iconClasses} aria-hidden="true" />
				</div>
			{/if}
			<div class={state.textContainerClasses}>
				{#if props.title}
					<h3 class={state.titleClasses}>{props.title}</h3>
				{/if}
				<div class={state.contentContainerClasses}>
					<p>
						{#if props.content}
							{@render props.content()}
						{:else if props.children}
							{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
						{/if}
					</p>
				</div>
			</div>
			{#if props.closable}
				<div class={state.closeButtonContainerClasses}>
					<button
						type="button"
						class={state.closeButtonClasses}
						aria-label="Закрыть"
						onclick={state.handleClose}
					>
						<Icon name={state.XIcon} class="h-5 w-5" aria-hidden="true" />
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}








