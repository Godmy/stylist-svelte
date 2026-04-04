import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/struct/interaction';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export interface CollaborativeEditorUser {
	id: string;
	name: string;
	color: string;
	avatar?: string;
}

export type CollaborativeEditorContract = RecordArchitectureMerge<
	[
		{
			content?: string;
			users?: CollaborativeEditorUser[];
			currentUser?: CollaborativeEditorUser;
			onContentChange?: (content: string) => void;
			showToolbar?: boolean;
			showUserList?: boolean;
			toolbarClass?: string;
			editorClass?: string;
			userListClass?: string;
		},
		InteractionHTMLAttributes<HTMLDivElement>
	]
>;
