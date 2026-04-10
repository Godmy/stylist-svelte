import type { ISelectProps } from '$stylist/control/interface/component/selector/other';

export type SelectorProps = ISelectProps & {
	open?: boolean;
	onToggle?: () => void;
};
