<script lang="ts">
	import createRealTimePresenceState from '$stylist/social/function/state/real-time-presence/index.svelte';
	import type { RecipeRealTimePresence as RealTimePresenceStateProps } from '$stylist/social/interface/recipe/real-time-presence';
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';

	const Users = 'users';
	const Activity = 'activity';

	let props: RealTimePresenceStateProps = $props();
	const state = createRealTimePresenceState(props);
</script>

<div class="c-real-time-presence {state.className}" {...state.restProps}>
	<div class="c-real-time-presence__header">
		<BaseIcon name={Users} class="c-real-time-presence__header-icon" />
		<h3 class="c-real-time-presence__title">
			{state.title} <span class="c-real-time-presence__count">({state.users.length})</span>
		</h3>
	</div>

	<div class="c-real-time-presence__body {state.userListClass}">
		{#if state.users.length === 0}
			<div class="c-real-time-presence__empty">
				<BaseIcon name={Users} class="c-real-time-presence__empty-icon" />
				<p class="c-real-time-presence__empty-text">No active users</p>
			</div>
		{:else}
			<ul class="c-real-time-presence__list">
				{#each state.users as user}
					<li class="c-real-time-presence__user {state.userItemClass}">
						<div class="c-real-time-presence__user-left">
							{#if state.showAvatars}
								<div class="c-real-time-presence__avatar-wrap">
									{#if user.avatar}
										<img src={user.avatar} alt={user.name} class="c-real-time-presence__avatar" />
									{:else}
										<div class="c-real-time-presence__avatar-fallback">
											<span class="c-real-time-presence__avatar-initial">
												{user.name.charAt(0).toUpperCase()}
											</span>
										</div>
									{/if}
									{#if state.showStatus}
										<span
											class="c-real-time-presence__status-dot c-real-time-presence__status-dot--{user.status}"
										></span>
									{/if}
								</div>
							{/if}
							<div class="c-real-time-presence__user-info">
								<div class="c-real-time-presence__user-name-row">
									<p class="c-real-time-presence__user-name">{user.name}</p>
									{#if state.showStatus}
										<span class="c-real-time-presence__status-badge {state.statusClass}">
											<BaseIcon
												name={Activity}
												class="c-real-time-presence__status-icon c-real-time-presence__status-icon--{user.status}"
											/>
											{state.getStatusText(user.status)}
										</span>
									{/if}
								</div>
								{#if state.showLastSeen && user.lastSeen}
									<p class="c-real-time-presence__last-seen">
										Active {state.formatLastSeen(user.lastSeen)}
									</p>
								{/if}
								{#if user.activeArea}
									<p class="c-real-time-presence__area">Working on: {user.activeArea}</p>
								{/if}
							</div>
						</div>
						{#if state.showCursorPositions && user.cursorPosition}
							<div class="c-real-time-presence__cursor">
								<div>Position: {user.cursorPosition.x}, {user.cursorPosition.y}</div>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>

<style>
	.c-real-time-presence {
		overflow: hidden;
		border-radius: 0.5rem;
		border: 1px solid var(--color-border-primary);
		background: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}

	.c-real-time-presence__header {
		display: flex;
		align-items: center;
		border-bottom: 1px solid var(--color-border-primary);
		padding: 0.75rem 1rem;
	}

	.c-real-time-presence__header-icon {
		width: 1.25rem;
		height: 1.25rem;
		margin-right: 0.5rem;
		color: var(--color-text-secondary);
	}

	.c-real-time-presence__title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}

	.c-real-time-presence__count {
		color: var(--color-text-secondary);
	}

	.c-real-time-presence__body {
		padding: 1rem;
	}

	.c-real-time-presence__empty {
		padding: 2rem 0;
		text-align: center;
	}
	.c-real-time-presence__empty-icon {
		width: 3rem;
		height: 3rem;
		color: var(--color-text-tertiary, var(--color-text-secondary));
		margin: 0 auto 0.5rem;
	}
	.c-real-time-presence__empty-text {
		color: var(--color-text-secondary);
		margin: 0;
	}

	.c-real-time-presence__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.c-real-time-presence__user {
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 0.5rem;
		padding: 0.75rem;
	}

	.c-real-time-presence__user:hover {
		background: var(--color-background-secondary);
	}

	.c-real-time-presence__user-left {
		display: flex;
		align-items: center;
	}

	.c-real-time-presence__avatar-wrap {
		position: relative;
		flex-shrink: 0;
		margin-right: 0.75rem;
	}

	.c-real-time-presence__avatar {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 9999px;
		object-fit: cover;
	}

	.c-real-time-presence__avatar-fallback {
		display: flex;
		width: 2.5rem;
		height: 2.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 9999px;
		background: var(--color-background-tertiary, var(--color-background-secondary));
	}

	.c-real-time-presence__avatar-initial {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-real-time-presence__status-dot {
		position: absolute;
		right: 0;
		bottom: 0;
		display: block;
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 9999px;
		box-shadow: 0 0 0 2px white;
	}

	.c-real-time-presence__status-dot--online {
		background: var(--color-success-500);
	}
	.c-real-time-presence__status-dot--away {
		background: #eab308;
	}
	.c-real-time-presence__status-dot--busy {
		background: var(--color-danger-500);
	}
	.c-real-time-presence__status-dot--typing {
		background: var(--color-primary-500);
	}
	.c-real-time-presence__status-dot--offline {
		background: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-real-time-presence__user-info {
		display: flex;
		flex-direction: column;
	}

	.c-real-time-presence__user-name-row {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.c-real-time-presence__user-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
		margin: 0;
	}

	.c-real-time-presence__status-badge {
		display: inline-flex;
		align-items: center;
		border-radius: 9999px;
		background: var(--color-background-secondary);
		padding: 0.125rem 0.5rem;
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.c-real-time-presence__status-icon {
		width: 0.75rem;
		height: 0.75rem;
		margin-right: 0.25rem;
	}
	.c-real-time-presence__status-icon--online {
		color: var(--color-success-500);
	}
	.c-real-time-presence__status-icon--away {
		color: #eab308;
	}
	.c-real-time-presence__status-icon--busy {
		color: var(--color-danger-500);
	}
	.c-real-time-presence__status-icon--typing {
		color: var(--color-primary-500);
	}
	.c-real-time-presence__status-icon--offline {
		color: var(--color-text-tertiary, var(--color-text-secondary));
	}

	.c-real-time-presence__last-seen,
	.c-real-time-presence__area {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
		margin: 0;
	}

	.c-real-time-presence__cursor {
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}
</style>
