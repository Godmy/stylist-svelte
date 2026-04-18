import { tick } from 'svelte';
import type { PrimaryMenuItem } from '../../../type/struct/stylist-menu-primary-menu-item';
import type { FunctionalTabId } from '../../../type/struct/stylist-menu-functional-tab-id';
import type { AtomicTabId } from '../../../type/struct/stylist-menu-atomic-tab-id';
import type { StylistMenuProps } from '../../../type/struct/stylist-menu-props';
import { STYLIST_MENU_FUNCTIONAL_PRIMARY_SECTIONS } from '../../../const/record/stylist-menu-functional-primary-sections';

const functionalPrimarySections = new Set<string>(STYLIST_MENU_FUNCTIONAL_PRIMARY_SECTIONS);

export function createStylistMenuState(props: StylistMenuProps) {
	let expandedItemId = $state(props.currentItemId ?? '');
	let avatarMenuOpen = $state(false);
	let focusedAvatarMenuIndex = $state(0);
	let avatarProfileButton = $state<HTMLButtonElement | null>(null);
	let avatarSettingsButton = $state<HTMLButtonElement | null>(null);
	let avatarLogoutButton = $state<HTMLButtonElement | null>(null);

	$effect(() => {
		if (props.currentItemId) {
			expandedItemId = props.currentItemId;
		}
	});

	const showAtomicTabs = $derived(expandedItemId === 'components');
	const showFunctionalTabs = $derived(functionalPrimarySections.has(expandedItemId));
	const className = $derived(props.class ?? '');
	const triggerIcon = $derived(props.triggerIcon ?? 'stylist-organism');
	const avatarLabel = $derived(props.avatarLabel ?? 'ME');
	const avatarName = $derived(props.avatarName ?? 'Dmitrii');
	const avatarEmail = $derived(props.avatarEmail ?? 'dmitrii@example.com');
	const activeAvatarRoute = $derived(props.activeAvatarRoute ?? '');
	const functionalTabId = $derived(props.functionalTabId ?? 'architecture');
	const atomicTabId = $derived(props.atomicTabId ?? 'atoms');
	const restProps = $derived.by(() => {
		const {
			class: _class,
			triggerIcon: _triggerIcon,
			currentItemId: _currentItemId,
			avatarLabel: _avatarLabel,
			avatarName: _avatarName,
			avatarEmail: _avatarEmail,
			activeAvatarRoute: _activeAvatarRoute,
			functionalTabId: _functionalTabId,
			atomicTabId: _atomicTabId,
			onItemClick: _onItemClick,
			onFunctionalTabClick: _onFunctionalTabClick,
			onAtomicTabClick: _onAtomicTabClick,
			onThemeButtonClick: _onThemeButtonClick,
			onSettingsButtonClick: _onSettingsButtonClick,
			onAvatarProfileClick: _onAvatarProfileClick,
			onAvatarSettingsClick: _onAvatarSettingsClick,
			onAvatarLogoutClick: _onAvatarLogoutClick,
			...rest
		} = props as Record<string, unknown>;
		return rest as Record<string, unknown>;
	});

	function handleItemClick(item: PrimaryMenuItem) {
		expandedItemId = item.id;
		props.onItemClick?.(item);
	}

	function handleFunctionalTabSelect(tab: { id: string }) {
		if (tab.id === 'architecture' || tab.id === 'information' || tab.id === 'interaction') {
			props.onFunctionalTabClick?.(tab.id as FunctionalTabId);
		}
	}

	function handleAtomicTabSelect(tab: { id: string }) {
		if (tab.id === 'atoms' || tab.id === 'molecules' || tab.id === 'organisms') {
			props.onAtomicTabClick?.(tab.id as AtomicTabId);
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
			props.onAvatarProfileClick?.();
			return;
		}
		if (action === 'settings') {
			props.onAvatarSettingsClick?.();
			return;
		}
		props.onAvatarLogoutClick?.();
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

	return {
		get expandedItemId() {
			return expandedItemId;
		},
		get avatarMenuOpen() {
			return avatarMenuOpen;
		},
		set avatarMenuOpen(value: boolean) {
			avatarMenuOpen = value;
		},
		get focusedAvatarMenuIndex() {
			return focusedAvatarMenuIndex;
		},
		set focusedAvatarMenuIndex(value: number) {
			focusedAvatarMenuIndex = value;
		},
		get avatarProfileButton() {
			return avatarProfileButton;
		},
		set avatarProfileButton(value: HTMLButtonElement | null) {
			avatarProfileButton = value;
		},
		get avatarSettingsButton() {
			return avatarSettingsButton;
		},
		set avatarSettingsButton(value: HTMLButtonElement | null) {
			avatarSettingsButton = value;
		},
		get avatarLogoutButton() {
			return avatarLogoutButton;
		},
		set avatarLogoutButton(value: HTMLButtonElement | null) {
			avatarLogoutButton = value;
		},
		get showAtomicTabs() {
			return showAtomicTabs;
		},
		get showFunctionalTabs() {
			return showFunctionalTabs;
		},
		get className() {
			return className;
		},
		get triggerIcon() {
			return triggerIcon;
		},
		get avatarLabel() {
			return avatarLabel;
		},
		get avatarName() {
			return avatarName;
		},
		get avatarEmail() {
			return avatarEmail;
		},
		get activeAvatarRoute() {
			return activeAvatarRoute;
		},
		get functionalTabId() {
			return functionalTabId;
		},
		get atomicTabId() {
			return atomicTabId;
		},
		get restProps() {
			return restProps;
		},
		handleItemClick,
		handleFunctionalTabSelect,
		handleAtomicTabSelect,
		toggleAvatarMenu,
		closeAvatarMenu,
		focusAvatarMenuItem,
		handleAvatarMenuAction,
		handleWindowClick,
		handleWindowKeydown,
		handleAvatarMenuKeydown
	};
}

export default createStylistMenuState;
