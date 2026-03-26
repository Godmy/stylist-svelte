import type { TokenArchitecture } from '$stylist/architecture/type/token/architecture';

export const PRESET_DRAGGABLE = {
	compact: {
		variant: 'compact' as TokenArchitecture,
		showHandle: true,
		showMenu: false
	},
	minimal: {
		variant: 'minimal' as TokenArchitecture,
		showHandle: false,
		showMenu: true
	},
	kanban: {
		variant: 'default' as TokenArchitecture,
		showHandle: true,
		showMenu: true
	}
};
