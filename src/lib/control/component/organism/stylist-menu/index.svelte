<script lang="ts">
	import { tick } from 'svelte';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import StylistTab from '$stylist/control/component/molecule/stylist-tab/index.svelte';
	import { STYLIST_MENU_MENU_ITEMS } from '$stylist/control/const/record/stylist-menu-menu-items';
	import { STYLIST_MENU_FUNCTIONAL_TAB_ITEMS } from '$stylist/control/const/record/stylist-menu-functional-tab-items';
	import { STYLIST_MENU_ATOMIC_TAB_ITEMS } from '$stylist/control/const/record/stylist-menu-atomic-tab-items';
	import type { StylistMenuProps } from '$stylist/control/type/struct/stylist-menu-props';
	import { createStylistMenuState } from '$stylist/control/function/state/stylist-menu';

	let props: StylistMenuProps = $props();
	const state = createStylistMenuState(props);
</script>

<svelte:window onclick={state.handleWindowClick} onkeydown={state.handleWindowKeydown} />

<nav class={`stylist-menu ${state.className}`} aria-label="Main menu" {...state.restProps}>
	<div class="menu-main">
		<div class="menu-logo" aria-hidden="true">
			<BaseIcon name={state.triggerIcon} class="menu-icon" />
		</div>

		<div class="menu-left" aria-label="Sections and taxonomies">
			<div class="menu-track" aria-label="Sections">
				{#each STYLIST_MENU_MENU_ITEMS as item}
					{@const expanded = state.expandedItemId === item.id}
					<div class="menu-item-shell" class:expanded>
						<button
							type="button"
							class="menu-item"
							class:is-expanded={expanded}
							aria-current={expanded ? 'page' : undefined}
							aria-label={item.label}
							data-tooltip={item.label}
							onclick={() => state.handleItemClick(item)}
						>
							<BaseIcon name={item.icon} class="menu-icon" />
							<span class="menu-text">{item.label}</span>
						</button>
					</div>
				{/each}
			</div>

			{#if state.showAtomicTabs}
				<StylistTab
					class="token-tab-switcher"
					items={STYLIST_MENU_ATOMIC_TAB_ITEMS}
					selectedId={state.atomicTabId}
					onSelect={state.handleAtomicTabSelect}
				/>
			{/if}

			{#if state.showFunctionalTabs}
				<StylistTab
					class="token-tab-switcher"
					items={STYLIST_MENU_FUNCTIONAL_TAB_ITEMS}
					selectedId={state.functionalTabId}
					onSelect={state.handleFunctionalTabSelect}
				/>
			{/if}
		</div>
	</div>

	<div class="menu-tools" aria-label="User actions">
		<button type="button" class="tool-btn" onclick={() => props.onThemeButtonClick?.()} aria-label="Theme">
			Theme
		</button>
		<button type="button" class="tool-btn" onclick={() => props.onSettingsButtonClick?.()} aria-label="Settings">
			Settings
		</button>
		<div class="avatar-menu-shell">
			<button
				type="button"
				class="tool-btn tool-btn-avatar"
				class:is-active={state.avatarMenuOpen}
				onclick={state.toggleAvatarMenu}
				aria-label="Profile"
				aria-haspopup="menu"
				aria-expanded={state.avatarMenuOpen}
			>
				{state.avatarLabel}
			</button>
			{#if state.avatarMenuOpen}
				<div class="avatar-menu" role="menu" tabindex="0" aria-label="Profile menu" onkeydown={state.handleAvatarMenuKeydown}>
					<div class="avatar-menu-header">
						<strong>{state.avatarName}</strong>
						<small>{state.avatarEmail}</small>
					</div>
					<div class="avatar-menu-divider" role="separator" aria-hidden="true"></div>
					<button
						type="button"
						class="avatar-menu-item"
						class:is-active={state.activeAvatarRoute === 'profile'}
						role="menuitem"
						onclick={() => state.handleAvatarMenuAction('profile')}
						bind:this={state.avatarProfileButton}
					>
						<BaseIcon name="user" class="avatar-menu-item-icon" />
						Profile
					</button>
					<button
						type="button"
						class="avatar-menu-item"
						class:is-active={state.activeAvatarRoute === 'settings'}
						role="menuitem"
						onclick={() => state.handleAvatarMenuAction('settings')}
						bind:this={state.avatarSettingsButton}
					>
						<BaseIcon name="settings" class="avatar-menu-item-icon" />
						Settings
					</button>
					<button
						type="button"
						class="avatar-menu-item avatar-menu-item-danger"
						role="menuitem"
						onclick={() => state.handleAvatarMenuAction('logout')}
						bind:this={state.avatarLogoutButton}
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
		width: var(--size-1_05rem);
		height: var(--size-1_05rem);
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
		height: var(--size-2_3rem);
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
		min-width: var(--size-2_3rem);
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
		min-width: var(--size-10rem);
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
		width: var(--size-0_9rem);
		height: var(--size-0_9rem);
		flex: 0 0 auto;
	}

	@media (max-width: 920px) {
		.stylist-menu {
			gap: var(--spacing-2);
		}

		.menu-item.is-expanded {
			width: var(--size-8rem);
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

