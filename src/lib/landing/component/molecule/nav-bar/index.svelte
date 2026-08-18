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

	let mobileMenuOpen = $state(false);

	function openMobileMenu() {
		mobileMenuOpen = true;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMobileMenu();
		}
	}
</script>

<svelte:window onkeydown={handleWindowKeydown} />

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
			onclick={openMobileMenu}
		>
			<span class="nav-bar__menu-line"></span>
			<span class="nav-bar__menu-line"></span>
			<span class="nav-bar__menu-line"></span>
		</button>
	</div>
</nav>

{#if mobileMenuOpen}
	<div class="nav-bar__mobile-layer">
		<button
			type="button"
			class="nav-bar__mobile-backdrop"
			aria-label="Close navigation menu"
			onclick={closeMobileMenu}
		></button>
		<aside class="nav-bar__mobile-panel" role="dialog" aria-modal="true" aria-label={ariaLabel}>
			<header class="nav-bar__mobile-header">
				<div class="nav-bar__mobile-brand">{#if brand}{@render brand()}{/if}</div>
				<button
					type="button"
					class="nav-bar__mobile-close"
					aria-label="Close navigation menu"
					onclick={closeMobileMenu}
				>
					<span class="nav-bar__mobile-close-line"></span>
					<span class="nav-bar__mobile-close-line"></span>
				</button>
			</header>
			<div class="nav-bar__mobile-links">
				{#each sectionLinks as link (link.href)}
					<Link href={link.href} class="nav-bar__mobile-link" onclick={closeMobileMenu}>
						{link.label}
					</Link>
				{/each}
			</div>
		</aside>
	</div>
{/if}

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
	:global(.nav-bar__link),
	:global(.nav-bar__mobile-link) {
		--typography-link-color: var(--nav-bar-link-color, currentColor);
		--typography-link-hover-color: var(--nav-bar-link-hover-color, currentColor);
	}

	.nav-bar__menu-button,
	.nav-bar__mobile-close {
		display: none;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--nav-bar-control-border, rgba(237, 245, 239, 0.22));
		border-radius: 999px;
		background: var(--nav-bar-control-bg, rgba(237, 245, 239, 0.06));
		color: var(--nav-bar-link-color, currentColor);
		cursor: pointer;
	}

	.nav-bar__menu-button {
		flex-direction: column;
		gap: 0.25rem;
	}

	.nav-bar__menu-line,
	.nav-bar__mobile-close-line {
		display: block;
		width: 1rem;
		height: 2px;
		border-radius: 999px;
		background: currentColor;
	}

	.nav-bar__mobile-layer {
		position: fixed;
		inset: 0;
		z-index: var(--z-index-modal, 1000);
	}

	.nav-bar__mobile-backdrop {
		position: absolute;
		inset: 0;
		border: 0;
		background: rgba(0, 0, 0, 0.44);
		cursor: pointer;
	}

	.nav-bar__mobile-panel {
		position: relative;
		width: min(19rem, calc(100vw - 3rem));
		min-height: 100%;
		padding: 1rem;
		border-right: 1px solid var(--nav-bar-mobile-border, rgba(151, 181, 164, 0.24));
		background: var(--nav-bar-mobile-bg, #091016);
		color: var(--nav-bar-mobile-text, #edf5ef);
		box-shadow: 1.25rem 0 3rem rgba(0, 0, 0, 0.28);
	}

	.nav-bar__mobile-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--nav-bar-mobile-border, rgba(151, 181, 164, 0.24));
	}

	.nav-bar__mobile-brand {
		min-width: 0;
	}

	.nav-bar__mobile-close {
		position: relative;
		display: inline-flex;
		flex: 0 0 auto;
	}

	.nav-bar__mobile-close-line {
		position: absolute;
	}

	.nav-bar__mobile-close-line:first-child {
		transform: rotate(45deg);
	}

	.nav-bar__mobile-close-line:last-child {
		transform: rotate(-45deg);
	}

	.nav-bar__mobile-links {
		display: grid;
		gap: 0.25rem;
		padding-top: 1rem;
	}

	:global(.nav-bar__mobile-link) {
		width: 100%;
		padding: 0.875rem 0.75rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 650;
	}

	:global(.nav-bar__mobile-link:hover) {
		background: var(--nav-bar-mobile-link-hover-bg, rgba(237, 245, 239, 0.08));
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

	:global(html.light) .nav-bar__mobile-panel {
		--nav-bar-mobile-bg: #f6f4ed;
		--nav-bar-mobile-text: #102018;
		--nav-bar-mobile-border: rgba(39, 104, 74, 0.2);
		--nav-bar-mobile-link-hover-bg: rgba(39, 104, 74, 0.08);
	}

	@container (min-width: 921px) {
		.nav-bar__mobile-layer {
			display: none;
		}
	}
</style>
