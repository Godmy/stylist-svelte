import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { CollaborativeEditorProps } from '$stylist/communication/type/alias/collaborative-editor-props';

const Bold = 'bold';
const Italic = 'italic';
const Underline = 'underline';
const AlignLeft = 'align-left';
const AlignCenter = 'align-center';
const AlignRight = 'align-right';
const List = 'list';
const ListOrdered = 'list-ordered';
const MessageCircle = 'message-circle';
const UserIcon = 'user';
const Users = 'users';

export const createCollaborativeEditorState = (props: CollaborativeEditorProps) => {
	let editorContent = $state(props.content ?? '');
	let editorRef: HTMLDivElement | undefined;

	const showToolbar = $derived(props.showToolbar ?? true);
	const showUserList = $derived(props.showUserList ?? true);
	const users = $derived(props.users ?? []);
	const currentUser = $derived(props.currentUser);

	const containerClasses = $derived(
		`c-collaborative-editor flex flex-col border border-[var(--color-border-primary)] rounded-lg overflow-hidden ${props.class ?? ''}`.trim()
	);

	const toolbarClasses = $derived(
		`flex items-center p-2 border-b border-[var(--color-border-primary)] bg-[var(--color-background-secondary)] space-x-1 ${props.toolbarClass ?? ''}`.trim()
	);

	const editorClasses = $derived(
		`flex-1 p-4 min-h-[300px] overflow-auto focus:outline-none ${props.editorClass ?? ''}`.trim()
	);

	const userListClasses = $derived(
		`w-48 border-l p-3 ${props.userListClass ?? ''}`.trim()
	);

	const userListHeaderClasses = 'flex items-center text-sm font-medium text-[var(--color-text-primary)] mb-2';

	const userListEntryClasses = 'flex items-center';

	const userAvatarClasses = 'w-6 h-6 rounded-full mr-2';

	const userInitialsClasses = 'w-6 h-6 rounded-full flex items-center justify-center text-xs text-[var(--color-text-inverse)] mr-2';

	const userNameClasses = 'text-sm text-[var(--color-text-primary)]';

	const userIndicatorClasses = 'ml-1 text-xs text-[var(--color-text-secondary)]';

	const toolbarButtonClasses = 'p-2 rounded hover:bg-[var(--color-background-tertiary)]';

	const toolbarSeparatorClasses = 'w-px h-6 bg-[var(--color-background-tertiary)] mx-1';

	function handleInput() {
		props.onContentChange?.(editorContent);
	}

	function handleEditorInput() {
		editorContent = editorRef?.innerHTML ?? '';
	}

	function formatText(command: string) {
		document.execCommand(command, false);
		editorRef?.focus();
	}

	function insertComment() {
		const selection = window.getSelection();
		if (selection && selection.rangeCount > 0) {
			const range = selection.getRangeAt(0);
			const commentId = `comment-${Date.now()}`;

			const commentMarker = document.createElement('span');
			commentMarker.id = commentId;
			commentMarker.className = 'collaborative-comment-marker';
			commentMarker.textContent = ' ¶';
			commentMarker.style.color = 'blue';
			commentMarker.style.textDecoration = 'underline';
			commentMarker.style.cursor = 'pointer';

			range.insertNode(commentMarker);

			editorContent = editorRef?.innerHTML ?? '';
			props.onContentChange?.(editorContent);
		}
	}

	function handleBlur() {
		handleInput();
	}

	return {
		get editorContent() {
			return editorContent;
		},
		set editorContent(value: string) {
			editorContent = value;
		},
		get showToolbar() {
			return showToolbar;
		},
		get showUserList() {
			return showUserList;
		},
		get users() {
			return users;
		},
		get currentUser() {
			return currentUser;
		},
		get containerClasses() {
			return containerClasses;
		},
		get toolbarClasses() {
			return toolbarClasses;
		},
		get editorClasses() {
			return editorClasses;
		},
		get userListClasses() {
			return userListClasses;
		},
		get userListHeaderClasses() {
			return userListHeaderClasses;
		},
		get userListEntryClasses() {
			return userListEntryClasses;
		},
		get userAvatarClasses() {
			return userAvatarClasses;
		},
		get userInitialsClasses() {
			return userInitialsClasses;
		},
		get userNameClasses() {
			return userNameClasses;
		},
		get userIndicatorClasses() {
			return userIndicatorClasses;
		},
		get toolbarButtonClasses() {
			return toolbarButtonClasses;
		},
		get toolbarSeparatorClasses() {
			return toolbarSeparatorClasses;
		},
		get Bold() {
			return Bold;
		},
		get Italic() {
			return Italic;
		},
		get Underline() {
			return Underline;
		},
		get AlignLeft() {
			return AlignLeft;
		},
		get AlignCenter() {
			return AlignCenter;
		},
		get AlignRight() {
			return AlignRight;
		},
		get List() {
			return List;
		},
		get ListOrdered() {
			return ListOrdered;
		},
		get MessageCircle() {
			return MessageCircle;
		},
		get UserIcon() {
			return UserIcon;
		},
		get Users() {
			return Users;
		},
		set editorRef(value: HTMLDivElement | undefined) {
			editorRef = value;
		},
		get editorRef() {
			return editorRef;
		},
		handleInput,
		handleEditorInput,
		formatText,
		insertComment,
		handleBlur
	};
};

export default createCollaborativeEditorState;
