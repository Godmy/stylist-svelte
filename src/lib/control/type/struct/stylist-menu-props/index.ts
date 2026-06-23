import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { PrimaryMenuItem } from '../stylist-menu-primary-menu-item';
import type { StylistCategoryId } from '$stylist/development/type/struct/stylist-category-id';

export type StylistMenuProps = Omit<HTMLAttributes<HTMLElement>, 'class'> & SlotInteraction & {
	class?: string;
	triggerIcon?: string;
	currentItemId?: string;
	avatarLabel?: string;
	avatarName?: string;
	avatarEmail?: string;
	activeAvatarRoute?: 'profile' | 'settings' | '';
	functionalTabId?: StylistCategoryId;
	atomicTabId?: 'atoms' | 'molecules' | 'organisms';
	onItemClick?: (item: PrimaryMenuItem) => void;
	onFunctionalTabClick?: (tabId: StylistCategoryId) => void;
	onAtomicTabClick?: (tabId: 'atoms' | 'molecules' | 'organisms') => void;
	onThemeButtonClick?: () => void;
	onSettingsButtonClick?: () => void;
	onAvatarProfileClick?: () => void;
	onAvatarSettingsClick?: () => void;
	onAvatarLogoutClick?: () => void;
};
