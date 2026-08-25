import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenAvailability } from '$stylist/user/type/alias/availability';
export interface SlotChatStatusIndicator {
	/**
	 * The status to display
	 * @default 'offline'
	 */
	status?: TokenAvailability;

	/**
	 * The size of the indicator
	 * @default 'sm'
	 */
	size?: TokenSize;

	/**
	 * Whether to show the status label
	 * @default false
	 */
	showLabel?: boolean;

	/**
	 * Additional CSS classes
	 */
	class?: string;
}
