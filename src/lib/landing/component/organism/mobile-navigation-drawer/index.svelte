<script lang="ts">
	import type { Snippet } from 'svelte';
	import Link from '$stylist/typography/component/atom/link/index.svelte';

	interface MobileNavigationDrawerLink {
		href: string;
		label: string;
	}

	interface MobileNavigationDrawerProps {
		ariaLabel: string;
		open: boolean;
		links: MobileNavigationDrawerLink[];
		brand?: Snippet;
		onClose?: () => void;
		class?: string;
	}

	let {
		ariaLabel,
		open,
		links,
		brand,
		onClose,
		class: className = ''
	}: MobileNavigationDrawerProps = $props();

	function close() {
		onClose?.();
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			close();
		}
	}
</script>

<svelte:window onkeydown={handleWindowKeydown} />

{#if open}
	<div class="mobile-navigation-drawer {className}">
		<button
			type="button"
			class="mobile-navigation-drawer__backdrop"
			aria-label="Close navigation menu"
			onclick={close}
		></button>
		<div
			class="mobile-navigation-drawer__panel"
			role="dialog"
			aria-modal="true"
			aria-label={ariaLabel}
		>
			<header class="mobile-navigation-drawer__header">
				<div class="mobile-navigation-drawer__brand">
					{#if brand}{@render brand()}{/if}
				</div>
				<button
					type="button"
					class="mobile-navigation-drawer__close"
					aria-label="Close navigation menu"
					onclick={close}
				>
					<span class="mobile-navigation-drawer__close-line"></span>
					<span class="mobile-navigation-drawer__close-line"></span>
				</button>
			</header>
			<div class="mobile-navigation-drawer__links">
				{#each links as link (link.href)}
					<Link href={link.href} class="mobile-navigation-drawer__link" onclick={close}>
						{link.label}
					</Link>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.mobile-navigation-drawer {
		position: fixed;
		inset: 0;
		z-index: var(--z-index-modal, 1000);
	}

	.mobile-navigation-drawer__backdrop {
		position: absolute;
		inset: 0;
		border: 0;
		background: rgba(0, 0, 0, 0.44);
		cursor: pointer;
	}

	.mobile-navigation-drawer__panel {
		position: relative;
		width: min(19rem, calc(100vw - 3rem));
		min-height: 100%;
		padding: 1rem;
		border-right: 1px solid var(--mobile-navigation-drawer-border, rgba(151, 181, 164, 0.24));
		background: var(--mobile-navigation-drawer-bg, #091016);
		color: var(--mobile-navigation-drawer-text, #edf5ef);
		box-shadow: 1.25rem 0 3rem rgba(0, 0, 0, 0.28);
	}

	.mobile-navigation-drawer__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 1rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid var(--mobile-navigation-drawer-border, rgba(151, 181, 164, 0.24));
	}

	.mobile-navigation-drawer__brand {
		min-width: 0;
	}

	.mobile-navigation-drawer__close {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		flex: 0 0 auto;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid var(--mobile-navigation-drawer-border, rgba(237, 245, 239, 0.22));
		border-radius: 999px;
		background: var(--mobile-navigation-drawer-control-bg, rgba(237, 245, 239, 0.06));
		color: currentColor;
		cursor: pointer;
	}

	.mobile-navigation-drawer__close-line {
		position: absolute;
		display: block;
		width: 1rem;
		height: 2px;
		border-radius: 999px;
		background: currentColor;
	}

	.mobile-navigation-drawer__close-line:first-child {
		transform: rotate(45deg);
	}

	.mobile-navigation-drawer__close-line:last-child {
		transform: rotate(-45deg);
	}

	.mobile-navigation-drawer__links {
		display: grid;
		gap: 0.25rem;
		padding-top: 1rem;
	}

	:global(.mobile-navigation-drawer__link) {
		width: 100%;
		padding: 0.875rem 0.75rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		font-weight: 650;
		--typography-link-color: var(--mobile-navigation-drawer-link, currentColor);
		--typography-link-hover-color: var(--mobile-navigation-drawer-link-hover, currentColor);
	}

	:global(.mobile-navigation-drawer__link:hover) {
		background: var(--mobile-navigation-drawer-link-hover-bg, rgba(237, 245, 239, 0.08));
	}

	:global(html.light) .mobile-navigation-drawer__panel {
		--mobile-navigation-drawer-bg: #f6f4ed;
		--mobile-navigation-drawer-text: #102018;
		--mobile-navigation-drawer-border: rgba(39, 104, 74, 0.2);
		--mobile-navigation-drawer-link-hover-bg: rgba(39, 104, 74, 0.08);
	}

	@container (min-width: 921px) {
		.mobile-navigation-drawer {
			display: none;
		}
	}
</style>
