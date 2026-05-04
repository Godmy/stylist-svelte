import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { CollaborativeEditorProps } from '$stylist/communication/type/alias/collaborative-editor-props';
import { CollaborativeEditorStyleManager } from '$stylist/communication/class/style-manager/collaborative-editor';

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
		CollaborativeEditorStyleManager.getContainerClasses(props.class ?? '')
	);

	const toolbarClasses = $derived(
		CollaborativeEditorStyleManager.getToolbarClasses(props.toolbarClass ?? '')
	);

	const editorClasses = $derived(
		CollaborativeEditorStyleManager.getEditorClasses(props.editorClass ?? '')
	);

	const userListClasses = $derived(
		CollaborativeEditorStyleManager.getUserListClasses(props.userListClass ?? '')
	);

	const userListHeaderClasses = CollaborativeEditorStyleManager.getUserListHeaderClasses();

	const userListEntryClasses = CollaborativeEditorStyleManager.getUserListEntryClasses();

	const userAvatarClasses = CollaborativeEditorStyleManager.getUserAvatarClasses();

	const userInitialsClasses = CollaborativeEditorStyleManager.getUserInitialsClasses();

	const userNameClasses = CollaborativeEditorStyleManager.getUserNameClasses();

	const userIndicatorClasses = CollaborativeEditorStyleManager.getUserIndicatorClasses();

	const toolbarButtonClasses = CollaborativeEditorStyleManager.getToolbarButtonClasses();

	const toolbarSeparatorClasses = CollaborativeEditorStyleManager.getToolbarSeparatorClasses();

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
