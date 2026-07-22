export type ToolButtonProps = {
	active?: boolean;
	tool?: string;
	icon?: string;
	label?: string;
	onClick?: (tool: string) => void;
};
