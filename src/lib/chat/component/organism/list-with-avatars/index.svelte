<script lang="ts">
	import type { RecipeListWithAvatars } from '$stylist/chat/interface/recipe/list-with-avatars';
	import { createListWithAvatarsState } from '$stylist/chat/function/state/list-with-avatars/index.svelte';

	let {
		items = [],
		showAvatar = true,
		showStatus = true,
		showSubtitle = true,
		showDescription = true,
		showActions = false,
		size = 'md',
		class: className = '',
		itemClass = '',
		avatarClass = '',
		contentClass = '',
		actionsClass = '',
		...restProps
	}: RecipeListWithAvatars = $props();

	const state = createListWithAvatarsState({
		items,
		showAvatar,
		showStatus,
		showSubtitle,
		showDescription,
		showActions,
		size,
		class: className,
		itemClass,
		avatarClass,
		contentClass,
		actionsClass,
		...restProps
	});
</script>

<div
	class={['c-list-avatars', className].filter(Boolean).join(' ')}
	data-size={state.size}
	{...restProps}
>
	{#each items as item}
		<div class={['c-list-avatars__item', itemClass].filter(Boolean).join(' ')}>
			{#if showAvatar}
				<div class="c-list-avatars__avatar-wrap">
					{#if item.avatar}
						<img
							src={item.avatar}
							alt={`${item.title}'s avatar`}
							class={['c-list-avatars__img', avatarClass].filter(Boolean).join(' ')}
						/>
					{:else}
						<div class={['c-list-avatars__placeholder', avatarClass].filter(Boolean).join(' ')}>
							<span>
								{item.title ? item.title.charAt(0).toUpperCase() : '?'}
							</span>
						</div>
					{/if}

					{#if showStatus && item.status}
						<div class="c-list-avatars__status" data-status={item.status}></div>
					{/if}
				</div>
			{/if}

			<div class={['c-list-avatars__content', contentClass].filter(Boolean).join(' ')}>
				<p class="c-list-avatars__name">{item.title}</p>

				{#if showSubtitle && item.subtitle}
					<p class="c-list-avatars__subtitle">{item.subtitle}</p>
				{/if}

				{#if showDescription && item.description}
					<p class="c-list-avatars__desc">{item.description}</p>
				{/if}
			</div>

			{#if showActions && item.actions && item.actions.length > 0}
				<div class={['c-list-avatars__actions', actionsClass].filter(Boolean).join(' ')}>
					{#each item.actions as action}
						<button
							type="button"
							class="c-list-avatars__action-btn"
							data-variant={action.variant ?? 'default'}
							onclick={action.onClick}
						>
							{action.label}
						</button>
					{/each}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.c-list-avatars {
		border: 1px solid var(--color-border-primary);
		border-radius: 0.375rem;
		overflow: hidden;
	}

	.c-list-avatars__item {
		display: flex;
		align-items: center;
		padding: 0.75rem 1rem;
		border-bottom: 1px solid var(--color-border-primary);
	}

	.c-list-avatars__item:last-child {
		border-bottom: none;
	}

	/* Size variants via data-size on root */
	.c-list-avatars[data-size='sm'] .c-list-avatars__item {
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}

	.c-list-avatars[data-size='lg'] .c-list-avatars__item {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	/* Avatar wrap */
	.c-list-avatars__avatar-wrap {
		position: relative;
		flex-shrink: 0;
		margin-right: 0.75rem;
	}

	.c-list-avatars__img,
	.c-list-avatars__placeholder {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
		object-fit: cover;
	}

	.c-list-avatars[data-size='sm'] .c-list-avatars__img,
	.c-list-avatars[data-size='sm'] .c-list-avatars__placeholder {
		width: 2rem;
		height: 2rem;
	}

	.c-list-avatars[data-size='lg'] .c-list-avatars__img,
	.c-list-avatars[data-size='lg'] .c-list-avatars__placeholder {
		width: 3rem;
		height: 3rem;
	}

	.c-list-avatars__placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-background-tertiary);
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	/* Status dot */
	.c-list-avatars__status {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 0.625rem;
		height: 0.625rem;
		border-radius: 9999px;
		border: 1px solid var(--color-background-primary);
		background: var(--color-neutral-400);
	}

	.c-list-avatars__status[data-status='online'] {
		background: var(--color-success-500);
	}

	.c-list-avatars__status[data-status='away'] {
		background: #eab308;
	}

	.c-list-avatars__status[data-status='busy'] {
		background: var(--color-danger-500);
	}

	/* Content */
	.c-list-avatars__content {
		min-width: 0;
		flex: 1;
	}

	.c-list-avatars__name {
		font-weight: 500;
		color: var(--color-text-primary);
		font-size: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0;
	}

	.c-list-avatars[data-size='sm'] .c-list-avatars__name {
		font-size: 0.875rem;
	}

	.c-list-avatars[data-size='lg'] .c-list-avatars__name {
		font-size: 1.125rem;
	}

	.c-list-avatars__subtitle {
		color: var(--color-text-secondary);
		font-size: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0;
	}

	.c-list-avatars[data-size='sm'] .c-list-avatars__subtitle {
		font-size: 0.875rem;
	}

	.c-list-avatars[data-size='lg'] .c-list-avatars__subtitle {
		font-size: 1.125rem;
	}

	.c-list-avatars__desc {
		color: var(--color-text-tertiary);
		font-size: 1rem;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		margin: 0;
	}

	.c-list-avatars[data-size='sm'] .c-list-avatars__desc {
		font-size: 0.875rem;
	}

	.c-list-avatars[data-size='lg'] .c-list-avatars__desc {
		font-size: 1.125rem;
	}

	/* Actions */
	.c-list-avatars__actions {
		margin-left: 1rem;
		display: flex;
		gap: 0.5rem;
	}

	.c-list-avatars__action-btn {
		border-radius: 0.25rem;
		padding: 0.25rem 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
		border: none;
		cursor: pointer;
		background: var(--color-background-secondary);
		color: var(--color-text-primary);
		transition: background-color var(--duration-120, 120ms);
	}

	.c-list-avatars__action-btn:hover {
		background: var(--color-background-tertiary);
	}

	.c-list-avatars__action-btn[data-variant='primary'] {
		background: var(--color-primary-100);
		color: var(--color-primary-700);
	}

	.c-list-avatars__action-btn[data-variant='primary']:hover {
		background: var(--color-primary-200);
	}

	.c-list-avatars__action-btn[data-variant='danger'] {
		background: var(--color-danger-100);
		color: var(--color-danger-700);
	}

	.c-list-avatars__action-btn[data-variant='danger']:hover {
		background: var(--color-danger-200);
	}
</style>
