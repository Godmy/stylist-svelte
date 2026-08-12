<script lang="ts">
	import type { Snippet } from 'svelte';
	import NavBar from '$stylist/landing/component/molecule/nav-bar/index.svelte';
	import HeroMediaSection from '$stylist/landing/component/molecule/hero-media-section/index.svelte';
	import Paragraph from '$stylist/typography/component/molecule/paragraph/index.svelte';

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
	<HeroMediaSection
		class="hero-section__media"
		{title}
		{imageSrc}
		{imageAlt}
		imageLoading="eager"
	/>
	<Paragraph text={lead} class="hero-section__lead" />
</section>

<style>
	.hero-section {
		padding: 1.25rem 0 4rem;
	}

	:global(.hero-section__media) {
		--hero-media-section-heading: var(--hero-section-heading, currentColor);
		--hero-media-section-border: var(--hero-section-border, currentColor);
		--hero-media-section-media: var(--hero-section-media-bg, transparent);
		--hero-media-section-shadow: var(--hero-section-media-shadow, none);
		padding: 4rem 0 0;
	}

	:global(.hero-section__lead) {
		margin-top: 0;
		padding-top: 2.5rem;
		--typography-color: var(--hero-section-lead, currentColor);
		--typography-font-size: clamp(1.1rem, 1.75cqw, 1.45rem);
		--typography-font-weight: 650;
		--typography-line-height: 1.5;
	}

	@container (max-width: 920px) {
		:global(.hero-section__media) {
			padding-top: 3rem;
		}
	}
</style>
