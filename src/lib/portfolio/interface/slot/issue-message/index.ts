export interface SlotIssueMessage {
	created_at: string;
	file: string;
	id: string;
	text: string;
	image: string | null;
	audio: string | null;
	message_key?: string;
	status?: 'new' | 'backlog';
	backlog_path?: string;
}
