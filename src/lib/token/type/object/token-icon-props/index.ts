export type TokenIconProps = {
	title?: string;
	icons?: readonly string[];
	value?: string;
	class?: string;
	onSelect?: (icon: string) => void;
};
