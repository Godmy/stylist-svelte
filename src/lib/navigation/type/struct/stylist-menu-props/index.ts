import type { SlotInteraction } from '$stylist/interaction/interface/slot/interaction';
import type { HTMLAttributes } from 'svelte/elements';
import type { PrimaryMenuItem } from '$stylist/navigation/type/struct/stylist-menu-primary-menu-item';
import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/architecture/const/array/functional-taxonomy';

export type StylistMenuProps = Omit<HTMLAttributes<HTMLElement>, 'class'> &
	SlotInteraction & {
		class?: string;
		triggerIcon?: string;
		currentItemId?: string;
		avatarLabel?: string;
		avatarName?: string;
		avatarEmail?: string;
		activeAvatarRoute?: 'profile' | 'settings' | '';
		functionalTabId?: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number];
		atomicTabId?: 'atoms' | 'molecules' | 'organisms';
		onItemClick?: (item: PrimaryMenuItem) => void;
		onFunctionalTabClick?: (tabId: (typeof TOKEN_FUNCTIONAL_TAXONOMY)[number]) => void;
		onAtomicTabClick?: (tabId: 'atoms' | 'molecules' | 'organisms') => void;
		onThemeButtonClick?: () => void;
		onSettingsButtonClick?: () => void;
		onAvatarProfileClick?: () => void;
		onAvatarSettingsClick?: () => void;
		onAvatarLogoutClick?: () => void;
	};
