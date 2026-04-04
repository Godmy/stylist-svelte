import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { RecordSocialMerge } from '$stylist/social/type/record';

export type FriendStatus = 'online' | 'offline' | 'away' | 'busy';

export interface FriendData {
	id: string;
	name: string;
	username?: string;
	avatar?: string;
	status: FriendStatus;
	lastSeen?: Date;
	isOnline?: boolean;
	isFavorite?: boolean;
	tags?: string[];
}

export type FriendListContract = RecordArchitectureMerge<
	[
		{
			friends: FriendData[];
			showStatus?: boolean;
			showLastSeen?: boolean;
			showTags?: boolean;
			showSearch?: boolean;
			showInviteButton?: boolean;
			sortBy?: 'name' | 'status' | 'lastSeen';
			sortOrder?: 'asc' | 'desc';
			groupByStatus?: boolean;
			maxFriends?: number;
			onFriendSelect?: (friend: FriendData) => void;
			onSendMessage?: (friend: FriendData) => void;
			onCall?: (friend: FriendData) => void;
			onVideoCall?: (friend: FriendData) => void;
			onAddFriend?: () => void;
			onStatusChange?: (friendId: string, status: FriendStatus) => void;
			itemClass?: string;
			headerClass?: string;
			searchClass?: string;
			listClass?: string;
			locale?: string;
		},
		InformationHTMLAttributes<HTMLDivElement>
	]
>;
