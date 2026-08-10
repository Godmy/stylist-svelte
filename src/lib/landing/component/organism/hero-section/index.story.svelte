<script lang="ts">
	import Story from '$stylist/theme/component/molecule/story/index.svelte';
	import type { SlotStory } from '$stylist/theme/interface/slot/story';
	import HeroSection from './index.svelte';

	const controls: SlotStory[] = [];
	const sectionLinks = [
		{ href: '#definition', label: 'Definition' },
		{ href: '#workflow', label: 'Workflow' },
		{ href: '#cases', label: 'Cases' }
	];
	const imageSrc =
		"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='960' height='540'%3E%3Crect width='960' height='540' fill='%23111a20'/%3E%3Ctext x='50%25' y='50%25' fill='%23a8d7b3' font-family='sans-serif' font-size='32' text-anchor='middle' dominant-baseline='middle'%3EHero media%3C/text%3E%3C/svg%3E";
</script>

<Story
	{controls}
	component={HeroSection}
	title="HeroSection"
	category="Organisms/Landing"
	description="Landing hero section with navigation, hero media, and lead copy."
	tags={['landing', 'hero', 'navigation']}
>
	{#snippet children()}
		<div class="preview">
			<HeroSection
				navAriaLabel="Landing navigation"
				{sectionLinks}
				signInHref="/login"
				signInLabel="Sign in"
				title="Expert consensus for decisions where mistakes are expensive"
				lead="WeOracle gathers independent estimates from domain experts, exposes disagreement, and turns uncertainty into ranges, priorities, and a committee-ready decision."
				{imageSrc}
				imageAlt="Hero media placeholder"
			>
				{#snippet brand()}
					<a class="brand" href="/">WeOracle</a>
				{/snippet}
			</HeroSection>
		</div>
	{/snippet}
</Story>

<style>
	.preview {
		--hero-section-heading: var(--color-text-primary, #111827);
		--hero-section-lead: var(--color-text-secondary, #4b5563);
		--hero-section-border: var(--color-border-primary, #d1d5db);
		--hero-section-media-bg: var(--color-background-secondary, #f9fafb);
		--nav-bar-link-color: var(--color-text-primary, #111827);
		container-type: inline-size;
		padding: 1rem;
	}

	.brand {
		color: var(--color-text-primary, #111827);
		font-weight: 800;
		text-decoration: none;
	}
</style>
