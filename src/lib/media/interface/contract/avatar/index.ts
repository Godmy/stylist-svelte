import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { SlotTypography } from '$stylist/theme/interface/slot/typography';
import type { TOKEN_AVAILABILITY } from '$stylist/interaction/const/array/availability';

import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
export interface ContractAvatar extends Omit<HTMLAttributes<HTMLDivElement>, 'class'>, SlotThemeBorder, SlotTypography {
	/** Avatar variant */
	variant?: 'default';
	/** Avatar size */
	size?: (typeof TOKEN_SIZE)[number];
	/** Image source */
	src?: string;
	/** Alt text */
	alt?: string;
	/** SlotUser ID */
	id?: string;
	/** SlotUser name */
	name?: string;
	/** SlotUser status */
	status?: (typeof TOKEN_AVAILABILITY)[number];
	/** Show status indicator */
	showStatus?: boolean;
	/** Additional CSS class */
	class?: string;
}
