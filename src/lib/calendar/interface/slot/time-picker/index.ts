
export interface SlotTimePicker {
	value?: string;
	disabled?: boolean;
	class?: string;
	showSeconds?: boolean;
	step?: number;
	onChange?: (time: string) => void;
	onValueChange?: (time: string) => void;
}
