import type { CollaborativeUser } from '$stylist/canvas/type/struct/collaborative-user';
import type { HTMLAttributes } from 'svelte/elements';

export interface RecipeCollaborativeEditor extends HTMLAttributes<HTMLDivElement> {
	content?: string;
	users?: CollaborativeUser[];
	currentUser?: CollaborativeUser;
	onContentChange?: (content: string) => void;
	showToolbar?: boolean;
	showUserList?: boolean;
	class?: string;
	toolbarClass?: string;
	editorClass?: string;
	userListClass?: string;
}
