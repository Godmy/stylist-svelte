<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import AnnouncementBanner from './index.svelte';

	const controls: SlotStory[] = [
		{ name: 'title', type: 'text', defaultValue: 'New feature' },
		{
			name: 'description',
			type: 'text',
			defaultValue: 'Try our new announcement banner component.'
		},
		{
			name: 'icon',
			type: 'text',
			defaultValue: 'https://placehold.co/64x64/0ea5e9/ffffff?text=NEW'
		}
	];
</script>

<Story
	id="atoms-announcement-banner"
	title="Announcement Banner"
	component={AnnouncementBanner}
	category="Atoms"
	description="An announcement banner component for displaying important notifications."
	{controls}
>
	{#snippet children(values: any)}
		<section class="_c1">
			<div class="_c2">
				<p class="_c3">Primary Announcement Banner Example</p>
				<div class="_c4">
					<AnnouncementBanner
						title={values.title}
						description={values.description}
						icon={values.icon}
					>
						<div class="_c5">Extra slot content</div>
					</AnnouncementBanner>
				</div>
			</div>

			<div class="_c6">
				<h3 class="_c7">Banner Variations</h3>
				<div class="_c8">
					<article class="_c9">
						<AnnouncementBanner
							title="Success"
							description="Your changes were saved successfully."
							icon="https://placehold.co/64x64/10b981/ffffff?text=OK"
						/>
					</article>

					<article class="_c9">
						<AnnouncementBanner
							title="Warning"
							description="SlotReview settings before continuing."
							icon="https://placehold.co/64x64/f59e0b/ffffff?text=!"
						/>
					</article>
				</div>
			</div>
		</section>
	{/snippet}
</Story>

<style>
	._c1 {
		display: grid;
		width: 100%;
		gap: 2rem;
	}
	@media (min-width: 1024px) {
		._c1 {
			grid-template-columns: 1fr 1fr;
		}
	}
	._c2 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c3 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 600;
		letter-spacing: 0.025em;
		color: var(--color-text-secondary);
		text-transform: uppercase;
	}
	._c4 {
		margin-top: 1.5rem;
	}
	._c5 {
		font-size: 0.75rem;
		line-height: 1rem;
		color: var(--color-text-secondary);
	}
	._c6 {
		border-radius: 2rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-secondary);
		padding: 1.5rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c7 {
		font-size: 1rem;
		line-height: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	._c8 {
		margin-top: 1.25rem;
	}
	._c8 > * + * {
		margin-top: 1rem;
	}
	._c9 {
		border-radius: 1rem;
		border-width: 1px;
		border-style: dashed;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1rem;
	}
</style>
