<script lang="ts">
	import { tick } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
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

	type Props = Omit<HTMLAttributes<HTMLElement>, 'class'> & {
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
		{ id: 'components', label: 'РљРѕРјРїРѕРЅРµРЅС‚С‹', icon: 'components' },
		{ id: 'models', label: 'РњРѕРґРµР»Рё', icon: 'models' },
		{ id: 'samo', label: 'SAMO', icon: 'models' },
		{ id: 'contracts', label: 'РљРѕРЅС‚СЂР°РєС‚С‹', icon: 'contracts' },
		{ id: 'styles', label: 'РЎС‚РёР»Рё', icon: 'styles' },
		{ id: 'themes', label: 'РўРµРјС‹', icon: 'themes' },
		{ id: 'colors', label: 'Р¦РІРµС‚Р°', icon: 'colors' },
		{ id: 'tokens', label: 'РўРѕРєРµРЅС‹', icon: 'tokens' },
		{ id: 'icons', label: 'РРєРѕРЅРєРё', icon: 'icons' },
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

<nav class={`stylist-menu ${className}`} aria-label="Р“Р»Р°РІРЅРѕРµ РјРµРЅСЋ" {...restProps}>
	<div class="menu-main">
		<div class="menu-logo" aria-hidden="true">
			<BaseIcon name={triggerIcon} class="menu-icon" />
		</div>

		<div class="menu-left" aria-label="Р Р°Р·РґРµР»С‹ Рё С‚Р°РєСЃРѕРЅРѕРјРёРё">
			<div class="menu-track" aria-label="Р Р°Р·РґРµР»С‹">
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

	<div class="menu-tools" aria-label="РџРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРёРµ РґРµР№СЃС‚РІРёСЏ">
		<button type="button" class="tool-btn" onclick={() => onThemeButtonClick?.()} aria-label="РўРµРјР°">
			Theme
		</button>
		<button type="button" class="tool-btn" onclick={() => onSettingsButtonClick?.()} aria-label="РќР°СЃС‚СЂРѕР№РєРё">
			Settings
		</button>
		<div class="avatar-menu-shell">
			<button
				type="button"
				class="tool-btn tool-btn-avatar"
				class:is-active={avatarMenuOpen}
				onclick={toggleAvatarMenu}
				aria-label="РџСЂРѕС„РёР»СЊ"
				aria-haspopup="menu"
				aria-expanded={avatarMenuOpen}
			>
				{avatarLabel}
			</button>
			{#if avatarMenuOpen}
				<div class="avatar-menu" role="menu" tabindex="0" aria-label="РњРµРЅСЋ РїСЂРѕС„РёР»СЏ" onkeydown={handleAvatarMenuKeydown}>
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
						РџСЂРѕС„РёР»СЊ
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
						РќР°СЃС‚СЂРѕР№РєРё
					</button>
					<button
						type="button"
						class="avatar-menu-item avatar-menu-item-danger"
						role="menuitem"
						onclick={() => handleAvatarMenuAction('logout')}
						bind:this={avatarLogoutButton}
					>
						<BaseIcon name="x" class="avatar-menu-item-icon" />
						Р’С‹С…РѕРґ
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
		gap: 0.75rem;
		width: min(100%, 78rem);
	}

	.menu-main {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		min-width: 0;
		flex: 1 1 auto;
	}

	.menu-left {
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		min-width: 0;
		overflow-x: auto;
		padding: 0.2rem;
		scrollbar-width: thin;
	}

	.menu-logo {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 2.5rem;
		height: 2.5rem;
		border: 1px solid rgba(148, 163, 184, 0.4);
		border-radius: 0.8rem;
		background: #ffffff;
		color: #0f172a;
		flex: 0 0 auto;
	}

	.menu-track {
		display: flex;
		align-items: center;
		gap: 0.35rem;
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
		gap: 0.45rem;
		width: 2.5rem;
		height: 2.5rem;
		padding: 0 0.7rem;
		border: 1px solid rgba(148, 163, 184, 0.28);
		border-radius: 0.8rem;
		background: rgba(255, 255, 255, 0.88);
		color: #0f172a;
		white-space: nowrap;
		cursor: pointer;
		overflow: hidden;
		transition:
			width 220ms ease,
			background-color 160ms ease,
			border-color 160ms ease;
	}

	.menu-item:hover {
		background: #ffffff;
		border-color: rgba(59, 130, 246, 0.35);
	}

	.menu-item:focus-visible {
		outline: 2px solid #2563eb;
		outline-offset: 2px;
	}

	.menu-item.is-expanded {
		width: clamp(8.5rem, 16vw, 11rem);
		border-color: rgba(37, 99, 235, 0.45);
		background: #eff6ff;
	}

	.menu-text {
		font-size: 0.8rem;
		font-weight: 600;
		opacity: 0;
		transform: translateX(-0.25rem);
		transition: opacity 150ms ease, transform 150ms ease;
	}

	.menu-item.is-expanded .menu-text {
		opacity: 1;
		transform: translateX(0);
	}

	.menu-item::after {
		content: attr(data-tooltip);
		position: absolute;
		left: 50%;
		top: calc(100% + 0.35rem);
		transform: translateX(-50%);
		padding: 0.25rem 0.5rem;
		border-radius: 0.4rem;
		font-size: 0.72rem;
		font-weight: 600;
		background: #0f172a;
		color: #f8fafc;
		opacity: 0;
		pointer-events: none;
		transition: opacity 120ms ease;
		z-index: 45;
	}

	.menu-item:hover::after {
		opacity: 1;
	}

	.menu-item.is-expanded::after {
		opacity: 0;
	}

	.menu-icon {
		width: 1.05rem;
		height: 1.05rem;
		flex: 0 0 auto;
	}

	.menu-tools {
		margin-left: auto;
		display: inline-flex;
		align-items: center;
		gap: 0.35rem;
		flex: 0 0 auto;
	}

	.tool-btn {
		height: 2.3rem;
		padding: 0 0.7rem;
		border: 1px solid rgba(148, 163, 184, 0.28);
		border-radius: 0.75rem;
		background: rgba(255, 255, 255, 0.92);
		color: #0f172a;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		cursor: pointer;
	}

	.tool-btn:hover {
		border-color: rgba(37, 99, 235, 0.45);
		background: #ffffff;
	}

	.tool-btn:focus-visible {
		outline: 2px solid #2563eb;
		outline-offset: 2px;
	}

	.tool-btn-avatar {
		min-width: 2.3rem;
		padding: 0 0.5rem;
	}

	.tool-btn-avatar.is-active {
		border-color: rgba(37, 99, 235, 0.55);
		background: #eff6ff;
	}

	.avatar-menu-shell {
		position: relative;
	}

	.avatar-menu {
		position: absolute;
		right: 0;
		top: calc(100% + 0.35rem);
		min-width: 10rem;
		display: grid;
		gap: 0.2rem;
		padding: 0.35rem;
		border: 1px solid rgba(148, 163, 184, 0.35);
		border-radius: 0.75rem;
		background: #ffffff;
		box-shadow: 0 12px 28px rgba(15, 23, 42, 0.12);
		z-index: 50;
	}

	.avatar-menu-item {
		height: 2rem;
		padding: 0 0.6rem;
		border: none;
		border-radius: 0.55rem;
		background: transparent;
		color: #0f172a;
		font-size: 0.78rem;
		font-weight: 600;
		text-align: left;
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
	}

	.avatar-menu-item:hover {
		background: #f8fafc;
	}

	.avatar-menu-item.is-active {
		background: #eff6ff;
		color: #1d4ed8;
	}

	.avatar-menu-item:focus-visible {
		outline: 2px solid #2563eb;
		outline-offset: 1px;
	}

	.avatar-menu-item-danger {
		color: #b91c1c;
	}

	.avatar-menu-header {
		display: grid;
		gap: 0.15rem;
		padding: 0.35rem 0.6rem 0.2rem;
	}

	.avatar-menu-header strong {
		font-size: 0.8rem;
		color: #0f172a;
		line-height: 1.2;
	}

	.avatar-menu-header small {
		font-size: 0.7rem;
		color: #64748b;
		line-height: 1.2;
	}

	.avatar-menu-divider {
		height: 1px;
		background: #e2e8f0;
		margin: 0.15rem 0.15rem 0.25rem;
	}

	.avatar-menu-item-icon {
		width: 0.9rem;
		height: 0.9rem;
		flex: 0 0 auto;
	}

	@media (max-width: 920px) {
		.stylist-menu {
			gap: 0.5rem;
		}

		.menu-item.is-expanded {
			width: 8rem;
		}

		.tool-btn {
			padding: 0 0.5rem;
			font-size: 0.68rem;
		}
	}

	@media (max-width: 720px) {
		.menu-tools {
			display: none;
		}
	}
</style>
