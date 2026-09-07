<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import RecipePrivacySettings from './index.svelte';

	let saveCount = $state(0);

	const controls: SlotStory[] = [
		{ name: 'analyticsEnabled', type: 'boolean', defaultValue: true },
		{ name: 'adsEnabled', type: 'boolean', defaultValue: false },
		{ name: 'locationEnabled', type: 'boolean', defaultValue: true }
	];
</script>

<Story
	id="molecules-privacy-settings"
	title="Molecules / Information / Development / RecipePrivacySettings"
	component={RecipePrivacySettings}
	category="Molecules/Information/Development"
	description="Toggleable privacy preferences with explicit save action."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<RecipePrivacySettings
				settings={[
					{
						id: 'analytics',
						label: 'Usage analytics',
						description: 'Share anonymous usage stats',
						enabled: args.analyticsEnabled
					},
					{
						id: 'ads',
						label: 'Personalized ads',
						description: 'Allow ad personalization',
						enabled: args.adsEnabled
					},
					{
						id: 'location',
						label: 'SlotLocation access',
						description: 'Allow location-based features',
						enabled: args.locationEnabled
					}
				]}
				onSave={() => (saveCount += 1)}
			/>
			<p class="_c2">Saved: {saveCount} times</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: #f9fafb;
		padding: 1.5rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: #4b5563;
	}
</style>
