import type { HTMLAttributes } from 'svelte/elements';
import type { TOKEN_FUNCTIONAL_TAXONOMY } from '$stylist/development/const/array/functional-taxonomy';
import type { PrimaryMenuItem } from '$stylist/navigation/interface/slot/primary-menu-item';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeStylistMenu extends ComputeIntersectAll<
		[
			Omit<HTMLAttributes<HTMLElement>, 'class'> & {
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
			}
		]
	> {}
