import type { TierContent } from '$stylist/architecture/type/enum/tier';

export const PRESET_DRAGGABLE = {
	compact: {
		variant: 'compact' as TierContent,
		showHandle: true,
		showMenu: false
	},
	minimal: {
		variant: 'minimal' as TierContent,
		showHandle: false,
		showMenu: true
	},
	kanban: {
		variant: 'default' as TierContent,
		showHandle: true,
		showMenu: true
	}
};
