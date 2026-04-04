import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { RecordCommunicationMerge } from '$stylist/communication/type/record';

export interface UserStatusUser {
	id: string;
	name: string;
	avatar?: string;
	status?: 'online' | 'away' | 'offline' | 'typing';
	lastSeen?: Date;
}

export type UserStatusContract = RecordArchitectureMerge<
	[
		{
			user: UserStatusUser;
			showAvatar?: boolean;
			showName?: boolean;
			showStatusText?: boolean;
		}
	]
>;
