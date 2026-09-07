<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import CTABanner from './index.svelte';

	let clicks = $state(0);
	let lastButton = $state('none');

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'Ready to launch faster?' },
		{
			name: 'backgroundVariant',
			type: 'select',
			options: ['gradient', 'solid', 'image'],
			defaultValue: 'gradient'
		}
	];

	function createButtons() {
		return [
			{
				label: 'Get started',
				variant: 'primary' as const,
				onClick: () => {
					clicks += 1;
					lastButton = 'Get started';
				}
			},
			{
				label: 'View docs',
				variant: 'outline' as const,
				onClick: () => {
					clicks += 1;
					lastButton = 'View docs';
				}
			}
		];
	}
</script>

<Story
	id="molecules-cta-banner"
	title="Molecules / Information / Marketing / CtaBanner"
	component={CTABanner}
	category="Molecules/Information/Marketing"
	description="Marketing call-to-action banner with multiple background variants."
	{controls}
>
	{#snippet children(args: any)}
		<div class="_c1">
			<CTABanner
				title={args.title}
				description="Install the library and ship production-ready UI blocks."
				buttons={createButtons()}
				backgroundVariant={args.backgroundVariant}
				backgroundImage="https://placehold.co/1200x320"
			/>
			<p class="_c2">
				Clicks: {clicks} | Last: {lastButton}
			</p>
		</div>
	{/snippet}
</Story>

<style>
	._c1 {
		border-radius: 0.75rem;
		background-color: var(--color-background-secondary);
		padding: 1rem;
	}
	._c1 > * + * {
		margin-top: 0.75rem;
	}
	._c2 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
</style>
