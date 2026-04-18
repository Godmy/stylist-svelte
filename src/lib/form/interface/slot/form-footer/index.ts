import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';

export interface SlotFormFooter extends InteractionHTMLAttributes<HTMLDivElement> {
	primaryButtonLabel?: string;
	secondaryButtonLabel?: string;
	primaryButtonDisabled?: boolean;
	secondaryButtonDisabled?: boolean;
	showSecondaryButton?: boolean;
	onPrimaryClick?: () => void;
	onSecondaryClick?: () => void;
	class?: string;
	primaryButtonClass?: string;
	secondaryButtonClass?: string;
	actionsClass?: string;
}
