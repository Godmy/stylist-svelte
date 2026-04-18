<script lang="ts">
	import { Icon as BaseIcon } from '$stylist';
	import type { UserCardProps } from '$stylist/commerce/interface/recipe/user-card-props';
	import { createUserCardState } from '$stylist/commerce/function/state/user-card';

	const MoreVertical = 'more-vertical';

	let props: UserCardProps = $props();
	const state = createUserCardState(props);
</script>

<div class={state.rootClass} {...state.restProps}>
	{#if state.showAvatar && props.user}
		<div class={state.avatarContainerClass}>
			{#if state.hasAvatar}
				<img
					src={props.user.avatar}
					alt={`${props.user.name}'s avatar`}
					class={state.avatarClass}
				/>
			{:else}
				<div class={state.avatarPlaceholderClass}>
					<span class={state.avatarInitialsClass}>
						{state.avatarInitial}
					</span>
				</div>
			{/if}

			{#if state.statusIndicatorClass}
				<div class={state.statusIndicatorClass}></div>
			{/if}
		</div>
	{/if}

	{#if props.user}
		<div class={state.contentClass}>
			<div class={state.nameContainerClass}>
				<h3 class={state.nameClass}>
					{props.user.name}
				</h3>
				{#if state.showActions && props.user.actions}
					<div class={state.actionsContainerClass}>
						{@render props.user.actions()}
					</div>
				{/if}
			</div>

			{#if state.showTitle && props.user.title}
				<p class={state.titleClass}>
					{props.user.title}
				</p>
			{/if}

			{#if state.showEmail && props.user.email}
				<p class={state.emailClass}>
					{props.user.email}
				</p>
			{/if}
		</div>
	{/if}

	{#if state.showActions}
		<div class={state.actionsContainerClass}>
			{#if props.user?.actions}
				{@render props.user.actions()}
			{:else}
				<button
					type="button"
					class={state.moreButtonClass}
					aria-label="More options"
				>
					<BaseIcon name={MoreVertical} class="h-5 w-5" />
				</button>
			{/if}
		</div>
	{/if}
</div>





