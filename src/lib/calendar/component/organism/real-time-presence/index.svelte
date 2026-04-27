<script lang="ts">
	import { createRealTimePresenceState } from '$stylist/calendar/function/state/real-time-presence';
	import type { RecipeRealTimePresence as RealTimePresenceStateProps } from '$stylist/calendar/interface/recipe/real-time-presence';
	import { Icon as BaseIcon } from '$stylist';

	const Users = 'users';
	const Activity = 'activity';

	let props: RealTimePresenceStateProps = $props();
	const state = createRealTimePresenceState(props);
</script>

<div class={`c-real-time-presence bg-[var(--color-background-primary)] rounded-lg shadow border border-[var(--color-border-primary)] overflow-hidden ${state.className}`} {...state.restProps}>
	<div class="border-b px-4 py-3 flex items-center">
		<BaseIcon name={Users} class="h-5 w-5 text-[var(--color-text-secondary)] mr-2" />
		<h3 class="text-lg font-medium text-[var(--color-text-primary)]">
			{state.title} <span class="text-[var(--color-text-secondary)]">({state.users.length})</span>
		</h3>
	</div>

	<div class={`p-4 ${state.userListClass}`}>
		{#if state.users.length === 0}
			<div class="text-center py-8">
				<BaseIcon name={Users} class="h-12 w-12 text-[var(--color-text-tertiary)] mx-auto mb-2" />
				<p class="text-[var(--color-text-secondary)]">No active users</p>
			</div>
		{:else}
			<ul class="space-y-3">
				{#each state.users as user}
					<li class={`flex items-center justify-between p-3 rounded-lg hover:bg-[var(--color-background-secondary)] ${state.userItemClass}`}>
						<div class="flex items-center">
							{#if state.showAvatars}
								<div class="relative flex-shrink-0 mr-3">
									{#if user.avatar}
										<img src={user.avatar} alt={user.name} class="h-10 w-10 rounded-full" />
									{:else}
										<div class="h-10 w-10 rounded-full bg-[var(--color-background-tertiary)] flex items-center justify-center">
											<span class="text-sm font-medium text-[var(--color-text-primary)]">
												{user.name.charAt(0).toUpperCase()}
											</span>
										</div>
									{/if}

									{#if state.showStatus}
										<span class={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white ${state.getStatusColor(user.status)}`}></span>
									{/if}
								</div>
							{/if}

							<div>
								<div class="flex items-center">
									<p class="text-sm font-medium text-[var(--color-text-primary)]">{user.name}</p>
									{#if state.showStatus}
										<span class={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--color-background-secondary)] text-[var(--color-text-primary)] ${state.statusClass}`}>
											<BaseIcon name={Activity} class={`h-3 w-3 mr-1 ${state.getStatusIconClass(user.status)}`} />
											{state.getStatusText(user.status)}
										</span>
									{/if}
								</div>

								{#if state.showLastSeen && user.lastSeen}
									<p class="text-xs text-[var(--color-text-secondary)]">Active {state.formatLastSeen(user.lastSeen)}</p>
								{/if}

								{#if user.activeArea}
									<p class="text-xs text-[var(--color-text-secondary)]">Working on: {user.activeArea}</p>
								{/if}
							</div>
						</div>

						{#if state.showCursorPositions && user.cursorPosition}
							<div class="text-xs text-[var(--color-text-secondary)]">
								<div>Position: {user.cursorPosition.x}, {user.cursorPosition.y}</div>
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
