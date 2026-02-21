export type FolderItem = {
	id: string;
	name: string;
	children?: FolderItem[];
	expanded?: boolean;
	selected?: boolean;
	type?: 'folder' | 'file';
	icon?: import('svelte').Snippet;
	data?: any;
};
