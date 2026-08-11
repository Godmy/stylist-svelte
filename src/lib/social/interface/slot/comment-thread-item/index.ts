export interface SlotCommentThreadItem {
	id: string;
	author: {
id: string;
	name: string;
	avatar?: string;
	role?: string;
};
	content: string;
	timestamp: Date;
	replies?: SlotCommentThreadItem[];
	likes?: number;
	liked?: boolean;
	isEdited?: boolean;
}
