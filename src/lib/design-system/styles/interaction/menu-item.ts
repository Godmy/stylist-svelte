export interface MenuItemStyles {
	container: string;
	[key: string]: string;
}

export interface MenuItemStyleManagerInterface {
	getContainerClass: () => string;
}
