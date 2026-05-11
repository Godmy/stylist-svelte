<script lang="ts">
	import { createRealTimePresenceState } from '$stylist/calendar/function/state/real-time-presence';
	import type { RecipeRealTimePresence as RealTimePresenceStateProps } from '$stylist/calendar/interface/recipe/real-time-presence';
	import { Icon as BaseIcon } from '$stylist/media';

	const Users = 'users';
	const Activity = 'activity';

	let props: RealTimePresenceStateProps = $props();
	const state = createRealTimePresenceState(props);
</script>

<div
	class={`c-real-time-presence overflow-hidden rounded-lg border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] shadow ${state.className}`}
	{...state.restProps}
>
	<div class="flex items-center border-b px-4 py-3">
		<BaseIcon name={Users} class="mr-2 h-5 w-5 text-[var(--color-text-secondary)]" />
		<h3 class="text-lg font-medium text-[var(--color-text-primary)]">
			{state.title} <span class="text-[var(--color-text-secondary)]">({state.users.length})</span>
		</h3>
	</div>

	<div class={`p-4 ${state.userListClass}`}>
		{#if state.users.length === 0}
			<div class="py-8 text-center">
				<BaseIcon name={Users} class="mx-auto mb-2 h-12 w-12 text-[var(--color-text-tertiary)]" />
				<p class="text-[var(--color-text-secondary)]">No active users</p>
			</div>
		{:else}
			<ul class="space-y-3">
				{#each state.users as user}
					<li
						class={`flex items-center justify-between rounded-lg p-3 hover:bg-[var(--color-background-secondary)] ${state.userItemClass}`}
					>
						<div class="flex items-center">
							{#if state.showAvatars}
								<div class="relative mr-3 flex-shrink-0">
									{#if user.avatar}
										<img src={user.avatar} alt={user.name} class="h-10 w-10 rounded-full" />
									{:else}
										<div
											class="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-background-tertiary)]"
										>
											<span class="text-sm font-medium text-[var(--color-text-primary)]">
												{user.name.charAt(0).toUpperCase()}
											</span>
										</div>
									{/if}

									{#if state.showStatus}
										<span
											class={`absolute right-0 bottom-0 block h-3 w-3 rounded-full ring-2 ring-white ${state.getStatusColor(user.status)}`}
										></span>
									{/if}
								</div>
							{/if}

							<div>
								<div class="flex items-center">
									<p class="text-sm font-medium text-[var(--color-text-primary)]">{user.name}</p>
									{#if state.showStatus}
										<span
											class={`ml-2 inline-flex items-center rounded-full bg-[var(--color-background-secondary)] px-2 py-0.5 text-xs font-medium text-[var(--color-text-primary)] ${state.statusClass}`}
										>
											<BaseIcon
												name={Activity}
												class={`mr-1 h-3 w-3 ${state.getStatusIconClass(user.status)}`}
											/>
											{state.getStatusText(user.status)}
										</span>
									{/if}
								</div>

								{#if state.showLastSeen && user.lastSeen}
									<p class="text-xs text-[var(--color-text-secondary)]">
										Active {state.formatLastSeen(user.lastSeen)}
									</p>
								{/if}

								{#if user.activeArea}
									<p class="text-xs text-[var(--color-text-secondary)]">
										Working on: {user.activeArea}
									</p>
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
