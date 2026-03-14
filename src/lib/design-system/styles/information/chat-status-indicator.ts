export interface ChatStatusIndicatorStyles {
	container: string;
	indicator: string;
	label: string;
}

export interface ChatStatusIndicatorStyleManagerInterface {
	getContainerClass: (className?: string) => string;
	getIndicatorClass: (status?: string, size?: string) => string;
	getLabelClass: () => string;
}
