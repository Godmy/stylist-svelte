<script lang="ts">
	import type { Snippet } from 'svelte';
	import Link from '$stylist/typography/component/atom/link/index.svelte';
	import ThemeModeToggle from '$stylist/theme/component/atom/theme-mode-toggle/index.svelte';

	interface NavBarLink {
		href: string;
		label: string;
	}

	interface NavBarProps {
		ariaLabel: string;
		sectionLinks: NavBarLink[];
		signInHref: string;
		signInLabel: string;
		brand?: Snippet;
		languageControl?: Snippet;
		onMobileMenuOpen?: () => void;
		mobileMenuOpen?: boolean;
		class?: string;
	}

	let {
		ariaLabel,
		sectionLinks,
		signInHref,
		signInLabel,
		brand,
		languageControl,
		onMobileMenuOpen,
		mobileMenuOpen = false,
		class: className = ''
	}: NavBarProps = $props();
</script>

<nav class="nav-bar {className}" aria-label={ariaLabel}>
	<div class="nav-bar__brand">{#if brand}{@render brand()}{/if}</div>
	<div class="nav-bar__desktop-links">
		{#each sectionLinks as link (link.href)}
			<Link href={link.href} class="nav-bar__section-link">{link.label}</Link>
		{/each}
	</div>
	<div class="nav-bar__actions">
		<Link href={signInHref} class="nav-bar__link">{signInLabel}</Link>
		{#if languageControl}{@render languageControl()}{/if}
		<ThemeModeToggle />
		<button
			type="button"
			class="nav-bar__menu-button"
			aria-label="Open navigation menu"
			aria-expanded={mobileMenuOpen}
			onclick={onMobileMenuOpen}
		>
			<span class="nav-bar__menu-line"></span>
			<span class="nav-bar__menu-line"></span>
			<span class="nav-bar__menu-line"></span>
		</button>
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

	.nav-bar__brand {
		min-width: 0;
		flex: 0 1 auto;
	}

	.nav-bar__desktop-links,
	.nav-bar__actions {
		display: flex;
		align-items: center;
	}

	.nav-bar__desktop-links {
		flex: 1 1 auto;
		justify-content: flex-end;
		gap: 0.5rem 0.875rem;
		font-size: 0.875rem;
	}

	.nav-bar__actions {
		flex: 0 0 auto;
		gap: 0.5rem;
		font-size: 0.875rem;
	}

	:global(.nav-bar__section-link),
	:global(.nav-bar__link) {
		--typography-link-color: var(--nav-bar-link-color, currentColor);
		--typography-link-hover-color: var(--nav-bar-link-hover-color, currentColor);
	}

	.nav-bar__menu-button {
		display: none;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--nav-bar-control-border, rgba(237, 245, 239, 0.22));
		border-radius: 999px;
		background: var(--nav-bar-control-bg, rgba(237, 245, 239, 0.06));
		color: var(--nav-bar-link-color, currentColor);
		cursor: pointer;
	}

	.nav-bar__menu-line {
		display: block;
		width: 1rem;
		height: 2px;
		border-radius: 999px;
		background: currentColor;
	}

	@container (max-width: 920px) {
		.nav-bar {
			align-items: center;
			gap: 0.75rem;
		}

		.nav-bar__desktop-links {
			display: none;
		}

		.nav-bar__actions {
			gap: 0.375rem;
			font-size: 0.8125rem;
		}

		.nav-bar__menu-button {
			display: inline-flex;
		}
	}

	@container (max-width: 420px) {
		.nav-bar {
			gap: 0.5rem;
		}

		.nav-bar__actions {
			gap: 0.25rem;
		}

		:global(.nav-bar__link) {
			font-size: 0.75rem;
		}
	}
</style>
