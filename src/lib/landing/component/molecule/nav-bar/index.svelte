<script lang="ts">
	import type { Snippet } from 'svelte';
	import Link from '$stylist/typography/component/atom/link/index.svelte';
	import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';

	interface NavBarLink {
		href: string;
		label: string;
	}

	let {
		ariaLabel,
		sectionLinks,
		signInHref,
		signInLabel,
		brand,
		languageControl,
		class: className = ''
	}: {
		ariaLabel: string;
		sectionLinks: NavBarLink[];
		signInHref: string;
		signInLabel: string;
		brand?: Snippet;
		languageControl?: Snippet;
		class?: string;
	} = $props();
</script>

<nav class="nav-bar {className}" aria-label={ariaLabel}>
	{#if brand}{@render brand()}{/if}
	<div class="nav-bar__links">
		{#each sectionLinks as link (link.href)}
			<Link href={link.href} class="nav-bar__section-link">{link.label}</Link>
		{/each}
		<Link href={signInHref} class="nav-bar__link">{signInLabel}</Link>
		{#if languageControl}{@render languageControl()}{/if}
		<ThemeModeToggle />
	</div>
</nav>

<style>
	.nav-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		min-height: 3rem;
	}

	.nav-bar__links {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: flex-end;
		gap: 0.5rem 0.875rem;
		font-size: 0.875rem;
	}

	:global(.nav-bar__section-link),
	:global(.nav-bar__link) {
		--typography-link-color: var(--nav-bar-link-color, currentColor);
		--typography-link-hover-color: var(--nav-bar-link-hover-color, currentColor);
	}

	@container (max-width: 680px) {
		.nav-bar {
			align-items: flex-start;
		}

		:global(.nav-bar__section-link) {
			display: none;
		}
	}
</style>
