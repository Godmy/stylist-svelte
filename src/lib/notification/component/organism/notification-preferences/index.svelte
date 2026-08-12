<script lang="ts">
	import type { RecipeNotificationPreferences } from '$stylist/notification/interface/recipe/notification-preferences';
	import { createNotificationPreferencesState } from './state.svelte';

	let props: RecipeNotificationPreferences & { email?: boolean; push?: boolean; sms?: boolean } =
		$props();
	const state = createNotificationPreferencesState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="_c1">Notification Preferences</div>
	<label class="_c2"><input type="checkbox" checked={state.email} /> Email</label>
	<label class="_c2"><input type="checkbox" checked={state.push} /> Push</label>
	<label class="_c2"><input type="checkbox" checked={state.sms} /> SMS</label>
</div>

<style>
	._c1 {
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c2 {
		display: block;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
</style>
