<script lang="ts">
	import createUserProfileCardState from '$stylist/management/function/state/user-profile-card/index.svelte';
	import type { SlotUserProfileCard as UserProfileCardProps } from '$stylist/form/interface/slot/user-profile-card';

	let props: UserProfileCardProps = $props();
	const state = createUserProfileCardState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div
		class="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-100)] font-semibold text-[var(--color-primary-700)]"
	>
		{state.initial}
	</div>
	<div class="mt-2 font-semibold">{state.name}</div>
	<div class="text-sm text-[var(--color-text-secondary)]">{state.role}</div>
	<div class="text-sm text-[var(--color-text-secondary)]">{state.email}</div>
</div>
