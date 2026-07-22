<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import type { UserCardProps } from '$stylist/commerce/interface/recipe/user-card-props';
	import createUserCardState from '$stylist/commerce/function/state/user-card/createusercardstate/index.svelte';

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
				<button type="button" class={state.moreButtonClass} aria-label="More options">
					<BaseIcon name={MoreVertical} class="_c1" />
				</button>
			{/if}
		</div>
	{/if}
</div>

<style>
	._c1 {
		height: 1.25rem;
		width: 1.25rem;
	}

	.user-card__root {
		display: flex;
		align-items: center;
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		padding: 1rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.user-card--xs,
	.user-card--sm {
		padding: 0.5rem;
	}
	.user-card--lg,
	.user-card--xl {
		padding: 1.5rem;
	}

	.user-card__avatar-container {
		position: relative;
		flex-shrink: 0;
		width: 3rem;
		height: 3rem;
		margin-right: 1rem;
	}

	.user-card__avatar {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 9999px;
	}

	.user-card__avatar-placeholder {
		width: 100%;
		height: 100%;
		border-radius: 9999px;
		background-color: var(--color-background-tertiary);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.user-card__avatar-initials {
		color: var(--color-text-secondary);
		font-weight: 500;
		font-size: 1.125rem;
	}

	.user-card__status-indicator {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 9999px;
		border-width: 2px;
		border-style: solid;
		border-color: var(--color-background-primary);
		background-color: var(--color-success-500, #22c55e);
	}

	.user-card__content {
		flex: 1 1 0%;
		min-width: 0;
	}

	.user-card__name-container {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.user-card__name {
		font-weight: 600;
		font-size: 1.125rem;
		color: var(--color-text-primary);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.user-card__title {
		color: var(--color-text-secondary);
		font-size: 0.875rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.user-card__email {
		color: var(--color-text-secondary);
		font-size: 0.875rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.user-card__actions-container {
		display: flex;
		align-items: center;
		margin-left: 1rem;
	}

	.user-card__more-button {
		display: flex;
		padding: 0.25rem;
		border-radius: 0.25rem;
		background: none;
		border: none;
		cursor: pointer;
		color: var(--color-text-tertiary);
	}
	.user-card__more-button:hover {
		background-color: var(--color-background-secondary);
		color: var(--color-text-secondary);
	}
</style>
