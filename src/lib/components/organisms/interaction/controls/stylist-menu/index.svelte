<script lang="ts">
	import { tick } from 'svelte';
	import type { InteractionHTMLAttributes } from '$stylist/design-system/html/attributes/interaction';
	import { Icon as BaseIcon } from '$stylist/components/atoms';
	import StylistTab from '$stylist/components/molecules/interaction/controls/tabs/stylist-tab/index.svelte';

	type PrimaryMenuItem = {
		id: string;
		label: string;
		icon: string;
	};

	type FunctionalTabId = 'architecture' | 'information' | 'interaction';
	type AtomicTabId = 'atoms' | 'molecules' | 'organisms';

	type TabItem = {
		id: string;
		label: string;
		icon: string;
	};

	type FunctionalTabItem = {
		id: FunctionalTabId;
		label: string;
		icon: string;
	};

	type Props = Omit<InteractionHTMLAttributes<HTMLElement>, 'class'> & {
		class?: string;
		triggerIcon?: string;
		currentItemId?: string;
		avatarLabel?: string;
		avatarName?: string;
		avatarEmail?: string;
		activeAvatarRoute?: 'profile' | 'settings' | '';
		functionalTabId?: FunctionalTabId;
		atomicTabId?: AtomicTabId;
		onItemClick?: (item: PrimaryMenuItem) => void;
		onFunctionalTabClick?: (tabId: FunctionalTabId) => void;
		onAtomicTabClick?: (tabId: AtomicTabId) => void;
		onThemeButtonClick?: () => void;
		onSettingsButtonClick?: () => void;
		onAvatarProfileClick?: () => void;
		onAvatarSettingsClick?: () => void;
		onAvatarLogoutClick?: () => void;
	};

	const menuItems: PrimaryMenuItem[] = [
		{ id: 'components', label: 'Components', icon: 'components' },
		{ id: 'models', label: 'Models', icon: 'models' },
		{ id: 'samo', label: 'SAMO', icon: 'models' },
		{ id: 'contracts', label: 'Contracts', icon: 'contracts' },
		{ id: 'styles', label: 'Styles', icon: 'styles' },
		{ id: 'themes', label: 'Themes', icon: 'themes' },
		{ id: 'colors', label: 'Colors', icon: 'colors' },
		{ id: 'tokens', label: 'Tokens', icon: 'tokens' },
		{ id: 'icons', label: 'Icons', icon: 'icons' },
		{ id: 'json', label: 'JSON', icon: 'json' }
	];

	const functionalTabItems: FunctionalTabItem[] = [
		{ id: 'architecture', label: 'Architecture', icon: 'grid-layout' },
		{ id: 'information', label: 'Information', icon: 'text' },
		{ id: 'interaction', label: 'Interaction', icon: 'controls' }
	];

	const atomicTabItems: TabItem[] = [
		{ id: 'atoms', label: 'Atoms', icon: 'tokens' },
		{ id: 'molecules', label: 'Molecules', icon: 'styles' },
		{ id: 'organisms', label: 'Organisms', icon: 'components' }
	];

	const functionalPrimarySections = new Set(['tokens', 'themes', 'contracts', 'components']);

	let {
		class: className = '',
		triggerIcon = 'stylist-organism',
		currentItemId = '',
		avatarLabel = 'ME',
		avatarName = 'Dmitrii',
		avatarEmail = 'dmitrii@example.com',
		activeAvatarRoute = '',
		functionalTabId = 'architecture',
		atomicTabId = 'atoms',
		onItemClick,
		onFunctionalTabClick,
		onAtomicTabClick,
		onThemeButtonClick,
		onSettingsButtonClick,
		onAvatarProfileClick,
		onAvatarSettingsClick,
		onAvatarLogoutClick,
		...restProps
	}: Props = $props();

	let expandedItemId = $state(currentItemId);
	let avatarMenuOpen = $state(false);
	let focusedAvatarMenuIndex = $state(0);
	let avatarProfileButton = $state<HTMLButtonElement | null>(null);
	let avatarSettingsButton = $state<HTMLButtonElement | null>(null);
	let avatarLogoutButton = $state<HTMLButtonElement | null>(null);

	$effect(() => {
		if (currentItemId) {
			expandedItemId = currentItemId;
		}
	});

	const showAtomicTabs = $derived(expandedItemId === 'components');
	const showFunctionalTabs = $derived(functionalPrimarySections.has(expandedItemId));

	function handleItemClick(item: PrimaryMenuItem) {
		expandedItemId = item.id;
		onItemClick?.(item);
	}

	function handleFunctionalTabSelect(tab: { id: string }) {
		if (tab.id === 'architecture' || tab.id === 'information' || tab.id === 'interaction') {
			onFunctionalTabClick?.(tab.id);
		}
	}

	function handleAtomicTabSelect(tab: { id: string }) {
		if (tab.id === 'atoms' || tab.id === 'molecules' || tab.id === 'organisms') {
			onAtomicTabClick?.(tab.id);
		}
	}

	function toggleAvatarMenu() {
		avatarMenuOpen = !avatarMenuOpen;
	}

	function closeAvatarMenu() {
		avatarMenuOpen = false;
	}

	function getAvatarMenuButtons(): (HTMLButtonElement | null)[] {
		return [avatarProfileButton, avatarSettingsButton, avatarLogoutButton];
	}

	function focusAvatarMenuItem(index: number) {
		const buttons = getAvatarMenuButtons();
		const target = buttons[index];
		if (!target) {
			return;
		}
		focusedAvatarMenuIndex = index;
		target.focus();
	}

	function handleAvatarMenuAction(action: 'profile' | 'settings' | 'logout') {
		avatarMenuOpen = false;
		if (action === 'profile') {
			onAvatarProfileClick?.();
			return;
		}
		if (action === 'settings') {
			onAvatarSettingsClick?.();
			return;
		}
		onAvatarLogoutClick?.();
	}

	function handleWindowClick(event: MouseEvent) {
		if (!avatarMenuOpen) {
			return;
		}
		const path = event.composedPath();
		const clickedInsideAvatar = path.some((node) => {
			if (!(node instanceof HTMLElement)) {
				return false;
			}
			return node.classList.contains('avatar-menu-shell');
		});
		if (!clickedInsideAvatar) {
			closeAvatarMenu();
		}
	}

	function handleWindowKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && avatarMenuOpen) {
			closeAvatarMenu();
		}
	}

	function handleAvatarMenuKeydown(event: KeyboardEvent) {
		if (!avatarMenuOpen) {
			return;
		}

		if (event.key === 'ArrowDown') {
			event.preventDefault();
			focusAvatarMenuItem((focusedAvatarMenuIndex + 1) % 3);
			return;
		}

		if (event.key === 'ArrowUp') {
			event.preventDefault();
			focusAvatarMenuItem((focusedAvatarMenuIndex + 2) % 3);
			return;
		}

		if (event.key === 'Home') {
			event.preventDefault();
			focusAvatarMenuItem(0);
			return;
		}

		if (event.key === 'End') {
			event.preventDefault();
			focusAvatarMenuItem(2);
			return;
		}

		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			if (focusedAvatarMenuIndex === 0) {
				handleAvatarMenuAction('profile');
				return;
			}
			if (focusedAvatarMenuIndex === 1) {
				handleAvatarMenuAction('settings');
				return;
			}
			handleAvatarMenuAction('logout');
		}
	}

	$effect(() => {
		if (!avatarMenuOpen) {
			return;
		}

		const initialIndex = activeAvatarRoute === 'settings' ? 1 : 0;
		focusedAvatarMenuIndex = initialIndex;
		void tick().then(() => focusAvatarMenuItem(initialIndex));
	});
</script>

<svelte:window onclick={handleWindowClick} onkeydown={handleWindowKeydown} />

<nav class={`stylist-menu ${className}`} aria-label="Main menu" {...restProps}>
	<div class="menu-main">
		<div class="menu-logo" aria-hidden="true">
			<BaseIcon name={triggerIcon} class="menu-icon" />
		</div>

		<div class="menu-left" aria-label="Sections and taxonomies">
			<div class="menu-track" aria-label="Sections">
				{#each menuItems as item}
					{@const expanded = expandedItemId === item.id}
					<div class="menu-item-shell" class:expanded>
						<button
							type="button"
							class="menu-item"
							class:is-expanded={expanded}
							aria-current={expanded ? 'page' : undefined}
							aria-label={item.label}
							data-tooltip={item.label}
							onclick={() => handleItemClick(item)}
						>
							<BaseIcon name={item.icon} class="menu-icon" />
							<span class="menu-text">{item.label}</span>
						</button>
					</div>
				{/each}
			</div>

			{#if showAtomicTabs}
				<StylistTab
					class="token-tab-switcher"
					items={atomicTabItems}
					selectedId={atomicTabId}
					onSelect={handleAtomicTabSelect}
				/>
			{/if}

			{#if showFunctionalTabs}
				<StylistTab
					class="token-tab-switcher"
					items={functionalTabItems}
					selectedId={functionalTabId}
					onSelect={handleFunctionalTabSelect}
				/>
			{/if}
		</div>
	</div>

	<div class="menu-tools" aria-label="User actions">
		<button type="button" class="tool-btn" onclick={() => onThemeButtonClick?.()} aria-label="Theme">
			Theme
		</button>
		<button type="button" class="tool-btn" onclick={() => onSettingsButtonClick?.()} aria-label="Settings">
			Settings
		</button>
		<div class="avatar-menu-shell">
			<button
				type="button"
				class="tool-btn tool-btn-avatar"
				class:is-active={avatarMenuOpen}
				onclick={toggleAvatarMenu}
				aria-label="Profile"
				aria-haspopup="menu"
				aria-expanded={avatarMenuOpen}
			>
				{avatarLabel}
			</button>
			{#if avatarMenuOpen}
				<div class="avatar-menu" role="menu" tabindex="0" aria-label="Profile menu" onkeydown={handleAvatarMenuKeydown}>
					<div class="avatar-menu-header">
						<strong>{avatarName}</strong>
						<small>{avatarEmail}</small>
					</div>
					<div class="avatar-menu-divider" role="separator" aria-hidden="true"></div>
					<button
						type="button"
						class="avatar-menu-item"
						class:is-active={activeAvatarRoute === 'profile'}
						role="menuitem"
						onclick={() => handleAvatarMenuAction('profile')}
						bind:this={avatarProfileButton}
					>
						<BaseIcon name="user" class="avatar-menu-item-icon" />
						Profile
					</button>
					<button
						type="button"
						class="avatar-menu-item"
						class:is-active={activeAvatarRoute === 'settings'}
						role="menuitem"
						onclick={() => handleAvatarMenuAction('settings')}
						bind:this={avatarSettingsButton}
					>
						<BaseIcon name="settings" class="avatar-menu-item-icon" />
						Settings
					</button>
					<button
						type="button"
						class="avatar-menu-item avatar-menu-item-danger"
						role="menuitem"
						onclick={() => handleAvatarMenuAction('logout')}
						bind:this={avatarLogoutButton}
					>
						<BaseIcon name="x" class="avatar-menu-item-icon" />
						Log out
					</button>
				</div>
			{/if}
		</div>
	</div>
</nav>

<style>
	.stylist-menu {
		display: flex;
		align-items: center;
		gap: var(--spacing-3);
		width: min(100%, 78rem);
	}

	.menu-main {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
		min-width: var(--size-0);
		flex: 1 1 auto;
	}

	.menu-left {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-1);
		min-width: var(--size-0);
		overflow-x: auto;
		padding: var(--spacing-1);
		scrollbar-width: thin;
	}

	.menu-logo {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: var(--spacing-10);
		height: var(--spacing-10);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 40%, transparent);
		border-radius: var(--border-radius-xl);
		background: var(--color-background-primary);
		color: var(--color-text-primary);
		flex: 0 0 auto;
	}

	.menu-track {
		display: flex;
		align-items: center;
		gap: var(--spacing-1);
		flex: 0 0 auto;
	}

	.menu-item-shell {
		display: inline-flex;
		align-items: center;
		gap: 0;
	}

	.menu-item {
		position: relative;
		display: inline-flex;
		align-items: center;
		justify-content: flex-start;
		gap: var(--spacing-2);
		width: var(--spacing-10);
		height: var(--spacing-10);
		padding: 0 var(--spacing-3);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 28%, transparent);
		border-radius: var(--border-radius-xl);
		background: color-mix(in srgb, var(--color-background-primary) 88%, transparent);
		color: var(--color-text-primary);
		white-space: nowrap;
		cursor: pointer;
		overflow: hidden;
		transition:
			width 220ms ease,
			background-color 160ms ease,
			border-color 160ms ease;
	}

	.menu-item:hover {
		background: var(--color-background-primary);
		border-color: color-mix(in srgb, var(--color-primary-500) 35%, transparent);
	}

	.menu-item:focus-visible {
		outline: 2px solid var(--color-primary-600);
		outline-offset: 2px;
	}

	.menu-item.is-expanded {
		width: clamp(8.5rem, 16vw, 11rem);
		border-color: color-mix(in srgb, var(--color-primary-600) 45%, transparent);
		background: var(--color-primary-50);
	}

	.menu-text {
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		opacity: var(--opacity-0);
		transform: translateX(-0.25rem);
		transition: opacity var(--duration-120) var(--animation-ease), transform var(--duration-150) var(--animation-ease);
	}

	.menu-item.is-expanded .menu-text {
		opacity: var(--opacity-100);
		transform: translateX(0);
	}

	.menu-item::after {
		content: attr(data-tooltip);
		position: absolute;
		left: 50%;
		top: calc(100% + 0.35rem);
		transform: translateX(-50%);
		padding: var(--spacing-1) var(--spacing-2);
		border-radius: var(--border-radius-md);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		background: var(--color-text-primary);
		color: var(--color-text-inverse);
		opacity: var(--opacity-0);
		pointer-events: none;
		transition: opacity var(--duration-120) var(--animation-ease);
		z-index: var(--z-index-layer45);
	}

	.menu-item:hover::after {
		opacity: var(--opacity-100);
	}

	.menu-item.is-expanded::after {
		opacity: var(--opacity-0);
	}

	.menu-icon {
		width: var(--size-custom105);
		height: var(--size-custom105);
		flex: 0 0 auto;
	}

	.menu-tools {
		margin-left: auto;
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-1);
		flex: 0 0 auto;
	}

	.tool-btn {
		height: var(--size-custom23);
		padding: 0 var(--spacing-3);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 28%, transparent);
		border-radius: var(--border-radius-xl);
		background: color-mix(in srgb, var(--color-background-primary) 92%, transparent);
		color: var(--color-text-primary);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-bold);
		letter-spacing: var(--letter-spacing-normal);
		cursor: pointer;
	}

	.tool-btn:hover {
		border-color: color-mix(in srgb, var(--color-primary-600) 45%, transparent);
		background: var(--color-background-primary);
	}

	.tool-btn:focus-visible {
		outline: 2px solid var(--color-primary-600);
		outline-offset: 2px;
	}

	.tool-btn-avatar {
		min-width: var(--size-custom23);
		padding: 0 var(--spacing-2);
	}

	.tool-btn-avatar.is-active {
		border-color: color-mix(in srgb, var(--color-primary-600) 55%, transparent);
		background: var(--color-primary-50);
	}

	.avatar-menu-shell {
		position: relative;
	}

	.avatar-menu {
		position: absolute;
		right: 0;
		top: calc(100% + 0.35rem);
		min-width: var(--size-40);
		display: grid;
		gap: var(--spacing-1);
		padding: var(--spacing-1);
		border: 1px solid color-mix(in srgb, var(--color-border-primary) 35%, transparent);
		border-radius: var(--border-radius-xl);
		background: var(--color-background-primary);
		box-shadow: var(--shadow-custom24);
		z-index: var(--z-index-layer50);
	}

	.avatar-menu-item {
		height: var(--spacing-8);
		padding: 0 var(--spacing-2);
		border: none;
		border-radius: var(--border-radius-lg);
		background: transparent;
		color: var(--color-text-primary);
		font-size: var(--font-size-3);
		font-weight: var(--font-weight-semibold);
		text-align: left;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-2);
	}

	.avatar-menu-item:hover {
		background: var(--color-background-secondary);
	}

	.avatar-menu-item.is-active {
		background: var(--color-primary-50);
		color: var(--color-primary-700);
	}

	.avatar-menu-item:focus-visible {
		outline: 2px solid var(--color-primary-600);
		outline-offset: 1px;
	}

	.avatar-menu-item-danger {
		color: var(--color-danger-700);
	}

	.avatar-menu-header {
		display: grid;
		gap: var(--spacing-1);
		padding: var(--spacing-1) var(--spacing-2) var(--spacing-1);
	}

	.avatar-menu-header strong {
		font-size: var(--font-size-3);
		color: var(--color-text-primary);
		line-height: 1.2;
	}

	.avatar-menu-header small {
		font-size: var(--font-size-3);
		color: var(--color-text-secondary);
		line-height: 1.2;
	}

	.avatar-menu-divider {
		height: 1px;
		background: var(--color-border-secondary);
		margin: var(--spacing-1) var(--spacing-1) var(--spacing-1);
	}

	.avatar-menu-item-icon {
		width: var(--size-custom09);
		height: var(--size-custom09);
		flex: 0 0 auto;
	}

	@media (max-width: 920px) {
		.stylist-menu {
			gap: var(--spacing-2);
		}

		.menu-item.is-expanded {
			width: var(--size-32);
		}

		.tool-btn {
			padding: 0 var(--spacing-2);
			font-size: var(--font-size-3);
		}
	}

	@media (max-width: 720px) {
		.menu-tools {
			display: none;
		}
	}
</style>



