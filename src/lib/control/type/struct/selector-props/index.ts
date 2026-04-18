import type { SlotSelect as ISelectProps } from '$stylist/control/interface/slot/select';

export type SelectorProps = ISelectProps & {
	open?: boolean;
	onToggle?: () => void;
};
