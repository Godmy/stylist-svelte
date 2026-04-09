<script lang="ts">
	import type { INotificationBadgeProps } from '$stylist/notification/interface/component/notification/other';
	import { createNotificationBadgeState } from '$stylist/management/function/state/notification-badge';

	let props: INotificationBadgeProps = $props();
	const state = createNotificationBadgeState(props);
</script>

{#if state.shouldShow}
	<div class={state.containerClasses} {...state.restProps}>
		{#if props.children}
			{@render props.children?.()}
		{/if}

		<span class={state.badgeClasses}>
			{#if !state.showDot && (state.count > 0 || state.showZero)}
				{state.badgeContent}
			{/if}
		</span>
	</div>
{:else}
	<div class={`inline-block ${props.class ?? ''}`} {...state.restProps}>
		{#if props.children}
			{@render props.children?.()}
		{/if}
	</div>
{/if}
