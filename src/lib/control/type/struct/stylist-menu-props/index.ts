import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { PrimaryMenuItem } from '../stylist-menu-primary-menu-item';
import type { FunctionalTabId } from '../stylist-menu-functional-tab-id';
import type { AtomicTabId } from '../stylist-menu-atomic-tab-id';

export type StylistMenuProps = Omit<InteractionHTMLAttributes<HTMLElement>, 'class'> & {
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
