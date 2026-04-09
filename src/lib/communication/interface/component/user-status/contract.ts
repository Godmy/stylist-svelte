import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';

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
