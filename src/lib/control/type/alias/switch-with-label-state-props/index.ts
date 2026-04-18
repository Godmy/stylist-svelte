export type SwitchWithLabelStateProps = {
	[key: string]: any;
  checked?: boolean;
  disabled?: boolean;
  label?: string;
  labelPosition?: string;
  class?: string;
  switchClass?: string;
  labelClass?: string;
  onValueInput?: (value: boolean) => void;
};
