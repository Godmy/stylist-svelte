<script lang="ts">
	import type { Snippet } from 'svelte';
	import NavBar from '$stylist/landing/component/molecule/nav-bar/index.svelte';
	import HeroMediaSection from '$stylist/landing/component/molecule/hero-media-section/index.svelte';

	interface NavBarLink {
		href: string;
		label: string;
	}

	let {
		navAriaLabel,
		sectionLinks,
		signInHref,
		signInLabel,
		title,
		lead,
		imageSrc,
		imageAlt,
		brand,
		languageControl,
		class: className = ''
	}: {
		navAriaLabel: string;
		sectionLinks: NavBarLink[];
		signInHref: string;
		signInLabel: string;
		title: string;
		lead: string;
		imageSrc: string;
		imageAlt: string;
		brand?: Snippet;
		languageControl?: Snippet;
		class?: string;
	} = $props();
</script>

<section class="hero-section {className}">
	<NavBar
		ariaLabel={navAriaLabel}
		{sectionLinks}
		{signInHref}
		{signInLabel}
		{brand}
		{languageControl}
	/>
	<HeroMediaSection class="hero-section__media" {title} {lead} {imageSrc} {imageAlt} />
</section>

<style>
	.hero-section {
		padding: 1.25rem 0 4rem;
	}

	:global(.hero-section__media) {
		--hero-media-section-heading: var(--hero-section-heading, currentColor);
		--hero-media-section-lead: var(--hero-section-lead, currentColor);
		--hero-media-section-border: var(--hero-section-border, currentColor);
		--hero-media-section-media: var(--hero-section-media-bg, transparent);
		--hero-media-section-shadow: var(--hero-section-media-shadow, none);
		padding: 4rem 0 0;
	}

	@container (max-width: 920px) {
		:global(.hero-section__media) {
			padding-top: 3rem;
		}
	}
</style>
