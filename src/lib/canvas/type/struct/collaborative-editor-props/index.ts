type CollaborativeUser = { [key: string]: any };
export type CollaborativeEditorProps = {
	[key: string]: any;
	content?: string;
	users?: CollaborativeUser[];
	currentUser?: CollaborativeUser;
	onContentChange?: (content: string) => void;
};
