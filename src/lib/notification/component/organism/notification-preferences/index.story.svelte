<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import NotificationPreferences from './index.svelte';

	type Props = {
		showEmail: boolean;
		showPush: boolean;
		showSms: boolean;
		showInApp: boolean;
		allowBulkToggle: boolean;
	};

	const controls: SlotStory[] = [
		{ name: 'showEmail', type: 'boolean', defaultValue: true },
		{ name: 'showPush', type: 'boolean', defaultValue: true },
		{ name: 'showSms', type: 'boolean', defaultValue: false },
		{ name: 'showInApp', type: 'boolean', defaultValue: true },
		{ name: 'allowBulkToggle', type: 'boolean', defaultValue: true }
	];

	function handleSave(preferences: any) {
		console.log('Notification preferences saved:', preferences);
		alert('Notification preferences saved!');
	}

	function handleReset() {
		console.log('Preferences reset to defaults');
	}
</script>

<Story
	id="organisms-notification-preferences"
	title="Organisms / Interaction / Feedback / Notifications / Notification Preferences"
	component={NotificationPreferences}
	category="Organisms/Interaction/Feedback/Notifications"
	description="A notification preferences component for managing user notification settings across different channels."
	tags={['notification', 'preferences', 'settings', 'channels']}
	{controls}
>
	{#snippet children(values: any)}
		<div class="sb-organisms-notification-preferences _c1">
			<h1 class="_c2">NotificationPreferences Component</h1>

			<div class="_c3">
				<h2 class="_c4">Interactive NotificationPreferences</h2>
				<div class="_c5">
					<NotificationPreferences
						showEmail={values.showEmail}
						showPush={values.showPush}
						showSms={values.showSms}
						showInApp={values.showInApp}
						allowBulkToggle={values.allowBulkToggle}
						onSave={handleSave}
						onReset={handleReset}
					/>
				</div>
			</div>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		padding: 1rem;
	}
	._c2 {
		margin-bottom: 1rem;
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 600;
	}
	._c3 {
		margin-bottom: 1.5rem;
		border-radius: 0.25rem;
		border-width: 1px;
		border-style: solid;
		padding: 1rem;
	}
	._c4 {
		font-size: 1rem;
		line-height: 1.5rem;
		margin-bottom: 0.5rem;
		font-weight: 600;
	}
	._c5 {
		max-width: 42rem;
	}
</style>
